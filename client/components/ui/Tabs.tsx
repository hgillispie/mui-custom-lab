import React, { useState } from 'react';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
import { TabProps as MuiTabProps } from '@mui/material/Tab';

// Extended interface with custom props
export interface TabsProps extends Omit<MuiTabsProps, 'variant'> {
  variant?: 'default' | 'outlined' | 'ghost' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  tabItems?: Array<{ label: string; value: string | number; disabled?: boolean; icon?: React.ReactNode }>;
  defaultValue?: string | number;
  onTabChange?: (value: string | number) => void;
}

export interface TabProps extends MuiTabProps {
  // Additional props if needed
}

// HEAVILY TRANSFORMED Tabs with design tokens
const StyledTabs = styled(MuiTabs, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<TabsProps>(({ theme, variant = 'default', size = 'medium' }) => ({
  // Base styling
  fontFamily: 'var(--font-family-sans)',
  
  // Size variations
  ...(size === 'small' && {
    minHeight: '40px',
    '& .MuiTab-root': {
      minHeight: '40px',
      fontSize: 'var(--font-size-sm)',
      padding: 'var(--spacing-2) var(--spacing-3)',
    },
  }),
  
  ...(size === 'medium' && {
    minHeight: '48px',
    '& .MuiTab-root': {
      minHeight: '48px',
      fontSize: 'var(--font-size-base)',
      padding: 'var(--spacing-3) var(--spacing-4)',
    },
  }),
  
  ...(size === 'large' && {
    minHeight: '56px',
    '& .MuiTab-root': {
      minHeight: '56px',
      fontSize: 'var(--font-size-lg)',
      padding: 'var(--spacing-4) var(--spacing-6)',
    },
  }),

  // Base tab styling
  '& .MuiTab-root': {
    fontFamily: 'var(--font-family-sans)',
    textTransform: 'none',
    fontWeight: 'var(--font-weight-medium)',
    borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
    transition: 'all var(--duration-fast) var(--ease-out)',
    margin: '0 var(--spacing-1)',
    
    '&:hover': {
      transform: 'translateY(-2px)',
      backgroundColor: 'var(--color-gray-50)',
    },
    
    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 0 3px var(--color-primary-200)',
    },
    
    '&.Mui-selected': {
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--color-primary-600)',
    },
    
    '&.Mui-disabled': {
      opacity: 0.6,
      color: 'var(--color-text-disabled)',
      
      '&:hover': {
        transform: 'none',
        backgroundColor: 'transparent',
      },
    },
  },

  // Indicator styling
  '& .MuiTabs-indicator': {
    height: '3px',
    borderRadius: 'var(--radius-full)',
    transition: 'all var(--duration-fast) var(--ease-out)',
  },

  // Variant-specific styling
  ...(variant === 'default' && {
    '& .MuiTabs-indicator': {
      backgroundColor: 'var(--color-primary-500)',
    },
    
    '& .MuiTab-root': {
      color: 'var(--color-text-secondary)',
      
      '&:hover': {
        color: 'var(--color-primary-500)',
      },
      
      '&.Mui-selected': {
        color: 'var(--color-primary-600)',
        backgroundColor: 'var(--color-primary-50)',
      },
    },
  }),

  ...(variant === 'outlined' && {
    borderBottom: '2px solid var(--color-border-default)',
    
    '& .MuiTabs-indicator': {
      backgroundColor: 'var(--color-primary-500)',
      height: '2px',
      bottom: '-2px',
    },
    
    '& .MuiTab-root': {
      color: 'var(--color-text-secondary)',
      border: '2px solid transparent',
      borderBottom: 'none',
      marginBottom: '2px',
      
      '&:hover': {
        color: 'var(--color-primary-500)',
        borderColor: 'var(--color-border-default)',
        backgroundColor: 'var(--color-gray-50)',
      },
      
      '&.Mui-selected': {
        color: 'var(--color-primary-600)',
        backgroundColor: 'var(--color-bg-elevated)',
        borderColor: 'var(--color-border-default)',
        borderBottomColor: 'var(--color-bg-elevated)',
      },
    },
  }),


  ...(variant === 'ghost' && {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: 'var(--spacing-1)',
    
    '& .MuiTabs-indicator': {
      backgroundColor: 'rgba(139, 92, 246, 0.6)',
      height: '100%',
      borderRadius: 'var(--radius-md)',
    },
    
    '& .MuiTab-root': {
      color: 'var(--color-text-secondary)',
      borderRadius: 'var(--radius-md)',
      margin: 0,
      
      '&:hover': {
        color: 'var(--color-primary-600)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
      
      '&.Mui-selected': {
        color: 'var(--color-white)',
        backgroundColor: 'transparent',
        zIndex: 1,
      },
    },
  }),

  ...(variant === 'minimal' && {
    '& .MuiTabs-indicator': {
      display: 'none',
    },
    
    '& .MuiTab-root': {
      color: 'var(--color-text-secondary)',
      borderRadius: 'var(--radius-md)',
      margin: '0 var(--spacing-1)',
      
      '&:hover': {
        color: 'var(--color-text-primary)',
        backgroundColor: 'var(--color-gray-100)',
      },
      
      '&.Mui-selected': {
        color: 'var(--color-primary-600)',
        backgroundColor: 'var(--color-primary-100)',
      },
    },
  }),
}));

// Styled TabPanel for content areas
const StyledTabPanel = styled(MuiBox)({
  fontFamily: 'var(--font-family-sans)',
  padding: 'var(--spacing-6) var(--spacing-4)',
  
  '&[hidden]': {
    display: 'none',
  },
});

// TabPanel component for content
interface TabPanelProps {
  children?: React.ReactNode;
  value: string | number;
  currentValue: string | number;
  index?: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, currentValue, index = 0 }) => {
  return (
    <StyledTabPanel
      role="tabpanel"
      hidden={value !== currentValue}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === currentValue && children}
    </StyledTabPanel>
  );
};

export const Tabs: React.FC<TabsProps> = ({ 
  variant = 'default',
  size = 'medium',
  tabItems = [],
  defaultValue,
  onTabChange,
  children,
  value: controlledValue,
  onChange,
  ...props 
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue || (tabItems.length > 0 ? tabItems[0].value : 0));
  
  const currentValue = controlledValue !== undefined ? controlledValue : internalValue;
  
  const handleChange = (event: React.SyntheticEvent, newValue: string | number) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    
    if (onChange) {
      onChange(event, newValue);
    }
    
    if (onTabChange) {
      onTabChange(newValue);
    }
  };

  return (
    <MuiBox>
      <StyledTabs
        value={currentValue}
        onChange={handleChange}
        variant={variant}
        size={size}
        {...props}
      >
        {tabItems.length > 0 ? (
          tabItems.map((item, index) => (
            <MuiTab
              key={item.value}
              label={item.label}
              value={item.value}
              disabled={item.disabled}
              icon={item.icon}
              id={`tab-${index}`}
              aria-controls={`tabpanel-${index}`}
            />
          ))
        ) : (
          children
        )}
      </StyledTabs>
    </MuiBox>
  );
};

// Export individual components for advanced usage
export const Tab = MuiTab;
export { TabPanel };

export default Tabs;
