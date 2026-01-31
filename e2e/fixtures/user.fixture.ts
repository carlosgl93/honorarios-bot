import { Page } from '@playwright/test';

export interface UserData {
  email: string;
  password: string;
  rut?: string;
  siiPassword?: string;
  displayName?: string;
}

export interface UserFixtureOptions {
  enableGoogleSignIn?: boolean;
  enableSocialLogin?: boolean;
  autoNavigate?: boolean;
}

/**
 * User fixture for testing user-related functionality
 * Provides reusable user data and helper methods
 */
export class UserFixture {
  private page: Page;
  private userData: UserData;
  private options: UserFixtureOptions;

  constructor(page: Page, userData?: Partial<UserData>, options?: UserFixtureOptions) {
    this.page = page;
    this.options = {
      enableGoogleSignIn: true,
      enableSocialLogin: true,
      autoNavigate: true,
      ...options,
    };

    // Default test user data
    this.userData = {
      email: userData?.email || 'test@example.com',
      password: userData?.password || 'TestPassword123!',
      rut: userData?.rut || '12.345.678-9',
      siiPassword: userData?.siiPassword || 'SiiPassword123!',
      displayName: userData?.displayName || 'Test User',
    };
  }

  /**
   * Get user data
   */
  getData(): UserData {
    return { ...this.userData };
  }

  /**
   * Get user email
   */
  getEmail(): string {
    return this.userData.email;
  }

  /**
   * Get user password
   */
  getPassword(): string {
    return this.userData.password;
  }

  /**
   * Get user RUT
   */
  getRut(): string | undefined {
    return this.userData.rut;
  }

  /**
   * Get SII password
   */
  getSiiPassword(): string | undefined {
    return this.userData.siiPassword;
  }

  /**
   * Get display name
   */
  getDisplayName(): string | undefined {
    return this.userData.displayName;
  }

  /**
   * Navigate to login page
   */
  async navigateToLogin(): Promise<void> {
    await this.page.goto('/login');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Check if Google Sign-In is available based on feature flag
   */
  isGoogleSignInEnabled(): boolean {
    return this.options.enableGoogleSignIn ?? true;
  }

  /**
   * Check if social login is enabled based on feature flag
   */
  isSocialLoginEnabled(): boolean {
    return this.options.enableSocialLogin ?? true;
  }

  /**
   * Fill email field
   */
  async fillEmail(): Promise<void> {
    await this.page.fill('input[type="email"]', this.userData.email);
  }

  /**
   * Fill password field
   */
  async fillPassword(): Promise<void> {
    const passwordInput = this.page.locator('input[type="password"]').first();
    await passwordInput.fill(this.userData.password);
  }

  /**
   * Fill RUT field (for sign up)
   */
  async fillRut(): Promise<void> {
    if (this.userData.rut) {
      await this.page.fill('input[label*="RUT" i], input[placeholder*="RUT" i]', this.userData.rut);
    }
  }

  /**
   * Fill SII password field (for sign up)
   */
  async fillSiiPassword(): Promise<void> {
    if (this.userData.siiPassword) {
      const siiPasswordInput = this.page.locator('input[type="password"]').nth(1);
      await siiPasswordInput.fill(this.userData.siiPassword);
    }
  }

  /**
   * Update user data
   */
  updateData(data: Partial<UserData>): void {
    this.userData = { ...this.userData, ...data };
  }

  /**
   * Generate random email
   */
  static generateRandomEmail(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(7);
    return `test-${timestamp}-${random}@example.com`;
  }

  /**
   * Generate random RUT (Chilean national ID)
   */
  static generateRandomRut(): string {
    const random = Math.floor(Math.random() * 90000000) + 10000000;
    const rut = random.toString();
    
    // Calculate verification digit
    let sum = 0;
    let multiplier = 2;
    
    for (let i = rut.length - 1; i >= 0; i--) {
      sum += parseInt(rut[i]) * multiplier;
      multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }
    
    const remainder = sum % 11;
    const digit = 11 - remainder;
    const verifier = digit === 11 ? '0' : digit === 10 ? 'K' : digit.toString();
    
    // Format as XX.XXX.XXX-X
    return `${rut.slice(0, 2)}.${rut.slice(2, 5)}.${rut.slice(5, 8)}-${verifier}`;
  }

  /**
   * Create a new user fixture with random data
   */
  static createRandom(page: Page, options?: UserFixtureOptions): UserFixture {
    return new UserFixture(
      page,
      {
        email: UserFixture.generateRandomEmail(),
        password: 'TestPassword123!',
        rut: UserFixture.generateRandomRut(),
        siiPassword: 'SiiPassword123!',
      },
      options
    );
  }
}
