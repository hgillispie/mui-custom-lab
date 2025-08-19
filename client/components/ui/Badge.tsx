import React from 'react';
import MuiBadge from '@mui/material/Badge';
import MuiBox from '@mui/material/Box';
import MuiIconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { BadgeProps as MuiBadgeProps } from '@mui/material/Badge';
import { 
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  ShoppingCart as ShoppingCartIcon
} from '@mui/icons-material';

export interface BadgeProps extends Omit<MuiBadgeProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  showDemo?: boolean;
}

// HEAVILY TRANSFORMED Badge with design tokens
const StyledBadge = styled(MuiBadge, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<BadgeProps>(({ theme, variant = 'contained', size = 'medium', color = 'primary' }) => ({
  fontFamily: 'var(--font-family-sans)',
  
  '& .MuiBadge-badge': {
    fontFamily: 'var(--font-family-sans)',
    fontWeight: 'var(--font-weight-medium)',
    border: 'none',
    transition: 'all var(--duration-fast) var(--ease-out)',
    
    // Size variations
    ...(size === 'small' && {
      fontSize: 'var(--font-size-xs)',
      height: '16px',
      minWidth: '16px',
      padding: '0 4px',
    }),
    
    ...(size === 'medium' && {
      fontSize: 'var(--font-size-xs)',
      height: '20px',
      minWidth: '20px',
      padding: '0 6px',
    }),
    
    ...(size === 'large' && {
      fontSize: 'var(--font-size-sm)',
      height: '24px',
      minWidth: '24px',
      padding: '0 8px',
    }),

    // Color-specific styling by variant
    ...(variant === 'contained' && {
      ...(color === 'primary' && {
        backgroundColor: 'var(--color-primary-600)',
        color: 'var(--color-white)',
      }),
      ...(color === 'secondary' && {
        backgroundColor: 'var(--color-secondary-600)',
        color: 'var(--color-white)',
      }),
      ...(color === 'error' && {
        backgroundColor: 'var(--color-error-600)',
        color: 'var(--color-white)',
      }),
      ...(color === 'success' && {
        backgroundColor: 'var(--color-success-600)',
        color: 'var(--color-white)',
      }),
      ...(color === 'warning' && {
        backgroundColor: 'var(--color-warning-600)',
        color: 'var(--color-white)',
      }),
    }),

    ...(variant === 'outlined' && {
      backgroundColor: 'var(--color-white)',
      border: '2px solid',
      ...(color === 'primary' && {
        borderColor: 'var(--color-primary-600)',
        color: 'var(--color-primary-600)',
      }),
      ...(color === 'secondary' && {
        borderColor: 'var(--color-secondary-600)',
        color: 'var(--color-secondary-600)',
      }),
      ...(color === 'error' && {
        borderColor: 'var(--color-error-600)',
        color: 'var(--color-error-600)',
      }),
      ...(color === 'success' && {
        borderColor: 'var(--color-success-600)',
        color: 'var(--color-success-600)',
      }),
      ...(color === 'warning' && {
        borderColor: 'var(--color-warning-600)',
        color: 'var(--color-warning-600)',
      }),
    }),

    ...(variant === 'minimal' && {
      ...(color === 'primary' && {
        backgroundColor: 'var(--color-primary-100)',
        color: 'var(--color-primary-700)',
      }),
      ...(color === 'secondary' && {
        backgroundColor: 'var(--color-secondary-100)',
        color: 'var(--color-secondary-700)',
      }),
      ...(color === 'error' && {
        backgroundColor: 'var(--color-error-100)',
        color: 'var(--color-error-700)',
      }),
      ...(color === 'success' && {
        backgroundColor: 'var(--color-success-100)',
        color: 'var(--color-success-700)',
      }),
      ...(color === 'warning' && {
        backgroundColor: 'var(--color-warning-100)',
        color: 'var(--color-warning-700)',
      }),
    }),

    // Animation on badge change
    '&.MuiBadge-invisible': {
      transform: 'scale(0)',
    },
  },

  // Hover effect on parent element
  '&:hover .MuiBadge-badge': {
    transform: 'scale(1.1)',
  },
}));

// Demo IconButton with design tokens
const StyledIconButton = styled(MuiIconButton)(({ theme }) => ({
  borderRadius: 'var(--radius-md)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  color: 'var(--color-text-secondary)',
  
  '&:hover': {
    backgroundColor: 'var(--color-gray-100)',
    transform: 'scale(1.05)',
  },
}));

export const Badge: React.FC<BadgeProps> = ({
  variant = 'contained',
  size = 'medium',
  children,
  badgeContent = 4,
  showDemo = true,
  color = 'primary',
  ...props
}) => {
  
  // For ComponentViewer - show different badge examples
  if (!showDemo) {
    return (
      <MuiBox display="flex" gap={3} alignItems="center" justifyContent="center">
        <StyledBadge
          variant={variant}
          size={size}
          badgeContent={badgeContent}
          color={color}
          {...props}
        >
          <StyledIconButton>
            <MailIcon />
          </StyledIconButton>
        </StyledBadge>
      </MuiBox>
    );
  }

  // For interactive demo - show different examples
  return (
    <MuiBox display="flex" gap={4} alignItems="center" justifyContent="center" flexWrap="wrap">
      <StyledBadge
        variant={variant}
        size={size}
        badgeContent={4}
        color="primary"
        {...props}
      >
        <StyledIconButton>
          <MailIcon />
        </StyledIconButton>
      </StyledBadge>

      <StyledBadge
        variant={variant}
        size={size}
        badgeContent={12}
        color="error"
        {...props}
      >
        <StyledIconButton>
          <NotificationsIcon />
        </StyledIconButton>
      </StyledBadge>

      <StyledBadge
        variant={variant}
        size={size}
        badgeContent={99}
        max={99}
        color="success"
        {...props}
      >
        <StyledIconButton>
          <ShoppingCartIcon />
        </StyledIconButton>
      </StyledBadge>

      <StyledBadge
        variant={variant}
        size={size}
        variant="dot"
        color="warning"
        {...props}
      >
        <StyledIconButton>
          <MailIcon />
        </StyledIconButton>
      </StyledBadge>
    </MuiBox>
  );
};

export default Badge;
