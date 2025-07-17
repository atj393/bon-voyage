# Coding Guidelines

- Use **TypeScript** for all source files. Screens and components should use the `.tsx` extension.
- Components should be functional components and exported as `export default function Name()` or `export function Name()` as appropriate.
- Use Expo Router's **file-based routing** for new screens. Place route files inside the `app` directory. If a screen needs to be part of the tab navigator, place it under `app/(tabs)`.
- Prefer absolute imports using the `@/` path alias configured in `tsconfig.json`.
- Reuse shared UI elements like `ThemedView` and `ThemedText` for layout and text styling. Style components using `StyleSheet.create`.
- Indentation is **two spaces** and semicolons are required.
- Keep commit messages concise and in the **imperative mood** (e.g. "Add dashboard screen").

# Process Guidelines

- After making changes, run `npm run lint` to ensure the project lints successfully before committing.
- Include a short summary of your changes and the lint results in the PR body.
