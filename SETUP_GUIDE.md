# SII Boletas Bot - Setup Guide

## Architecture

This application uses a **Backend Service** architecture:

- **Frontend**: React 19 + Vite + Material-UI (runs in browser)
- **Backend**: Firebase Functions with Playwright automation (runs on server)
- **Database**: Firebase Firestore
- **Authentication**: Firebase Authentication

```
[User Browser] 
     ↓
[React Frontend] 
     ↓
[Firebase Functions API]
     ↓
[Playwright Bot] → [SII Website]
     ↓
[Firestore Database]
```

## Prerequisites

1. **Node.js 18+** installed
2. **Firebase CLI** installed globally:
   ```bash
   npm install -g firebase-tools
   ```

3. **Firebase Project** set up at https://console.firebase.google.com

## Initial Setup

### 1. Clone and Install Dependencies

```bash
# Clone the repository
cd honorarios-bot

# Install frontend dependencies
npm install

# Install backend dependencies
cd functions
npm install
cd ..
```

### 2. Firebase Configuration

The project is already configured for Firebase project `sii-robot-a6284`. The `.env.local` file contains the frontend configuration.

#### Login to Firebase CLI:
```bash
firebase login
```

#### Verify Project Connection:
```bash
firebase use sii-robot-a6284
```

### 3. Enable Firebase Services

Make sure these services are enabled in your Firebase Console:

1. **Authentication**:
   - Email/Password provider
   - Google Sign-In provider

2. **Firestore Database**:
   - Create database in production mode
   - Deploy security rules (done automatically)

3. **Cloud Functions**:
   - Upgrade to Blaze plan (required for external API calls)

### 4. Configure Backend Environment Variables

Create `functions/.env` file:

```bash
cd functions
cat > .env << 'EOF'
ENCRYPTION_KEY=your-32-character-secret-key-here
EOF
```

**Important**: Generate a strong 32-character encryption key for production.

## Development

### Run Frontend Locally

```bash
npm run dev
```

Frontend will be available at `http://localhost:5173`

### Run Backend Locally (Firebase Emulators)

```bash
# Start Firebase emulators
firebase emulators:start
```

This will start:
- Functions emulator on port 5001
- Firestore emulator on port 8080
- Emulator UI on port 4000

**Note**: Update frontend Firebase config to use emulators during development if needed.

### Test the Full Flow

1. Open `http://localhost:5173`
2. Click "Crear Cuenta" tab
3. Enter:
   - Email and password (Firebase Auth)
   - RUT and SII password (encrypted and stored)
4. Navigate to "Nueva Boleta"
5. Fill in the boleta form
6. Click "Emitir Boleta Automáticamente"
7. The backend will run Playwright automation (up to 9 minutes)
8. Check "Historial" for results

## Deployment

### Deploy Backend Functions

```bash
# Build and deploy all functions
firebase deploy --only functions

# Or deploy specific function
firebase deploy --only functions:createBoleta
```

### Deploy Frontend

#### Option 1: Firebase Hosting
```bash
npm run build
firebase deploy --only hosting
```

#### Option 2: Other Hosting (Vercel, Netlify, etc.)
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## Environment Variables

### Frontend (`.env.local`)
Already configured with Firebase credentials:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- etc.

### Backend (`functions/.env`)
Required:
- `ENCRYPTION_KEY`: 32-character secret for encrypting SII credentials

## Firebase Functions Endpoints

### 1. `saveCredentials`
- **Purpose**: Save user's SII credentials (encrypted)
- **Auth**: Required
- **Parameters**: `{ rut: string, password: string }`
- **Response**: `{ success: boolean, message: string }`

### 2. `createBoleta`
- **Purpose**: Create a new boleta using Playwright automation
- **Auth**: Required
- **Timeout**: 540 seconds (9 minutes)
- **Memory**: 2GB
- **Parameters**: `CreateBoletaRequest` (boleta form data)
- **Response**: `{ success: boolean, boletaId: string, folio: string }`

### 3. `getUserBoletas`
- **Purpose**: Get all boletas for authenticated user
- **Auth**: Required
- **Response**: `{ success: boolean, boletas: BoletaData[] }`

### 4. `getBoletaLogs`
- **Purpose**: Get execution logs for a specific boleta
- **Auth**: Required
- **Parameters**: `{ boletaId: string }`
- **Response**: `{ success: boolean, logs: any[] }`

## Firestore Collections

### `credentials`
- **Document ID**: Firebase Auth UID
- **Fields**:
  - `rut`: encrypted string
  - `encryptedPassword`: encrypted string
  - `createdAt`: timestamp
  - `updatedAt`: timestamp

### `boletas`
- **Document ID**: Auto-generated
- **Fields**:
  - `userId`: Firebase Auth UID
  - `receptorRut`, `receptorName`, `receptorEmail`
  - `serviceDescription`, `serviceDate`
  - `totalAmount`, `netAmount`, `taxAmount`
  - `status`: 'draft' | 'processing' | 'issued' | 'failed'
  - `folio`, `boletaNumber`, `pdfUrl`, `confirmationData`
  - `emissionDate`, `createdAt`

### `execution_logs`
- **Document ID**: Auto-generated
- **Fields**:
  - `boletaId`: reference to boleta
  - `userId`: Firebase Auth UID
  - `step`: string (e.g., "Navigating to SII")
  - `status`: 'info' | 'success' | 'error'
  - `message`: string
  - `timestamp`: timestamp

## Security Rules

Firestore security rules ensure:
- Users can only access their own credentials
- Users can only read/write their own boletas
- Execution logs are read-only for users

Rules are defined in `firestore.rules` and deployed with:
```bash
firebase deploy --only firestore:rules
```

## Troubleshooting

### Frontend Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Backend Deployment Errors
```bash
# Check functions logs
firebase functions:log

# Redeploy specific function
firebase deploy --only functions:createBoleta
```

### Playwright Issues in Production
- Ensure Blaze plan is active
- Check function timeout (540s max)
- Check function memory (2GB allocated)
- Review execution logs in Firestore

### Authentication Errors
- Verify Firebase Auth is enabled
- Check Firebase config in `.env.local`
- Clear browser cache and localStorage

## Development Tips

1. **Use Emulators**: Test locally before deploying to production
2. **Check Logs**: Use `firebase functions:log` to debug backend issues
3. **Monitor Costs**: Playwright runs can consume Cloud Functions quota
4. **Test Headed Mode**: During development, bot runs in headed mode for debugging

## Production Checklist

- [ ] Generate strong `ENCRYPTION_KEY` in `functions/.env`
- [ ] Enable Firebase Authentication (Email + Google)
- [ ] Create Firestore database
- [ ] Deploy security rules
- [ ] Upgrade to Blaze plan
- [ ] Deploy backend functions
- [ ] Build and deploy frontend
- [ ] Test complete flow with real SII credentials
- [ ] Monitor Firebase console for errors and costs

## Support

For issues or questions:
1. Check Firebase Functions logs
2. Check Firestore execution_logs collection
3. Review browser console for frontend errors
