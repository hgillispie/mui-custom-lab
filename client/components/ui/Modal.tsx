import React, { useState } from 'react';
import MuiModal from '@mui/material/Modal';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
import MuiIconButton from '@mui/material/IconButton';
import MuiButton from '@mui/material/Button';
import MuiBackdrop from '@mui/material/Backdrop';
import { styled } from '@mui/material/styles';
import { ModalProps as MuiModalProps } from '@mui/material/Modal';
import { 
  Close as CloseIcon,
  Info as InfoIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Error as ErrorIcon
} from '@mui/icons-material';

export interface ModalProps extends Omit<MuiModalProps, 'children'> {
  variant?: 'contained' | 'outlined' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  type?: 'default' | 'confirmation' | 'info' | 'warning' | 'error';
  title?: string;
  children?: React.ReactNode;
  showCloseButton?: boolean;
  actions?: React.ReactNode;
  onClose?: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  showDemo?: boolean;
}

// HEAVILY TRANSFORMED Modal Backdrop with design tokens
const StyledBackdrop = styled(MuiBackdrop)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(4px)',
  transition: 'all var(--duration-normal) var(--ease-out)',
}));

// HEAVILY TRANSFORMED Modal Container with design tokens
const StyledModalContainer = styled(MuiBox, {
  shouldForwardProp: (prop) => !['variant', 'size', 'type'].includes(prop),
})<{ variant?: string; size?: string; type?: string }>(({ theme, variant = 'contained', size = 'medium', type = 'default' }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontFamily: 'var(--font-family-sans)',
  borderRadius: 'var(--radius-lg)',
  boxShadow: 'var(--shadow-xl)',
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '90vh',
  overflow: 'hidden',
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  // Size variations
  ...(size === 'small' && {
    width: '320px',
    minHeight: '200px',
  }),
  
  ...(size === 'medium' && {
    width: '480px',
    minHeight: '280px',
  }),
  
  ...(size === 'large' && {
    width: '640px',
    minHeight: '400px',
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
    width: '90vw',
    maxWidth: 'none',
    margin: '0 5vw',
  },
}));

// HEAVILY TRANSFORMED Modal Header with design tokens
const StyledModalHeader = styled(MuiBox, {
  shouldForwardProp: (prop) => !['variant', 'type'].includes(prop),
})<{ variant?: string; type?: string }>(({ theme, variant = 'contained', type = 'default' }) => ({
  padding: 'var(--spacing-4) var(--spacing-5)',
  borderBottom: '1px solid var(--color-border-subtle)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  
  // Type-specific header colors
  ...(type === 'info' && variant === 'contained' && {
    backgroundColor: 'var(--color-primary-50)',
    borderBottomColor: 'var(--color-primary-200)',
  }),

  ...(type === 'warning' && variant === 'contained' && {
    backgroundColor: 'var(--color-warning-50)',
    borderBottomColor: 'var(--color-warning-200)',
  }),

  ...(type === 'error' && variant === 'contained' && {
    backgroundColor: 'var(--color-error-50)',
    borderBottomColor: 'var(--color-error-200)',
  }),

  ...(type === 'confirmation' && variant === 'contained' && {
    backgroundColor: 'var(--color-success-50)',
    borderBottomColor: 'var(--color-success-200)',
  }),
}));

// HEAVILY TRANSFORMED Modal Content with design tokens
const StyledModalContent = styled(MuiBox)(({ theme }) => ({
  padding: 'var(--spacing-5)',
  flex: 1,
  overflow: 'auto',
  fontFamily: 'var(--font-family-sans)',
  fontSize: 'var(--font-size-base)',
  lineHeight: 1.6,
  color: 'var(--color-text-primary)',
}));

// HEAVILY TRANSFORMED Modal Actions with design tokens
const StyledModalActions = styled(MuiBox)(({ theme }) => ({
  padding: 'var(--spacing-4) var(--spacing-5)',
  borderTop: '1px solid var(--color-border-subtle)',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 'var(--spacing-3)',
  backgroundColor: 'var(--color-gray-50)',
}));

