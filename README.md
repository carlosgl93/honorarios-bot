# SII Honorarios Bot 🤖

Automated bot for generating Chilean tax invoices (Boletas de Honorarios) through the SII website using Playwright browser automation.

## Features

- 🔐 **Secure Credential Storage**: Encrypted credentials stored in Firebase Firestore
- 🤖 **Full Automation**: 15-step automated process for boleta emission
- 📊 **History Tracking**: Complete history of all generated boletas
- 💰 **Automatic Calculations**: Retention and net amount calculations
- 🎨 **Modern UI**: Material-UI based responsive interface
- 🔥 **Firebase Integration**: Firestore database and authentication

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **UI**: Material-UI (MUI) v6
- **State Management**: Jotai
- **Automation**: Playwright
- **Database**: Firebase Firestore
- **Encryption**: CryptoJS (AES-256)
- **Routing**: React Router v7

## Prerequisites

- Node.js 18+ and npm
- Firebase project with Firestore enabled
- Chilean SII account credentials

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd honorarios-bot
```

1. Install dependencies:

```bash
npm install
```

1. Install Playwright browsers:

```bash
npx playwright install chromium
```

1. Configure Firebase:
   - Create a Firebase project at <https://console.firebase.google.com>
   - Enable Firestore Database
   - Copy your Firebase config

2. Create `.env.local` file:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_ENCRYPTION_KEY=your_32_character_encryption_key
```

## Usage

### Development Mode

```bash
npm run dev
```

This will start the development server with:

- Headed browser (visible automation)
- Hot module reloading
- Console logging

### Build for Production

```bash
npm run build
npm run preview
```

## How It Works

### Automation Flow (15 Steps)

1. Navigate to SII login page
2. Enter RUT and password
3. Click "INGRESAR" button
4. Close "actualizar más tarde" modal
5. Click "tramites en linea"
6. Search for "boleta" in search input
7. Select "Boletas de honorarios electronicas"
8. Close modal by clicking "Cerrar"
9. Click "Emisor de boleta de honorarios"
10. Click "Emitir boleta de honorarios electrónica"
11. Click "Por contribuyente"
12. Select retention radio button
13. Click "Continuar"
14. Fill form with boleta data
15. Capture confirmation and screenshot

### Security Features

- **AES-256 Encryption**: All passwords encrypted before storage
- **Hashed User IDs**: RUT hashed with SHA-256 for user identification
- **Firebase Security Rules**: Recommended Firestore rules (see below)
- **No Plain Text Storage**: Credentials never stored in plain text

## Project Structure

```
src/
├── automation/          # Playwright automation scripts
│   └── sii-bot.ts      # Main SII automation class
├── config/             # Configuration files
│   └── firebase.ts     # Firebase initialization
├── pages/              # Application pages
│   ├── Dashboard/      # Main dashboard
│   ├── Login/          # Login/credentials page
│   ├── BoletaForm/     # New boleta form
│   └── History/        # Boletas history
├── services/           # Business logic services
│   ├── bot-runner.ts   # Bot execution orchestrator
│   ├── encryption.ts   # Encryption utilities
│   └── firestore.ts    # Firestore operations
├── store/              # Jotai state atoms
│   └── atoms.ts        # Global state atoms
└── types/              # TypeScript types
    └── boleta.ts       # Boleta data types
```

## Firestore Collections

### `credentials`

- Document ID: SHA-256 hash of RUT
- Fields: `rut` (encrypted), `encryptedPassword`, `createdAt`, `updatedAt`

### `boletas`

- Fields: `userId`, `receptorRut`, `receptorName`, `serviceDescription`, `totalAmount`, `status`, etc.

### `execution_logs`

- Fields: `boletaId`, `step`, `status`, `message`, `timestamp`

## Future Enhancements

- [ ] PDF generation with boleta template
- [ ] Email notifications
- [ ] Multi-user authentication
- [ ] Batch boleta processing
- [ ] Advanced error recovery

## License

MIT

## Disclaimer

This bot automates interaction with the SII website. Use responsibly and in accordance with SII terms of service.
