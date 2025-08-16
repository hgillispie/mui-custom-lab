import { createTheme, alpha } from '@mui/material/styles';

// Import our design tokens from CSS variables
const getCSSVariable = (name: string): string => {
  if (typeof window !== 'undefined') {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
  }
  return '';
};

// Create a custom theme that uses our design tokens
export const createCustomTheme = () => {
  // Parse color values from CSS variables
  const primaryColor = '#8b5cf6'; // var(--color-primary-500)
  const secondaryColor = '#f59e0b'; // var(--color-secondary-500)
  
  return createTheme({
    // Use Figtree font for all MUI components
    typography: {
      fontFamily: '"Figtree", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
      button: { 
        fontWeight: 500,
        textTransform: 'none' // Disable uppercase transformation
      },
    },
    
    // Map our color palette to MUI's theme
    palette: {
      primary: {
        50: '#f5f3ff',
        100: '#ede9fe',
        200: '#ddd6fe',
        300: '#c4b5fd',
        400: '#a78bfa',
        main: '#8b5cf6', // 500
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95',
      },
      secondary: {
        50: '#fef3c7',
        100: '#fee4a6',
        200: '#fdd68a',
        300: '#fcc55e',
        400: '#fbb437',
        main: '#f59e0b', // 500
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
      },
      error: {
        main: '#ef4444', // var(--color-error-500)
      },
      warning: {
        main: '#f59e0b', // var(--color-warning-500)
      },
      success: {
        main: '#10b981', // var(--color-success-500)
      },
      info: {
        main: '#3b82f6', // var(--color-info-500)
      },
      grey: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
    },
    
    // Shape customization
    shape: {
      borderRadius: 8, // Use our border radius tokens
    },
    
    // Component-specific customizations
    components: {
      // Button customization
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '0.375rem', // var(--radius-md)
            padding: '0.5rem 1rem', // var(--spacing-2) var(--spacing-4)
            fontWeight: 500,
            transition: 'all 200ms ease',
            '&:hover': {
              transform: 'translateY(-1px)',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            },
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            },
          },
          containedPrimary: {
            background: 'var(--color-primary-500)',
            '&:hover': {
              background: 'var(--color-primary-600)',
            },
          },
          containedSecondary: {
            background: 'var(--color-secondary-500)',
            '&:hover': {
              background: 'var(--color-secondary-600)',
            },
          },
          outlined: {
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            },
          },
          sizeLarge: {
            padding: '0.75rem 1.5rem', // var(--spacing-3) var(--spacing-6)
            fontSize: '1.125rem', // var(--font-size-lg)
          },
          sizeSmall: {
            padding: '0.375rem 0.75rem', // var(--spacing-1.5) var(--spacing-3)
            fontSize: '0.875rem', // var(--font-size-sm)
          },
        },
      },
      
      // TextField customization
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
        },
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: '0.375rem', // var(--radius-md)
              '& fieldset': {
                borderColor: 'var(--color-gray-300)',
              },
              '&:hover fieldset': {
                borderColor: 'var(--color-gray-400)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'var(--color-primary-500)',
                borderWidth: '2px',
              },
            },
          },
        },
      },
      
      // Card customization
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '0.5rem', // var(--radius-lg)
            boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)', // var(--shadow-sm)
            '&:hover': {
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', // var(--shadow-md)
            },
          },
        },
      },
      
      // Paper customization
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: '0.5rem', // var(--radius-lg)
          },
          elevation1: {
            boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)', // var(--shadow-sm)
          },
          elevation2: {
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', // var(--shadow-md)
          },
          elevation3: {
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', // var(--shadow-lg)
          },
        },
      },
      
      // Chip customization
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: '9999px', // var(--radius-full)
            fontWeight: 500,
          },
          colorPrimary: {
            backgroundColor: alpha('#8b5cf6', 0.1),
            color: '#8b5cf6',
            '&:hover': {
              backgroundColor: alpha('#8b5cf6', 0.2),
            },
          },
        },
      },
      
      // Switch customization
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: 42,
            height: 26,
            padding: 0,
          },
          switchBase: {
            padding: 0,
            margin: 2,
            '&.Mui-checked': {
              '& + .MuiSwitch-track': {
                backgroundColor: 'var(--color-primary-500)',
              },
            },
          },
          thumb: {
            width: 22,
            height: 22,
          },
          track: {
            borderRadius: 26 / 2,
            backgroundColor: 'var(--color-gray-400)',
          },
        },
      },
      
      // Alert customization
      MuiAlert: {
        styleOverrides: {
          root: {
            borderRadius: '0.375rem', // var(--radius-md)
          },
          standardSuccess: {
            backgroundColor: alpha('#10b981', 0.1),
            color: '#059669',
          },
          standardError: {
            backgroundColor: alpha('#ef4444', 0.1),
            color: '#dc2626',
          },
          standardWarning: {
            backgroundColor: alpha('#f59e0b', 0.1),
            color: '#d97706',
          },
          standardInfo: {
            backgroundColor: alpha('#3b82f6', 0.1),
            color: '#2563eb',
          },
        },
      },
    },
  });
};

export default createCustomTheme;