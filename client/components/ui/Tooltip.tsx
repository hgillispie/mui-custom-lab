import React from 'react';
import MuiTooltip from '@mui/material/Tooltip';
import MuiBox from '@mui/material/Box';
import MuiIconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';
import { 
  Info as InfoIcon,
  Help as HelpIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Check as CheckIcon
} from '@mui/icons-material';

export interface TooltipProps extends Omit<MuiTooltipProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  type?: 'default' | 'info' | 'success' | 'warning' | 'error';
  showArrow?: boolean;
  interactive?: boolean;
  showDemo?: boolean;
}

// HEAVILY TRANSFORMED Tooltip with design tokens
const StyledTooltip = styled(({ className, variant, size, type, ...props }: TooltipProps & { className?: string }) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
), {
  shouldForwardProp: (prop) => !['variant', 'size', 'type'].includes(prop),
})<TooltipProps>(({ theme, variant = 'contained', size = 'medium', type = 'default' }) => ({
  '& .MuiTooltip-tooltip': {
    fontFamily: 'var(--font-family-sans)',
    fontWeight: 'var(--font-weight-medium)',
    borderRadius: 'var(--radius-md)',
    transition: 'all var(--duration-fast) var(--ease-out)',
    maxWidth: '300px',
    
    // Size variations
    ...(size === 'small' && {
      fontSize: 'var(--font-size-xs)',
      padding: 'var(--spacing-1) var(--spacing-1-5)',
      maxWidth: '200px',
    }),
    
    ...(size === 'medium' && {
      fontSize: 'var(--font-size-sm)',
      padding: 'var(--spacing-1-5) var(--spacing-2)',
      maxWidth: '300px',
    }),
    
    ...(size === 'large' && {
      fontSize: 'var(--font-size-base)',
      padding: 'var(--spacing-2) var(--spacing-3)',
      maxWidth: '400px',
    }),
    
    // Variant and type-specific styling
    ...(variant === 'contained' && {
      // Default contained styling
      ...(type === 'default' && {
        backgroundColor: 'var(--color-gray-800)',
        color: 'var(--color-white)',
      }),
      
      ...(type === 'info' && {
        backgroundColor: 'var(--color-primary-600)',
        color: 'var(--color-white)',
      }),
      
      ...(type === 'success' && {
        backgroundColor: 'var(--color-success-600)',
        color: 'var(--color-white)',
      }),
      
      ...(type === 'warning' && {
        backgroundColor: 'var(--color-warning-600)',
        color: 'var(--color-white)',
      }),
      
      ...(type === 'error' && {
        backgroundColor: 'var(--color-error-600)',
        color: 'var(--color-white)',
      }),
    }),
    
    ...(variant === 'outlined' && {
      border: '1px solid',
      backgroundColor: 'var(--color-white)',
      boxShadow: 'var(--shadow-lg)',
      
      ...(type === 'default' && {
        borderColor: 'var(--color-gray-300)',
        color: 'var(--color-text-primary)',
      }),
      
      ...(type === 'info' && {
        borderColor: 'var(--color-primary-300)',
        color: 'var(--color-primary-700)',
      }),
      
      ...(type === 'success' && {
        borderColor: 'var(--color-success-300)',
        color: 'var(--color-success-700)',
      }),
      
      ...(type === 'warning' && {
        borderColor: 'var(--color-warning-300)',
        color: 'var(--color-warning-700)',
      }),
      
      ...(type === 'error' && {
        borderColor: 'var(--color-error-300)',
        color: 'var(--color-error-700)',
      }),
    }),
    
    ...(variant === 'minimal' && {
      backgroundColor: 'var(--color-white)',
      color: 'var(--color-text-primary)',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--color-border-subtle)',
    }),
  },
  
  '& .MuiTooltip-arrow': {
    color: 'inherit',
    
    // Variant-specific arrow colors
    ...(variant === 'contained' && {
      ...(type === 'default' && {
        color: 'var(--color-gray-800)',
      }),
      
      ...(type === 'info' && {
        color: 'var(--color-primary-600)',
      }),
      
      ...(type === 'success' && {
        color: 'var(--color-success-600)',
      }),
      
      ...(type === 'warning' && {
        color: 'var(--color-warning-600)',
      }),
      
      ...(type === 'error' && {
        color: 'var(--color-error-600)',
      }),
    }),
    
    ...(variant === 'outlined' && {
      color: 'var(--color-white)',
      
      '&::before': {
        border: '1px solid',
        ...(type === 'default' && {
          borderColor: 'var(--color-gray-300)',
        }),
        
        ...(type === 'info' && {
          borderColor: 'var(--color-primary-300)',
        }),
        
        ...(type === 'success' && {
          borderColor: 'var(--color-success-300)',
        }),
        
        ...(type === 'warning' && {
          borderColor: 'var(--color-warning-300)',
        }),
        
        ...(type === 'error' && {
          borderColor: 'var(--color-error-300)',
        }),
      },
    }),
    
    ...(variant === 'minimal' && {
      color: 'var(--color-white)',
      
      '&::before': {
        border: '1px solid var(--color-border-subtle)',
      },
    }),
  },
}));

const DemoContainer = styled(MuiBox)(({ theme }) => ({
  display: 'flex',
  gap: 'var(--spacing-2)',
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 'var(--spacing-4)',
  backgroundColor: 'var(--color-gray-50)',
  borderRadius: 'var(--radius-lg)',
  border: '1px solid var(--color-border-subtle)',
}));

const DemoButton = styled(MuiIconButton)(({ theme }) => ({
  backgroundColor: 'var(--color-white)',
  border: '1px solid var(--color-border-default)',
  borderRadius: 'var(--radius-md)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  '&:hover': {
    backgroundColor: 'var(--color-primary-50)',
    borderColor: 'var(--color-primary-300)',
    transform: 'translateY(-1px)',
    boxShadow: 'var(--shadow-sm)',
  },
}));

const Tooltip: React.FC<TooltipProps> = ({
  variant = 'contained',
  size = 'medium',
  type = 'default',
  showArrow = true,
  interactive = false,
  showDemo = false,
  title,
  children,
  ...props
}) => {
  if (showDemo) {
    const demoTooltips = [
      {
        type: 'default',
        title: 'Default tooltip with helpful information',
        icon: <InfoIcon />,
        label: 'Default'
      },
      {
        type: 'info',
        title: 'Information tooltip with additional details',
        icon: <InfoIcon />,
        label: 'Info'
      },
      {
        type: 'success',
        title: 'Success tooltip indicating completion',
        icon: <CheckIcon />,
        label: 'Success'
      },
      {
        type: 'warning',
        title: 'Warning tooltip about potential issues',
        icon: <WarningIcon />,
        label: 'Warning'
      },
      {
        type: 'error',
        title: 'Error tooltip describing what went wrong',
        icon: <ErrorIcon />,
        label: 'Error'
      },
    ];

    return (
      <DemoContainer>
        {demoTooltips.map((tooltip) => (
          <StyledTooltip
            key={tooltip.type}
            variant={variant}
            size={size}
            type={tooltip.type as any}
            title={tooltip.title}
            arrow={showArrow}
            placement="top"
            {...props}
          >
            <DemoButton size="small">
              {tooltip.icon}
            </DemoButton>
          </StyledTooltip>
        ))}
      </DemoContainer>
    );
  }

  return (
    <StyledTooltip
      variant={variant}
      size={size}
      type={type}
      title={title}
      arrow={showArrow}
      interactive={interactive}
      {...props}
    >
      {children}
    </StyledTooltip>
  );
};

export default Tooltip;
