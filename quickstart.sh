#!/bin/bash

# Quick Start Script for SII Honorarios Bot
# This script helps set up the project quickly

set -e

echo "🤖 SII Honorarios Bot - Quick Start Setup"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm version: $(npm --version)"
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "⚠️  .env.local file not found!"
    echo ""
    echo "Creating .env.local template..."
    cat > .env.local << 'EOF'
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Encryption Key (generate a secure key)
VITE_ENCRYPTION_KEY=your_secure_encryption_key_32_chars_min
EOF
    echo "✅ Created .env.local template"
    echo ""
    echo "⚠️  IMPORTANT: Edit .env.local with your Firebase credentials!"
    echo "   See SETUP_GUIDE.md for detailed instructions."
    echo ""
    read -p "Press Enter after you've configured .env.local..."
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo ""

# Install Playwright browsers
echo "🌐 Installing Playwright browsers (Chromium)..."
npx playwright install chromium
echo ""

# Check TypeScript
echo "🔍 Checking TypeScript compilation..."
npm run ts:check
echo ""

echo "✅ Setup complete!"
echo ""
echo "🚀 Next steps:"
echo "   1. Make sure you've configured .env.local with your Firebase credentials"
echo "   2. Run 'npm run dev' to start the development server"
echo "   3. Open http://localhost:5173 in your browser"
echo "   4. Read SETUP_GUIDE.md for detailed instructions"
echo ""
echo "Happy automating! 🤖"
