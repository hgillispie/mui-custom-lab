import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';
import MuiTypography from '@mui/material/Typography';
import MuiIconButton from '@mui/material/IconButton';
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

// Extended interface with custom props
export interface AppBarProps extends Omit<MuiAppBarProps, 'variant'> {
  variant?: 'default' | 'elevated' | 'ghost' | 'minimal';
  size?: 'compact' | 'standard' | 'large';
  logo?: React.ReactNode;
  title?: string;
  actions?: React.ReactNode;
  navigation?: Array<{ label: string; href?: string; onClick?: () => void; active?: boolean }>;
  mobileMenuIcon?: React.ReactNode;
  onMobileMenuClick?: () => void;
  showDemo?: boolean;
}

// HEAVILY TRANSFORMED AppBar with design tokens
const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => !['variant', 'size', 'logo', 'title', 'actions', 'navigation', 'mobileMenuIcon', 'onMobileMenuClick', 'showDemo'].includes(prop),
})<AppBarProps>(({ theme, variant = 'default', size = 'standard' }) => ({
  // Base styling
  fontFamily: 'var(--font-family-sans)',
  boxShadow: 'none',
  borderBottom: '1px solid var(--color-border-subtle)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  // Size variations
  ...(size === 'compact' && {
    '& .MuiToolbar-root': {
      minHeight: '56px',
      padding: '0 var(--spacing-4)',
    },
  }),
  
  ...(size === 'standard' && {
    '& .MuiToolbar-root': {
      minHeight: '64px',
      padding: '0 var(--spacing-6)',
    },
  }),
  
  ...(size === 'large' && {
    '& .MuiToolbar-root': {
      minHeight: '80px',
      padding: '0 var(--spacing-8)',
    },
  }),

  // Variant-specific styling
  ...(variant === 'default' && {
    backgroundColor: 'var(--color-bg-elevated)',
    color: 'var(--color-text-primary)',
    
    '&:hover': {
      backgroundColor: 'var(--color-bg-elevated)',
      boxShadow: 'var(--shadow-sm)',
    },
  }),

  ...(variant === 'elevated' && {
    backgroundColor: 'var(--color-bg-elevated)',
    color: 'var(--color-text-primary)',
    boxShadow: 'var(--shadow-md)',
    borderBottom: 'none',
    
    '&:hover': {
      boxShadow: 'var(--shadow-lg)',
      transform: 'translateY(-1px)',
    },
  }),


  ...(variant === 'ghost' && {
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    color: 'var(--color-text-primary)',
    
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.9)',
      borderBottom: '1px solid rgba(139, 92, 246, 0.3)',
    },
  }),

  ...(variant === 'minimal' && {
    backgroundColor: 'transparent',
    color: 'var(--color-text-primary)',
    borderBottom: 'none',
    
    '&:hover': {
      backgroundColor: 'var(--color-bg-secondary)',
    },
  }),
}));

// Styled Toolbar with consistent spacing
const StyledToolbar = styled(MuiToolbar)({
  fontFamily: 'var(--font-family-sans)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 'var(--spacing-4)',
});

// Styled Navigation Button
const StyledNavButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ active }) => ({
  fontFamily: 'var(--font-family-sans)',
  textTransform: 'none',
  fontWeight: 'var(--font-weight-medium)',
  padding: 'var(--spacing-2) var(--spacing-4)',
  borderRadius: 'var(--radius-md)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  ...(active && {
    backgroundColor: 'var(--color-primary-100)',
    color: 'var(--color-primary-700)',
    
    '&:hover': {
      backgroundColor: 'var(--color-primary-200)',
    },
  }),
  
  '&:hover': {
    backgroundColor: 'var(--color-gray-100)',
    transform: 'translateY(-1px)',
  },
}));

// Styled Logo/Brand area
const StyledBrand = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--spacing-3)',
  fontFamily: 'var(--font-family-sans)',
  
  '& .brand-logo': {
    transition: 'transform var(--duration-fast) var(--ease-out)',
    
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  
  '& .brand-title': {
    fontWeight: 'var(--font-weight-bold)',
    fontSize: 'var(--font-size-xl)',
    letterSpacing: 'var(--letter-spacing-tight)',
  },
});

// Styled Actions area
const StyledActions = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--spacing-2)',
  
  '& .MuiIconButton-root': {
    borderRadius: 'var(--radius-md)',
    transition: 'all var(--duration-fast) var(--ease-out)',
    
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: 'var(--shadow-sm)',
    },
  },
});

// Styled Navigation area
const StyledNavigation = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--spacing-1)',
  
  '@media (max-width: 768px)': {
    display: 'none',
  },
});

// Mobile menu button
const StyledMobileMenuButton = styled(MuiIconButton)({
  display: 'none',
  
  '@media (max-width: 768px)': {
    display: 'flex',
  },
  
  borderRadius: 'var(--radius-md)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: 'var(--color-gray-100)',
  },
});

export const AppBar: React.FC<AppBarProps> = ({ 
  variant = 'default',
  size = 'standard',
  logo,
  title,
  actions,
  navigation = [],
  mobileMenuIcon,
  onMobileMenuClick,
  children,
  ...props 
}) => {
  return (
    <StyledAppBar
      position="sticky"
      variant={variant}
      size={size}
      {...props}
    >
      <StyledToolbar>
        {/* Brand/Logo Section */}
        <StyledBrand>
          {mobileMenuIcon && (
            <StyledMobileMenuButton
              edge="start"
              onClick={onMobileMenuClick}
              aria-label="menu"
            >
              {mobileMenuIcon}
            </StyledMobileMenuButton>
          )}
          
          {logo && (
            <div className="brand-logo">
              {logo}
            </div>
          )}
          
          {title && (
            <MuiTypography 
              variant="h6" 
              component="h1" 
              className="brand-title"
            >
              {title}
            </MuiTypography>
          )}
        </StyledBrand>

        {/* Navigation Section */}
        {navigation.length > 0 && (
          <StyledNavigation>
            {navigation.map((item, index) => (
              <StyledNavButton
                key={index}
                active={item.active}
                href={item.href}
                onClick={item.onClick}
              >
                {item.label}
              </StyledNavButton>
            ))}
          </StyledNavigation>
        )}

        {/* Custom Children Content */}
        {children}

        {/* Actions Section */}
        {actions && (
          <StyledActions>
            {actions}
          </StyledActions>
        )}
      </StyledToolbar>
    </StyledAppBar>
  );
};

// Export sub-components for advanced usage
export const AppBarToolbar = StyledToolbar;
export const AppBarBrand = StyledBrand;
export const AppBarNavigation = StyledNavigation;
export const AppBarActions = StyledActions;

export default AppBar;
