import React, { useState } from 'react';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import MuiBox from '@mui/material/Box';
import MuiButton from '@mui/material/Button';
import MuiIconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { SnackbarProps as MuiSnackbarProps } from '@mui/material/Snackbar';
import { 
  CheckCircle as CheckCircleIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Close as CloseIcon
} from '@mui/icons-material';

export interface SnackbarProps extends Omit<MuiSnackbarProps, 'anchorOrigin'> {
  variant?: 'contained' | 'outlined' | 'minimal' | 'gradient' | 'glass';
  severity?: 'success' | 'info' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  position?: 'bottom-left' | 'bottom-center' | 'bottom-right' | 'top-left' | 'top-center' | 'top-right';
  showIcon?: boolean;
  closable?: boolean;
  actionText?: string;
  onAction?: () => void;
  onClose?: () => void;
  showDemo?: boolean;
}

// HEAVILY TRANSFORMED Snackbar container for ComponentViewer
const StyledSnackbarContainer = styled(MuiBox, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<SnackbarProps>(({ theme, variant = 'contained', size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--spacing-4)',
  padding: 'var(--spacing-6)',
  borderRadius: 'var(--radius-lg)',
  
  // Size variations for container
  ...(size === 'small' && {
    minWidth: '280px',
    padding: 'var(--spacing-4)',
  }),
  
  ...(size === 'medium' && {
    minWidth: '320px',
    padding: 'var(--spacing-6)',
  }),
  
  ...(size === 'large' && {
    minWidth: '400px',
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
    border: '1px solid var(--color-border-default)',
    boxShadow: 'var(--shadow-md)',
  }),

  ...(variant === 'minimal' && {
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-border-subtle)',
    boxShadow: 'var(--shadow-sm)',
  }),

  ...(variant === 'gradient' && {
    backgroundColor: 'var(--color-bg-elevated)',
    border: '1px solid var(--color-border-default)',
    boxShadow: 'var(--shadow-lg)',
  }),

  ...(variant === 'glass' && {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: 'var(--shadow-lg)',
  }),
}));

