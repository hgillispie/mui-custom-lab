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
  const primaryColor = '#7c8363'; // var(--color-primary-500) - Sage
  const secondaryColor = '#31473a'; // var(--color-secondary-500) - Pine
  
  return createTheme({
    // Use Outfit + Poppins font system for all MUI components
    typography: {
      fontFamily: '"Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      h1: { fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 600 },
      h2: { fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 600 },
      h3: { fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 600 },
      h4: { fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 500 },
      h5: { fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 500 },
      h6: { fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 500 },
      button: { 
        fontFamily: '"Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontWeight: 500,
        textTransform: 'none' // Disable uppercase transformation
      },
    },
    
    // Map our Sage & Pine color palette to MUI's theme
    palette: {
      primary: {
        50: '#fafbf9',
        100: '#dcded3',
        200: '#bdc2ae',
        300: '#9fa588',
        400: '#7f8665',
        main: '#7c8363', // 500 - Sage
        600: '#798061',
        700: '#5e644b',
        800: '#434736',
        900: '#292b20',
      },
      secondary: {
        50: '#f9fbfa',
        100: '#c2d5c9',
        200: '#8aae99',
        300: '#59816a',
        400: '#334a3c',
        main: '#31473a', // 500 - Pine
        600: '#2f4438',
        700: '#26372d',
        800: '#1d2a22',
        900: '#141c17',
      },
      error: {
        main: '#ef4444', // var(--color-error-500)
      },
      warning: {
        main: '#f59e0b', // var(--color-warning-500)
      },
      success: {
        main: '#22c55e', // var(--color-success-500)
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
            backgroundColor: alpha('#31473a', 0.1),
            color: '#31473a',
            '&:hover': {
              backgroundColor: alpha('#31473a', 0.2),
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
            backgroundColor: alpha('#22c55e', 0.1),
            color: '#16a34a',
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