import React from 'react';
import MuiRadio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import MuiFormControl from '@mui/material/FormControl';
import MuiFormLabel from '@mui/material/FormLabel';
import MuiFormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';
import { RadioProps as MuiRadioProps } from '@mui/material/Radio';

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioProps extends Omit<MuiRadioProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  helperText?: string;
  options?: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  showDemo?: boolean;
}

// HEAVILY TRANSFORMED Radio with design tokens
const StyledRadio = styled(MuiRadio, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<RadioProps>(({ theme, variant = 'contained', size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  // Size variations
  ...(size === 'small' && {
    '& .MuiSvgIcon-root': {
      fontSize: '18px',
    },
  }),
  
  ...(size === 'medium' && {
    '& .MuiSvgIcon-root': {
      fontSize: '20px',
    },
  }),
  
  ...(size === 'large' && {
    '& .MuiSvgIcon-root': {
      fontSize: '24px',
    },
  }),

  // Variant styling
  ...(variant === 'contained' && {
    color: 'var(--color-gray-400)',
    '&.Mui-checked': {
      color: 'var(--color-primary-600)',
    },
    '&:hover': {
      backgroundColor: 'var(--color-primary-50)',
    },
  }),

  ...(variant === 'outlined' && {
    color: 'var(--color-gray-400)',
    border: '1px solid var(--color-border-default)',
    borderRadius: 'var(--radius-full)',
    '&.Mui-checked': {
      color: 'var(--color-primary-600)',
      borderColor: 'var(--color-primary-600)',
    },
    '&:hover': {
      backgroundColor: 'var(--color-primary-50)',
      borderColor: 'var(--color-primary-300)',
    },
  }),

  ...(variant === 'minimal' && {
    color: 'var(--color-gray-300)',
    '&.Mui-checked': {
      color: 'var(--color-primary-500)',
    },
    '&:hover': {
      backgroundColor: 'var(--color-gray-50)',
    },
  }),

  // Hover and focus states
  '&:hover': {
    transform: 'scale(1.05)',
  },

  '&.Mui-focusVisible': {
    outline: '2px solid var(--color-primary-500)',
    outlineOffset: '2px',
  },

  '&.Mui-disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
}));

// HEAVILY TRANSFORMED FormControlLabel with design tokens
const StyledFormControlLabel = styled(MuiFormControlLabel, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<{ variant?: string; size?: string }>(({ theme, variant = 'contained', size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  margin: 0,
  
  '& .MuiFormControlLabel-label': {
    fontWeight: 'var(--font-weight-normal)',
    color: 'var(--color-text-primary)',
    
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

// HEAVILY TRANSFORMED FormControl with design tokens
const StyledFormControl = styled(MuiFormControl)(({ theme }) => ({
  fontFamily: 'var(--font-family-sans)',
  
  '& .MuiFormLabel-root': {
    fontFamily: 'var(--font-family-sans)',
    fontWeight: 'var(--font-weight-medium)',
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-primary)',
    marginBottom: 'var(--spacing-2)',
    
    '&.Mui-focused': {
      color: 'var(--color-primary-600)',
    },
  },
  
  '& .MuiFormHelperText-root': {
    fontFamily: 'var(--font-family-sans)',
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-secondary)',
    marginTop: 'var(--spacing-1)',
  },
}));

// HEAVILY TRANSFORMED RadioGroup with design tokens
const StyledRadioGroup = styled(MuiRadioGroup)(({ theme }) => ({
  gap: 'var(--spacing-2)',
}));

// Sample options for demo
const sampleOptions: RadioOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const Radio: React.FC<RadioProps> = ({
  variant = 'contained',
  size = 'medium',
  label,
  helperText,
  options: propOptions,
  value,
  onChange,
  showDemo = true,
  ...props
}) => {
  const [internalValue, setInternalValue] = React.useState(value || 'option1');
  
  // Use provided options or fall back to sample options for demo
  const options = propOptions && propOptions.length > 0 ? propOptions : sampleOptions;
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const currentValue = value !== undefined ? value : internalValue;
  const displayLabel = label || 'Choose an option';

  return (
    <StyledFormControl>
      {displayLabel && (
        <MuiFormLabel component="legend">
          {displayLabel}
        </MuiFormLabel>
      )}
      <StyledRadioGroup
        value={currentValue}
        onChange={handleChange}
      >
        {options.map((option) => (
          <StyledFormControlLabel
            key={option.value}
            value={option.value}
            variant={variant}
            size={size}
            disabled={option.disabled}
            control={
              <StyledRadio
                variant={variant}
                size={size}
                {...props}
              />
            }
            label={option.label}
          />
        ))}
      </StyledRadioGroup>
      {helperText && (
        <MuiFormHelperText>
          {helperText}
        </MuiFormHelperText>
      )}
    </StyledFormControl>
  );
};

export default Radio;
