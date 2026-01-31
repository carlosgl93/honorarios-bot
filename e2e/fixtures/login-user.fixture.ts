import { Page, expect } from '@playwright/test';
import { UserFixture, UserData, UserFixtureOptions } from './user.fixture';

export interface LoginResult {
  success: boolean;
  error?: string;
}

/**
 * Login user fixture for testing authentication flows
 * Extends UserFixture with login-specific methods
 */
export class LoginUserFixture extends UserFixture {
  constructor(page: Page, userData?: Partial<UserData>, options?: UserFixtureOptions) {
    super(page, userData, options);
  }

  /**
   * Perform complete sign-in flow
   */
  async signIn(): Promise<LoginResult> {
    try {
      const page = (this as any).page;

      // Navigate to login page if needed
      if (!page.url().includes('/login')) {
        await this.navigateToLogin();
      }

      // Switch to sign-in tab if on sign-up tab
      const signInTab = page.locator('button:has-text("Iniciar Sesión")');
      if (await signInTab.isVisible()) {
        await signInTab.click();
      }

      // Fill credentials
      await this.fillEmail();
      await this.fillPassword();

      // Click sign in button
      const signInButton = page.locator('button:has-text("Iniciar Sesión")').last();
      await signInButton.click();

      // Wait for navigation or error
      await Promise.race([
        page.waitForURL('**/nueva-boleta', { timeout: 5000 }),
        page.waitForSelector('[role="alert"]', { timeout: 5000 }),
      ]);

      // Check if we successfully navigated
      if (page.url().includes('/nueva-boleta')) {
        return { success: true };
      }

      // Check for error message
      const errorAlert = page.locator('[role="alert"]');
      if (await errorAlert.isVisible()) {
        const errorText = await errorAlert.textContent();
        return { success: false, error: errorText || 'Unknown error' };
      }

      return { success: false, error: 'Navigation failed' };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Perform complete sign-up flow
   */
  async signUp(): Promise<LoginResult> {
    try {
      const page = (this as any).page;

      // Navigate to login page if needed
      if (!page.url().includes('/login')) {
        await this.navigateToLogin();
      }

      // Switch to sign-up tab
      const signUpTab = page.locator('button:has-text("Crear Cuenta")');
      await signUpTab.click();

      // Fill all credentials
      await this.fillEmail();
      await this.fillPassword();
      await this.fillRut();
      await this.fillSiiPassword();

      // Click sign up button
      const signUpButton = page.locator('button:has-text("Crear Cuenta")').last();
      await signUpButton.click();

      // Wait for navigation or error
      await Promise.race([
        page.waitForURL('**/nueva-boleta', { timeout: 10000 }),
        page.waitForSelector('[role="alert"]', { timeout: 5000 }),
      ]);

      // Check if we successfully navigated
      if (page.url().includes('/nueva-boleta')) {
        return { success: true };
      }

      // Check for error message
      const errorAlert = page.locator('[role="alert"]');
      if (await errorAlert.isVisible()) {
        const errorText = await errorAlert.textContent();
        return { success: false, error: errorText || 'Unknown error' };
      }

      return { success: false, error: 'Navigation failed' };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Perform Google sign-in (only if feature flag is enabled)
   */
  async signInWithGoogle(): Promise<LoginResult> {
    if (!this.isGoogleSignInEnabled()) {
      return {
        success: false,
        error: 'Google Sign-In is disabled by feature flag',
      };
    }

    try {
      const page = (this as any).page;

      // Navigate to login page if needed
      if (!page.url().includes('/login')) {
        await this.navigateToLogin();
      }

      // Click Google sign-in button
      const googleButton = page.locator('button:has-text("Continuar con Google")');
      
      // Check if button is visible
      if (!(await googleButton.isVisible())) {
        return {
          success: false,
          error: 'Google Sign-In button not found',
        };
      }

      await googleButton.click();

      // Note: In real tests, you'd need to handle the OAuth popup
      // For now, we'll just check if the button was clicked
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Sign out the current user
   */
  async signOut(): Promise<void> {
    const page = (this as any).page;
    
    // Look for sign out button (adjust selector based on your implementation)
    const signOutButton = page.locator('button:has-text("Cerrar Sesión"), button:has-text("Sign Out")');
    
    if (await signOutButton.isVisible()) {
      await signOutButton.click();
      await page.waitForURL('**/login', { timeout: 5000 });
    }
  }

  /**
   * Verify user is logged in
   */
  async verifyLoggedIn(): Promise<boolean> {
    const page = (this as any).page;
    
    // Check if we're on a protected route (not login page)
    if (page.url().includes('/login')) {
      return false;
    }

    // Check for user-specific UI elements
    // Adjust selectors based on your implementation
    const userIndicator = page.locator('[data-testid="user-menu"], [aria-label*="user" i]');
    
    try {
      await userIndicator.waitFor({ state: 'visible', timeout: 3000 });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Verify user is logged out
   */
  async verifyLoggedOut(): Promise<boolean> {
    const page = (this as any).page;
    
    // Should be on login page
    return page.url().includes('/login');
  }

  /**
   * Wait for authentication to complete
   */
  async waitForAuth(timeout: number = 5000): Promise<void> {
    const page = (this as any).page;
    
    // Wait for either success (navigation) or error
    await Promise.race([
      page.waitForURL('**/nueva-boleta', { timeout }),
      page.waitForSelector('[role="alert"]', { timeout }),
    ]);
  }

  /**
   * Get error message if login failed
   */
  async getErrorMessage(): Promise<string | null> {
    const page = (this as any).page;
    const errorAlert = page.locator('[role="alert"]');
    
    if (await errorAlert.isVisible()) {
      return await errorAlert.textContent();
    }
    
    return null;
  }

  /**
   * Verify Google Sign-In button visibility based on feature flag
   */
  async verifyGoogleSignInButton(): Promise<boolean> {
    const page = (this as any).page;
    const googleButton = page.locator('button:has-text("Continuar con Google")');
    
    const isVisible = await googleButton.isVisible();
    const shouldBeVisible = this.isGoogleSignInEnabled();
    
    return isVisible === shouldBeVisible;
  }

  /**
   * Create a logged-in user (performs sign-up and sign-in)
   */
  static async createLoggedIn(
    page: Page,
    userData?: Partial<UserData>,
    options?: UserFixtureOptions
  ): Promise<LoginUserFixture> {
    const fixture = new LoginUserFixture(page, userData, options);
    
    // Try to sign in first (user might already exist)
    let result = await fixture.signIn();
    
    // If sign-in failed, try sign-up
    if (!result.success) {
      result = await fixture.signUp();
    }
    
    if (!result.success) {
      throw new Error(`Failed to create logged-in user: ${result.error}`);
    }
    
    return fixture;
  }

  /**
   * Create a random logged-in user
   */
  static async createRandomLoggedIn(
    page: Page,
    options?: UserFixtureOptions
  ): Promise<LoginUserFixture> {
    const userData = {
      email: UserFixture.generateRandomEmail(),
      password: 'TestPassword123!',
      rut: UserFixture.generateRandomRut(),
      siiPassword: 'SiiPassword123!',
    };
    
    return await LoginUserFixture.createLoggedIn(page, userData, options);
  }
}
