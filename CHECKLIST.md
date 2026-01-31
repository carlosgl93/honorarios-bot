# Pre-Flight Checklist ✈️

Before running the SII Honorarios Bot for the first time, complete this checklist:

## ☐ Prerequisites Installed

- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] Git installed (optional, for version control)
- [ ] Chrome/Chromium browser available
- [ ] Text editor (VS Code recommended)

## ☐ Firebase Setup

- [ ] Created Firebase project at https://console.firebase.google.com
- [ ] Enabled Firestore Database
- [ ] Selected Firestore location (preferably `southamerica-east1`)
- [ ] Created Web App in Firebase Console
- [ ] Copied Firebase configuration values
- [ ] (Optional) Set up Firebase Authentication

## ☐ Project Setup

- [ ] Cloned/downloaded the project
- [ ] Ran `npm install` successfully
- [ ] Ran `npx playwright install chromium` successfully
- [ ] Created `.env.local` file (copy from `.env.example`)
- [ ] Added Firebase configuration to `.env.local`
- [ ] Generated and added encryption key to `.env.local`
- [ ] Verified no `.env.local` in git (should be in `.gitignore`)

## ☐ Environment Configuration

Your `.env.local` should have:
- [ ] VITE_FIREBASE_API_KEY
- [ ] VITE_FIREBASE_AUTH_DOMAIN
- [ ] VITE_FIREBASE_PROJECT_ID
- [ ] VITE_FIREBASE_STORAGE_BUCKET
- [ ] VITE_FIREBASE_MESSAGING_SENDER_ID
- [ ] VITE_FIREBASE_APP_ID
- [ ] VITE_ENCRYPTION_KEY (32+ characters)

## ☐ SII Credentials Ready

- [ ] Have valid SII account credentials
- [ ] Know your RUT (format: 12.345.678-9)
- [ ] Know your SII password
- [ ] SII account is active and accessible
- [ ] (Optional) Test login manually at SII website first

## ☐ Test Data Prepared

For your first boleta test:
- [ ] Have a test client RUT
- [ ] Have a test client name
- [ ] Have service description ready
- [ ] Know the amount to invoice
- [ ] Service date selected

## ☐ Development Environment

- [ ] Port 5173 is available (or change in vite.config.ts)
- [ ] Internet connection is stable
- [ ] No VPN that might block SII website
- [ ] Sufficient disk space for screenshots
- [ ] (Optional) Firebase CLI installed for deployment

## ☐ Verification Steps

Run these commands to verify setup:

```bash
# Check TypeScript compilation
npm run ts:check

# Check if dev server starts
npm run dev
# Then press Ctrl+C to stop

# Verify Playwright is installed
npx playwright --version
```

- [ ] TypeScript check passes (no errors)
- [ ] Dev server starts successfully
- [ ] Playwright version shows (v1.x.x)

## ☐ First Run Preparation

- [ ] Read README.md completely
- [ ] Read SETUP_GUIDE.md sections 1-4
- [ ] Understand the automation flow (15 steps)
- [ ] Know that browser will be visible (headed mode)
- [ ] Prepared to watch the automation run
- [ ] Have Firestore Console open to verify data

## ☐ Safety Checks

- [ ] Using test/development Firebase project (not production)
- [ ] Firestore rules set to test mode for POC
- [ ] Using real SII credentials (not test/demo credentials)
- [ ] Aware that bot will actually emit boletas on SII
- [ ] Have screenshots directory created
- [ ] Understand credentials are encrypted before storage

## ☐ Optional But Recommended

- [ ] Set up version control (git init)
- [ ] Create .gitignore entries (already done)
- [ ] Install Firebase CLI for easier debugging
- [ ] Open browser dev tools for debugging
- [ ] Have backup of SII credentials elsewhere
- [ ] Plan for what to do if bot fails

## 🚀 Ready to Launch?

If all checkboxes are checked, you're ready to:

1. Start the dev server: `npm run dev`
2. Open http://localhost:5173
3. Login with your SII credentials
4. Create your first automated boleta!

## 🆘 If Something's Wrong

Before starting, if any checkbox is unchecked:

1. Review SETUP_GUIDE.md for that section
2. Fix the issue
3. Re-verify with commands above
4. Check Troubleshooting section in SETUP_GUIDE.md

## 📝 Notes

- First run may take longer as Playwright initializes
- Browser window will open - don't close it during automation
- Watch the progress bar in the UI
- Check Firestore Console to see data being saved
- Screenshots saved in `screenshots/` directory

## ⏱️ Estimated Time

- **Setup (first time)**: 15-30 minutes
- **Per boleta emission**: 2-5 minutes (automated)
- **Total for first successful boleta**: ~20-35 minutes

---

**Good luck! 🍀**

If you complete this checklist successfully, you'll have a working SII automation bot ready to generate boletas de honorarios automatically.

See IMPLEMENTATION_SUMMARY.md for complete feature list and next steps.
