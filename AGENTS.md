# Honorarios Bot - Agent Documentation

## Project Overview

**Honorarios Bot** is a Chilean invoice (facturas/boletas) generation system built with React, Firebase, and PDF generation capabilities. The application allows users to create professional PDF invoices with their business information, comply with Chilean tax regulations (19% IVA), and manage their business profiles.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **UI Library**: Material-UI (MUI) v6.4.6
- **State Management**: Jotai (atomic state management)
- **Routing**: React Router v7
- **Backend**: Firebase (Firestore, Authentication)
- **PDF Generation**: @react-pdf/renderer v4.3.2
- **Package Manager**: pnpm
- **Testing**: Vitest (unit), Playwright (e2e)

## Project Structure

```
seattle/
├── src/
│   ├── components/         # Reusable React components
│   │   ├── PDFInvoice/    # PDF invoice template component
│   │   ├── PDFPreviewDialog/ # PDF preview and download dialog
│   │   └── InvoiceItemRow/ # Invoice line item row
│   ├── pages/             # Page components
│   │   ├── InvoiceForm/   # Invoice creation form
│   │   ├── BusinessProfile/ # Business profile setup
│   │   └── History/       # Invoice history list
│   ├── services/          # External service integrations
│   │   └── firestore.ts   # Firestore CRUD operations
│   ├── types/             # TypeScript type definitions
│   │   ├── business.ts    # Business profile types
│   │   └── invoice.ts     # Invoice data types
│   ├── store/             # Jotai atoms (state)
│   │   └── invoice-atoms.ts
│   ├── config/            # App configuration
│   │   └── firebase.ts    # Firebase initialization
│   ├── routes/            # Route definitions
│   └── scripts/           # Utility scripts
│       └── seed-db.ts     # Database seeding script
├── firebase.json          # Firebase emulator config
├── .env                   # Environment variables (auto-generated)
├── .conductor-init        # Workspace initialization script
└── package.json           # Dependencies and scripts
```

## Key Features

### 1. Invoice PDF Generation
- Client-side PDF generation using @react-pdf/renderer
- Professional A4 invoice template
- Includes company logo, business info, and branding
- Itemized line items table with calculations
- Chilean tax compliance (19% IVA)
- Preview and download functionality
- Auto-generated invoice numbers with customizable formats

**Files**: `src/components/PDFInvoice/PDFInvoice.tsx`, `src/components/PDFPreviewDialog/PDFPreviewDialog.tsx`

### 2. Business Profile Management
- Complete business information setup
- Chilean RUT validation and formatting
- Address management (including Chilean regions)
- Logo upload capability
- Invoice numbering configuration

**Files**: `src/pages/BusinessProfile/BusinessProfile.tsx`, `src/types/business.ts`

### 3. Invoice Creation
- Dynamic line items with add/remove
- Client information capture
- Real-time total calculations
- Date pickers for issue/due dates
- Payment terms and notes fields
- RUT validation for clients

**Files**: `src/pages/InvoiceForm/InvoiceForm.tsx`, `src/types/invoice.ts`

### 4. Data Persistence
- Firestore integration for business profiles
- User authentication with Firebase Auth
- Invoice history tracking
- Auto-incrementing invoice numbers

**Files**: `src/services/firestore.ts`, `src/config/firebase.ts`

## Development Environment

### System Requirements

**Java 21+**: Firebase emulators require Java 21 or higher.

```bash
# Check Java version
java -version

# If needed, install Java 21 (macOS with Homebrew)
brew install openjdk@21
export PATH="/opt/homebrew/opt/openjdk@21/bin:$PATH"
```

### Firebase Emulators (Default Ports)

This workspace uses standard Firebase emulator ports:

| Service   | Port | URL                     |
|-----------|------|-------------------------|
| Firestore | 8080 | http://localhost:8080   |
| Auth      | 9099 | http://localhost:9099   |
| Functions | 5001 | http://localhost:5001   |
| UI        | 4000 | http://localhost:4000   |

### Test Credentials

Default test user (created by seed script):
- **Email**: `test@example.com`
- **Password**: `TestPassword123!`

Default business profile:
- **Company**: Consultora Demo SpA
- **RUT**: 76.123.456-7
- **Email**: contacto@consultorademo.cl

## Running the Application

### Quick Start (Automatic)

If you're creating a new workspace, the `.conductor-init` script runs automatically and:
1. Installs dependencies (`pnpm install`)
2. Creates `.env` file with Firebase config
3. Starts Firebase emulators
4. Seeds the database with test data
5. Starts the dev server

### Manual Commands

```bash
# Install dependencies
pnpm install

# Start emulators (background, with data persistence)
pnpm run emulators

# Seed database with test data
pnpm run seed:db

# Start development server
pnpm dev

# Run tests
pnpm test:unit        # Unit tests
pnpm test:e2e         # E2E tests
pnpm test:e2e:ui      # E2E tests with UI

# Linting and formatting
pnpm prettier:check
pnpm lint:check
pnpm ts:check

# Build for production
pnpm build
```

## Important Routes

| Route            | Page            | Description                |
|------------------|-----------------|----------------------------|
| `/`              | Home            | Landing page               |
| `/nueva-factura` | InvoiceForm     | Create new invoice         |
| `/facturas`      | History         | View invoice history       |
| `/perfil-negocio`| BusinessProfile | Setup/edit business info   |

## Firebase Configuration

### Production (sii-robot-a6284)
```javascript
{
  apiKey: "AIzaSyCMo3rMU28z-nyDdtiYY7gnPDldOoyxeKU",
  authDomain: "sii-robot-a6284.firebaseapp.com",
  projectId: "sii-robot-a6284",
  storageBucket: "sii-robot-a6284.firebasestorage.app",
  messagingSenderId: "415042811690",
  appId: "1:415042811690:web:80612751ce453e21291053",
  measurementId: "G-30TQY79797"
}
```

