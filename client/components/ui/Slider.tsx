import React from 'react';
import MuiSlider from '@mui/material/Slider';
import MuiFormControl from '@mui/material/FormControl';
import MuiFormLabel from '@mui/material/FormLabel';
import MuiFormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';
import { SliderProps as MuiSliderProps } from '@mui/material/Slider';

// Extended interface with custom props
export interface SliderProps extends Omit<MuiSliderProps, 'size'> {
  variant?: 'default' | 'gradient' | 'glass' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  helperText?: string;
  state?: 'default' | 'success' | 'warning' | 'error';
  showValue?: boolean;
}

// HEAVILY TRANSFORMED Slider with design tokens
const StyledSlider = styled(MuiSlider, {
  shouldForwardProp: (prop) => !['variant', 'state', 'showValue'].includes(prop),
})<SliderProps>(({ theme, variant = 'default', size = 'medium', state = 'default' }) => ({
  // Base styling
  fontFamily: 'var(--font-family-sans)',
  
  // Size variations
  ...(size === 'small' && {
    height: '6px',
    padding: 'var(--spacing-2) 0',
    
    '& .MuiSlider-thumb': {
      width: '18px',
      height: '18px',
      '&:before': {
        boxShadow: 'var(--shadow-sm)',
      },
    },
    
    '& .MuiSlider-valueLabel': {
      fontSize: 'var(--font-size-xs)',
      padding: 'var(--spacing-1) var(--spacing-2)',
    },
  }),
  
  ...(size === 'medium' && {
    height: '8px',
    padding: 'var(--spacing-3) 0',
    
    '& .MuiSlider-thumb': {
      width: '24px',
      height: '24px',
      '&:before': {
        boxShadow: 'var(--shadow-md)',
      },
    },
    
    '& .MuiSlider-valueLabel': {
      fontSize: 'var(--font-size-sm)',
      padding: 'var(--spacing-1-5) var(--spacing-3)',
    },
  }),
  
  ...(size === 'large' && {
    height: '10px',
    padding: 'var(--spacing-4) 0',
    
    '& .MuiSlider-thumb': {
      width: '30px',
      height: '30px',
      '&:before': {
        boxShadow: 'var(--shadow-lg)',
      },
    },
    
    '& .MuiSlider-valueLabel': {
      fontSize: 'var(--font-size-base)',
      padding: 'var(--spacing-2) var(--spacing-4)',
    },
  }),

  // Base track styling
  '& .MuiSlider-track': {
    border: 'none',
    borderRadius: 'var(--radius-full)',
    transition: 'all var(--duration-fast) var(--ease-out)',
  },
  
  '& .MuiSlider-rail': {
    backgroundColor: 'var(--color-gray-200)',
    borderRadius: 'var(--radius-full)',
    opacity: 1,
    transition: 'all var(--duration-fast) var(--ease-out)',
  },

  // Base thumb styling
  '& .MuiSlider-thumb': {
    backgroundColor: 'var(--color-white)',
    border: 'none',
    borderRadius: '50%',
    transition: 'all var(--duration-fast) var(--ease-out)',
    cursor: 'grab',
    boxShadow: 'var(--shadow-md)',

    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: 'var(--shadow-lg)',
    },

    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 0 4px var(--color-primary-200)',
    },

    '&:active': {
      cursor: 'grabbing',
      transform: 'scale(1.2)',
    },

    '&:before': {
      position: 'absolute',
      content: '""',
      borderRadius: 'inherit',
      width: '100%',
      height: '100%',
      boxShadow: 'inherit',
    },
  },

  // Value label styling
  '& .MuiSlider-valueLabel': {
    fontFamily: 'var(--font-family-sans)',
    fontWeight: 'var(--font-weight-medium)',
    backgroundColor: 'var(--color-gray-800)',
    color: 'var(--color-white)',
    borderRadius: 'var(--radius-md)',
    lineHeight: 1.2,
    
    '&:before': {
      borderColor: 'var(--color-gray-800) transparent',
    },
  },

  // Mark styling
  '& .MuiSlider-mark': {
    backgroundColor: 'var(--color-gray-300)',
    width: '3px',
    height: '3px',
    borderRadius: '50%',
    
    '&.MuiSlider-markActive': {
      backgroundColor: 'var(--color-white)',
      transform: 'scale(1.2)',
    },
  },

  '& .MuiSlider-markLabel': {
    fontFamily: 'var(--font-family-sans)',
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-secondary)',
    top: '28px',
  },

  // Variant-specific styling
  ...(variant === 'default' && {
    '& .MuiSlider-track': {
      backgroundColor: 'var(--color-primary-500)',
    },

    '&:hover .MuiSlider-rail': {
      backgroundColor: 'var(--color-gray-300)',
    },
  }),

  ...(variant === 'gradient' && {
    '& .MuiSlider-track': {
      background: 'linear-gradient(90deg, var(--color-primary-300), var(--color-primary-700))',
      position: 'relative',

      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(90deg, var(--color-primary-500), var(--color-primary-800))',
        borderRadius: 'inherit',
        opacity: 0,
        transition: 'opacity var(--duration-fast) var(--ease-out)',
      },
    },

    '&:hover .MuiSlider-track::after': {
      opacity: 1,
    },

  }),

  ...(variant === 'glass' && {
    '& .MuiSlider-track': {
      backgroundColor: 'rgba(139, 92, 246, 0.3)',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(139, 92, 246, 0.2)',
    },

    '& .MuiSlider-rail': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },

  }),

  ...(variant === 'success' && {
    '& .MuiSlider-track': {
      backgroundColor: 'var(--color-success-500)',
    },

    '&:focus .MuiSlider-thumb': {
      boxShadow: '0 0 0 4px var(--color-success-200)',
    },
  }),

  ...(variant === 'warning' && {
    '& .MuiSlider-track': {
      backgroundColor: 'var(--color-warning-500)',
    },

    '&:focus .MuiSlider-thumb': {
      boxShadow: '0 0 0 4px var(--color-warning-200)',
    },
  }),

  ...(variant === 'error' && {
    '& .MuiSlider-track': {
      backgroundColor: 'var(--color-error-500)',
    },

    '&:focus .MuiSlider-thumb': {
      boxShadow: '0 0 0 4px var(--color-error-200)',
    },
  }),

  // State-specific styling (overrides variant when specified)
  ...(state === 'success' && {
    '& .MuiSlider-track': {
      backgroundColor: 'var(--color-success-500)',
    },
  }),

  ...(state === 'warning' && {
    '& .MuiSlider-track': {
      backgroundColor: 'var(--color-warning-500)',
    },
  }),

  ...(state === 'error' && {
    '& .MuiSlider-track': {
      backgroundColor: 'var(--color-error-500)',
    },
  }),

  // Disabled state
  '&.Mui-disabled': {
    opacity: 0.6,

    '& .MuiSlider-track': {
      backgroundColor: 'var(--color-gray-300)',
    },

    '& .MuiSlider-rail': {
      backgroundColor: 'var(--color-gray-200)',
    },

    '& .MuiSlider-thumb': {
      cursor: 'not-allowed',

      '&:hover': {
        transform: 'none',
      },
    },
  },
}));

