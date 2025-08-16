import React from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

// Extend MUI ButtonProps to add custom props
export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'text' | 'gradient' | 'glow';
  loading?: boolean;
}

/**
 * 🎨 TRANSFORMED BY FUSION
 * 
 * Custom Button component that dramatically transforms Material UI Button
 * to match our design system with significant visual enhancements.
 * 
 * Transformations applied:
 * - ✅ Figtree font family
 * - ✅ Custom border radius from design tokens
 * - ✅ Enhanced hover/active states with animations
 * - ✅ Loading state with spinner
 * - ✅ New gradient and glow variants
 * - ✅ Custom shadows and elevation
 * - ✅ Smooth transitions
 */

// Create heavily styled button with our design system
const StyledButton = styled(MuiButton)(({ theme }) => ({
  // Base transformations
  fontFamily: 'Figtree, sans-serif',
  textTransform: 'none',
  fontWeight: 500,
  borderRadius: 'var(--radius-md)',
  padding: 'var(--spacing-2) var(--spacing-4)',
  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  
  // Remove MUI's default elevation
  boxShadow: 'none',
  
  // Hover effect for all variants
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-md)',
  },
  
  // Active state
  '&:active': {
    transform: 'translateY(0)',
  },
  
  // Focus visible
  '&:focus-visible': {
    outline: '2px solid var(--color-primary-500)',
    outlineOffset: '2px',
  },
  
  // Size variants with our spacing
  '&.MuiButton-sizeLarge': {
    padding: 'var(--spacing-3) var(--spacing-6)',
    fontSize: 'var(--font-size-lg)',
    borderRadius: 'var(--radius-lg)',
  },
  
  '&.MuiButton-sizeSmall': {
    padding: 'var(--spacing-1) var(--spacing-3)',
    fontSize: 'var(--font-size-sm)',
    borderRadius: 'var(--radius-sm)',
  },
  
  // Contained variant with our colors
  '&.MuiButton-containedPrimary': {
    background: 'var(--color-primary-500)',
    color: 'white',
    '&:hover': {
      background: 'var(--color-primary-600)',
      boxShadow: '0 8px 16px rgba(139, 92, 246, 0.3)',
    },
  },
  
  '&.MuiButton-containedSecondary': {
    background: 'var(--color-secondary-500)',
    color: 'white',
    '&:hover': {
      background: 'var(--color-secondary-600)',
      boxShadow: '0 8px 16px rgba(245, 158, 11, 0.3)',
    },
  },
  
  // Outlined variant with thicker borders
  '&.MuiButton-outlinedPrimary': {
    border: '2px solid var(--color-primary-500)',
    color: 'var(--color-primary-500)',
    '&:hover': {
      border: '2px solid var(--color-primary-600)',
      background: alpha('#8b5cf6', 0.08),
      boxShadow: 'inset 0 0 20px rgba(139, 92, 246, 0.1)',
    },
  },
  
  // Text variant with custom hover
  '&.MuiButton-text': {
    '&:hover': {
      background: alpha('#8b5cf6', 0.08),
      transform: 'scale(1.02)',
      boxShadow: 'none',
    },
  },
  
  // Disabled state
  '&.Mui-disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
}));

// Gradient button variant
const GradientButton = styled(StyledButton)({
  background: 'linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-400) 100%)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-500) 100%)',
    boxShadow: '0 12px 24px rgba(139, 92, 246, 0.4)',
    transform: 'translateY(-3px)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%)',
    transform: 'translateX(-100%)',
    transition: 'transform 0.6s',
  },
  '&:hover::before': {
    transform: 'translateX(100%)',
  },
});

// Glow button variant
const GlowButton = styled(StyledButton)({
  background: 'var(--color-primary-500)',
  color: 'white',
  boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
  '&:hover': {
    boxShadow: '0 0 30px rgba(139, 92, 246, 0.7), 0 0 60px rgba(139, 92, 246, 0.4)',
    transform: 'translateY(-2px) scale(1.02)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    right: '-2px',
    bottom: '-2px',
    background: 'linear-gradient(45deg, var(--color-primary-400), var(--color-primary-600), var(--color-primary-400))',
    borderRadius: 'inherit',
    opacity: 0,
    zIndex: -1,
    transition: 'opacity 0.3s',
  },
  '&:hover::after': {
    opacity: 1,
  },
});

export const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  loading = false,
  disabled,
  children,
  startIcon,
  endIcon,
  ...props
}) => {
  // Select the appropriate styled component based on variant
  let ButtonComponent = StyledButton;
  let muiVariant: MuiButtonProps['variant'] = variant as MuiButtonProps['variant'];
  
  if (variant === 'gradient') {
    ButtonComponent = GradientButton;
    muiVariant = 'contained';
  } else if (variant === 'glow') {
    ButtonComponent = GlowButton;
    muiVariant = 'contained';
  }
  
  return (
    <ButtonComponent
      variant={muiVariant}
      disabled={disabled || loading}
      startIcon={
        loading ? (
          <CircularProgress 
            size={16} 
            sx={{ 
              color: 'inherit',
              animation: 'spin 1s linear infinite',
              '@keyframes spin': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
              },
            }} 
          />
        ) : (
          startIcon
        )
      }
      endIcon={!loading && endIcon}
      {...props}
    >
      {children}
    </ButtonComponent>
  );
};

// Export as default for easier imports
export default Button;