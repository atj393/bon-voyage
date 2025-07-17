# Bon Voyage - Coding Guidelines

## Architecture Overview
Bon Voyage is a React Native Expo app for connecting travelers with companions, built with TypeScript and Expo Router for file-based routing.

## Project Structure Standards

### File Organization
```
app/                     # Expo Router file-based routing
├── (tabs)/             # Tab navigation screens
├── screens/            # Reusable screen components  
├── utils/              # Utility functions
├── _layout.tsx         # Root layout configuration
├── index.tsx          # App entry point (redirects to /welcome)
├── welcome.tsx        # Welcome/onboarding screen
├── login.tsx          # Authentication screen
├── register.tsx       # User registration screen
├── dashboard.tsx      # Role-based dashboard (host/companion)
├── matches.tsx        # Host: view matched companions
├── post-trip.tsx      # Host: create trip postings
├── post-availability.tsx # Companion: post availability
├── requests.tsx       # Companion: view travel requests
└── +not-found.tsx     # 404 error screen

components/             # Reusable UI components
├── ui/                # Low-level UI primitives
├── CommonHeader.tsx   # App-wide header with logout
├── ThemedText.tsx     # Themed text component
├── ThemedView.tsx     # Themed container component
└── BackButton.tsx     # Navigation back button

constants/             # App constants and configuration
hooks/                # Custom React hooks
assets/               # Static assets (images, fonts)
```

## Coding Standards

### TypeScript & File Extensions
- Use **TypeScript** exclusively for all source files
- Screen and component files must use `.tsx` extension
- Utility files may use `.ts` extension
- Always define and export proper TypeScript interfaces

### Component Architecture
```tsx
// Functional components with default export for screens
export default function ScreenName() {
  // Component logic
}

// Named exports for reusable components
export function ComponentName() {
  // Component logic
}

// Always define props interfaces
interface ComponentProps {
  title: string;
  onPress?: () => void;
}
```

### Routing Patterns

#### File-Based Routing
- Place route files inside the `app/` directory
- Tab navigation screens go under `app/(tabs)/`
- Use Expo Router's typed routes for navigation
- Route parameters: `useLocalSearchParams<{ param?: string }>()`

#### Navigation Examples
```tsx
// Navigate with parameters
router.push(`/dashboard?role=${role}`);

// Navigate with replacement (logout)
router.replace('/welcome');

// Access route parameters
const params = useLocalSearchParams<{ role?: string }>();
const role = params.role === 'companion' ? 'companion' : 'host';
```

### Import Standards
- **Always use absolute imports** with `@/` path alias
- Group imports: React → Expo/RN → Internal components → Utilities
```tsx
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
```

### Styling Guidelines

#### StyleSheet Usage
```tsx
// Always use StyleSheet.create at component bottom
const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, gap: 16 },
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
});
```

#### Themed Components
- **Always use** `ThemedView` and `ThemedText` for layout and text
- Support both light and dark themes
- Consistent spacing: `padding: 20`, `gap: 16`, `marginBottom: 16`

#### Cross-Platform Considerations
```tsx
// Use Platform.OS for platform-specific code
if (Platform.OS === 'web') {
  // Web-specific implementation
} else {
  // Mobile implementation
}

// Account for safe areas and headers
paddingBottom: 100, // For bottom positioned headers
paddingTop: 50,     // For status bar spacing
```

### Header Component Standards
- Use `CommonHeader` for all authenticated screens
- **Exclude** from: login, register, welcome screens
- Position: Bottom of screen (mobile-first design)
- Always include logout functionality with platform-specific confirmation

### State Management
```tsx
// Use React hooks for local state
const [email, setEmail] = useState('host@test.com');
const [isLoading, setIsLoading] = useState(false);

// Role-based conditional rendering
{role === 'host' ? (
  <HostSpecificContent />
) : (
  <CompanionSpecificContent />
)}
```

### Authentication Flow
- Default test credentials: `host@test.com` / `companion@test.com` + password `12345`
- Pass role parameter through navigation: `/dashboard?role=host`
- Role-based dashboard content and navigation

## Code Quality Standards

### Formatting
- **Indentation**: Two spaces (not tabs)
- **Semicolons**: Required at end of statements
- **Quotes**: Single quotes for strings
- **Trailing commas**: Include in objects and arrays

### Error Handling
```tsx
// Platform-specific alert handling
if (Platform.OS === 'web') {
  const confirmed = window.confirm('Are you sure?');
  if (confirmed) handleAction();
} else {
  Alert.alert('Title', 'Message', [
    { text: 'Cancel', style: 'cancel' },
    { text: 'Confirm', onPress: handleAction }
  ]);
}
```

### Interface Definitions
```tsx
// Always define component props
interface ScreenProps {
  title?: string;
  showHeader?: boolean;
}

// Export interfaces for reuse
export interface UserRole {
  type: 'host' | 'companion';
  permissions: string[];
}
```

## Development Workflow

### Before Committing
1. Run `npm run lint` to ensure code quality
2. Test on multiple platforms (web, iOS, Android)
3. Verify navigation flows work correctly
4. Check responsive design on different screen sizes

### Commit Standards
- Use **imperative mood**: "Add dashboard screen", "Fix login validation"
- Keep messages concise and descriptive
- Include lint results in PR descriptions

### File Naming
- **Screens**: PascalCase with Screen suffix (`DashboardScreen.tsx`)
- **Components**: PascalCase (`CommonHeader.tsx`)
- **Utilities**: camelCase (`apiUtils.ts`)
- **Routes**: kebab-case matching URL paths (`post-trip.tsx`)

## Performance Guidelines

### Component Optimization
- Use `ScrollView` with `contentContainerStyle` for scrollable content
- Implement proper `paddingBottom` for bottom headers (100px)
- Use `gap` property for consistent spacing in flex layouts

### Memory Management
- Clean up event listeners in `useEffect` cleanup
- Avoid inline function definitions in render
- Use `useCallback` for event handlers passed to children

This document reflects the current architecture and should be updated as the project evolves.
