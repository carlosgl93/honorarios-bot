import { test, expect } from '@playwright/test';
import { LoginUserFixture } from '../fixtures';

/**
 * Example test suite showing how to use LoginUserFixture with feature flags
 */
test.describe('Login Flow with Feature Flags', () => {
  test('should sign in with existing user', async ({ page }) => {
    // Create a login user fixture
    const loginUser = new LoginUserFixture(page, {
      email: 'test@example.com',
      password: 'TestPassword123!',
    });

    // Navigate to login page
    await loginUser.navigateToLogin();

    // Perform sign-in
    const result = await loginUser.signIn();

    // Verify success
    expect(result.success).toBe(true);
    expect(page.url()).toContain('/nueva-boleta');
  });

  test('should sign up new user', async ({ page }) => {
    // Create a random user fixture
    const loginUser = new LoginUserFixture(page);

    // Navigate to login page
    await loginUser.navigateToLogin();

    // Perform sign-up
    const result = await loginUser.signUp();

    // Verify success
    expect(result.success).toBe(true);
    expect(page.url()).toContain('/nueva-boleta');
  });

  test('should show Google Sign-In when feature flag is enabled', async ({ page }) => {
    // Create fixture with Google Sign-In enabled
    const loginUser = new LoginUserFixture(
      page,
      {},
      { enableGoogleSignIn: true }
    );

    await loginUser.navigateToLogin();

    // Verify Google Sign-In button is visible
    const isCorrect = await loginUser.verifyGoogleSignInButton();
    expect(isCorrect).toBe(true);
  });

  test('should hide Google Sign-In when feature flag is disabled', async ({ page }) => {
    // Create fixture with Google Sign-In disabled
    const loginUser = new LoginUserFixture(
      page,
      {},
      { enableGoogleSignIn: false }
    );

    await loginUser.navigateToLogin();

    // Verify Google Sign-In button visibility matches feature flag
    const isCorrect = await loginUser.verifyGoogleSignInButton();
    expect(isCorrect).toBe(true);
  });

  test('should handle login errors gracefully', async ({ page }) => {
    const loginUser = new LoginUserFixture(page, {
      email: 'test@example.com',
      password: 'WrongPassword123!',
    });

    await loginUser.navigateToLogin();
    const result = await loginUser.signIn();

    // Should fail with wrong password
    expect(result.success).toBe(false);
    expect(result.error).toBeTruthy();
  });

  test('should create and verify logged-in user', async ({ page }) => {
    // Helper method to create an already logged-in user
    const loginUser = await LoginUserFixture.createLoggedIn(page, {
      email: 'test@example.com',
      password: 'TestPassword123!',
    });

    // Verify user is logged in
    const isLoggedIn = await loginUser.verifyLoggedIn();
    expect(isLoggedIn).toBe(true);
  });

  test('should create random logged-in user', async ({ page }) => {
    // Create a random user that's already logged in
    const loginUser = await LoginUserFixture.createRandomLoggedIn(page, {
      enableGoogleSignIn: true,
    });

    // Verify user is logged in
    const isLoggedIn = await loginUser.verifyLoggedIn();
    expect(isLoggedIn).toBe(true);

    // Check that we have random credentials
    const email = loginUser.getEmail();
    expect(email).toContain('test-');
    expect(email).toContain('@example.com');
  });

  test('should sign out successfully', async ({ page }) => {
    // Create logged-in user
    const loginUser = await LoginUserFixture.createRandomLoggedIn(page);

    // Sign out
    await loginUser.signOut();

    // Verify logged out
    const isLoggedOut = await loginUser.verifyLoggedOut();
    expect(isLoggedOut).toBe(true);
  });

  test('should prevent Google Sign-In when feature is disabled', async ({ page }) => {
    const loginUser = new LoginUserFixture(
      page,
      {},
      { enableGoogleSignIn: false }
    );

    await loginUser.navigateToLogin();

    // Attempt Google Sign-In
    const result = await loginUser.signInWithGoogle();

    // Should fail due to feature flag
    expect(result.success).toBe(false);
    expect(result.error).toContain('disabled by feature flag');
  });
});
