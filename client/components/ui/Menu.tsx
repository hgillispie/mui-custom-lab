import React, { useState } from 'react';
import MuiMenu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiMenuList from '@mui/material/MenuList';
import MuiListItemIcon from '@mui/material/ListItemIcon';
import MuiListItemText from '@mui/material/ListItemText';
import MuiDivider from '@mui/material/Divider';
import MuiBox from '@mui/material/Box';
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { 
  Settings as SettingsIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Share as ShareIcon,
  Download as DownloadIcon,
  Star as StarIcon,
  MoreVert as MoreVertIcon
} from '@mui/icons-material';

export interface MenuProps {
  variant?: 'contained' | 'outlined' | 'minimal' | 'gradient' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  menuItems?: Array<{
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    divider?: boolean;
  }>;
  anchorOrigin?: {
    vertical: 'top' | 'center' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  transformOrigin?: {
    vertical: 'top' | 'center' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  buttonText?: string;
  showDemo?: boolean;
}

// HEAVILY TRANSFORMED Menu container for ComponentViewer
const StyledMenuContainer = styled(MuiBox, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<MenuProps>(({ theme, variant = 'contained', size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 'var(--spacing-4)',
  padding: 'var(--spacing-6)',
  borderRadius: 'var(--radius-lg)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  // Size variations
  ...(size === 'small' && {
    minWidth: '200px',
    padding: 'var(--spacing-4)',
  }),
  
  ...(size === 'medium' && {
    minWidth: '250px',
    padding: 'var(--spacing-6)',
  }),
  
  ...(size === 'large' && {
    minWidth: '300px',
    padding: 'var(--spacing-8)',
  }),

  // Variant-specific container styling
  ...(variant === 'contained' && {
    backgroundColor: 'var(--color-bg-elevated)',
    border: '1px solid var(--color-border-default)',
    boxShadow: 'var(--shadow-lg)',
  }),

  ...(variant === 'outlined' && {
    backgroundColor: 'var(--color-white)',
    border: '2px solid var(--color-primary-200)',
    boxShadow: 'var(--shadow-md)',
  }),

  ...(variant === 'minimal' && {
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-border-subtle)',
    boxShadow: 'var(--shadow-sm)',
  }),

  ...(variant === 'gradient' && {
    background: 'linear-gradient(135deg, var(--color-primary-300), var(--color-primary-700))',
    border: 'none',
    boxShadow: 'var(--shadow-xl)',
    color: 'var(--color-white)',
  }),

  ...(variant === 'ghost' && {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: 'var(--shadow-lg)',
  }),
}));

// HEAVILY TRANSFORMED Menu with design tokens
const StyledMenu = styled(MuiMenu, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<MenuProps>(({ theme, variant = 'contained', size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  
  '& .MuiPaper-root': {
    borderRadius: 'var(--radius-lg)',
    border: 'none',
    boxShadow: 'var(--shadow-xl)',
    overflow: 'hidden',
    transition: 'all var(--duration-fast) var(--ease-out)',
    
    // Size variations
    ...(size === 'small' && {
      minWidth: '180px',
    }),
    
    ...(size === 'medium' && {
      minWidth: '220px',
    }),
    
    ...(size === 'large' && {
      minWidth: '280px',
    }),

    // Variant-specific menu styling
    ...(variant === 'contained' && {
      backgroundColor: 'var(--color-bg-elevated)',
      border: '1px solid var(--color-border-default)',
    }),

    ...(variant === 'outlined' && {
      backgroundColor: 'var(--color-white)',
      border: '2px solid var(--color-primary-200)',
    }),

    ...(variant === 'minimal' && {
      backgroundColor: 'var(--color-white)',
      border: '1px solid var(--color-border-subtle)',
      boxShadow: 'var(--shadow-md)',
    }),

    ...(variant === 'gradient' && {
      background: 'linear-gradient(135deg, var(--color-primary-300), var(--color-primary-700))',
      color: 'var(--color-white)',
    }),

    ...(variant === 'ghost' && {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    }),
  },
  
  '& .MuiList-root': {
    padding: 'var(--spacing-2)',
  },
}));

// HEAVILY TRANSFORMED MenuItem with design tokens
const StyledMenuItem = styled(MuiMenuItem, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<MenuProps>(({ theme, variant = 'contained', size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  borderRadius: 'var(--radius-md)',
  margin: '0 var(--spacing-1)',
  marginBottom: 'var(--spacing-1)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  // Size variations
  ...(size === 'small' && {
    padding: 'var(--spacing-2) var(--spacing-3)',
    fontSize: 'var(--font-size-sm)',
    minHeight: '32px',
  }),
  
  ...(size === 'medium' && {
    padding: 'var(--spacing-2-5) var(--spacing-3)',
    fontSize: 'var(--font-size-base)',
    minHeight: '40px',
  }),
  
  ...(size === 'large' && {
    padding: 'var(--spacing-3) var(--spacing-4)',
    fontSize: 'var(--font-size-lg)',
    minHeight: '48px',
  }),

  // Base hover effects
  '&:hover': {
    transform: 'translateX(4px)',
    boxShadow: 'var(--shadow-md)',
  },

  '&:active': {
    transform: 'translateX(2px) scale(0.98)',
  },

  // Disabled state
  '&.Mui-disabled': {
    opacity: 0.5,
    transform: 'none',
    '&:hover': {
      transform: 'none',
      boxShadow: 'none',
    },
  },

  // Icon styling
  '& .MuiListItemIcon-root': {
    minWidth: '36px',
    color: 'var(--color-text-secondary)',
    transition: 'color var(--duration-fast) var(--ease-out)',
  },

  // Text styling
  '& .MuiListItemText-root': {
    '& .MuiListItemText-primary': {
      fontFamily: 'var(--font-family-sans)',
      fontWeight: 'var(--font-weight-medium)',
    },
  },

  // Variant-specific item styling
  ...(variant === 'contained' && {
    color: 'var(--color-text-primary)',
    '&:hover': {
      backgroundColor: 'var(--color-gray-100)',
    },
  }),

  ...(variant === 'outlined' && {
    color: 'var(--color-text-primary)',
    '&:hover': {
      backgroundColor: 'var(--color-primary-50)',
      borderColor: 'var(--color-primary-200)',
    },
  }),

  ...(variant === 'minimal' && {
    color: 'var(--color-text-primary)',
    '&:hover': {
      backgroundColor: 'var(--color-gray-50)',
    },
  }),

  ...(variant === 'gradient' && {
    color: 'var(--color-white)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    '& .MuiListItemIcon-root': {
      color: 'var(--color-white)',
    },
  }),

  ...(variant === 'ghost' && {
    color: 'var(--color-text-primary)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  }),
}));

// HEAVILY TRANSFORMED Button for menu trigger
const StyledTriggerButton = styled(MuiButton, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<MenuProps>(({ theme, variant = 'contained', size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  textTransform: 'none',
  fontWeight: 'var(--font-weight-medium)',
  borderRadius: 'var(--radius-button)',
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

  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-lg)',
  },

  // Variant-specific trigger styling
  ...(variant === 'contained' && {
    background: 'linear-gradient(135deg, var(--color-primary-500), var(--color-primary-600))',
    color: 'var(--color-white)',
    border: 'none',
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
    },
  }),

  ...(variant === 'minimal' && {
    backgroundColor: 'var(--color-gray-100)',
    color: 'var(--color-text-primary)',
    border: '1px solid var(--color-border-default)',
    '&:hover': {
      backgroundColor: 'var(--color-gray-200)',
    },
  }),

  ...(variant === 'gradient' && {
    background: 'linear-gradient(135deg, var(--color-primary-300), var(--color-primary-700))',
    color: 'var(--color-white)',
    border: 'none',
    '&:hover': {
      background: 'linear-gradient(135deg, var(--color-primary-500), var(--color-primary-800))',
      boxShadow: '0 8px 25px rgba(139, 92, 246, 0.4)',
    },
  }),

  ...(variant === 'ghost' && {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    color: 'var(--color-text-primary)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  }),
}));

// Styled Divider
const StyledDivider = styled(MuiDivider)({
  margin: 'var(--spacing-1) var(--spacing-2)',
  backgroundColor: 'var(--color-border-subtle)',
  opacity: 0.6,
});

// Default menu items for demonstration
const defaultMenuItems = [
  {
    label: 'Profile',
    icon: <PersonIcon fontSize="small" />
  },
  {
    label: 'Settings',
    icon: <SettingsIcon fontSize="small" />
  },
  {
    label: 'Edit',
    icon: <EditIcon fontSize="small" />,
    divider: true
  },
  {
    label: 'Share',
    icon: <ShareIcon fontSize="small" />
  },
  {
    label: 'Download',
    icon: <DownloadIcon fontSize="small" />
  },
  {
    label: 'Favorite',
    icon: <StarIcon fontSize="small" />,
    divider: true
  },
  {
    label: 'Delete',
    icon: <DeleteIcon fontSize="small" />
  },
  {
    label: 'Logout',
    icon: <LogoutIcon fontSize="small" />
  },
];

export const Menu: React.FC<MenuProps> = ({ 
  variant = 'contained',
  size = 'medium',
  menuItems = defaultMenuItems,
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  transformOrigin = { vertical: 'top', horizontal: 'left' },
  buttonText = 'Open Menu',
  showDemo = true,
  ...props 
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (item: any) => {
    if (item.onClick && !item.disabled) {
      item.onClick();
    }
    handleClose();
  };

  // For ComponentViewer - show the menu statically
  if (!showDemo) {
    return (
      <StyledMenuContainer variant={variant} size={size}>
        <MuiMenuList>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <StyledMenuItem
                variant={variant}
                size={size}
                disabled={item.disabled}
                onClick={() => handleItemClick(item)}
              >
                {item.icon && (
                  <MuiListItemIcon>
                    {item.icon}
                  </MuiListItemIcon>
                )}
                <MuiListItemText primary={item.label} />
              </StyledMenuItem>
              {item.divider && <StyledDivider />}
            </React.Fragment>
          ))}
        </MuiMenuList>
      </StyledMenuContainer>
    );
  }

  // For interactive demo
  return (
    <div>
      <StyledTriggerButton
        variant={variant}
        size={size}
        onClick={handleClick}
        endIcon={<MoreVertIcon />}
      >
        {buttonText}
      </StyledTriggerButton>
      <StyledMenu
        variant={variant}
        size={size}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        {...props}
      >
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <StyledMenuItem
              variant={variant}
              size={size}
              disabled={item.disabled}
              onClick={() => handleItemClick(item)}
            >
              {item.icon && (
                <MuiListItemIcon>
                  {item.icon}
                </MuiListItemIcon>
              )}
              <MuiListItemText primary={item.label} />
            </StyledMenuItem>
            {item.divider && <StyledDivider />}
          </React.Fragment>
        ))}
      </StyledMenu>
    </div>
  );
};

// Export sub-components for advanced usage
export const MenuItem = StyledMenuItem;
export const MenuList = MuiMenuList;
export const MenuDivider = StyledDivider;

export default Menu;
