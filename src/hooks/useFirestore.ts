import { useEffect, useState } from 'react';

import { useAuth } from '@/contexts/AuthContext';
import { UserProfile, getBusinessProfile, getUserProfile } from '@/services/firestore';
import { BusinessProfile } from '@/types/business';

/**
 * Hook to fetch and manage user profile from Firestore
 */
export const useUserProfile = () => {
  const { user } = useAuth();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user) {
        setUserProfile(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const profile = await getUserProfile(user.uid);
        setUserProfile(profile);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch user profile'));
        setUserProfile(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [user]);

  return { userProfile, loading, error };
};

/**
 * Hook to fetch and manage business profile from Firestore
 */
export const useBusinessProfile = () => {
  const { user } = useAuth();
  const [businessProfile, setBusinessProfile] = useState<BusinessProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const refetch = async () => {
    if (!user) {
      setBusinessProfile(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const profile = await getBusinessProfile(user.uid);
      setBusinessProfile(profile);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch business profile'));
      setBusinessProfile(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return { businessProfile, loading, error, refetch };
};

/**
 * Hook to check if user has business profile
 */
export const useHasBusinessProfile = () => {
  const { businessProfile, loading } = useBusinessProfile();
  return { hasProfile: !!businessProfile, loading };
};