// HEAVILY TRANSFORMED Snackbar with design tokens
const StyledSnackbar = styled(MuiSnackbar, {
  shouldForwardProp: (prop) => !['variant', 'size', 'position'].includes(prop),
})<SnackbarProps>(({ theme, variant = 'contained', size = 'medium', position = 'bottom-center' }) => ({
  fontFamily: 'var(--font-family-sans)',
  
  '& .MuiPaper-root': {
    borderRadius: 'var(--radius-lg)',
    border: 'none',
    boxShadow: 'var(--shadow-xl)',
    overflow: 'hidden',
    transition: 'all var(--duration-fast) var(--ease-out)',
    fontFamily: 'var(--font-family-sans)',
    
    // Size variations
    ...(size === 'small' && {
      minWidth: '280px',
      fontSize: 'var(--font-size-sm)',
    }),
    
    ...(size === 'medium' && {
      minWidth: '320px',
      fontSize: 'var(--font-size-base)',
    }),
    
    ...(size === 'large' && {
      minWidth: '400px',
      fontSize: 'var(--font-size-lg)',
    }),

    // Enhanced entrance animation
    '&.MuiSnackbar-anchorOriginBottomCenter': {
      transform: 'translateY(0)',
      '&.SnackbarItem-variantSuccess, &.SnackbarItem-variantInfo, &.SnackbarItem-variantWarning, &.SnackbarItem-variantError': {
        animation: 'slideInFromBottom 0.3s var(--ease-out)',
      },
    },

    '&.MuiSnackbar-anchorOriginTopCenter': {
      '&.SnackbarItem-variantSuccess, &.SnackbarItem-variantInfo, &.SnackbarItem-variantWarning, &.SnackbarItem-variantError': {
        animation: 'slideInFromTop 0.3s var(--ease-out)',
      },
    },
  },

  // Animation keyframes
  '@keyframes slideInFromBottom': {
    '0%': {
      transform: 'translateY(100px)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },

  '@keyframes slideInFromTop': {
    '0%': {
      transform: 'translateY(-100px)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
}));

// HEAVILY TRANSFORMED SnackbarContent with design tokens
const StyledSnackbarContent = styled(MuiAlert, {
  shouldForwardProp: (prop) => !['variant', 'size', 'showIcon'].includes(prop),
})<SnackbarProps>(({ theme, variant = 'contained', severity = 'info', size = 'medium', showIcon = true }) => ({
  fontFamily: 'var(--font-family-sans)',
  width: '100%',
  border: 'none',
  borderRadius: 'var(--radius-lg)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  // Size variations
  ...(size === 'small' && {
    padding: 'var(--spacing-2) var(--spacing-3)',
    fontSize: 'var(--font-size-sm)',
    '& .MuiAlert-icon': {
      fontSize: '18px',
    },
  }),
  
  ...(size === 'medium' && {
    padding: 'var(--spacing-3) var(--spacing-4)',
    fontSize: 'var(--font-size-base)',
    '& .MuiAlert-icon': {
      fontSize: '20px',
    },
  }),
  
  ...(size === 'large' && {
    padding: 'var(--spacing-4) var(--spacing-5)',
    fontSize: 'var(--font-size-lg)',
    '& .MuiAlert-icon': {
      fontSize: '24px',
    },
  }),

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
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-3)',
  },

  // Action styling
  '& .MuiAlert-action': {
    alignItems: 'center',
    paddingTop: 0,
    marginRight: 0,
    marginLeft: 'var(--spacing-3)',
  },

  // Severity-specific icon colors
  ...(severity === 'success' && {
    '& .MuiAlert-icon': {
      color: variant === 'gradient' ? 'var(--color-white)' : 'var(--color-success-600)',
    },
  }),

  ...(severity === 'info' && {
    '& .MuiAlert-icon': {
      color: variant === 'gradient' ? 'var(--color-white)' : 'var(--color-primary-600)',
    },
  }),

  ...(severity === 'warning' && {
    '& .MuiAlert-icon': {
      color: variant === 'gradient' ? 'var(--color-white)' : 'var(--color-warning-600)',
    },
  }),

  ...(severity === 'error' && {
    '& .MuiAlert-icon': {
      color: variant === 'gradient' ? 'var(--color-white)' : 'var(--color-error-600)',
    },
  }),

  // Variant and severity combinations
  ...(variant === 'contained' && severity === 'success' && {
    backgroundColor: 'var(--color-success-100)',
    color: 'var(--color-success-800)',
  }),

  ...(variant === 'contained' && severity === 'info' && {
    backgroundColor: 'var(--color-primary-100)',
    color: 'var(--color-primary-800)',
  }),

  ...(variant === 'contained' && severity === 'warning' && {
    backgroundColor: 'var(--color-warning-100)',
    color: 'var(--color-warning-800)',
  }),

  ...(variant === 'contained' && severity === 'error' && {
    backgroundColor: 'var(--color-error-100)',
    color: 'var(--color-error-800)',
  }),

  ...(variant === 'outlined' && severity === 'success' && {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-success-700)',
    border: '1px solid var(--color-success-300)',
  }),

  ...(variant === 'outlined' && severity === 'info' && {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-primary-700)',
    border: '1px solid var(--color-primary-300)',
  }),

  ...(variant === 'outlined' && severity === 'warning' && {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-warning-700)',
    border: '1px solid var(--color-warning-300)',
  }),

  ...(variant === 'outlined' && severity === 'error' && {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-error-700)',
    border: '1px solid var(--color-error-300)',
  }),

  ...(variant === 'minimal' && severity === 'success' && {
    backgroundColor: 'var(--color-success-50)',
    color: 'var(--color-success-700)',
  }),

  ...(variant === 'minimal' && severity === 'info' && {
    backgroundColor: 'var(--color-primary-50)',
    color: 'var(--color-primary-700)',
  }),

  ...(variant === 'minimal' && severity === 'warning' && {
    backgroundColor: 'var(--color-warning-50)',
    color: 'var(--color-warning-700)',
  }),

  ...(variant === 'minimal' && severity === 'error' && {
    backgroundColor: 'var(--color-error-50)',
    color: 'var(--color-error-700)',
  }),

  ...(variant === 'gradient' && severity === 'success' && {
    background: 'linear-gradient(135deg, var(--color-success-300), var(--color-success-600))',
    color: 'var(--color-white)',
  }),

  ...(variant === 'gradient' && severity === 'info' && {
    background: 'linear-gradient(135deg, var(--color-primary-300), var(--color-primary-700))',
    color: 'var(--color-white)',
  }),

  ...(variant === 'gradient' && severity === 'warning' && {
    background: 'linear-gradient(135deg, var(--color-warning-300), var(--color-warning-600))',
    color: 'var(--color-white)',
  }),

  ...(variant === 'gradient' && severity === 'error' && {
    background: 'linear-gradient(135deg, var(--color-error-300), var(--color-error-600))',
    color: 'var(--color-white)',
  }),

  ...(variant === 'glass' && severity === 'success' && {
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(34, 197, 94, 0.2)',
    color: 'var(--color-success-700)',
  }),

  ...(variant === 'glass' && severity === 'info' && {
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(139, 92, 246, 0.2)',
    color: 'var(--color-primary-700)',
  }),

  ...(variant === 'glass' && severity === 'warning' && {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(245, 158, 11, 0.2)',
    color: 'var(--color-warning-700)',
  }),

  ...(variant === 'glass' && severity === 'error' && {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(239, 68, 68, 0.2)',
    color: 'var(--color-error-700)',
  }),
}));

