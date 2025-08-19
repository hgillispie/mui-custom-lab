import React from 'react';
import MuiAvatar from '@mui/material/Avatar';
import MuiAvatarGroup from '@mui/material/AvatarGroup';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';
import { 
  Person as PersonIcon,
  AccountCircle as AccountCircleIcon
} from '@mui/icons-material';

export interface AvatarProps extends Omit<MuiAvatarProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  showDemo?: boolean;
}

// HEAVILY TRANSFORMED Avatar with design tokens
const StyledAvatar = styled(MuiAvatar, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<AvatarProps>(({ theme, variant = 'contained', size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  fontWeight: 'var(--font-weight-medium)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  // Size variations
  ...(size === 'small' && {
    width: '32px',
    height: '32px',
    fontSize: 'var(--font-size-sm)',
  }),
  
  ...(size === 'medium' && {
    width: '40px',
    height: '40px',
    fontSize: 'var(--font-size-base)',
  }),
  
  ...(size === 'large' && {
    width: '56px',
    height: '56px',
    fontSize: 'var(--font-size-lg)',
  }),

  // Variant styling
  ...(variant === 'contained' && {
    backgroundColor: 'var(--color-primary-600)',
    color: 'var(--color-white)',
    boxShadow: 'var(--shadow-md)',
  }),

  ...(variant === 'outlined' && {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-primary-600)',
    border: '3px solid var(--color-primary-600)',
    boxShadow: 'var(--shadow-sm)',
  }),

  ...(variant === 'minimal' && {
    backgroundColor: 'var(--color-gray-200)',
    color: 'var(--color-gray-600)',
    border: 'none',
  }),

  // Interactive states
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: 'var(--shadow-lg)',
    cursor: 'pointer',
  },

  '&:active': {
    transform: 'scale(0.98)',
  },

  // Image styling
  '& .MuiAvatar-img': {
    objectFit: 'cover',
  },

  // Icon styling
  '& .MuiSvgIcon-root': {
    ...(size === 'small' && {
      fontSize: '18px',
    }),
    ...(size === 'medium' && {
      fontSize: '22px',
    }),
    ...(size === 'large' && {
      fontSize: '32px',
    }),
  },
}));

// HEAVILY TRANSFORMED AvatarGroup with design tokens
const StyledAvatarGroup = styled(MuiAvatarGroup, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<{ variant?: string; size?: string }>(({ theme, variant = 'contained', size = 'medium' }) => ({
  '& .MuiAvatarGroup-avatar': {
    fontFamily: 'var(--font-family-sans)',
    border: '2px solid var(--color-white)',
    
    // Size variations for group avatars
    ...(size === 'small' && {
      width: '28px',
      height: '28px',
      fontSize: 'var(--font-size-xs)',
    }),
    
    ...(size === 'medium' && {
      width: '36px',
      height: '36px',
      fontSize: 'var(--font-size-sm)',
    }),
    
    ...(size === 'large' && {
      width: '48px',
      height: '48px',
      fontSize: 'var(--font-size-base)',
    }),

    // Variant styling for group avatars
    ...(variant === 'contained' && {
      backgroundColor: 'var(--color-gray-500)',
      color: 'var(--color-white)',
    }),

    ...(variant === 'outlined' && {
      backgroundColor: 'var(--color-white)',
      color: 'var(--color-gray-700)',
      border: '2px solid var(--color-gray-300)',
    }),

    ...(variant === 'minimal' && {
      backgroundColor: 'var(--color-gray-200)',
      color: 'var(--color-gray-600)',
      border: '1px solid var(--color-gray-300)',
    }),
  },
}));

// Sample avatar data for demo
const sampleAvatars = [
  { name: 'John Doe', image: null },
  { name: 'Jane Smith', image: null },
  { name: 'Bob Johnson', image: null },
  { name: 'Alice Brown', image: null },
  { name: 'Charlie Wilson', image: null },
];

export const Avatar: React.FC<AvatarProps> = ({
  variant = 'contained',
  size = 'medium',
  children,
  showDemo = true,
  src,
  alt,
  ...props
}) => {
  
  // Get initials from alt text or default
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // For ComponentViewer - show single avatar
  if (!showDemo) {
    return (
      <StyledAvatar
        variant={variant}
        size={size}
        src={src}
        alt={alt || 'User Avatar'}
        {...props}
      >
        {children || (!src ? getInitials(alt || 'User Avatar') : null)}
      </StyledAvatar>
    );
  }

  // For interactive demo - show different avatar examples
  return (
    <MuiBox display="flex" gap={3} alignItems="center" justifyContent="center" flexWrap="wrap">
      {/* Single Avatar with Initials */}
      <StyledAvatar
        variant={variant}
        size={size}
        {...props}
      >
        {getInitials('John Doe')}
      </StyledAvatar>

      {/* Avatar with Icon */}
      <StyledAvatar
        variant={variant}
        size={size}
        {...props}
      >
        <PersonIcon />
      </StyledAvatar>

      {/* Avatar with Different Initials */}
      <StyledAvatar
        variant={variant}
        size={size}
        sx={{ 
          backgroundColor: 'var(--color-success-600)',
          ...(variant === 'outlined' && { 
            borderColor: 'var(--color-success-600)',
            color: 'var(--color-success-600)',
            backgroundColor: 'var(--color-white)'
          }),
          ...(variant === 'minimal' && { 
            backgroundColor: 'var(--color-success-100)',
            color: 'var(--color-success-700)'
          }),
        }}
        {...props}
      >
        JS
      </StyledAvatar>

      {/* Avatar Group */}
      <StyledAvatarGroup 
        variant={variant} 
        size={size}
        max={4}
        sx={{
          '& .MuiAvatar-root': {
            ...(size === 'small' && {
              width: '28px',
              height: '28px',
            }),
            ...(size === 'medium' && {
              width: '36px',
              height: '36px',
            }),
            ...(size === 'large' && {
              width: '48px',
              height: '48px',
            }),
          }
        }}
      >
        {sampleAvatars.map((avatar, index) => (
          <StyledAvatar 
            key={index}
            variant={variant}
            size={size}
            src={avatar.image}
            alt={avatar.name}
          >
            {getInitials(avatar.name)}
          </StyledAvatar>
        ))}
      </StyledAvatarGroup>
    </MuiBox>
  );
};

export default Avatar;
