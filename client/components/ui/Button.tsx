import React from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

// Extend MUI ButtonProps to add custom props
export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'text' | 'gradient';
  loading?: boolean;
}

/**
 * Custom Button component that wraps Material UI Button
 * with additional functionality and consistent styling.
 * 
 * The base styling is handled by the theme in mui-theme.ts
 * This wrapper adds:
 * - Loading state with spinner
 * - Gradient variant
 * - Consistent defaults
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  loading = false,
  disabled,
  children,
  startIcon,
  endIcon,
  sx,
  ...props
}) => {
  // Handle gradient variant with sx prop
  const gradientStyles = variant === 'gradient' ? {
    background: 'linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-400) 100%)',
    color: 'white',
    '&:hover': {
      background: 'linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-500) 100%)',
      transform: 'translateY(-1px)',
      boxShadow: 'var(--shadow-lg)',
    },
  } : {};

  // Use 'contained' as the MUI variant for gradient
  const muiVariant = variant === 'gradient' ? 'contained' : variant;

  return (
    <MuiButton
      variant={muiVariant}
      disabled={disabled || loading}
      startIcon={
        loading ? (
          <CircularProgress size={16} color="inherit" />
        ) : (
          startIcon
        )
      }
      endIcon={!loading && endIcon}
      sx={{
        ...gradientStyles,
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

// Export as default for easier imports
export default Button;