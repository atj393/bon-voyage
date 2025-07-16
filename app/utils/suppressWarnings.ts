// Suppress specific React Native Web warnings in development
if (__DEV__) {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    const message = args[0];
    
    // Suppress React Native Web deprecation warnings
    if (
      typeof message === 'string' && (
        message.includes('"shadow*" style props are deprecated') ||
        message.includes('props.pointerEvents is deprecated')
      )
    ) {
      return;
    }
    
    originalWarn.apply(console, args);
  };
}
