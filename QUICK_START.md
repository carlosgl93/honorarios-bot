# Quick Start Guide

## Feature Flags

### Using in Components

```tsx
import { useFeatureFlag } from '@/hooks/useFeatureFlag';

function MyComponent() {
  const showNewFeature = useFeatureFlag('enableAdvancedReports');
  
  return (
    <div>
      {showNewFeature && <NewFeature />}
    </div>
  );
}
```

### Using Multiple Flags

```tsx
import { useFeatureFlags } from '@/hooks/useFeatureFlag';

function MyComponent() {
  const flags = useFeatureFlags();
  
  return (
    <div>
      {flags.enableDarkMode && <ThemeToggle />}
      {flags.enableGoogleSignIn && <GoogleButton />}
    </div>
  );
}
```

### Environment Variables

Create `.env.local` in project root:

```env
VITE_FEATURE_ENABLE_GOOGLE_SIGN_IN=true
VITE_FEATURE_ENABLE_DARK_MODE=false
```

## Test Fixtures

### Basic Login Test

```typescript
import { test, expect } from '@playwright/test';
import { LoginUserFixture } from '../fixtures';

test('user can sign in', async ({ page }) => {
  const user = new LoginUserFixture(page, {
    email: 'test@example.com',
    password: 'TestPassword123!',
  });

  await user.navigateToLogin();
  const result = await user.signIn();

  expect(result.success).toBe(true);
});
```

### Pre-authenticated User

```typescript
test('authenticated user sees dashboard', async ({ page }) => {
  // Create user that's already logged in
  const user = await LoginUserFixture.createRandomLoggedIn(page);
  
  // Now you can test protected features
  await page.goto('/dashboard');
  expect(page.url()).toContain('/dashboard');
});
```

### With Feature Flags

```typescript
test('Google button shows when enabled', async ({ page }) => {
  const user = new LoginUserFixture(
    page,
    {},
    { enableGoogleSignIn: true }
  );
  
  await user.navigateToLogin();
  const isCorrect = await user.verifyGoogleSignInButton();
  expect(isCorrect).toBe(true);
});
```

## Running Tests

```bash
# Run all tests
pnpm exec playwright test

# Run login tests specifically
pnpm exec playwright test e2e/auth/login.spec.ts

# Run in UI mode
pnpm exec playwright test --ui
```

## Adding New Feature Flags

1. Add to the `FeatureFlags` interface in `src/hooks/useFeatureFlag.ts`:

```typescript
export interface FeatureFlags {
  // ... existing flags
  enableMyNewFeature?: boolean;
}
```

2. Add default value in `DEFAULT_FLAGS`:

```typescript
const DEFAULT_FLAGS: FeatureFlags = {
  // ... existing defaults
  enableMyNewFeature: false,
};
```

3. Use in components:

```typescript
const isEnabled = useFeatureFlag('enableMyNewFeature');
```

4. Override with environment variable:

```env
VITE_FEATURE_ENABLE_MY_NEW_FEATURE=true
```
