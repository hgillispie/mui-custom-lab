import React from 'react';
import MuiBox from '@mui/material/Box';
import MuiList from '@mui/material/List';
import MuiListItem from '@mui/material/ListItem';
import MuiListItemButton from '@mui/material/ListItemButton';
import MuiListItemIcon from '@mui/material/ListItemIcon';
import MuiListItemText from '@mui/material/ListItemText';
import MuiDivider from '@mui/material/Divider';
import MuiIconButton from '@mui/material/IconButton';
import MuiTypography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { 
  Home as HomeIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Dashboard as DashboardIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon
} from '@mui/icons-material';

export interface DrawerProps {
  variant?: 'contained' | 'outlined' | 'minimal' | 'gradient' | 'glass';
  size?: 'compact' | 'standard' | 'wide';
  showHeader?: boolean;
  showFooter?: boolean;
  title?: string;
  menuItems?: Array<{
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    active?: boolean;
    divider?: boolean;
  }>;
}

// HEAVILY TRANSFORMED Drawer as a contained component with design tokens
const StyledDrawer = styled(MuiBox, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<DrawerProps>(({ theme, variant = 'contained', size = 'standard' }) => ({
  fontFamily: 'var(--font-family-sans)',
  display: 'flex',
  flexDirection: 'column',
  height: '400px', // Fixed height for ComponentViewer
  borderRadius: 'var(--radius-lg)',
  overflow: 'hidden',
  transition: 'all var(--duration-fast) var(--ease-out)',
  border: '1px solid var(--color-border-default)',
  
  // Size variations for drawer width
  ...(size === 'compact' && {
    width: '240px',
  }),
  
  ...(size === 'standard' && {
    width: '280px',
  }),
  
  ...(size === 'wide' && {
    width: '320px',
  }),

  // Enhanced hover effect
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-lg)',
  },

  // Variant-specific styling
  ...(variant === 'contained' && {
    backgroundColor: 'var(--color-bg-elevated)',
    color: 'var(--color-text-primary)',
    boxShadow: 'var(--shadow-md)',
  }),

  ...(variant === 'outlined' && {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-text-primary)',
    border: '2px solid var(--color-primary-200)',
    '&:hover': {
      borderColor: 'var(--color-primary-300)',
    },
  }),

  ...(variant === 'minimal' && {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-text-primary)',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--color-border-subtle)',
  }),

  ...(variant === 'gradient' && {
    background: 'linear-gradient(135deg, var(--color-primary-300), var(--color-primary-700))',
    color: 'var(--color-white)',
    border: 'none',
    
    '& .drawer-header': {
      borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    },
    
    '& .drawer-footer': {
      borderTopColor: 'rgba(255, 255, 255, 0.2)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  }),

  ...(variant === 'glass' && {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: 'var(--color-text-primary)',
    
    '& .drawer-header': {
      borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    },
    
    '& .drawer-footer': {
      borderTopColor: 'rgba(255, 255, 255, 0.2)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  }),
}));

// Styled Header area
const StyledHeader = styled(MuiBox)(({ theme }) => ({
  padding: 'var(--spacing-4)',
  borderBottom: '1px solid var(--color-border-subtle)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'rgba(0, 0, 0, 0.02)',
  
  '& .header-title': {
    fontFamily: 'var(--font-family-sans)',
    fontWeight: 'var(--font-weight-semibold)',
    fontSize: 'var(--font-size-lg)',
    color: 'inherit',
  },
  
  '& .menu-button': {
    borderRadius: 'var(--radius-md)',
    transition: 'all var(--duration-fast) var(--ease-out)',
    color: 'inherit',
    
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      transform: 'scale(1.05)',
    },
  },
}));

// Styled Content area
const StyledContent = styled(MuiBox)({
  flex: 1,
  overflow: 'auto',
  padding: 'var(--spacing-1) 0',
});

// Styled Footer area
const StyledFooter = styled(MuiBox)(({ theme }) => ({
  padding: 'var(--spacing-3)',
  borderTop: '1px solid var(--color-border-subtle)',
  backgroundColor: 'rgba(0, 0, 0, 0.02)',
  
  '& .footer-text': {
    fontFamily: 'var(--font-family-sans)',
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-secondary)',
    textAlign: 'center',
  },
}));

// Styled List for menu items
const StyledList = styled(MuiList)({
  padding: 'var(--spacing-2)',
  
  '& .MuiListItem-root': {
    padding: 0,
    marginBottom: 'var(--spacing-1)',
  },
});

// Styled List Item Button
const StyledListItemButton = styled(MuiListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ active }) => ({
  borderRadius: 'var(--radius-md)',
  padding: 'var(--spacing-2-5) var(--spacing-3)',
  margin: '0 var(--spacing-2)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  fontFamily: 'var(--font-family-sans)',
  
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    transform: 'translateX(4px)',
  },
  
  ...(active && {
    backgroundColor: 'var(--color-primary-100)',
    color: 'var(--color-primary-700)',
    
    '&:hover': {
      backgroundColor: 'var(--color-primary-200)',
    },
    
    '& .MuiListItemIcon-root': {
      color: 'var(--color-primary-600)',
    },
  }),
  
  '& .MuiListItemIcon-root': {
    minWidth: '36px',
    color: 'inherit',
    opacity: 0.8,
    transition: 'all var(--duration-fast) var(--ease-out)',
  },
  
  '& .MuiListItemText-root': {
    '& .MuiListItemText-primary': {
      fontFamily: 'var(--font-family-sans)',
      fontWeight: 'var(--font-weight-medium)',
      fontSize: 'var(--font-size-sm)',
      color: 'inherit',
    },
  },
}));

