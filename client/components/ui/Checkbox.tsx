import React from 'react';
import MuiCheckbox from '@mui/material/Checkbox';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import MuiFormControl from '@mui/material/FormControl';
import MuiFormGroup from '@mui/material/FormGroup';
import MuiFormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';
import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';

// Extended interface with custom props
export interface CheckboxProps extends Omit<MuiCheckboxProps, 'size'> {
  variant?: 'default' | 'rounded' | 'ghost' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  helperText?: string;
  state?: 'default' | 'success' | 'warning' | 'error';
}

// HEAVILY TRANSFORMED Checkbox with design tokens
const StyledCheckbox = styled(MuiCheckbox, {
  shouldForwardProp: (prop) => !['variant', 'state'].includes(prop),
})<CheckboxProps>(({ theme, variant = 'default', size = 'medium', state = 'default' }) => ({
  // Base styling
  fontFamily: 'var(--font-family-sans)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  // Size variations
  ...(size === 'small' && {
    padding: 'var(--spacing-1)',
    '& .MuiSvgIcon-root': {
      fontSize: '1.25rem',
    },
  }),
  ...(size === 'medium' && {
    padding: 'var(--spacing-2)',
    '& .MuiSvgIcon-root': {
      fontSize: '1.5rem',
    },
  }),
  ...(size === 'large' && {
    padding: 'var(--spacing-3)',
    '& .MuiSvgIcon-root': {
      fontSize: '1.75rem',
    },
  }),

  // Enhanced hover and focus states
  '&:hover': {
    backgroundColor: 'transparent',
    transform: 'scale(1.05)',
  },
  
  '&:active': {
    transform: 'scale(0.95)',
  },
  
  '&:focus': {
    outline: 'none',
  },

  // Base checkbox styling
  '& .MuiSvgIcon-root': {
    borderRadius: 'var(--radius-base)',
    transition: 'all var(--duration-fast) var(--ease-out)',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
  },

  // Variant-specific styling
  ...(variant === 'default' && {
    color: 'var(--color-gray-400)',
    
    '&:hover': {
      color: 'var(--color-primary-500)',
    },
    
    '&.Mui-checked': {
      color: 'var(--color-primary-500)',
      
      '& .MuiSvgIcon-root': {
        filter: 'drop-shadow(0 4px 8px rgba(139, 92, 246, 0.3))',
      },
    },
    
    '&.Mui-focusVisible': {
      '& .MuiSvgIcon-root': {
        boxShadow: '0 0 0 3px var(--color-primary-200)',
      },
    },
  }),

  ...(variant === 'rounded' && {
    color: 'var(--color-gray-400)',
    
    '& .MuiSvgIcon-root': {
      borderRadius: 'var(--radius-full)',
    },
    
    '&:hover': {
      color: 'var(--color-primary-500)',
    },
    
    '&.Mui-checked': {
      color: 'var(--color-primary-500)',
      
      '& .MuiSvgIcon-root': {
        filter: 'drop-shadow(0 4px 8px rgba(139, 92, 246, 0.3))',
      },
    },
    
    '&.Mui-focusVisible': {
      '& .MuiSvgIcon-root': {
        boxShadow: '0 0 0 3px var(--color-primary-200)',
        borderRadius: 'var(--radius-full)',
      },
    },
  }),


  ...(variant === 'ghost' && {
    color: 'var(--color-gray-400)',
    
    '&:hover': {
      color: 'var(--color-primary-500)',
    },
    
    '&.Mui-checked': {
      background: 'rgba(139, 92, 246, 0.1)',
      backdropFilter: 'blur(16px)',
      borderRadius: 'var(--radius-base)',
      border: '1px solid rgba(139, 92, 246, 0.3)',
      color: 'var(--color-primary-600)',
      
      '& .MuiSvgIcon-root': {
        filter: 'drop-shadow(0 4px 8px rgba(139, 92, 246, 0.3))',
      },
      
      '&:hover': {
        background: 'rgba(139, 92, 246, 0.15)',
        borderColor: 'rgba(139, 92, 246, 0.4)',
      },
    },
    
    '&.Mui-focusVisible': {
      '& .MuiSvgIcon-root': {
        boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.2)',
      },
    },
  }),

  ...(variant === 'success' && {
    color: 'var(--color-gray-400)',
    
    '&:hover': {
      color: 'var(--color-success-500)',
    },
    
    '&.Mui-checked': {
      color: 'var(--color-success-500)',
      
      '& .MuiSvgIcon-root': {
        filter: 'drop-shadow(0 4px 8px rgba(34, 197, 94, 0.3))',
      },
    },
    
    '&.Mui-focusVisible': {
      '& .MuiSvgIcon-root': {
        boxShadow: '0 0 0 3px var(--color-success-200)',
      },
    },
  }),

  ...(variant === 'warning' && {
    color: 'var(--color-gray-400)',
    
    '&:hover': {
      color: 'var(--color-warning-500)',
    },
    
    '&.Mui-checked': {
      color: 'var(--color-warning-500)',
      
      '& .MuiSvgIcon-root': {
        filter: 'drop-shadow(0 4px 8px rgba(245, 158, 11, 0.3))',
      },
    },
    
    '&.Mui-focusVisible': {
      '& .MuiSvgIcon-root': {
        boxShadow: '0 0 0 3px var(--color-warning-200)',
      },
    },
  }),

  ...(variant === 'error' && {
    color: 'var(--color-gray-400)',
    
    '&:hover': {
      color: 'var(--color-error-500)',
    },
    
    '&.Mui-checked': {
      color: 'var(--color-error-500)',
      
      '& .MuiSvgIcon-root': {
        filter: 'drop-shadow(0 4px 8px rgba(239, 68, 68, 0.3))',
      },
    },
    
    '&.Mui-focusVisible': {
      '& .MuiSvgIcon-root': {
        boxShadow: '0 0 0 3px var(--color-error-200)',
      },
    },
  }),

  // State-specific styling (overrides variant when specified)
  ...(state === 'success' && {
    '&.Mui-checked': {
      color: 'var(--color-success-500)',
    },
  }),

  ...(state === 'warning' && {
    '&.Mui-checked': {
      color: 'var(--color-warning-500)',
    },
  }),

  ...(state === 'error' && {
    '&.Mui-checked': {
      color: 'var(--color-error-500)',
    },
  }),

  // Disabled state
  '&.Mui-disabled': {
    color: 'var(--color-text-disabled)',
    opacity: 0.6,
    
    '&:hover': {
      transform: 'none',
    },
  },

  // Enhanced ripple effect
  '& .MuiTouchRipple-root': {
    color: 'var(--color-primary-300)',
  },
}));

