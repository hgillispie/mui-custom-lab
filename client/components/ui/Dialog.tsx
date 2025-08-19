import React, { useState } from 'react';
import MuiDialog from '@mui/material/Dialog';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiButton from '@mui/material/Button';
import MuiIconButton from '@mui/material/IconButton';
import MuiTypography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { DialogProps as MuiDialogProps } from '@mui/material/Dialog';
import { 
  Close as CloseIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
  Error as ErrorIcon
} from '@mui/icons-material';

export interface DialogProps extends Omit<MuiDialogProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  type?: 'default' | 'confirmation' | 'info' | 'warning' | 'error';
  title?: string;
  content?: React.ReactNode;
  showCloseButton?: boolean;
  primaryAction?: {
    label: string;
    onClick: () => void;
    color?: 'primary' | 'secondary' | 'error';
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  onClose?: () => void;
  showDemo?: boolean;
}

// HEAVILY TRANSFORMED Dialog with design tokens
const StyledDialog = styled(MuiDialog, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<{ variant?: string; size?: string }>(({ theme, variant = 'contained', size = 'medium' }) => ({
  '& .MuiDialog-paper': {
    fontFamily: 'var(--font-family-sans)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-xl)',
    overflow: 'hidden',
    
    // Size variations
    ...(size === 'small' && {
      minWidth: '320px',
      maxWidth: '400px',
    }),
    
    ...(size === 'medium' && {
      minWidth: '480px',
      maxWidth: '600px',
    }),
    
    ...(size === 'large' && {
      minWidth: '640px',
      maxWidth: '800px',
    }),

    // Variant styling
    ...(variant === 'contained' && {
      backgroundColor: 'var(--color-white)',
      border: '1px solid var(--color-border-default)',
    }),

    ...(variant === 'outlined' && {
      backgroundColor: 'var(--color-white)',
      border: '2px solid var(--color-border-default)',
    }),

    ...(variant === 'minimal' && {
      backgroundColor: 'var(--color-white)',
      border: '1px solid var(--color-border-subtle)',
      boxShadow: 'var(--shadow-lg)',
    }),

    // Responsive sizing
    '@media (max-width: 640px)': {
      margin: 'var(--spacing-4)',
      minWidth: 'auto',
      maxWidth: 'none',
      width: 'calc(100vw - var(--spacing-8))',
    },
  },

  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(4px)',
  },
}));

// HEAVILY TRANSFORMED Dialog Title with design tokens
const StyledDialogTitle = styled(MuiDialogTitle, {
  shouldForwardProp: (prop) => !['type'].includes(prop),
})<{ type?: string }>(({ theme, type = 'default' }) => ({
  fontFamily: 'var(--font-family-sans)',
  fontWeight: 'var(--font-weight-semibold)',
  fontSize: 'var(--font-size-lg)',
  padding: 'var(--spacing-4) var(--spacing-5)',
  borderBottom: '1px solid var(--color-border-subtle)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 'var(--spacing-2)',
  
  // Type-specific colors
  ...(type === 'info' && {
    color: 'var(--color-primary-700)',
    backgroundColor: 'var(--color-primary-50)',
    borderBottomColor: 'var(--color-primary-200)',
  }),

  ...(type === 'warning' && {
    color: 'var(--color-warning-700)',
    backgroundColor: 'var(--color-warning-50)',
    borderBottomColor: 'var(--color-warning-200)',
  }),

  ...(type === 'error' && {
    color: 'var(--color-error-700)',
    backgroundColor: 'var(--color-error-50)',
    borderBottomColor: 'var(--color-error-200)',
  }),

  ...(type === 'confirmation' && {
    color: 'var(--color-success-700)',
    backgroundColor: 'var(--color-success-50)',
    borderBottomColor: 'var(--color-success-200)',
  }),
}));

// HEAVILY TRANSFORMED Dialog Content with design tokens
const StyledDialogContent = styled(MuiDialogContent)(({ theme }) => ({
  fontFamily: 'var(--font-family-sans)',
  fontSize: 'var(--font-size-base)',
  lineHeight: 1.6,
  color: 'var(--color-text-primary)',
  padding: 'var(--spacing-5)',
}));

// HEAVILY TRANSFORMED Dialog Actions with design tokens
const StyledDialogActions = styled(MuiDialogActions)(({ theme }) => ({
  padding: 'var(--spacing-4) var(--spacing-5)',
  borderTop: '1px solid var(--color-border-subtle)',
  backgroundColor: 'var(--color-gray-50)',
  gap: 'var(--spacing-3)',
}));

// HEAVILY TRANSFORMED Action Button with design tokens
const StyledActionButton = styled(MuiButton, {
  shouldForwardProp: (prop) => !['buttonType'].includes(prop),
})<{ buttonType?: 'primary' | 'secondary' | 'error' }>(({ theme, buttonType = 'primary' }) => ({
  fontFamily: 'var(--font-family-sans)',
  textTransform: 'none',
  fontWeight: 'var(--font-weight-medium)',
  borderRadius: 'var(--radius-button)',
  padding: 'var(--spacing-2) var(--spacing-4)',
  fontSize: 'var(--font-size-sm)',
  minWidth: '80px',
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  '&:hover': {
    transform: 'translateY(-1px)',
    boxShadow: 'var(--shadow-md)',
  },

  // Button type styling
  ...(buttonType === 'primary' && {
    backgroundColor: 'var(--color-primary-600)',
    color: 'var(--color-white)',
    '&:hover': {
      backgroundColor: 'var(--color-primary-700)',
    },
  }),

  ...(buttonType === 'secondary' && {
    backgroundColor: 'transparent',
    color: 'var(--color-text-secondary)',
    border: '1px solid var(--color-border-default)',
    '&:hover': {
      backgroundColor: 'var(--color-gray-50)',
      borderColor: 'var(--color-border-strong)',
    },
  }),

  ...(buttonType === 'error' && {
    backgroundColor: 'var(--color-error-600)',
    color: 'var(--color-white)',
    '&:hover': {
      backgroundColor: 'var(--color-error-700)',
    },
  }),
}));

