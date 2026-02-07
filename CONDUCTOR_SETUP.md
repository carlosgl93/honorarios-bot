# Conductor Workspace Setup

This repository is now configured with automatic workspace initialization for Conductor.

## Requirements

**Java 21 or higher** is required to run Firebase emulators.

Check your Java version:
```bash
java -version
```

If you have Java 17 or lower, upgrade to Java 21:
```bash
brew install openjdk@21
echo 'export PATH="/opt/homebrew/opt/openjdk@21/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

## What Was Created

### 1. `.conductor-init` (Executable Script)
**Purpose**: Automatically runs when a new Conductor workspace is created.

**What it does**:
1. ✅ Runs `pnpm install` to install dependencies
2. ✅ Creates `.env` file with Firebase configuration
3. ✅ Starts Firebase emulators on non-default ports (to avoid conflicts)
4. ✅ Seeds the database with test data
5. ✅ Starts the development server

### 2. `src/scripts/seed-db.ts`
**Purpose**: Seeds the Firebase emulator with test data for development.

**What it creates**:
- Test user account
  - Email: `test@example.com`
  - Password: `TestPassword123!`
- Default business profile
  - Company: "Consultora Demo SpA"
  - RUT: "76.123.456-7"
  - Complete business information ready for testing

### 3. `firebase.json` (Updated)
**Purpose**: Firebase emulator configuration.

**Default ports**:
- Firestore: `8080`
- Auth: `9099`
- Functions: `5001`
- UI: `4000`

### 4. `AGENTS.md`
**Purpose**: Comprehensive documentation for AI agents working on this project.

**Includes**:
- Project overview and tech stack
- Directory structure
- Key features documentation
- Development environment setup
- Firebase configuration and data models
- Common tasks and troubleshooting
- Testing guidelines

### 5. `package.json` (Updated)
**New scripts**:
```json
"emulators": "firebase emulators:start --import=.firebase-data --export-on-exit"
"seed:db": "tsx src/scripts/seed-db.ts"
```

## Environment Variables (.env)

The auto-generated `.env` file includes:

```bash
# Firebase Configuration
VITE_FIREBASE_API_KEY=AIzaSyCMo3rMU28z-nyDdtiYY7gnPDldOoyxeKU
VITE_FIREBASE_AUTH_DOMAIN=sii-robot-a6284.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=sii-robot-a6284
VITE_FIREBASE_STORAGE_BUCKET=sii-robot-a6284.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=415042811690
VITE_FIREBASE_APP_ID=1:415042811690:web:80612751ce453e21291053
VITE_FIREBASE_MEASUREMENT_ID=G-30TQY79797

# Test Credentials
VITE_TEST_USER_EMAIL=test@example.com
VITE_TEST_USER_PASSWORD=TestPassword123!

# URLs
VITE_PROD_URL=https://www.honorarios-bot.cl
VITE_DEV_URL=http://localhost:5173

# Emulator Ports
VITE_FIRESTORE_EMULATOR_PORT=8081
VITE_AUTH_EMULATOR_PORT=9100
VITE_FUNCTIONS_EMULATOR_PORT=5002
```

## How to Use

### For New Workspaces (Automatic)

When you create a new workspace in Conductor for this repository:
1. Conductor automatically runs `.conductor-init`
2. Wait for the script to complete (~30-60 seconds)
3. The dev server will start automatically
4. Navigate to `http://localhost:5173`
5. Login with test credentials

### Manual Setup (If Needed)

If you need to manually set up the environment:

```bash
# Install dependencies
pnpm install

# Start emulators (in a separate terminal)
pnpm run emulators

# Wait 10 seconds for emulators to start, then seed
pnpm run seed:db

# Start dev server
pnpm dev
```

### Resetting Emulator Data

To start fresh:

```bash
# Stop emulators (Ctrl+C)

# Delete persisted data
rm -rf .firebase-data

# Restart emulators
pnpm run emulators

# Re-seed database
pnpm run seed:db
```

## URLs After Initialization

| Service            | URL                      |
|--------------------|--------------------------|
| Development App    | http://localhost:5173    |
| Firebase Emulator UI | http://localhost:4000  |
| Firestore Emulator | http://localhost:8080    |
| Auth Emulator      | http://localhost:9099    |

## Test Credentials

Use these credentials to login after workspace initialization:

- **Email**: `test@example.com`
- **Password**: `TestPassword123!`

The test user will already have a complete business profile configured.

## Troubleshooting

### Port Conflicts

If you see "port already in use" errors:
1. Check which ports are in use: `lsof -i :8082`
2. Modify ports in `firebase.json`
3. Update ports in `src/scripts/seed-db.ts`
4. Update ports in `src/config/firebase.ts`
5. Update `.env` file

### Emulators Not Starting

```bash
# Check if Firebase CLI is installed
firebase --version

# If not, install it
npm install -g firebase-tools

# Login to Firebase
firebase login
```

### Database Not Seeded

```bash
# Make sure emulators are running first
pnpm run emulators

# In another terminal, run seed script
pnpm run seed:db
```

### Dev Server Issues

```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Reinstall dependencies
pnpm install

# Try again
pnpm dev
```

## Notes for Conductor Users

- The `.conductor-init` script is tracked in git and will be available in all workspaces
- Each workspace gets its own `.env` file (gitignored)
- Emulator data persists in `.firebase-data/` (gitignored)
- The script runs only once when a workspace is created
- Subsequent terminal sessions should just run `pnpm dev`

## For Other Developers (Non-Conductor)

If you're not using Conductor, simply run the init script manually:

```bash
# Make script executable (if needed)
chmod +x .conductor-init

# Run initialization
./.conductor-init
```

Or follow the manual setup steps above.

---

**Created**: 2026-02-07
**For**: Conductor workspace automation
