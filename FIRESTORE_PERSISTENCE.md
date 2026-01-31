# Firestore Persistence Implementation

## Overview

This implementation adds complete Firestore persistence for user profiles and business profile information. All data is automatically synced with Firestore and persisted across sessions.

## Collections Structure

### `users` Collection

Stores user profile information.

**Document ID**: User's Firebase Auth UID

**Fields**:
```typescript
{
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  hasBusinessProfile: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  lastLoginAt: Timestamp;
}
```

### `businessProfiles` Collection

Stores business/company profile information for invoicing.

**Document ID**: User's Firebase Auth UID (1-to-1 relationship with users)

**Fields**:
```typescript
{
  userId: string;
  nombreEmpresa: string;
  tipoNegocio: 'persona_natural' | 'empresa';
  rut: string;
  giro?: string;
  email: string;
  telefono?: string;
  sitioWeb?: string;
  direccion: string;
  comuna: string;
  ciudad: string;
  region: string;
  logoUrl?: string;
  formatoNumeroFactura: string;
  siguienteNumeroFactura: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

## Services

### Firestore Service (`src/services/firestore.ts`)

Complete CRUD operations for users and business profiles.

**User Operations**:
- `createOrUpdateUserProfile()` - Create or update user profile
- `getUserProfile()` - Fetch user profile
- `updateLastLogin()` - Update last login timestamp

**Business Profile Operations**:
- `saveBusinessProfile()` - Create or update business profile
- `getBusinessProfile()` - Fetch business profile by user ID
- `getBusinessProfileByRut()` - Fetch business profile by RUT
- `updateBusinessProfile()` - Update specific fields
- `incrementInvoiceNumber()` - Auto-increment invoice counter
- `hasBusinessProfile()` - Check if profile exists
- `deleteBusinessProfile()` - Soft delete profile

## Hooks

### `useUserProfile()`

Automatically fetches and syncs user profile from Firestore.

```tsx
import { useUserProfile } from '@/hooks/useFirestore';

function MyComponent() {
  const { userProfile, loading, error } = useUserProfile();
  
  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;
  
  return <div>{userProfile?.email}</div>;
}
```

### `useBusinessProfile()`

Automatically fetches and syncs business profile from Firestore.

```tsx
import { useBusinessProfile } from '@/hooks/useFirestore';

function MyComponent() {
  const { businessProfile, loading, error, refetch } = useBusinessProfile();
  
  if (loading) return <Loading />;
  if (!businessProfile) return <CreateProfile />;
  
  return <div>{businessProfile.nombreEmpresa}</div>;
}
```

### `useHasBusinessProfile()`

Quick check if user has a business profile.

```tsx
import { useHasBusinessProfile } from '@/hooks/useFirestore';

function MyComponent() {
  const { hasProfile, loading } = useHasBusinessProfile();
  
  if (loading) return <Loading />;
  if (!hasProfile) return <Navigate to="/perfil-negocio" />;
  
  return <Dashboard />;
}
```

## Automatic User Profile Creation

User profiles are automatically created/updated on:
- Sign up with email/password
- Sign in with email/password  
- Sign in with Google
- Any authentication state change

This is handled in `AuthContext.tsx`:

```tsx
const signUp = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  // Automatically creates user profile in Firestore
  await createOrUpdateUserProfile(
    userCredential.user.uid,
    userCredential.user.email || '',
    userCredential.user.displayName || undefined,
    userCredential.user.photoURL || undefined
  );
};
```

## Business Profile Flow

### 1. User Signs Up/In
- User profile created in Firestore (`users` collection)
- `hasBusinessProfile` initially set to `false`

### 2. User Creates Business Profile
- Navigate to `/perfil-negocio`
- Fill out business information
- On submit:
  - Business profile saved to Firestore (`businessProfiles` collection)
  - User's `hasBusinessProfile` flag updated to `true`
  - Redirect to invoice form

### 3. Subsequent Visits
- Business profile automatically loaded from Firestore
- Pre-fills form if editing
- Data persists across sessions

## Security Rules

Firestore rules ensure users can only access their own data:

```javascript
// Users can only read/write their own profile
match /users/{userId} {
  allow read, create, update: if request.auth.uid == userId;
  allow delete: if false; // Prevent deletion
}