// HEAVILY TRANSFORMED Close Button with design tokens
const StyledCloseButton = styled(MuiIconButton)(({ theme }) => ({
  borderRadius: 'var(--radius-md)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  color: 'var(--color-text-secondary)',
  
  '&:hover': {
    backgroundColor: 'var(--color-gray-100)',
    transform: 'scale(1.1)',
    color: 'var(--color-text-primary)',
  },
}));

// HEAVILY TRANSFORMED Trigger Button
const StyledTriggerButton = styled(MuiButton)(({ theme }) => ({
  fontFamily: 'var(--font-family-sans)',
  textTransform: 'none',
  fontWeight: 'var(--font-weight-medium)',
  borderRadius: 'var(--radius-button)',
  padding: 'var(--spacing-2-5) var(--spacing-4)',
  fontSize: 'var(--font-size-base)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-lg)',
  },
}));

// Get icon for dialog type
const getTypeIcon = (type: string) => {
  switch (type) {
    case 'info':
      return <InfoIcon />;
    case 'warning':
      return <WarningIcon />;
    case 'error':
      return <ErrorIcon />;
    default:
      return null;
  }
};

// Sample content for different dialog types
const getSampleContent = (type: string) => {
  switch (type) {
    case 'confirmation':
      return {
        title: 'Confirm Action',
        content: 'Are you sure you want to proceed with this action? This cannot be undone.',
      };
    case 'info':
      return {
        title: 'Information',
        content: 'Here is some important information you should know about this feature.',
      };
    case 'warning':
      return {
        title: 'Warning',
        content: 'Please review your changes carefully before proceeding. Some data may be affected.',
      };
    case 'error':
      return {
        title: 'Error Occurred',
        content: 'An unexpected error has occurred. Please try again or contact support if the problem persists.',
      };
    default:
      return {
        title: 'Dialog Title',
        content: 'This is the dialog content. You can put any information or components here.',
      };
  }
};

export const Dialog: React.FC<DialogProps> = ({
  variant = 'contained',
  size = 'medium',
  type = 'default',
  title: propTitle,
  content: propContent,
  showCloseButton = true,
  primaryAction,
  secondaryAction,
  open: propOpen,
  onClose,
  showDemo = true,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  };

  // Use controlled open state if provided, otherwise use internal state
  const isOpen = propOpen !== undefined ? propOpen : open;

  // Get sample content based on type
  const sampleContent = getSampleContent(type);
  const title = propTitle || sampleContent.title;
  const content = propContent || sampleContent.content;

  // Default actions based on type
  const getDefaultActions = () => {
    if (primaryAction || secondaryAction) {
      return (
        <>
          {secondaryAction && (
            <StyledActionButton 
              buttonType="secondary" 
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.label}
            </StyledActionButton>
          )}
          {primaryAction && (
            <StyledActionButton 
              buttonType={primaryAction.color || 'primary'} 
              onClick={primaryAction.onClick}
            >
              {primaryAction.label}
            </StyledActionButton>
          )}
        </>
      );
    }

    if (type === 'confirmation') {
      return (
        <>
          <StyledActionButton buttonType="secondary" onClick={handleClose}>
            Cancel
          </StyledActionButton>
          <StyledActionButton buttonType="primary" onClick={handleClose}>
            Confirm
          </StyledActionButton>
        </>
      );
    }
    
    if (type === 'error') {
      return (
        <StyledActionButton buttonType="error" onClick={handleClose}>
          Close
        </StyledActionButton>
      );
    }
    
    return (
      <StyledActionButton buttonType="primary" onClick={handleClose}>
        OK
      </StyledActionButton>
    );
  };

  // For ComponentViewer - show trigger button
  if (!showDemo) {
    return (
      <div>
        <StyledTriggerButton
          variant="contained"
          onClick={handleOpen}
        >
          Show {type.charAt(0).toUpperCase() + type.slice(1)} Dialog
        </StyledTriggerButton>
        
        <StyledDialog
          variant={variant}
          size={size}
          open={isOpen}
          onClose={handleClose}
          {...props}
        >
          <StyledDialogTitle type={type}>
            <MuiTypography component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {getTypeIcon(type)}
              {title}
            </MuiTypography>
            {showCloseButton && (
              <StyledCloseButton size="small" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </StyledCloseButton>
            )}
          </StyledDialogTitle>
          
          <StyledDialogContent>
            {content}
          </StyledDialogContent>
          
          <StyledDialogActions>
            {getDefaultActions()}
          </StyledDialogActions>
        </StyledDialog>
      </div>
    );
  }

  // For interactive demo
  return (
    <div>
      <StyledTriggerButton
        variant="contained"
        onClick={handleOpen}
      >
        Show {type.charAt(0).toUpperCase() + type.slice(1)} Dialog
      </StyledTriggerButton>
      
      <StyledDialog
        variant={variant}
        size={size}
        open={isOpen}
        onClose={handleClose}
        {...props}
      >
        <StyledDialogTitle type={type}>
          <MuiTypography component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {getTypeIcon(type)}
            {title}
          </MuiTypography>
          {showCloseButton && (
            <StyledCloseButton size="small" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </StyledCloseButton>
          )}
        </StyledDialogTitle>
        
        <StyledDialogContent>
          {content}
        </StyledDialogContent>
        
        <StyledDialogActions>
          {getDefaultActions()}
        </StyledDialogActions>
      </StyledDialog>
    </div>
  );
};

export default Dialog;
