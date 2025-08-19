import React from 'react';
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

// Extended interface with custom props
export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'text' | 'gradient' | 'ghost' | 'success' | 'warning' | 'error';
  loading?: boolean;
  size?: 'small' | 'medium' | 'large';
}

// HEAVILY TRANSFORMED Button with design tokens
const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => !['loading', 'variant', 'size'].includes(prop),
})<ButtonProps>(({ theme, variant = 'contained', size = 'medium', loading }) => ({
  // Base styling with Figtree font
  fontFamily: 'var(--font-family-sans)',
  textTransform: 'none',
  fontWeight: 'var(--font-weight-medium)',
  borderRadius: 'var(--radius-button)',
  border: 'none',
  cursor: loading ? 'not-allowed' : 'pointer',
  position: 'relative',
  overflow: 'hidden',
  
  // Smooth transitions for all properties
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  // Size variations
  ...(size === 'small' && {
    padding: 'var(--spacing-1-5) var(--spacing-3)',
    fontSize: 'var(--font-size-sm)',
    minHeight: '32px',
  }),
  ...(size === 'medium' && {
    padding: 'var(--spacing-2-5) var(--spacing-4)',
    fontSize: 'var(--font-size-base)',
    minHeight: '40px',
  }),
  ...(size === 'large' && {
    padding: 'var(--spacing-3-5) var(--spacing-6)',
    fontSize: 'var(--font-size-lg)',
    minHeight: '48px',
  }),

  // Remove default MUI styling
  boxShadow: 'none',
  
  // Enhanced hover and focus states
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-lg)',
    filter: 'brightness(1.05)',
  },
  
  '&:active': {
    transform: 'translateY(0px) scale(0.98)',
    transition: 'all 100ms var(--ease-out)',
  },
  
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 3px var(--color-primary-200)',
  },

  // Disabled state
  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
    transform: 'none',
    '&:hover': {
      transform: 'none',
      boxShadow: 'none',
      filter: 'none',
    },
  },

  // Loading state
  ...(loading && {
    pointerEvents: 'none',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '16px',
      height: '16px',
      margin: '-8px 0 0 -8px',
      border: '2px solid transparent',
      borderTop: '2px solid currentColor',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      zIndex: 1,
    },
  }),

  // Variant-specific styling
  ...(variant === 'contained' && {
    background: 'linear-gradient(135deg, var(--color-primary-500), var(--color-primary-600))',
    color: 'var(--color-white)',
    '&:hover': {
      background: 'linear-gradient(135deg, var(--color-primary-600), var(--color-primary-700))',
    },
  }),

  ...(variant === 'outlined' && {
    backgroundColor: 'transparent',
    color: 'var(--color-primary-600)',
    border: '2px solid var(--color-primary-500)',
    '&:hover': {
      backgroundColor: 'var(--color-primary-50)',
      borderColor: 'var(--color-primary-600)',
      color: 'var(--color-primary-700)',
    },
  }),

  ...(variant === 'text' && {
    backgroundColor: 'transparent',
    color: 'var(--color-primary-600)',
    '&:hover': {
      backgroundColor: 'var(--color-primary-50)',
      color: 'var(--color-primary-700)',
    },
  }),

  ...(variant === 'gradient' && {
    background: 'linear-gradient(135deg, var(--color-primary-300), var(--color-primary-700))',
    color: 'var(--color-white)',
    '&:hover': {
      background: 'linear-gradient(135deg, var(--color-primary-500), var(--color-primary-800))',
      boxShadow: '0 8px 25px rgba(139, 92, 246, 0.4)',
    },
  }),

  ...(variant === 'ghost' && {
    backgroundColor: 'transparent',
    color: 'var(--color-gray-700)',
    border: '1px solid var(--color-gray-200)',
    '&:hover': {
      backgroundColor: 'var(--color-gray-100)',
      borderColor: 'var(--color-gray-300)',
      color: 'var(--color-gray-800)',
    },
  }),

  ...(variant === 'success' && {
    background: 'linear-gradient(135deg, var(--color-success-500), var(--color-success-600))',
    color: 'var(--color-white)',
    '&:hover': {
      background: 'linear-gradient(135deg, var(--color-success-600), var(--color-success-700))',
      boxShadow: '0 8px 25px rgba(34, 197, 94, 0.4)',
    },
  }),

  ...(variant === 'warning' && {
    background: 'linear-gradient(135deg, var(--color-warning-500), var(--color-warning-600))',
    color: 'var(--color-white)',
    '&:hover': {
      background: 'linear-gradient(135deg, var(--color-warning-600), var(--color-warning-700))',
      boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)',
    },
  }),

  ...(variant === 'error' && {
    background: 'linear-gradient(135deg, var(--color-error-500), var(--color-error-600))',
    color: 'var(--color-white)',
    '&:hover': {
      background: 'linear-gradient(135deg, var(--color-error-600), var(--color-error-700))',
      boxShadow: '0 8px 25px rgba(239, 68, 68, 0.4)',
    },
  }),

  // Ripple effect animation
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '0',
    height: '0',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.5)',
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.6s, height 0.6s',
    pointerEvents: 'none',
  },

  '&:active::after': {
    width: '200px',
    height: '200px',
    transition: 'width 0.1s, height 0.1s',
  },

  // Keyframe animation for loading spinner
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  loading = false, 
  variant = 'contained',
  size = 'medium',
  disabled,
  ...props 
}) => {
  return (
    <StyledButton
      variant={variant as any}
      size={size}
      loading={loading}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? '' : children}
    </StyledButton>
  );
};

export default Button;
