import React from 'react';
import MuiLinearProgress from '@mui/material/LinearProgress';
import MuiCircularProgress from '@mui/material/CircularProgress';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { LinearProgressProps as MuiLinearProgressProps } from '@mui/material/LinearProgress';
import { CircularProgressProps as MuiCircularProgressProps } from '@mui/material/CircularProgress';

export interface ProgressProps extends Omit<MuiLinearProgressProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  type?: 'linear' | 'circular';
  value?: number;
  label?: string;
  showValue?: boolean;
  showDemo?: boolean;
}

// HEAVILY TRANSFORMED Linear Progress with design tokens
const StyledLinearProgress = styled(MuiLinearProgress, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<ProgressProps>(({ theme, variant = 'contained', size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  borderRadius: 'var(--radius-full)',
  overflow: 'hidden',
  
  // Size variations
  ...(size === 'small' && {
    height: '4px',
  }),
  
  ...(size === 'medium' && {
    height: '8px',
  }),
  
  ...(size === 'large' && {
    height: '12px',
  }),

  // Variant styling
  ...(variant === 'contained' && {
    backgroundColor: 'var(--color-gray-200)',
    '& .MuiLinearProgress-bar': {
      backgroundColor: 'var(--color-primary-600)',
      borderRadius: 'var(--radius-full)',
      transition: 'transform var(--duration-slow) var(--ease-out)',
    },
  }),

  ...(variant === 'outlined' && {
    backgroundColor: 'var(--color-white)',
    border: '2px solid var(--color-gray-200)',
    '& .MuiLinearProgress-bar': {
      backgroundColor: 'var(--color-primary-600)',
      borderRadius: 'var(--radius-full)',
      transition: 'transform var(--duration-slow) var(--ease-out)',
    },
  }),

  ...(variant === 'minimal' && {
    backgroundColor: 'var(--color-gray-100)',
    '& .MuiLinearProgress-bar': {
      backgroundColor: 'var(--color-primary-500)',
      borderRadius: 'var(--radius-full)',
      transition: 'transform var(--duration-slow) var(--ease-out)',
    },
  }),

  // Enhanced animation for indeterminate
  '&.MuiLinearProgress-indeterminate': {
    '& .MuiLinearProgress-bar1Indeterminate': {
      animation: 'progress-indeterminate 2s linear infinite',
    },
    '& .MuiLinearProgress-bar2Indeterminate': {
      animation: 'progress-indeterminate2 2s linear infinite',
    },
  },

  '@keyframes progress-indeterminate': {
    '0%': {
      left: '-35%',
      right: '100%',
    },
    '60%': {
      left: '100%',
      right: '-90%',
    },
    '100%': {
      left: '100%',
      right: '-90%',
    },
  },

  '@keyframes progress-indeterminate2': {
    '0%': {
      left: '-200%',
      right: '100%',
    },
    '60%': {
      left: '107%',
      right: '-8%',
    },
    '100%': {
      left: '107%',
      right: '-8%',
    },
  },
}));

// HEAVILY TRANSFORMED Circular Progress with design tokens
const StyledCircularProgress = styled(MuiCircularProgress, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<ProgressProps & MuiCircularProgressProps>(({ theme, variant = 'contained', size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  
  // Size variations
  ...(size === 'small' && {
    width: '24px !important',
    height: '24px !important',
  }),
  
  ...(size === 'medium' && {
    width: '40px !important',
    height: '40px !important',
  }),
  
  ...(size === 'large' && {
    width: '56px !important',
    height: '56px !important',
  }),

  // Variant styling
  ...(variant === 'contained' && {
    color: 'var(--color-primary-600)',
    '& .MuiCircularProgress-circle': {
      strokeLinecap: 'round',
    },
  }),

  ...(variant === 'outlined' && {
    color: 'var(--color-primary-600)',
    '& .MuiCircularProgress-circle': {
      strokeLinecap: 'square',
      strokeWidth: 3,
    },
  }),

  ...(variant === 'minimal' && {
    color: 'var(--color-primary-500)',
    opacity: 0.8,
    '& .MuiCircularProgress-circle': {
      strokeLinecap: 'round',
      strokeWidth: 2,
    },
  }),
}));

// HEAVILY TRANSFORMED Progress Container with design tokens
const StyledProgressContainer = styled(MuiBox, {
  shouldForwardProp: (prop) => !['size'].includes(prop),
})<{ size?: string }>(({ theme, size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--spacing-2)',
  width: '100%',
  
  ...(size === 'small' && {
    maxWidth: '200px',
  }),
  
  ...(size === 'medium' && {
    maxWidth: '300px',
  }),
  
  ...(size === 'large' && {
    maxWidth: '400px',
  }),
}));

// HEAVILY TRANSFORMED Progress Label with design tokens
const StyledProgressLabel = styled(MuiTypography)(({ theme }) => ({
  fontFamily: 'var(--font-family-sans)',
  fontSize: 'var(--font-size-sm)',
  fontWeight: 'var(--font-weight-medium)',
  color: 'var(--color-text-primary)',
}));

// HEAVILY TRANSFORMED Progress Value with design tokens
const StyledProgressValue = styled(MuiTypography)(({ theme }) => ({
  fontFamily: 'var(--font-family-sans)',
  fontSize: 'var(--font-size-xs)',
  color: 'var(--color-text-secondary)',
  textAlign: 'right',
}));

export const Progress: React.FC<ProgressProps> = ({
  variant = 'contained',
  size = 'medium',
  type = 'linear',
  value,
  label,
  showValue = false,
  showDemo = true,
  ...props
}) => {
  const [progress, setProgress] = React.useState(value || 65);

  // Demo animation for indeterminate progress
  React.useEffect(() => {
    if (value === undefined && showDemo) {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress >= 100 ? 0 : prevProgress + 10;
          return newProgress;
        });
      }, 800);

      return () => {
        clearInterval(timer);
      };
    }
  }, [value, showDemo]);

  const currentValue = value !== undefined ? value : progress;
  const isIndeterminate = value === undefined && !showDemo;

  // Circular Progress
  if (type === 'circular') {
    const circularElement = (
      <StyledCircularProgress
        variant={isIndeterminate ? 'indeterminate' : 'determinate'}
        value={currentValue}
        variant={variant}
        size={size}
        {...props}
      />
    );

    if (showValue && !isIndeterminate) {
      return (
        <MuiBox position="relative" display="inline-flex" alignItems="center" justifyContent="center">
          {circularElement}
          <MuiBox
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <MuiTypography
              variant="caption"
              component="div"
              color="text.secondary"
              sx={{
                fontFamily: 'var(--font-family-sans)',
                fontSize: size === 'small' ? 'var(--font-size-xs)' : 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            >
              {`${Math.round(currentValue)}%`}
            </MuiTypography>
          </MuiBox>
        </MuiBox>
      );
    }

    return circularElement;
  }

  // Linear Progress
  return (
    <StyledProgressContainer size={size}>
      {(label || showValue) && (
        <MuiBox display="flex" justifyContent="space-between" alignItems="center">
          {label && (
            <StyledProgressLabel>
              {label}
            </StyledProgressLabel>
          )}
          {showValue && !isIndeterminate && (
            <StyledProgressValue>
              {`${Math.round(currentValue)}%`}
            </StyledProgressValue>
          )}
        </MuiBox>
      )}
      <StyledLinearProgress
        variant={isIndeterminate ? 'indeterminate' : 'determinate'}
        value={currentValue}
        variant={variant}
        size={size}
        {...props}
      />
    </StyledProgressContainer>
  );
};

export default Progress;
