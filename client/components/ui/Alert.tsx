import React from 'react';
import MuiAlert from '@mui/material/Alert';
import MuiAlertTitle from '@mui/material/AlertTitle';
import MuiIconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { AlertProps as MuiAlertProps } from '@mui/material/Alert';
import { 
  CheckCircle as CheckCircleIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Close as CloseIcon
} from '@mui/icons-material';

export interface AlertProps extends Omit<MuiAlertProps, 'variant' | 'severity'> {
  variant?: 'contained' | 'outlined' | 'minimal' | 'ghost';
  severity?: 'success' | 'info' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  title?: string;
  showIcon?: boolean;
  closable?: boolean;
  onClose?: () => void;
}

// HEAVILY TRANSFORMED Alert with design tokens
const StyledAlert = styled(MuiAlert, {
  shouldForwardProp: (prop) => !['variant', 'size', 'showIcon'].includes(prop),
})<AlertProps>(({ theme, variant = 'contained', severity = 'info', size = 'medium', showIcon = true }) => ({
  fontFamily: 'var(--font-family-sans)',
  borderRadius: 'var(--radius-lg)',
  border: 'none',
  boxShadow: 'var(--shadow-md)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  position: 'relative',
  overflow: 'hidden',
  
  // Size variations
  ...(size === 'small' && {
    padding: 'var(--spacing-3) var(--spacing-4)',
    fontSize: 'var(--font-size-sm)',
    '& .MuiAlert-icon': {
      fontSize: '18px',
    },
  }),
  
  ...(size === 'medium' && {
    padding: 'var(--spacing-4) var(--spacing-5)',
    fontSize: 'var(--font-size-base)',
    '& .MuiAlert-icon': {
      fontSize: '20px',
    },
  }),
  
  ...(size === 'large' && {
    padding: 'var(--spacing-5) var(--spacing-6)',
    fontSize: 'var(--font-size-lg)',
    '& .MuiAlert-icon': {
      fontSize: '24px',
    },
  }),

  // Enhanced hover effect
  '&:hover': {
    transform: 'translateY(-1px)',
    boxShadow: 'var(--shadow-lg)',
  },

  // Icon styling
  '& .MuiAlert-icon': {
    alignItems: 'center',
    padding: 0,
    marginRight: 'var(--spacing-3)',
    opacity: showIcon ? 1 : 0,
    transition: 'opacity var(--duration-fast) var(--ease-out)',
  },

  // Message styling
  '& .MuiAlert-message': {
    fontFamily: 'var(--font-family-sans)',
    fontWeight: 'var(--font-weight-normal)',
    lineHeight: 1.5,
    flex: 1,
  },

  // Action styling
  '& .MuiAlert-action': {
    alignItems: 'flex-start',
    paddingTop: 0,
    marginRight: 0,
    marginLeft: 'var(--spacing-2)',
  },

  // Close button styling
  '& .MuiIconButton-root': {
    borderRadius: 'var(--radius-md)',
    padding: 'var(--spacing-1)',
    transition: 'all var(--duration-fast) var(--ease-out)',
    
    '&:hover': {
      transform: 'scale(1.1)',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  },

  // Severity-specific base colors
  ...(severity === 'success' && {
    '& .MuiAlert-icon': {
      color: 'var(--color-success-600)',
    },
  }),

  ...(severity === 'info' && {
    '& .MuiAlert-icon': {
      color: 'var(--color-primary-600)',
    },
  }),

  ...(severity === 'warning' && {
    '& .MuiAlert-icon': {
      color: 'var(--color-warning-600)',
    },
  }),

  ...(severity === 'error' && {
    '& .MuiAlert-icon': {
      color: 'var(--color-error-600)',
    },
  }),

  // Variant-specific styling for SUCCESS
  ...(variant === 'contained' && severity === 'success' && {
    backgroundColor: 'var(--color-success-100)',
    color: 'var(--color-success-800)',
    border: '1px solid var(--color-success-200)',
  }),

  ...(variant === 'outlined' && severity === 'success' && {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-success-700)',
    border: '2px solid var(--color-success-300)',
  }),

  ...(variant === 'minimal' && severity === 'success' && {
    backgroundColor: 'var(--color-success-50)',
    color: 'var(--color-success-700)',
    border: '1px solid var(--color-success-200)',
    boxShadow: 'var(--shadow-sm)',
  }),


  ...(variant === 'ghost' && severity === 'success' && {
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(34, 197, 94, 0.2)',
    color: 'var(--color-success-700)',
  }),

  // Variant-specific styling for INFO
  ...(variant === 'contained' && severity === 'info' && {
    backgroundColor: 'var(--color-primary-100)',
    color: 'var(--color-primary-800)',
    border: '1px solid var(--color-primary-200)',
  }),

  ...(variant === 'outlined' && severity === 'info' && {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-primary-700)',
    border: '2px solid var(--color-primary-300)',
  }),

  ...(variant === 'minimal' && severity === 'info' && {
    backgroundColor: 'var(--color-primary-50)',
    color: 'var(--color-primary-700)',
    border: '1px solid var(--color-primary-200)',
    boxShadow: 'var(--shadow-sm)',
  }),


  ...(variant === 'ghost' && severity === 'info' && {
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(139, 92, 246, 0.2)',
    color: 'var(--color-primary-700)',
  }),

  // Variant-specific styling for WARNING
  ...(variant === 'contained' && severity === 'warning' && {
    backgroundColor: 'var(--color-warning-100)',
    color: 'var(--color-warning-800)',
    border: '1px solid var(--color-warning-200)',
  }),

  ...(variant === 'outlined' && severity === 'warning' && {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-warning-700)',
    border: '2px solid var(--color-warning-300)',
  }),

  ...(variant === 'minimal' && severity === 'warning' && {
    backgroundColor: 'var(--color-warning-50)',
    color: 'var(--color-warning-700)',
    border: '1px solid var(--color-warning-200)',
    boxShadow: 'var(--shadow-sm)',
  }),


  ...(variant === 'ghost' && severity === 'warning' && {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(245, 158, 11, 0.2)',
    color: 'var(--color-warning-700)',
  }),

  // Variant-specific styling for ERROR
  ...(variant === 'contained' && severity === 'error' && {
    backgroundColor: 'var(--color-error-100)',
    color: 'var(--color-error-800)',
    border: '1px solid var(--color-error-200)',
  }),

  ...(variant === 'outlined' && severity === 'error' && {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-error-700)',
    border: '2px solid var(--color-error-300)',
  }),

  ...(variant === 'minimal' && severity === 'error' && {
    backgroundColor: 'var(--color-error-50)',
    color: 'var(--color-error-700)',
    border: '1px solid var(--color-error-200)',
    boxShadow: 'var(--shadow-sm)',
  }),


  ...(variant === 'ghost' && severity === 'error' && {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(239, 68, 68, 0.2)',
    color: 'var(--color-error-700)',
  }),
}));

