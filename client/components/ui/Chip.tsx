import React from 'react';
import MuiChip from '@mui/material/Chip';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { ChipProps as MuiChipProps } from '@mui/material/Chip';
import { 
  Close as CloseIcon,
  Check as CheckIcon,
  Person as PersonIcon,
  Tag as TagIcon
} from '@mui/icons-material';

export interface ChipProps extends Omit<MuiChipProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  showDemo?: boolean;
}

// HEAVILY TRANSFORMED Chip with design tokens
const StyledChip = styled(MuiChip, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<ChipProps>(({ theme, variant = 'contained', size = 'medium', color = 'default' }) => ({
  fontFamily: 'var(--font-family-sans)',
  fontWeight: 'var(--font-weight-medium)',
  borderRadius: 'var(--radius-full)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  // Size variations
  ...(size === 'small' && {
    height: '24px',
    fontSize: 'var(--font-size-xs)',
    '& .MuiChip-icon': {
      fontSize: '14px',
      marginLeft: '4px',
    },
    '& .MuiChip-deleteIcon': {
      fontSize: '14px',
      marginRight: '4px',
    },
    '& .MuiChip-avatar': {
      width: '18px',
      height: '18px',
      fontSize: 'var(--font-size-xs)',
    },
  }),
  
  ...(size === 'medium' && {
    height: '32px',
    fontSize: 'var(--font-size-sm)',
    '& .MuiChip-icon': {
      fontSize: '16px',
      marginLeft: '6px',
    },
    '& .MuiChip-deleteIcon': {
      fontSize: '16px',
      marginRight: '6px',
    },
    '& .MuiChip-avatar': {
      width: '22px',
      height: '22px',
      fontSize: 'var(--font-size-xs)',
    },
  }),
  
  ...(size === 'large' && {
    height: '40px',
    fontSize: 'var(--font-size-base)',
    '& .MuiChip-icon': {
      fontSize: '18px',
      marginLeft: '8px',
    },
    '& .MuiChip-deleteIcon': {
      fontSize: '18px',
      marginRight: '8px',
    },
    '& .MuiChip-avatar': {
      width: '26px',
      height: '26px',
      fontSize: 'var(--font-size-sm)',
    },
  }),

  // Icon styling
  '& .MuiChip-icon': {
    color: 'inherit',
  },
  
  '& .MuiChip-deleteIcon': {
    color: 'inherit',
    opacity: 0.7,
    transition: 'all var(--duration-fast) var(--ease-out)',
    
    '&:hover': {
      opacity: 1,
      transform: 'scale(1.1)',
    },
  },

  // Variant styling with color support
  ...(variant === 'contained' && {
    ...(color === 'default' && {
      backgroundColor: 'var(--color-gray-200)',
      color: 'var(--color-gray-800)',
      '&:hover': {
        backgroundColor: 'var(--color-gray-300)',
      },
    }),
    ...(color === 'primary' && {
      backgroundColor: 'var(--color-primary-600)',
      color: 'var(--color-white)',
      '&:hover': {
        backgroundColor: 'var(--color-primary-700)',
      },
    }),
    ...(color === 'secondary' && {
      backgroundColor: 'var(--color-secondary-600)',
      color: 'var(--color-white)',
      '&:hover': {
        backgroundColor: 'var(--color-secondary-700)',
      },
    }),
    ...(color === 'success' && {
      backgroundColor: 'var(--color-success-600)',
      color: 'var(--color-white)',
      '&:hover': {
        backgroundColor: 'var(--color-success-700)',
      },
    }),
    ...(color === 'error' && {
      backgroundColor: 'var(--color-error-600)',
      color: 'var(--color-white)',
      '&:hover': {
        backgroundColor: 'var(--color-error-700)',
      },
    }),
    ...(color === 'warning' && {
      backgroundColor: 'var(--color-warning-600)',
      color: 'var(--color-white)',
      '&:hover': {
        backgroundColor: 'var(--color-warning-700)',
      },
    }),
  }),

  ...(variant === 'outlined' && {
    backgroundColor: 'transparent',
    border: '2px solid',
    ...(color === 'default' && {
      borderColor: 'var(--color-gray-300)',
      color: 'var(--color-gray-700)',
      '&:hover': {
        backgroundColor: 'var(--color-gray-50)',
        borderColor: 'var(--color-gray-400)',
      },
    }),
    ...(color === 'primary' && {
      borderColor: 'var(--color-primary-600)',
      color: 'var(--color-primary-600)',
      '&:hover': {
        backgroundColor: 'var(--color-primary-50)',
        borderColor: 'var(--color-primary-700)',
      },
    }),
    ...(color === 'secondary' && {
      borderColor: 'var(--color-secondary-600)',
      color: 'var(--color-secondary-600)',
      '&:hover': {
        backgroundColor: 'var(--color-secondary-50)',
        borderColor: 'var(--color-secondary-700)',
      },
    }),
    ...(color === 'success' && {
      borderColor: 'var(--color-success-600)',
      color: 'var(--color-success-600)',
      '&:hover': {
        backgroundColor: 'var(--color-success-50)',
        borderColor: 'var(--color-success-700)',
      },
    }),
    ...(color === 'error' && {
      borderColor: 'var(--color-error-600)',
      color: 'var(--color-error-600)',
      '&:hover': {
        backgroundColor: 'var(--color-error-50)',
        borderColor: 'var(--color-error-700)',
      },
    }),
    ...(color === 'warning' && {
      borderColor: 'var(--color-warning-600)',
      color: 'var(--color-warning-600)',
      '&:hover': {
        backgroundColor: 'var(--color-warning-50)',
        borderColor: 'var(--color-warning-700)',
      },
    }),
  }),

  ...(variant === 'minimal' && {
    ...(color === 'default' && {
      backgroundColor: 'var(--color-gray-100)',
      color: 'var(--color-gray-700)',
      '&:hover': {
        backgroundColor: 'var(--color-gray-200)',
      },
    }),
    ...(color === 'primary' && {
      backgroundColor: 'var(--color-primary-100)',
      color: 'var(--color-primary-700)',
      '&:hover': {
        backgroundColor: 'var(--color-primary-200)',
      },
    }),
    ...(color === 'secondary' && {
      backgroundColor: 'var(--color-secondary-100)',
      color: 'var(--color-secondary-700)',
      '&:hover': {
        backgroundColor: 'var(--color-secondary-200)',
      },
    }),
    ...(color === 'success' && {
      backgroundColor: 'var(--color-success-100)',
      color: 'var(--color-success-700)',
      '&:hover': {
        backgroundColor: 'var(--color-success-200)',
      },
    }),
    ...(color === 'error' && {
      backgroundColor: 'var(--color-error-100)',
      color: 'var(--color-error-700)',
      '&:hover': {
        backgroundColor: 'var(--color-error-200)',
      },
    }),
    ...(color === 'warning' && {
      backgroundColor: 'var(--color-warning-100)',
      color: 'var(--color-warning-700)',
      '&:hover': {
        backgroundColor: 'var(--color-warning-200)',
      },
    }),
  }),

  // Interactive states
  '&.MuiChip-clickable:hover': {
    transform: 'translateY(-1px)',
    boxShadow: 'var(--shadow-md)',
  },

  '&.MuiChip-clickable:active': {
    transform: 'translateY(0)',
  },

  '&.MuiChip-deletable:focus': {
    backgroundColor: 'var(--color-primary-50)',
  },
}));

export const Chip: React.FC<ChipProps> = ({
  variant = 'contained',
  size = 'medium',
  showDemo = true,
  color = 'default',
  ...props
}) => {
  
  // For ComponentViewer - show single chip
  if (!showDemo) {
    return (
      <StyledChip
        variant={variant}
        size={size}
        color={color}
        label={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Chip`}
        {...props}
      />
    );
  }

  // For interactive demo - show different chip examples
  return (
    <MuiBox display="flex" gap={2} alignItems="center" justifyContent="center" flexWrap="wrap">
      <StyledChip
        variant={variant}
        size={size}
        color="default"
        label="Default"
        {...props}
      />

      <StyledChip
        variant={variant}
        size={size}
        color="primary"
        label="Primary"
        icon={<TagIcon />}
        {...props}
      />

      <StyledChip
        variant={variant}
        size={size}
        color="success"
        label="Deletable"
        deleteIcon={<CloseIcon />}
        onDelete={() => console.log('Chip deleted')}
        {...props}
      />

      <StyledChip
        variant={variant}
        size={size}
        color="warning"
        label="Clickable"
        onClick={() => console.log('Chip clicked')}
        {...props}
      />

      <StyledChip
        variant={variant}
        size={size}
        color="error"
        label="With Avatar"
        avatar={<PersonIcon />}
        {...props}
      />
    </MuiBox>
  );
};

export default Chip;
