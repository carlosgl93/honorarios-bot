import { useMemo } from 'react';

export interface FeatureFlags {
  enableGoogleSignIn?: boolean;
  enableSocialLogin?: boolean;
  enableBusinessProfile?: boolean;
  enableInvoiceHistory?: boolean;
  enablePDFPreview?: boolean;
  enableDarkMode?: boolean;
  enableOfflineMode?: boolean;
  enableAdvancedReports?: boolean;
  [key: string]: boolean | undefined;
}

// Default feature flags - can be overridden by environment variables or remote config
const DEFAULT_FLAGS: FeatureFlags = {
  enableGoogleSignIn: true,
  enableSocialLogin: true,
  enableBusinessProfile: true,
  enableInvoiceHistory: true,
  enablePDFPreview: true,
  enableDarkMode: true,
  enableOfflineMode: false,
  enableAdvancedReports: false,
};

// Load feature flags from environment variables
const getEnvironmentFlags = (): FeatureFlags => {
  const envFlags: FeatureFlags = {};

  Object.keys(DEFAULT_FLAGS).forEach((key) => {
    const envKey = `VITE_FEATURE_${key.replace(/([A-Z])/g, '_$1').toUpperCase()}`;
    const envValue = import.meta.env[envKey];

    if (envValue !== undefined) {
      envFlags[key] = envValue === 'true' || envValue === true;
    }
  });

  return envFlags;
};

// Merge default flags with environment flags
const getFeatureFlags = (): FeatureFlags => {
  return {
    ...DEFAULT_FLAGS,
    ...getEnvironmentFlags(),
  };
};

/**
 * Custom hook to check if a feature flag is enabled
 *
 * @param flagName - The name of the feature flag to check
 * @returns boolean - Whether the feature flag is enabled
 *
 * @example
 * ```tsx
 * const isEnabled = useFeatureFlag('enableGoogleSignIn');
 *
 * return (
 *   <div>
 *     {isEnabled && <GoogleSignInButton />}
 *   </div>
 * );
 * ```
 */
export const useFeatureFlag = (flagName: keyof FeatureFlags): boolean => {
  const flags = useMemo(() => getFeatureFlags(), []);

  return flags[flagName] ?? false;
};

/**
 * Custom hook to get all feature flags
 *
 * @returns FeatureFlags - Object containing all feature flags
 *
 * @example
 * ```tsx
 * const flags = useFeatureFlags();
 *
 * return (
 *   <div>
 *     {flags.enableGoogleSignIn && <GoogleSignInButton />}
 *     {flags.enableDarkMode && <ThemeToggle />}
 *   </div>
 * );
 * ```
 */
export const useFeatureFlags = (): FeatureFlags => {
  return useMemo(() => getFeatureFlags(), []);
};

// For testing purposes - allows setting feature flags programmatically
let testFlags: FeatureFlags | null = null;

export const setTestFeatureFlags = (flags: Partial<FeatureFlags>): void => {
  testFlags = { ...DEFAULT_FLAGS, ...flags };
};

export const clearTestFeatureFlags = (): void => {
  testFlags = null;
};

export const getTestFeatureFlags = (): FeatureFlags | null => {
  return testFlags;
};
