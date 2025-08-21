import React from 'react';
import MuiCard from '@mui/material/Card';
import MuiCardContent from '@mui/material/CardContent';
import MuiCardActions from '@mui/material/CardActions';
import MuiCardHeader from '@mui/material/CardHeader';
import { styled } from '@mui/material/styles';
import { CardProps as MuiCardProps } from '@mui/material/Card';

// Extended interface with custom props
export interface CardProps extends Omit<MuiCardProps, 'variant'> {
  variant?: 'default' | 'outlined' | 'elevated' | 'gradient' | 'ghost' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  interactive?: boolean;
}

// HEAVILY TRANSFORMED Card with design tokens
const StyledCard = styled(MuiCard, {
  shouldForwardProp: (prop) => !['variant', 'size', 'interactive'].includes(prop),
})<CardProps>(({ theme, variant = 'default', size = 'medium', interactive = false }) => ({
  // Base styling with Figtree font
  fontFamily: 'var(--font-family-sans)',
  borderRadius: 'var(--radius-card)',
  border: 'none',
  position: 'relative',
  overflow: 'hidden',
  
  // Smooth transitions for all properties
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  // Size variations
  ...(size === 'small' && {
    minHeight: '200px',
  }),
  ...(size === 'medium' && {
    minHeight: '280px',
  }),
  ...(size === 'large' && {
    minHeight: '360px',
  }),

  // Interactive behavior
  ...(interactive && {
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: 'var(--shadow-xl)',
    },
    '&:active': {
      transform: 'translateY(-2px) scale(0.98)',
    },
  }),
  
  // Focus state for interactive cards
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 3px var(--color-primary-200)',
  },

  // Variant-specific styling
  ...(variant === 'default' && {
    backgroundColor: 'var(--color-bg-elevated)',
    boxShadow: 'var(--shadow-card)',
    border: '1px solid var(--color-border-subtle)',
    '&:hover': interactive ? {
      borderColor: 'var(--color-border-default)',
      boxShadow: 'var(--shadow-lg)',
    } : {},
  }),

  ...(variant === 'outlined' && {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: '2px solid var(--color-border-default)',
    '&:hover': interactive ? {
      borderColor: 'var(--color-primary-500)',
      backgroundColor: 'var(--color-primary-25)',
    } : {},
  }),

  ...(variant === 'elevated' && {
    backgroundColor: 'var(--color-bg-elevated)',
    boxShadow: 'var(--shadow-lg)',
    border: 'none',
    '&:hover': interactive ? {
      boxShadow: 'var(--shadow-2xl)',
    } : {},
  }),

  ...(variant === 'gradient' && {
    background: 'linear-gradient(135deg, var(--color-primary-300), var(--color-primary-700))',
    color: 'var(--color-white)',
    border: 'none',
    boxShadow: '0 8px 32px rgba(139, 92, 246, 0.25)',
    '&:hover': interactive ? {
      background: 'linear-gradient(135deg, var(--color-primary-500), var(--color-primary-800))',
      boxShadow: '0 12px 40px rgba(139, 92, 246, 0.4)',
    } : {},
    '& .MuiCardContent-root': {
      color: 'inherit',
    },
    '& .MuiCardHeader-root': {
      color: 'inherit',
    },
  }),

  ...(variant === 'ghost' && {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    '&:hover': interactive ? {
      background: 'rgba(255, 255, 255, 0.15)',
      borderColor: 'rgba(255, 255, 255, 0.3)',
    } : {},
  }),

  ...(variant === 'success' && {
    backgroundColor: 'var(--color-success-50)',
    border: '1px solid var(--color-success-200)',
    '&:hover': interactive ? {
      backgroundColor: 'var(--color-success-100)',
      borderColor: 'var(--color-success-300)',
      boxShadow: '0 8px 25px rgba(34, 197, 94, 0.2)',
    } : {},
  }),

  ...(variant === 'warning' && {
    backgroundColor: 'var(--color-warning-50)',
    border: '1px solid var(--color-warning-200)',
    '&:hover': interactive ? {
      backgroundColor: 'var(--color-warning-100)',
      borderColor: 'var(--color-warning-300)',
      boxShadow: '0 8px 25px rgba(245, 158, 11, 0.2)',
    } : {},
  }),

  ...(variant === 'error' && {
    backgroundColor: 'var(--color-error-50)',
    border: '1px solid var(--color-error-200)',
    '&:hover': interactive ? {
      backgroundColor: 'var(--color-error-100)',
      borderColor: 'var(--color-error-300)',
      boxShadow: '0 8px 25px rgba(239, 68, 68, 0.2)',
    } : {},
  }),

  // Enhanced ripple effect for interactive cards
  ...(interactive && {
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '0',
      height: '0',
      borderRadius: '50%',
      background: 'rgba(139, 92, 246, 0.1)',
      transform: 'translate(-50%, -50%)',
      transition: 'width 0.6s, height 0.6s',
      pointerEvents: 'none',
    },

    '&:active::after': {
      width: '300px',
      height: '300px',
      transition: 'width 0.1s, height 0.1s',
    },
  }),
}));

// Card subcomponents with consistent styling
export const CardContent = styled(MuiCardContent)({
  fontFamily: 'var(--font-family-sans)',
  padding: 'var(--spacing-6)',
  '&:last-child': {
    paddingBottom: 'var(--spacing-6)',
  },
});

export const CardActions = styled(MuiCardActions)({
  fontFamily: 'var(--font-family-sans)',
  padding: 'var(--spacing-4) var(--spacing-6)',
  gap: 'var(--spacing-2)',
});

export const CardHeader = styled(MuiCardHeader)({
  fontFamily: 'var(--font-family-sans)',
  padding: 'var(--spacing-6) var(--spacing-6) var(--spacing-4)',
  '& .MuiCardHeader-title': {
    fontFamily: 'var(--font-family-sans)',
    fontWeight: 'var(--font-weight-semibold)',
    fontSize: 'var(--font-size-xl)',
  },
  '& .MuiCardHeader-subheader': {
    fontFamily: 'var(--font-family-sans)',
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-secondary)',
  },
});

export const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'default',
  size = 'medium',
  interactive = false,
  onClick,
  ...props 
}) => {
  return (
    <StyledCard
      variant={variant as any}
      size={size}
      interactive={interactive}
      onClick={interactive ? onClick : undefined}
      tabIndex={interactive ? 0 : undefined}
      role={interactive ? 'button' : undefined}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