// Styled Divider
const StyledDivider = styled(MuiDivider)({
  margin: 'var(--spacing-2) var(--spacing-3)',
  backgroundColor: 'var(--color-border-subtle)',
  opacity: 0.5,
});

// Default menu items for demonstration
const defaultMenuItems = [
  { 
    label: 'Dashboard', 
    icon: <DashboardIcon fontSize="small" />, 
    active: true 
  },
  { 
    label: 'Home', 
    icon: <HomeIcon fontSize="small" /> 
  },
  { 
    label: 'Profile', 
    icon: <PersonIcon fontSize="small" /> 
  },
  { 
    label: 'Settings', 
    icon: <SettingsIcon fontSize="small" />, 
    divider: true 
  },
  { 
    label: 'Logout', 
    icon: <LogoutIcon fontSize="small" /> 
  },
];

export const Drawer: React.FC<DrawerProps> = ({ 
  variant = 'contained',
  size = 'standard',
  showHeader = true,
  showFooter = true,
  title = 'Navigation',
  menuItems = defaultMenuItems,
  ...props 
}) => {
  const renderHeader = () => {
    if (!showHeader) return null;
    
    return (
      <StyledHeader className="drawer-header">
        <MuiTypography className="header-title">
          {title}
        </MuiTypography>
        <MuiIconButton
          className="menu-button"
          size="small"
        >
          <MenuIcon fontSize="small" />
        </MuiIconButton>
      </StyledHeader>
    );
  };

  const renderMenuItems = () => {
    return (
      <StyledList>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <MuiListItem disablePadding>
              <StyledListItemButton
                active={item.active}
                onClick={item.onClick}
              >
                {item.icon && (
                  <MuiListItemIcon>
                    {item.icon}
                  </MuiListItemIcon>
                )}
                <MuiListItemText primary={item.label} />
              </StyledListItemButton>
            </MuiListItem>
            {item.divider && <StyledDivider />}
          </React.Fragment>
        ))}
      </StyledList>
    );
  };

  const renderFooter = () => {
    if (!showFooter) return null;
    
    return (
      <StyledFooter className="drawer-footer">
        <MuiTypography className="footer-text">
          © 2024 Your App
        </MuiTypography>
      </StyledFooter>
    );
  };

  return (
    <StyledDrawer
      variant={variant}
      size={size}
      {...props}
    >
      {renderHeader()}
      <StyledContent>
        {renderMenuItems()}
      </StyledContent>
      {renderFooter()}
    </StyledDrawer>
  );
};

// Export sub-components for advanced usage
export const DrawerHeader = StyledHeader;
export const DrawerContent = StyledContent;
export const DrawerFooter = StyledFooter;
export const DrawerList = StyledList;
export const DrawerListItem = StyledListItemButton;

export default Drawer;