// HEAVILY TRANSFORMED Title with design tokens
const StyledTitle = styled(MuiTypography, {
  shouldForwardProp: (prop) => !['type'].includes(prop),
})<{ type?: string }>(({ theme, type = 'default' }) => ({
  fontFamily: 'var(--font-family-sans)',
  fontWeight: 'var(--font-weight-semibold)',
  fontSize: 'var(--font-size-lg)',
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--spacing-2)',
  margin: 0,
  
  // Type-specific title colors
  ...(type === 'info' && {
    color: 'var(--color-primary-700)',
  }),

  ...(type === 'warning' && {
    color: 'var(--color-warning-700)',
  }),

  ...(type === 'error' && {
    color: 'var(--color-error-700)',
  }),

  ...(type === 'confirmation' && {
    color: 'var(--color-success-700)',
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

// HEAVILY TRANSFORMED Action Button with design tokens
const StyledActionButton = styled(MuiButton, {
  shouldForwardProp: (prop) => !['buttonType'].includes(prop),
})<{ buttonType?: 'primary' | 'secondary' | 'danger' }>(({ theme, buttonType = 'primary' }) => ({
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

  ...(buttonType === 'danger' && {
    backgroundColor: 'var(--color-error-600)',
    color: 'var(--color-white)',
    '&:hover': {
      backgroundColor: 'var(--color-error-700)',
    },
  }),
}));

// HEAVILY TRANSFORMED Demo Trigger Button
const StyledTriggerButton = styled(MuiButton, {
  shouldForwardProp: (prop) => !['triggerVariant'].includes(prop),
})<{ triggerVariant?: string }>(({ theme, triggerVariant = 'contained' }) => ({
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

  // Trigger variant styling
  ...(triggerVariant === 'contained' && {
    background: 'linear-gradient(135deg, var(--color-primary-500), var(--color-primary-600))',
    color: 'var(--color-white)',
    border: 'none',
    '&:hover': {
      background: 'linear-gradient(135deg, var(--color-primary-600), var(--color-primary-700))',
    },
  }),

  ...(triggerVariant === 'outlined' && {
    backgroundColor: 'transparent',
    color: 'var(--color-primary-600)',
    border: '2px solid var(--color-primary-500)',
    '&:hover': {
      backgroundColor: 'var(--color-primary-50)',
      borderColor: 'var(--color-primary-600)',
    },
  }),
}));

// Get icon for modal type
const getTypeIcon = (type: string) => {
  switch (type) {
    case 'info':
      return <InfoIcon />;
    case 'confirmation':
      return <CheckCircleIcon />;
    case 'warning':
      return <WarningIcon />;
    case 'error':
      return <ErrorIcon />;
    default:
      return null;
  }
};

// Sample content for different modal types
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
        content: 'Please review your changes carefully before proceeding. Some data may be lost.',
      };
    case 'error':
      return {
        title: 'Error Occurred',
        content: 'An unexpected error has occurred. Please try again or contact support if the problem persists.',
      };
    default:
      return {
        title: 'Modal Title',
        content: 'This is the modal content. You can put any information or components here.',
      };
  }
};

export const Modal: React.FC<ModalProps> = ({
  variant = 'contained',
  size = 'medium',
  type = 'default',
  title: propTitle,
  children,
  showCloseButton = true,
  actions,
  open: propOpen,
  onClose,
  onConfirm,
  onCancel,
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

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    handleClose();
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    handleClose();
  };

  // Use controlled open state if provided, otherwise use internal state
  const isOpen = propOpen !== undefined ? propOpen : open;

  // Get sample content based on type
  const sampleContent = getSampleContent(type);
  const title = propTitle || sampleContent.title;
  const content = children || sampleContent.content;

  // Default actions based on type
  const defaultActions = () => {
    if (type === 'confirmation') {
      return (
        <>
          <StyledActionButton buttonType="secondary" onClick={handleCancel}>
            Cancel
          </StyledActionButton>
          <StyledActionButton buttonType="primary" onClick={handleConfirm}>
            Confirm
          </StyledActionButton>
        </>
      );
    }
    
    if (type === 'error') {
      return (
        <StyledActionButton buttonType="danger" onClick={handleClose}>
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

  // For ComponentViewer - show trigger button that opens the modal
  if (!showDemo) {
    return (
      <div>
        <StyledTriggerButton
          triggerVariant={variant}
          onClick={handleOpen}
        >
          Show {type.charAt(0).toUpperCase() + type.slice(1)} Modal
        </StyledTriggerButton>

        <MuiModal
          open={isOpen}
          onClose={handleClose}
          slots={{ backdrop: StyledBackdrop }}
          {...props}
        >
          <StyledModalContainer variant={variant} size={size} type={type}>
            <StyledModalHeader variant={variant} type={type}>
              <StyledTitle type={type}>
                {getTypeIcon(type)}
                {title}
              </StyledTitle>
              {showCloseButton && (
                <StyledCloseButton size="small" onClick={handleClose}>
                  <CloseIcon fontSize="small" />
                </StyledCloseButton>
              )}
            </StyledModalHeader>

            <StyledModalContent>
              {content}
            </StyledModalContent>

            <StyledModalActions>
              {actions || defaultActions()}
            </StyledModalActions>
          </StyledModalContainer>
        </MuiModal>
      </div>
    );
  }

  // For interactive demo
  return (
    <div>
      <StyledTriggerButton
        triggerVariant={variant}
        onClick={handleOpen}
      >
        Show {type.charAt(0).toUpperCase() + type.slice(1)} Modal
      </StyledTriggerButton>
      
      <MuiModal
        open={isOpen}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
        {...props}
      >
        <StyledModalContainer variant={variant} size={size} type={type}>
          <StyledModalHeader variant={variant} type={type}>
            <StyledTitle type={type}>
              {getTypeIcon(type)}
              {title}
            </StyledTitle>
            {showCloseButton && (
              <StyledCloseButton size="small" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </StyledCloseButton>
            )}
          </StyledModalHeader>
          
          <StyledModalContent>
            {content}
          </StyledModalContent>
          
          <StyledModalActions>
            {actions || defaultActions()}
          </StyledModalActions>
        </StyledModalContainer>
      </MuiModal>
    </div>
  );
};

export default Modal;
