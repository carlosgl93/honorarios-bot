# Known Issues & Limitations

## Critical: Playwright Browser Compatibility ⚠️

**Issue**: Playwright is a Node.js library and cannot run directly in a browser environment. The current implementation tries to bundle Playwright with Vite, which generates many warnings about Node.js modules being externalized.

**Impact**: The current architecture won't work as-is in a production web app deployment.

### Solutions

Choose ONE of these architectures:

#### Option 1: Electron App (Recommended for POC)
Convert to an Electron desktop app:
- Playwright runs in Node.js context (main process)
- React UI runs in renderer process
- Best for local automation tool
- Users install as desktop app

```bash
npm install --save-dev electron electron-builder
```

#### Option 2: Backend Service (Recommended for SaaS)
Split into frontend + backend:
- **Frontend**: React app (deployed to Firebase Hosting/Vercel/etc.)
- **Backend**: Node.js API server (Firebase Functions, Express, etc.)
- Playwright runs on backend
- Frontend sends requests to API
- Better security (credentials never on client)
- Scalable for multiple users

**Architecture**:
```
[Browser] -> [API Gateway] -> [Queue] -> [Worker (Playwright)] -> [Firestore]
```

#### Option 3: Browser Extension
Create a Chrome/Firefox extension:
- Extension has access to chrome.debugger API
- Can manipulate tabs directly
- No Playwright needed
- More complex to implement

### Temporary Workaround for Testing

For local development testing only:

1. Move Playwright code out of Vite bundle
2. Run automation in separate Node.js script
3. Use IPC or HTTP to communicate

Example structure:
```
/client     - React app (Vite)
/server     - Node.js + Playwright
/shared     - Shared types
```

## Other Limitations

### Security
- Client-side encryption key (should be server-side)
- No authentication system yet
- Test mode Firestore rules

### Error Handling
- Minimal error handling (POC only)
- No retry logic
- Basic validation

### SII Website Changes
- Selectors may break if SII website updates
- No automatic detection of website changes
- No fallback strategies

### Performance
- No queue system for multiple users
- No rate limiting
- Single-threaded automation

## Next Steps

1. **Choose architecture** (Electron vs Backend Service)
2. **Refactor based on choice**:
   - Electron: Wrap in Electron container
   - Backend: Create API server + worker service
3. **Add proper authentication**
4. **Implement error handling**
5. **Add monitoring & logging**

## Recommendation

For **SaaS product**: Use Backend Service architecture (Option 2)
For **Personal tool**: Use Electron (Option 1)

See `IMPLEMENTATION_SUMMARY.md` for full details.