// Styled FormControl wrapper
const StyledFormControl = styled(MuiFormControl)({
  fontFamily: 'var(--font-family-sans)',
  width: '100%',
  
  '& .MuiFormLabel-root': {
    fontFamily: 'var(--font-family-sans)',
    fontSize: 'var(--font-size-base)',
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--color-text-primary)',
    marginBottom: 'var(--spacing-2)',
    
    '&.Mui-focused': {
      color: 'var(--color-primary-600)',
    },
    
    '&.Mui-error': {
      color: 'var(--color-error-600)',
    },
  },
  
  '& .MuiFormHelperText-root': {
    fontFamily: 'var(--font-family-sans)',
    fontSize: 'var(--font-size-sm)',
    marginTop: 'var(--spacing-2)',
    marginLeft: 0,
  },
});

export const Slider: React.FC<SliderProps> = ({ 
  variant = 'default',
  size = 'medium',
  state = 'default',
  label,
  helperText,
  showValue = false,
  error,
  ...props 
}) => {
  const sliderElement = (
    <StyledSlider
      variant={variant}
      size={size}
      state={state}
      valueLabelDisplay={showValue ? 'auto' : 'off'}
      {...props}
    />
  );

  // If no label or helper text, return just the slider
  if (!label && !helperText) {
    return sliderElement;
  }

  // Return with FormControl wrapper for labels and helper text
  return (
    <StyledFormControl error={error || state === 'error'}>
      {label && (
        <MuiFormLabel component="legend">
          {label}
        </MuiFormLabel>
      )}
      {sliderElement}
      {helperText && (
        <MuiFormHelperText>{helperText}</MuiFormHelperText>
      )}
    </StyledFormControl>
  );
};

export default Slider;