// HEAVILY TRANSFORMED Action Button
const StyledActionButton = styled(MuiButton, {
  shouldForwardProp: (prop) => !['variant', 'severity'].includes(prop),
})<{ variant?: string; severity?: string }>(({ theme, variant = 'contained', severity = 'info' }) => ({
  fontFamily: 'var(--font-family-sans)',
  textTransform: 'none',
  fontWeight: 'var(--font-weight-medium)',
  fontSize: 'var(--font-size-sm)',
  padding: 'var(--spacing-1) var(--spacing-2)',
  minWidth: 'auto',
  borderRadius: 'var(--radius-md)',
  transition: 'all var(--duration-fast) var(--ease-out)',

  '&:hover': {
    transform: 'scale(1.05)',
  },

  // Variant and severity specific action button colors
  ...(variant === 'gradient' && {
    color: 'var(--color-white)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
  }),

  ...(variant !== 'gradient' && severity === 'success' && {
    color: 'var(--color-success-700)',
    '&:hover': {
      backgroundColor: 'var(--color-success-50)',
    },
  }),

  ...(variant !== 'gradient' && severity === 'info' && {
    color: 'var(--color-primary-700)',
    '&:hover': {
      backgroundColor: 'var(--color-primary-50)',
    },
  }),

  ...(variant !== 'gradient' && severity === 'warning' && {
    color: 'var(--color-warning-700)',
    '&:hover': {
      backgroundColor: 'var(--color-warning-50)',
    },
  }),

  ...(variant !== 'gradient' && severity === 'error' && {
    color: 'var(--color-error-700)',
    '&:hover': {
      backgroundColor: 'var(--color-error-50)',
    },
  }),
}));

// HEAVILY TRANSFORMED Demo Trigger Button
const StyledTriggerButton = styled(MuiButton, {
  shouldForwardProp: (prop) => !['variant'].includes(prop),
})<{ variant?: string }>(({ theme, variant = 'contained' }) => ({
  fontFamily: 'var(--font-family-sans)',
  textTransform: 'none',
  fontWeight: 'var(--font-weight-medium)',
  borderRadius: 'var(--radius-button)',
  padding: 'var(--spacing-2-5) var(--spacing-4)',
  fontSize: 'var(--font-size-base)',
  minHeight: '40px',
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-lg)',
  },

  // Variant-specific styling
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
}));

// Get anchor origin based on position
const getAnchorOrigin = (position: string) => {
  switch (position) {
    case 'top-left':
      return { vertical: 'top' as const, horizontal: 'left' as const };
    case 'top-center':
      return { vertical: 'top' as const, horizontal: 'center' as const };
    case 'top-right':
      return { vertical: 'top' as const, horizontal: 'right' as const };
    case 'bottom-left':
      return { vertical: 'bottom' as const, horizontal: 'left' as const };
    case 'bottom-right':
      return { vertical: 'bottom' as const, horizontal: 'right' as const };
    case 'bottom-center':
    default:
      return { vertical: 'bottom' as const, horizontal: 'center' as const };
  }
};

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

export const Snackbar: React.FC<SnackbarProps> = ({ 
  variant = 'contained',
  severity = 'info',
  size = 'medium',
  position = 'bottom-center',
  showIcon = true,
  closable = true,
  actionText,
  onAction,
  onClose,
  showDemo = true,
  children,
  message,
  autoHideDuration = 6000,
  ...props 
}) => {
  const [open, setOpen] = useState(false);

  const handleShow = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  };

  const handleAction = () => {
    if (onAction) {
      onAction();
    }
  };

  const snackbarContent = children || message || `This is a ${severity} snackbar message.`;

  // For ComponentViewer - show the snackbar statically
  if (!showDemo) {
    return (
      <StyledSnackbarContainer variant={variant} size={size}>
        <StyledSnackbarContent
          variant={variant as any}
          severity={severity as any}
          size={size}
          showIcon={showIcon}
          icon={showIcon ? getSeverityIcon(severity) : false}
          action={
            <>
              {actionText && (
                <StyledActionButton
                  variant={variant}
                  severity={severity}
                  size="small"
                  onClick={handleAction}
                >
                  {actionText}
                </StyledActionButton>
              )}
              {closable && (
                <MuiIconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={handleClose}
                  sx={{ 
                    borderRadius: 'var(--radius-md)',
                    transition: 'all var(--duration-fast) var(--ease-out)',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </MuiIconButton>
              )}
            </>
          }
        >
          {snackbarContent}
        </StyledSnackbarContent>
      </StyledSnackbarContainer>
    );
  }

  // For interactive demo
  return (
    <div>
      <StyledTriggerButton
        variant={variant}
        onClick={handleShow}
      >
        Show {severity.charAt(0).toUpperCase() + severity.slice(1)} Snackbar
      </StyledTriggerButton>
      
      <StyledSnackbar
        variant={variant}
        size={size}
        position={position}
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        anchorOrigin={getAnchorOrigin(position)}
        {...props}
      >
        <StyledSnackbarContent
          variant={variant as any}
          severity={severity as any}
          size={size}
          showIcon={showIcon}
          icon={showIcon ? getSeverityIcon(severity) : false}
          onClose={closable ? handleClose : undefined}
          action={
            actionText ? (
              <StyledActionButton
                variant={variant}
                severity={severity}
                size="small"
                onClick={handleAction}
              >
                {actionText}
              </StyledActionButton>
            ) : undefined
          }
        >
          {snackbarContent}
        </StyledSnackbarContent>
      </StyledSnackbar>
    </div>
  );
};

export default Snackbar;
