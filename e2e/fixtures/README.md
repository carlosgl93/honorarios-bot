# Test Fixtures

This directory contains reusable test fixtures for E2E testing with Playwright.

## Available Fixtures

### UserFixture

A base fixture providing user data and helper methods for user-related testing.

**Usage:**

```typescript
import { UserFixture } from '../fixtures';

test('example test', async ({ page }) => {
  const user = new UserFixture(page, {
    email: 'test@example.com',
    password: 'TestPassword123!',
    rut: '12.345.678-9',
  });

  await user.navigateToLogin();
  await user.fillEmail();
  await user.fillPassword();
});
```

**Static Methods:**

- `UserFixture.createRandom(page, options)` - Create a fixture with random credentials
- `UserFixture.generateRandomEmail()` - Generate a random email address
- `UserFixture.generateRandomRut()` - Generate a valid Chilean RUT

### LoginUserFixture

Extends `UserFixture` with authentication-specific methods. Provides complete flows for sign-in, sign-up, and Google authentication.

**Usage:**

```typescript
import { LoginUserFixture } from '../fixtures';

test('user can sign in', async ({ page }) => {
  const loginUser = new LoginUserFixture(page, {
    email: 'test@example.com',
    password: 'TestPassword123!',
  });

  await loginUser.navigateToLogin();
  const result = await loginUser.signIn();

  expect(result.success).toBe(true);
});
```

**Creating Pre-authenticated Users:**

```typescript
// Create a user that's already logged in
const loginUser = await LoginUserFixture.createLoggedIn(page, {
  email: 'test@example.com',
  password: 'TestPassword123!',
});

// Create a random user that's already logged in
const randomUser = await LoginUserFixture.createRandomLoggedIn(page);
```

## Feature Flags

Both fixtures support feature flags through the `UserFixtureOptions`:

```typescript
const loginUser = new LoginUserFixture(
  page,
  { email: 'test@example.com', password: 'test123' },
  {
    enableGoogleSignIn: true,  // Enable/disable Google Sign-In
    enableSocialLogin: true,    // Enable/disable social login
    autoNavigate: true,         // Auto-navigate to login page
  }
);
```

**Checking Feature Flags:**

```typescript
if (loginUser.isGoogleSignInEnabled()) {
  // Google Sign-In is enabled
}

if (loginUser.isSocialLoginEnabled()) {
  // Social login is enabled
}
```

## Methods

### UserFixture Methods

- `getData()` - Get all user data
- `getEmail()` - Get user email
- `getPassword()` - Get user password
- `getRut()` - Get user RUT
- `getSiiPassword()` - Get SII password
- `getDisplayName()` - Get display name
- `navigateToLogin()` - Navigate to login page
- `fillEmail()` - Fill email field
- `fillPassword()` - Fill password field
- `fillRut()` - Fill RUT field
- `fillSiiPassword()` - Fill SII password field
- `updateData(data)` - Update user data

### LoginUserFixture Methods

All UserFixture methods plus:

- `signIn()` - Perform complete sign-in flow
- `signUp()` - Perform complete sign-up flow
- `signInWithGoogle()` - Sign in with Google (if enabled)
- `signOut()` - Sign out the current user
- `verifyLoggedIn()` - Check if user is logged in
- `verifyLoggedOut()` - Check if user is logged out
- `waitForAuth(timeout)` - Wait for authentication to complete
- `getErrorMessage()` - Get error message if login failed
- `verifyGoogleSignInButton()` - Verify Google button visibility

## Examples

### Basic Sign-In Test

```typescript
test('user can sign in', async ({ page }) => {
  const loginUser = new LoginUserFixture(page);
  await loginUser.navigateToLogin();
  
  const result = await loginUser.signIn();
  expect(result.success).toBe(true);
});
```

### Sign-Up Test with Random User

```typescript
test('new user can sign up', async ({ page }) => {
  const loginUser = LoginUserFixture.createRandom(page);
  await loginUser.navigateToLogin();
  
  const result = await loginUser.signUp();
  expect(result.success).toBe(true);
});
```

### Test with Pre-authenticated User

```typescript
test('authenticated user can access dashboard', async ({ page }) => {
  // User is already logged in
  const loginUser = await LoginUserFixture.createRandomLoggedIn(page);
  
  // Navigate to protected route
  await page.goto('/dashboard');
  
  // Verify access
  expect(page.url()).toContain('/dashboard');
});
```

### Feature Flag Test

```typescript
test('Google Sign-In button appears when enabled', async ({ page }) => {
  const loginUser = new LoginUserFixture(
    page,
    {},
    { enableGoogleSignIn: true }
  );
  
  await loginUser.navigateToLogin();
  const isCorrect = await loginUser.verifyGoogleSignInButton();
  
  expect(isCorrect).toBe(true);
});
```

### Error Handling Test

```typescript
test('shows error on invalid credentials', async ({ page }) => {
  const loginUser = new LoginUserFixture(page, {
    email: 'test@example.com',
    password: 'WrongPassword',
  });
  
  await loginUser.navigateToLogin();
  const result = await loginUser.signIn();
  
  expect(result.success).toBe(false);
  expect(result.error).toBeTruthy();
});
```

## Best Practices

1. **Use Random Users for Sign-Up Tests**: Always use `createRandom()` or `createRandomLoggedIn()` to avoid conflicts
2. **Check Feature Flags**: Verify feature flag state before testing conditional features
3. **Clean Up**: Sign out users after tests to maintain test isolation
4. **Handle Errors**: Always check the `result.success` and `result.error` from auth methods
5. **Use Pre-authenticated Fixtures**: For tests that don't focus on authentication, use `createLoggedIn()` helpers
