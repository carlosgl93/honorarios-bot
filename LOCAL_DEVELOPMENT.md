# Local Development Guide

## Quick Start

### 1. Build Backend Functions (First Time Only)
```bash
cd functions
npm run build
cd ..
```

### 2. Start Firebase Emulators
```bash
firebase emulators:start
```

This will start:
- **Functions**: http://127.0.0.1:5001
- **Firestore**: http://127.0.0.1:8080
- **Emulator UI**: http://127.0.0.1:4000

### 3. Start Frontend Dev Server (New Terminal)
```bash
npm run dev
```

Frontend will be available at: **http://localhost:5173**

## Emulator Configuration

The frontend automatically connects to emulators when running in development mode (`npm run dev`).

See [src/config/firebase.ts](src/config/firebase.ts):
- Auth Emulator: `localhost:9099`
- Firestore Emulator: `localhost:8080`
- Functions Emulator: `localhost:5001`

## Available Functions

All functions are accessible at: `http://127.0.0.1:5001/sii-robot-a6284/us-central1/`

1. **saveCredentials**
   - URL: http://127.0.0.1:5001/sii-robot-a6284/us-central1/saveCredentials
   - Auth: Required
   - Body: `{ rut: string, password: string }`

2. **createBoleta**
   - URL: http://127.0.0.1:5001/sii-robot-a6284/us-central1/createBoleta
   - Auth: Required
   - Body: `CreateBoletaRequest` (boleta form data)
   - Timeout: 540s

3. **getUserBoletas**
   - URL: http://127.0.0.1:5001/sii-robot-a6284/us-central1/getUserBoletas
   - Auth: Required

4. **getBoletaLogs**
   - URL: http://127.0.0.1:5001/sii-robot-a6284/us-central1/getBoletaLogs
   - Auth: Required
   - Body: `{ boletaId: string }`

## Testing Flow

1. Open http://localhost:5173 in your browser
2. You should see console logs: "🔧 Connecting to Firebase Emulators..."
3. Create an account (email/password or Google)
4. Save SII credentials
5. Create a boleta
6. Check Firestore data in Emulator UI: http://127.0.0.1:4000/firestore

## Troubleshooting

### Port Already in Use
```bash
# Kill all emulator processes
lsof -ti:4000,5001,8080,9099,4400,4500 | xargs kill -9
```

### Functions Not Loading
```bash
# Rebuild TypeScript functions
cd functions
npm run build
cd ..
```

### Frontend Not Connecting to Emulators
Check browser console for emulator connection logs. Should see:
```
✅ Auth Emulator connected
✅ Firestore Emulator connected
✅ Functions Emulator connected
```

### Clear Emulator Data
Stop emulators and delete data:
```bash
# Stop with Ctrl+C, then:
rm -rf .firebase/
```

## Environment Files

### Frontend: `.env.local`
Contains Firebase production config (API keys, project ID, etc.)

### Backend: `functions/.env`
Contains:
```env
ENCRYPTION_KEY=sii-robot-super-secret-key-32c
```

## Making Changes

### Frontend Changes
- Hot reload enabled automatically
- Just save files and refresh browser

### Backend Functions Changes
1. Make changes in `functions/src/`
2. Run `cd functions && npm run build`
3. Emulators will auto-reload

## Production vs Development

### Development (Local)
- Uses Firebase Emulators
- No production data affected
- Free - no Firebase costs
- Headed browser mode for debugging

### Production
- Uses real Firebase services
- Requires Blaze plan
- Deploy with: `firebase deploy`
- Headless browser mode

## Emulator UI Features

Access at: http://127.0.0.1:4000

- **Functions**: View function calls, logs, and results
- **Firestore**: Browse collections, edit documents
- **Auth**: Manage test users
- **Logs**: See all emulator activity

## Tips

1. **Use Emulator UI** to inspect Firestore data during development
2. **Check Function Logs** in Emulator UI for debugging
3. **Keep Both Terminals Open**: One for emulators, one for frontend
4. **Test Authentication** with dummy emails (no real email required in emulators)
5. **Monitor Performance**: Function execution times shown in Emulator UI