// Styled FormControlLabel with design tokens
const StyledFormControlLabel = styled(MuiFormControlLabel)({
  fontFamily: 'var(--font-family-sans)',
  margin: 0,
  
  '& .MuiFormControlLabel-label': {
    fontFamily: 'var(--font-family-sans)',
    fontSize: 'var(--font-size-base)',
    fontWeight: 'var(--font-weight-normal)',
    color: 'var(--color-text-primary)',
    marginLeft: 'var(--spacing-2)',
    
    '&.Mui-disabled': {
      color: 'var(--color-text-disabled)',
    },
  },
});

// Styled FormControl wrapper
const StyledFormControl = styled(MuiFormControl)({
  fontFamily: 'var(--font-family-sans)',
  
  '& .MuiFormHelperText-root': {
    fontFamily: 'var(--font-family-sans)',
    fontSize: 'var(--font-size-sm)',
    marginTop: 'var(--spacing-1)',
    marginLeft: 'var(--spacing-1)',
  },
});

export const Checkbox: React.FC<CheckboxProps> = ({ 
  variant = 'default',
  size = 'medium',
  state = 'default',
  label,
  helperText,
  error,
  ...props 
}) => {
  const checkboxElement = (
    <StyledCheckbox
      variant={variant}
      size={size}
      state={state}
      {...props}
    />
  );

  // If no label, return just the checkbox
  if (!label && !helperText) {
    return checkboxElement;
  }

  // Return with FormControl wrapper for labels and helper text
  return (
    <StyledFormControl error={error || state === 'error'}>
      <MuiFormGroup>
        <StyledFormControlLabel
          control={checkboxElement}
          label={label}
        />
      </MuiFormGroup>
      {helperText && (
        <MuiFormHelperText>{helperText}</MuiFormHelperText>
      )}
    </StyledFormControl>
  );
};

export default Checkbox;
