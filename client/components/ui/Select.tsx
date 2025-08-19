import React from 'react';
import MuiSelect from '@mui/material/Select';
import MuiFormControl from '@mui/material/FormControl';
import MuiInputLabel from '@mui/material/InputLabel';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiFormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';
import { SelectProps as MuiSelectProps } from '@mui/material/Select';

// Extended interface with custom props
export interface SelectProps extends Omit<MuiSelectProps, 'variant'> {
  variant?: 'outlined' | 'filled' | 'standard' | 'gradient' | 'glass';
  size?: 'small' | 'medium' | 'large';
  state?: 'default' | 'success' | 'warning' | 'error';
  label?: string;
  helperText?: string;
  options?: Array<{ value: string | number; label: string; disabled?: boolean }>;
}

// HEAVILY TRANSFORMED Select with design tokens
const StyledFormControl = styled(MuiFormControl, {
  shouldForwardProp: (prop) => !['state', 'variant'].includes(prop),
})<SelectProps>(({ theme, variant = 'outlined', size = 'medium', state = 'default' }) => ({
  // Base styling with Figtree font
  fontFamily: 'var(--font-family-sans)',
  
  // Size variations
  ...(size === 'small' && {
    minWidth: '120px',
    '& .MuiInputBase-root': {
      fontSize: 'var(--font-size-sm)',
      minHeight: '36px',
    },
    '& .MuiInputLabel-root': {
      fontSize: 'var(--font-size-sm)',
    },
  }),
  ...(size === 'medium' && {
    minWidth: '160px',
    '& .MuiInputBase-root': {
      fontSize: 'var(--font-size-base)',
      minHeight: '44px',
    },
    '& .MuiInputLabel-root': {
      fontSize: 'var(--font-size-base)',
    },
  }),
  ...(size === 'large' && {
    minWidth: '200px',
    '& .MuiInputBase-root': {
      fontSize: 'var(--font-size-lg)',
      minHeight: '52px',
    },
    '& .MuiInputLabel-root': {
      fontSize: 'var(--font-size-lg)',
    },
  }),

  // Base input styling
  '& .MuiInputBase-root': {
    fontFamily: 'var(--font-family-sans)',
    borderRadius: 'var(--radius-input)',
    transition: 'all var(--duration-fast) var(--ease-out)',
    cursor: 'pointer',
    
    '&:hover': {
      transform: 'translateY(-1px)',
    },
    
    '&.Mui-focused': {
      transform: 'translateY(-2px)',
      boxShadow: 'var(--shadow-md)',
    },
  },

  // Select field styling
  '& .MuiSelect-select': {
    fontFamily: 'var(--font-family-sans)',
    fontWeight: 'var(--font-weight-normal)',
    padding: 'var(--spacing-3) var(--spacing-4)',
    
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },

  // Label styling
  '& .MuiInputLabel-root': {
    fontFamily: 'var(--font-family-sans)',
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--color-text-secondary)',
    
    '&.Mui-focused': {
      color: 'var(--color-primary-600)',
      fontWeight: 'var(--font-weight-semibold)',
    },
    
    '&.Mui-error': {
      color: 'var(--color-error-600)',
    },
  },

  // Helper text styling
  '& .MuiFormHelperText-root': {
    fontFamily: 'var(--font-family-sans)',
    fontSize: 'var(--font-size-sm)',
    marginTop: 'var(--spacing-1)',
    marginLeft: 'var(--spacing-1)',
  },

  // Dropdown icon styling
  '& .MuiSelect-icon': {
    color: 'var(--color-text-secondary)',
    fontSize: '1.5rem',
    transition: 'all var(--duration-fast) var(--ease-out)',
  },

  '& .MuiSelect-iconOpen': {
    transform: 'rotate(180deg)',
  },

  // Outlined variant specific styling
  ...(variant === 'outlined' && {
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'var(--color-bg-elevated)',
      
      '& fieldset': {
        borderColor: 'var(--color-border-default)',
        borderWidth: '2px',
        transition: 'all var(--duration-fast) var(--ease-out)',
      },
      
      '&:hover fieldset': {
        borderColor: 'var(--color-primary-400)',
        boxShadow: '0 0 0 1px var(--color-primary-200)',
      },
      
      '&.Mui-focused fieldset': {
        borderColor: 'var(--color-primary-500)',
        borderWidth: '2px',
        boxShadow: '0 0 0 3px var(--color-primary-200)',
      },
      
      '&.Mui-error fieldset': {
        borderColor: 'var(--color-error-500)',
      },
      
      '&.Mui-error:hover fieldset': {
        borderColor: 'var(--color-error-600)',
        boxShadow: '0 0 0 1px var(--color-error-200)',
      },
      
      '&.Mui-error.Mui-focused fieldset': {
        borderColor: 'var(--color-error-600)',
        boxShadow: '0 0 0 3px var(--color-error-200)',
      },
    },
  }),

  // Filled variant specific styling
  ...(variant === 'filled' && {
    '& .MuiFilledInput-root': {
      backgroundColor: 'var(--color-gray-100)',
      borderRadius: 'var(--radius-input) var(--radius-input) 0 0',
      
      '&:hover': {
        backgroundColor: 'var(--color-gray-150)',
      },
      
      '&.Mui-focused': {
        backgroundColor: 'var(--color-primary-50)',
      },
      
      '&:before': {
        borderBottomColor: 'var(--color-border-default)',
        borderBottomWidth: '2px',
      },
      
      '&:hover:before': {
        borderBottomColor: 'var(--color-primary-400)',
      },
      
      '&:after': {
        borderBottomColor: 'var(--color-primary-500)',
        borderBottomWidth: '3px',
      },
    },
  }),

  // Standard variant specific styling
  ...(variant === 'standard' && {
    '& .MuiInput-root': {
      '&:before': {
        borderBottomColor: 'var(--color-border-default)',
        borderBottomWidth: '2px',
        transition: 'all var(--duration-fast) var(--ease-out)',
      },
      
      '&:hover:before': {
        borderBottomColor: 'var(--color-primary-400)',
      },
      
      '&:after': {
        borderBottomColor: 'var(--color-primary-500)',
        borderBottomWidth: '3px',
      },
      
      '&.Mui-error:before': {
        borderBottomColor: 'var(--color-error-500)',
      },
      
      '&.Mui-error:after': {
        borderBottomColor: 'var(--color-error-600)',
      },
    },
  }),

  // Gradient variant (custom) - using data attribute
  '&[data-custom-variant="gradient"]': {
    '& .MuiOutlinedInput-root': {
      background: 'linear-gradient(135deg, var(--color-primary-50), var(--color-primary-100))',
      position: 'relative',
      
      '& fieldset': {
        border: 'none',
      },
      
      '&:before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        padding: '2px',
        background: 'linear-gradient(135deg, var(--color-primary-300), var(--color-primary-700))',
        borderRadius: 'inherit',
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        maskComposite: 'xor',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        zIndex: -1,
      },
      
      '&:hover:before': {
        background: 'linear-gradient(135deg, var(--color-primary-400), var(--color-primary-600))',
      },
      
      '&.Mui-focused': {
        boxShadow: '0 0 0 3px var(--color-primary-200)',
        
        '&:before': {
          background: 'linear-gradient(135deg, var(--color-primary-500), var(--color-primary-800))',
        },
      },
    },
  },

  // Glass variant (custom) - using data attribute
  '&[data-custom-variant="glass"]': {
    '& .MuiOutlinedInput-root': {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(16px)',
      
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: '1px',
      },
      
      '&:hover fieldset': {
        borderColor: 'rgba(139, 92, 246, 0.4)',
        boxShadow: '0 0 0 1px rgba(139, 92, 246, 0.2)',
      },
      
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(139, 92, 246, 0.6)',
        boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.2)',
      },
    },
  },

  // State-specific styling
  ...(state === 'success' && {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'var(--color-success-400)',
      },
      
      '&:hover fieldset': {
        borderColor: 'var(--color-success-500)',
        boxShadow: '0 0 0 1px var(--color-success-200)',
      },
      
      '&.Mui-focused fieldset': {
        borderColor: 'var(--color-success-600)',
        boxShadow: '0 0 0 3px var(--color-success-200)',
      },
    },
    
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'var(--color-success-600)',
    },
  }),

  ...(state === 'warning' && {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'var(--color-warning-400)',
      },
      
      '&:hover fieldset': {
        borderColor: 'var(--color-warning-500)',
        boxShadow: '0 0 0 1px var(--color-warning-200)',
      },
      
      '&.Mui-focused fieldset': {
        borderColor: 'var(--color-warning-600)',
        boxShadow: '0 0 0 3px var(--color-warning-200)',
      },
    },
    
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'var(--color-warning-600)',
    },
  }),
}));