### Firestore Collections

**users**: User profiles
```typescript
{
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  hasBusinessProfile: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt: Date;
}
```

**businessProfiles**: Business information
```typescript
{
  id: string; // Same as userId
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
  formatoNumeroFactura: string; // e.g., "FACT-{YYYY}-{####}"
  siguienteNumeroFactura: number;
  createdAt: Date;
  updatedAt: Date;
}
```

## Chilean Tax Compliance

### IVA (VAT) Calculation
- Standard rate: **19%**
- Applied to all invoice items
- Calculated on subtotal
- Formula: `IVA = subtotal × 0.19`
- Total = Subtotal + IVA

**Implementation**: `src/types/invoice.ts` (lines 85-93)

### RUT Validation
Chilean tax ID validation with check digit verification:
- Format: XX.XXX.XXX-Y
- Check digit calculation using mod-11 algorithm
- Auto-formatting with dots and dash

**Implementation**: `src/types/invoice.ts` (lines 100-132)

### Currency Formatting
- Chilean Peso (CLP) formatting
- No decimal places (integer amounts)
- Locale: `es-CL`

## Common Tasks for Agents

### Adding a New Invoice Field
1. Update `InvoiceData` interface in `src/types/invoice.ts`
2. Add field to `InvoiceFormData` interface
3. Update form in `src/pages/InvoiceForm/InvoiceForm.tsx`
4. Update PDF template in `src/components/PDFInvoice/PDFInvoice.tsx`
5. Update Firestore service if needed

### Modifying PDF Template
- Edit `src/components/PDFInvoice/PDFInvoice.tsx`
- Use @react-pdf/renderer components (Document, Page, View, Text, Image)
- Styling with StyleSheet.create()
- A4 page size (595.28 x 841.89 points)

### Adding Emulator Data
- Edit `src/scripts/seed-db.ts`
- Use Firebase Admin SDK patterns
- Connect to emulators (ports: 8081, 9100)
- Run: `pnpm run seed:db`

### Firebase Emulator Data Persistence
- Data imports from `.firebase-data/` directory
- Auto-exports on exit
- Survives emulator restarts
- To reset: delete `.firebase-data/` folder

## Troubleshooting

### Emulator Port Conflicts
If you see "port already in use" errors:
- Check `firebase.json` emulator ports (8081, 9100, 5002, 4001)
- Modify ports if needed
- Update `src/scripts/seed-db.ts` with new ports
- Update `.env` file with new ports

### RUT Validation Issues
- Format must be XX.XXX.XXX-Y
- Check digit must be valid (mod-11 algorithm)
- Use `validateRUT()` and `formatRUT()` from `src/types/invoice.ts`

### PDF Generation Errors
- Ensure all required data is present (business profile, invoice items)
- Check for missing or null values
- Verify image URLs are accessible (logos)
- Test with `PDFViewer` in development

### Authentication Issues
- Verify emulator is running on port 9100
- Check `.env` file has correct test credentials
- Ensure user is created via seed script
- Clear browser storage if needed

## State Management (Jotai)

Key atoms in `src/store/invoice-atoms.ts`:

```typescript
businessProfileAtom      // Current business profile
invoiceFormAtom          // Invoice form data
invoicesListAtom         // List of invoices
currentInvoiceAtom       // Single invoice being viewed
```

Access atoms with `useAtom()`, `useAtomValue()`, or `useSetAtom()` hooks.

## Environment Variables

All environment variables use `VITE_` prefix (Vite requirement):

```bash
# Firebase
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
VITE_FIREBASE_MEASUREMENT_ID

# Test User
VITE_TEST_USER_EMAIL
VITE_TEST_USER_PASSWORD

# URLs
VITE_PROD_URL
VITE_DEV_URL

# Emulator Ports
VITE_FIRESTORE_EMULATOR_PORT
VITE_AUTH_EMULATOR_PORT
VITE_FUNCTIONS_EMULATOR_PORT
```

## Git Branch Strategy

- **Target branch**: `master`
- **Branch prefix**: `carlosgl93/`
- Use descriptive branch names: `carlosgl93/feature-name`

## Testing

### Unit Tests (Vitest)
- Files: `src/**/*.test.ts(x)`
- Run: `pnpm test:unit`
- Coverage: TBD

### E2E Tests (Playwright)
- Files: `e2e/**/*.spec.ts`
- Run: `pnpm test:e2e`
- UI Mode: `pnpm test:e2e:ui`

## Performance Considerations

- PDF generation is client-side (no server required)
- Large invoices (50+ items) may take 2-3 seconds to generate
- Images in PDFs should be optimized (<500KB)
- Firestore queries use indexed fields for performance

## Known Limitations

1. No invoice editing after creation (by design)
2. No bulk invoice generation
3. PDF template is fixed (not customizable by users)
4. Single business profile per user
5. No invoice status tracking workflow
6. No email sending functionality (yet)

## Future Enhancements (Potential)

- Invoice editing capability
- Multiple business profiles per user
- Email invoice to clients
- Invoice status workflow (draft → sent → paid)
- Payment tracking integration
- Recurring invoice templates
- Multi-currency support
- Custom PDF templates

## Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [@react-pdf/renderer Docs](https://react-pdf.org/)
- [Material-UI Documentation](https://mui.com/)
- [Jotai Documentation](https://jotai.org/)
- [Chilean RUT Validation](https://es.wikipedia.org/wiki/Rol_%C3%9Anico_Tributario)

---

**Last Updated**: 2026-02-07
**Project Version**: 1.0.0
**Maintainer**: carlosgl93
