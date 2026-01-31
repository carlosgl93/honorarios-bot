# Setup Guide - SII Honorarios Bot

## Step 1: Firebase Setup

### 1.1 Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project" or "Create a Project"
3. Enter project name: `sii-honorarios-bot` (or your preferred name)
4. Disable Google Analytics (optional for POC)
5. Click "Create Project"

### 1.2 Enable Firestore

1. In Firebase Console, go to "Build" → "Firestore Database"
2. Click "Create database"
3. Select "Start in test mode" for POC (for production, use production mode)
4. Choose location (select closest to Chile: `southamerica-east1`)
5. Click "Enable"

### 1.3 Get Firebase Configuration

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click the web icon (`</>`) to add a web app
4. Register app name: `SII Honorarios Bot`
5. Copy the Firebase configuration object

### 1.4 Configure Environment Variables

Create `.env.local` file in the project root:

```env
# Firebase Configuration (from Firebase Console)
VITE_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890abcdef

# Encryption Key (generate a secure random string)
VITE_ENCRYPTION_KEY=generate_a_secure_32_character_key_here_or_longer
```

**To generate a secure encryption key:**

```bash
# macOS/Linux
openssl rand -base64 32

# Or use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## Step 2: Firestore Security Rules (Optional for POC)

For POC, test mode is fine. For production, update Firestore rules:

1. Go to Firestore Database → Rules
2. Replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow all reads and writes for POC
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

## Step 3: Local Development Setup

### 3.1 Install Dependencies

```bash
npm install
```

### 3.2 Install Playwright Browsers

```bash
npx playwright install chromium
```

This downloads Chromium browser for automation.

### 3.3 Start Development Server

```bash
npm run dev
```

The app will open at `http://localhost:5173`

## Step 4: First Run

### 4.1 Save Credentials

1. Navigate to the app in your browser
2. You'll be redirected to the Login page
3. Enter your SII credentials:
   - RUT: Your Chilean RUT (e.g., `12.345.678-9`)
   - Password: Your SII password
4. Click "Guardar y Continuar"

**Note**: Your credentials are encrypted with AES-256 before being stored in Firestore.

### 4.2 Create Your First Boleta

1. After login, you'll be on the "Nueva Boleta" page
2. Fill in the form:
   - **RUT Receptor**: Client's RUT
   - **Nombre Receptor**: Client's name
   - **Email Receptor**: Client's email (optional)
   - **Descripción del Servicio**: Service description
   - **Fecha del Servicio**: Service date
   - **Monto Total**: Total amount in CLP
3. Click "Emitir Boleta Automáticamente"

### 4.3 Watch the Magic Happen

- A browser window will open (headed mode)
- Watch the bot navigate through the SII website
- Progress updates will appear in the UI
- Once complete, you'll see a success message

### 4.4 Check History

- Navigate to "Historial" from the sidebar
- View all your emitted boletas
- See totals and summaries

## Step 5: Project Structure

```
honorarios-bot/
├── .env.local              # Your Firebase config (DO NOT COMMIT)
├── src/
│   ├── automation/         # Playwright bot scripts
│   │   └── sii-bot.ts     # Main automation logic
│   ├── config/
│   │   └── firebase.ts    # Firebase initialization
│   ├── services/
│   │   ├── firestore.ts   # Database operations
│   │   ├── encryption.ts  # Encryption utilities
│   │   └── bot-runner.ts  # Bot orchestration
│   ├── pages/
│   │   ├── Dashboard/     # Main dashboard
│   │   ├── Login/         # Credentials page
│   │   ├── BoletaForm/    # New boleta form
│   │   └── History/       # Boletas history
│   ├── store/
│   │   └── atoms.ts       # Jotai state management
│   └── types/
│       └── boleta.ts      # TypeScript interfaces
```

## Troubleshooting

### Firebase Connection Issues

**Error**: "Firebase: No Firebase App '[DEFAULT]' has been created"

**Solution**:
- Verify `.env.local` exists and has all required variables
- Restart the dev server (`npm run dev`)
- Check Firebase Console that your project is active

### Playwright Issues

**Error**: "browserType.launch: Executable doesn't exist"

**Solution**:
```bash
npx playwright install chromium
```

### SII Website Issues

**Error**: "Element not found" or automation fails

**Solution**:
- SII website may have changed
- Check [src/automation/sii-bot.ts](src/automation/sii-bot.ts)
- Update selectors if needed
- Enable headed mode to see what's happening

### Encryption Issues

**Error**: "Malformed UTF-8 data" during decryption

**Solution**:
- Ensure `VITE_ENCRYPTION_KEY` is set and hasn't changed
- If you changed the key, old encrypted data cannot be decrypted
- Delete and re-save credentials

## Production Deployment

### Option 1: Static Hosting (Firebase Hosting)

```bash
# Build the app
npm run build

# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase Hosting
firebase init hosting

# Deploy
firebase deploy --only hosting
```

### Option 2: Traditional Hosting

```bash
# Build the app
npm run build

# The dist/ folder contains your production build
# Upload dist/ to your web server
```

**Important**: The automation (Playwright) runs client-side, so users need:
- Chrome/Chromium installed
- Sufficient permissions to run browser automation

For SaaS deployment, consider:
- Moving automation to a backend service
- Using serverless functions (Firebase Functions, AWS Lambda)
- Implementing queuing system for multiple users

## Security Considerations

### For POC (Current Setup)
- ✅ Credentials encrypted before storage
- ✅ User IDs hashed
- ⚠️ Test mode Firestore (anyone can read/write)
- ⚠️ No authentication system
- ⚠️ Client-side encryption key

### For Production
- [ ] Implement Firebase Authentication
- [ ] Strict Firestore security rules
- [ ] Server-side encryption
- [ ] API rate limiting
- [ ] Audit logging
- [ ] 2FA support
- [ ] Session management
- [ ] HTTPS only

## Next Steps

1. **Test the automation** with real SII credentials
2. **Verify boleta data** is correctly saved in Firestore
3. **Check Firestore Console** to see stored documents
4. **Iterate on selectors** if SII website has changed
5. **Add error handling** for production use
6. **Implement PDF generation** for boleta templates
7. **Add email notifications** when boletas are issued
8. **Build authentication system** for multi-user support

## Support

- Check [README.md](README.md) for general documentation
- Review code comments in key files
- Check Firestore Console for data
- Enable console logging for debugging

## Development Tips

### Enable Verbose Logging

In [src/automation/sii-bot.ts](src/automation/sii-bot.ts), the bot already logs each step. To see more:

```typescript
// Enable Playwright debug logs
DEBUG=pw:api npm run dev
```

### Headed vs Headless Mode

Currently set to **headed** (visible browser) in [src/services/bot-runner.ts](src/services/bot-runner.ts):

```typescript
const config: SIIBotConfig = {
  headless: false,  // Change to true for headless
  slowMo: 100,      // Slow down for debugging
};
```

### Testing Without Real SII Credentials

For development, you can:
1. Mock the SII responses
2. Use Playwright's `page.route()` to intercept requests
3. Create a local test server mimicking SII

## License

MIT - See [LICENSE](LICENSE) file