// Styled MenuItem with design tokens
const StyledMenuItem = styled(MuiMenuItem)({
  fontFamily: 'var(--font-family-sans)',
  fontSize: 'var(--font-size-base)',
  padding: 'var(--spacing-2) var(--spacing-4)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  '&:hover': {
    backgroundColor: 'var(--color-primary-50)',
    color: 'var(--color-primary-700)',
  },
  
  '&.Mui-selected': {
    backgroundColor: 'var(--color-primary-100)',
    color: 'var(--color-primary-800)',
    fontWeight: 'var(--font-weight-medium)',
    
    '&:hover': {
      backgroundColor: 'var(--color-primary-150)',
    },
  },
  
  '&.Mui-disabled': {
    color: 'var(--color-text-disabled)',
    opacity: 0.6,
  },
});

export const Select: React.FC<SelectProps> = ({ 
  variant = 'outlined',
  size = 'medium',
  state = 'default',
  label,
  helperText,
  options = [],
  error,
  children,
  ...props 
}) => {
  // Map custom variants to valid MUI variants
  const getMuiVariant = (customVariant: string) => {
    switch (customVariant) {
      case 'gradient':
      case 'glass':
        return 'outlined'; // Use outlined as base for custom variants
      default:
        return customVariant;
    }
  };

  return (
    <StyledFormControl
      variant={getMuiVariant(variant) as any}
      size={size}
      state={state}
      error={error || state === 'error'}
      // Pass custom variant as a data attribute for styling
      data-custom-variant={variant}
      fullWidth
    >
      {label && (
        <MuiInputLabel id={`select-label-${label}`}>
          {label}
        </MuiInputLabel>
      )}
      <MuiSelect
        labelId={`select-label-${label}`}
        id={`select-${label}`}
        label={label}
        {...props}
      >
        {options.length > 0 
          ? options.map((option) => (
              <StyledMenuItem 
                key={option.value} 
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </StyledMenuItem>
            ))
          : children
        }
      </MuiSelect>
      {helperText && (
        <MuiFormHelperText>{helperText}</MuiFormHelperText>
      )}
    </StyledFormControl>
  );
};

export default Select;
