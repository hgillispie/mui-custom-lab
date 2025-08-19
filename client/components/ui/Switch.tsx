import React from 'react';
import MuiSwitch from '@mui/material/Switch';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import MuiFormHelperText from '@mui/material/FormHelperText';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';

export interface SwitchProps extends Omit<MuiSwitchProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  helperText?: string;
  showDemo?: boolean;
}

// HEAVILY TRANSFORMED Switch with design tokens
const StyledSwitch = styled(MuiSwitch, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<SwitchProps>(({ theme, variant = 'contained', size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  
  // Size variations
  ...(size === 'small' && {
    width: 34,
    height: 20,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(14px)',
      },
    },
    '& .MuiSwitch-thumb': {
      width: 16,
      height: 16,
    },
    '& .MuiSwitch-track': {
      borderRadius: 10,
    },
  }),
  
  ...(size === 'medium' && {
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 3,
      '&.Mui-checked': {
        transform: 'translateX(16px)',
      },
    },
    '& .MuiSwitch-thumb': {
      width: 20,
      height: 20,
    },
    '& .MuiSwitch-track': {
      borderRadius: 13,
    },
  }),
  
  ...(size === 'large' && {
    width: 50,
    height: 32,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 4,
      '&.Mui-checked': {
        transform: 'translateX(18px)',
      },
    },
    '& .MuiSwitch-thumb': {
      width: 24,
      height: 24,
    },
    '& .MuiSwitch-track': {
      borderRadius: 16,
    },
  }),

  '& .MuiSwitch-switchBase': {
    margin: 0,
    padding: 3,
    transition: 'transform var(--duration-fast) var(--ease-out)',
    
    '&.Mui-checked': {
      '& + .MuiSwitch-track': {
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: 'var(--color-primary-500)',
      border: '6px solid var(--color-white)',
    },
    
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: 'var(--color-gray-300)',
    },
    
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.3,
    },
  },

  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 20,
    height: 20,
    backgroundColor: 'var(--color-white)',
    boxShadow: 'var(--shadow-sm)',
    transition: 'all var(--duration-fast) var(--ease-out)',
  },

  '& .MuiSwitch-track': {
    borderRadius: 13,
    opacity: 1,
    transition: 'all var(--duration-fast) var(--ease-out)',
  },

  // Variant styling
  ...(variant === 'contained' && {
    '& .MuiSwitch-track': {
      backgroundColor: 'var(--color-gray-300)',
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: 'var(--color-primary-600)',
    },
    '&:hover .MuiSwitch-thumb': {
      boxShadow: 'var(--shadow-md)',
    },
  }),

  ...(variant === 'outlined' && {
    '& .MuiSwitch-track': {
      backgroundColor: 'var(--color-white)',
      border: '2px solid var(--color-gray-300)',
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: 'var(--color-primary-50)',
      borderColor: 'var(--color-primary-600)',
    },
    '& .MuiSwitch-thumb': {
      border: '1px solid var(--color-gray-300)',
    },
    '& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb': {
      borderColor: 'var(--color-primary-600)',
    },
  }),

  ...(variant === 'minimal' && {
    '& .MuiSwitch-track': {
      backgroundColor: 'var(--color-gray-200)',
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: 'var(--color-primary-400)',
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'var(--shadow-sm)',
    },
  }),

  // Hover states
  '&:hover .MuiSwitch-thumb': {
    transform: 'scale(1.1)',
  },
}));

// HEAVILY TRANSFORMED FormControlLabel with design tokens
const StyledFormControlLabel = styled(MuiFormControlLabel, {
  shouldForwardProp: (prop) => !['size'].includes(prop),
})<{ size?: string }>(({ theme, size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  margin: 'var(--spacing-2) 0',
  padding: 'var(--spacing-2)',
  borderRadius: 'var(--radius-md)',
  transition: 'all var(--duration-fast) var(--ease-out)',

  // Hover effect for better interactivity
  '&:hover': {
    backgroundColor: 'var(--color-gray-50)',
  },
  
  '& .MuiFormControlLabel-label': {
    fontWeight: 'var(--font-weight-normal)',
    color: 'var(--color-text-primary)',
    marginLeft: 'var(--spacing-2)',
    padding: 'var(--spacing-1) 0',
    
    // Size variations
    ...(size === 'small' && {
      fontSize: 'var(--font-size-sm)',
    }),
    
    ...(size === 'medium' && {
      fontSize: 'var(--font-size-base)',
    }),
    
    ...(size === 'large' && {
      fontSize: 'var(--font-size-lg)',
    }),
  },

  '&.Mui-disabled .MuiFormControlLabel-label': {
    color: 'var(--color-text-disabled)',
  },
}));

// HEAVILY TRANSFORMED HelperText with design tokens
const StyledFormHelperText = styled(MuiFormHelperText)(({ theme }) => ({
  fontFamily: 'var(--font-family-sans)',
  fontSize: 'var(--font-size-xs)',
  color: 'var(--color-text-secondary)',
  marginTop: 'var(--spacing-1)',
}));

export const Switch: React.FC<SwitchProps> = ({
  variant = 'contained',
  size = 'medium',
  label,
  helperText,
  showDemo = true,
  ...props
}) => {
  const [checked, setChecked] = React.useState(props.checked ?? false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (props.onChange) {
      props.onChange(event);
    }
  };

  const switchElement = (
    <StyledSwitch
      variant={variant}
      size={size}
      checked={props.checked !== undefined ? props.checked : checked}
      onChange={handleChange}
      {...props}
    />
  );

  const content = label ? (
    <StyledFormControlLabel
      size={size}
      control={switchElement}
      label={label}
      disabled={props.disabled}
    />
  ) : (
    switchElement
  );

  return (
    <MuiBox sx={{ margin: 'var(--spacing-1) 0' }}>
      {content}
      {helperText && (
        <StyledFormHelperText>
          {helperText}
        </StyledFormHelperText>
      )}
    </MuiBox>
  );
};

export default Switch;