// Styled Alert Title
const StyledAlertTitle = styled(MuiAlertTitle)(({ theme }) => ({
  fontFamily: 'var(--font-family-sans)',
  fontWeight: 'var(--font-weight-semibold)',
  marginBottom: 'var(--spacing-1)',
  color: 'inherit',
}));

// Custom icon components
const getSeverityIcon = (severity: string) => {
  switch (severity) {
    case 'success':
      return <CheckCircleIcon />;
    case 'warning':
      return <WarningIcon />;
    case 'error':
      return <ErrorIcon />;
    case 'info':
    default:
      return <InfoIcon />;
  }
};

export const Alert: React.FC<AlertProps> = ({ 
  variant = 'contained',
  severity = 'info',
  size = 'medium',
  title,
  showIcon = true,
  closable = false,
  onClose,
  children,
  ...props 
}) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <StyledAlert
      variant={variant as any}
      severity={severity}
      size={size}
      showIcon={showIcon}
      icon={showIcon ? getSeverityIcon(severity) : false}
      action={
        closable ? (
          <MuiIconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleClose}
          >
            <CloseIcon fontSize="inherit" />
          </MuiIconButton>
        ) : null
      }
      {...props}
    >
      {title && <StyledAlertTitle>{title}</StyledAlertTitle>}
      {children}
    </StyledAlert>
  );
};

// Export sub-components for advanced usage
export const AlertTitle = StyledAlertTitle;

export default Alert;