// Users can only read/write their own business profile
match /businessProfiles/{userId} {
  allow read, create, update, delete: if request.auth.uid == userId;
}
```

## Indexes

Optimized indexes for common queries:

- **Boletas**: Compound index on `userId` + `createdAt` (descending)
- **Business Profiles**: Single index on `rut` for lookups
- **Users**: Single index on `email` for lookups
- **Users**: Field index on `lastLoginAt` for analytics

## Usage Examples

### Save Business Profile

```tsx
import { saveBusinessProfile } from '@/services/firestore';

const handleSave = async () => {
  const profile = {
    userId: user.uid,
    nombreEmpresa: 'Mi Empresa',
    tipoNegocio: 'persona_natural',
    rut: '12.345.678-9',
    email: 'empresa@example.com',
    direccion: 'Calle 123',
    comuna: 'Santiago',
    ciudad: 'Santiago',
    region: 'Región Metropolitana',
    formatoNumeroFactura: 'FACT-{YYYY}-{####}',
    siguienteNumeroFactura: 1,
  };
  
  await saveBusinessProfile(profile);
};
```

### Load Business Profile

```tsx
import { getBusinessProfile } from '@/services/firestore';

const loadProfile = async (userId: string) => {
  const profile = await getBusinessProfile(userId);
  if (profile) {
    console.log('Company:', profile.nombreEmpresa);
  }
};
```

### Check if Profile Exists

```tsx
import { hasBusinessProfile } from '@/services/firestore';

const checkProfile = async (userId: string) => {
  const exists = await hasBusinessProfile(userId);
  if (!exists) {
    navigate('/perfil-negocio');
  }
};
```

### Increment Invoice Number

```tsx
import { incrementInvoiceNumber } from '@/services/firestore';

const createInvoice = async (userId: string) => {
  const invoiceNumber = await incrementInvoiceNumber(userId);
  console.log('New invoice number:', invoiceNumber);
};
```

## Data Flow

```
User Authentication
      ↓
Auto-create User Profile (Firestore)
      ↓
User Creates Business Profile
      ↓
Save to Firestore (businessProfiles)
      ↓
Update User hasBusinessProfile flag
      ↓
Data Available Across Sessions
```

## Error Handling

All Firestore operations include error handling:

```tsx
try {
  await saveBusinessProfile(profile);
} catch (error) {
  console.error('Error saving profile:', error);
  setError('Failed to save business profile');
}
```

## Offline Support

Firestore automatically handles offline mode:
- Writes are queued when offline
- Reads use local cache
- Syncs when connection restored

## Testing with Emulator

When running locally, all Firestore operations use the emulator:

```typescript
// Configured in src/config/firebase.ts
if (import.meta.env.DEV || window.location.hostname === 'localhost') {
  connectFirestoreEmulator(db, 'localhost', 8080);
}
```

Access Emulator UI: http://localhost:4000

## Migration Notes

If you have existing user data, run a migration to create user profiles:

```typescript
import { auth } from '@/config/firebase';
import { createOrUpdateUserProfile } from '@/services/firestore';

// For each existing user
const user = auth.currentUser;
if (user) {
  await createOrUpdateUserProfile(
    user.uid,
    user.email || '',
    user.displayName || undefined,
    user.photoURL || undefined
  );
}
```

## Best Practices

1. **Always use hooks** for reactive data (`useUserProfile`, `useBusinessProfile`)
2. **Check loading states** before rendering data
3. **Handle errors gracefully** with user-friendly messages
4. **Use refetch()** when data needs to be refreshed
5. **Validate data** before saving to Firestore
6. **Use serverTimestamp()** for consistent timestamps
7. **Leverage offline support** - don't block UI on slow connections

## Next Steps

Potential enhancements:
- Add logo upload to Cloud Storage
- Implement business profile history/versions
- Add business profile templates
- Support multiple business profiles per user
- Add business profile sharing/collaboration
