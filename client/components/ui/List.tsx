import React from 'react';
import MuiList from '@mui/material/List';
import MuiListItem from '@mui/material/ListItem';
import MuiListItemButton from '@mui/material/ListItemButton';
import MuiListItemIcon from '@mui/material/ListItemIcon';
import MuiListItemText from '@mui/material/ListItemText';
import MuiListItemAvatar from '@mui/material/ListItemAvatar';
import MuiListSubheader from '@mui/material/ListSubheader';
import MuiAvatar from '@mui/material/Avatar';
import MuiDivider from '@mui/material/Divider';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { ListProps as MuiListProps } from '@mui/material/List';
import { 
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Star as StarIcon,
  Folder as FolderIcon,
  InsertDriveFile as FileIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material';

export interface ListItemData {
  id: string | number;
  primary: string;
  secondary?: string;
  avatar?: string;
  icon?: React.ReactElement;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
  divider?: boolean;
  nested?: boolean;
  badge?: string | number;
}

export interface ListProps extends Omit<MuiListProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  items?: ListItemData[];
  showDividers?: boolean;
  showIcons?: boolean;
  showAvatars?: boolean;
  interactive?: boolean;
  dense?: boolean;
  subheader?: string;
  showDemo?: boolean;
}

// HEAVILY TRANSFORMED List with design tokens
const StyledList = styled(MuiList, {
  shouldForwardProp: (prop) => !['variant', 'size', 'interactive'].includes(prop),
})<ListProps & { interactive?: boolean }>(({ theme, variant = 'contained', size = 'medium', interactive = false }) => ({
  fontFamily: 'var(--font-family-sans)',
  
  // Container styling based on variant
  ...(variant === 'contained' && {
    backgroundColor: 'var(--color-bg-elevated)',
    border: '1px solid var(--color-border-default)',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
  }),
  
  ...(variant === 'outlined' && {
    border: '1px solid var(--color-border-default)',
    borderRadius: 'var(--radius-lg)',
    backgroundColor: 'transparent',
    overflow: 'hidden',
  }),
  
  ...(variant === 'minimal' && {
    backgroundColor: 'transparent',
    border: 'none',
  }),
  
  // Size-based padding
  ...(size === 'small' && {
    '& .MuiListItem-root': {
      padding: 'var(--spacing-1) var(--spacing-2)',
    },
  }),
  
  ...(size === 'medium' && {
    '& .MuiListItem-root': {
      padding: 'var(--spacing-2) var(--spacing-3)',
    },
  }),
  
  ...(size === 'large' && {
    '& .MuiListItem-root': {
      padding: 'var(--spacing-3) var(--spacing-4)',
    },
  }),
}));

const StyledListItemButton = styled(MuiListItemButton, {
  shouldForwardProp: (prop) => !['size'].includes(prop),
})<{ size?: string }>(({ theme, size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  borderRadius: 'var(--radius-md)',
  margin: '0 var(--spacing-1)',
  
  '&:hover': {
    backgroundColor: 'var(--color-primary-50)',
    transform: 'translateX(var(--spacing-1))',
  },
  
  '&.Mui-selected': {
    backgroundColor: 'var(--color-primary-100)',
    color: 'var(--color-primary-700)',
    
    '&:hover': {
      backgroundColor: 'var(--color-primary-150)',
    },
    
    '& .MuiListItemIcon-root': {
      color: 'var(--color-primary-600)',
    },
  },
  
  '&.Mui-disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  
  // Size variations
  ...(size === 'small' && {
    minHeight: '36px',
    padding: 'var(--spacing-1) var(--spacing-2)',
  }),
  
  ...(size === 'medium' && {
    minHeight: '48px',
    padding: 'var(--spacing-2) var(--spacing-3)',
  }),
  
  ...(size === 'large' && {
    minHeight: '56px',
    padding: 'var(--spacing-3) var(--spacing-4)',
  }),
}));

const StyledListItemText = styled(MuiListItemText, {
  shouldForwardProp: (prop) => !['size'].includes(prop),
})<{ size?: string }>(({ theme, size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  
  '& .MuiListItemText-primary': {
    fontFamily: 'var(--font-family-sans)',
    fontWeight: 'var(--font-weight-medium)',
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
  
  '& .MuiListItemText-secondary': {
    fontFamily: 'var(--font-family-sans)',
    color: 'var(--color-text-secondary)',
    
    // Size variations
    ...(size === 'small' && {
      fontSize: 'var(--font-size-xs)',
    }),
    
    ...(size === 'medium' && {
      fontSize: 'var(--font-size-sm)',
    }),
    
    ...(size === 'large' && {
      fontSize: 'var(--font-size-base)',
    }),
  },
}));

const StyledListItemIcon = styled(MuiListItemIcon, {
  shouldForwardProp: (prop) => !['size'].includes(prop),
})<{ size?: string }>(({ theme, size = 'medium' }) => ({
  color: 'var(--color-text-secondary)',
  minWidth: 'auto',
  marginRight: 'var(--spacing-2)',
  
  // Size variations
  ...(size === 'small' && {
    marginRight: 'var(--spacing-1-5)',
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
    marginRight: 'var(--spacing-3)',
    '& .MuiSvgIcon-root': {
      fontSize: '24px',
    },
  }),
}));

const StyledListSubheader = styled(MuiListSubheader)(({ theme }) => ({
  fontFamily: 'var(--font-family-sans)',
  fontWeight: 'var(--font-weight-semibold)',
  fontSize: 'var(--font-size-sm)',
  color: 'var(--color-text-secondary)',
  backgroundColor: 'var(--color-gray-50)',
  borderBottom: '1px solid var(--color-border-subtle)',
  padding: 'var(--spacing-2) var(--spacing-3)',
  lineHeight: 1.4,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
}));

const BadgeContainer = styled(MuiBox)(({ theme }) => ({
  backgroundColor: 'var(--color-primary-500)',
  color: 'var(--color-white)',
  borderRadius: 'var(--radius-full)',
  padding: '1px 3px',
  fontSize: '9px',
  fontWeight: 'var(--font-weight-medium)',
  minWidth: '14px',
  height: '14px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
  marginLeft: 'var(--spacing-1)',
  verticalAlign: 'middle',
}));

const List: React.FC<ListProps> = ({
  variant = 'contained',
  size = 'medium',
  items,
  showDividers = false,
  showIcons = true,
  showAvatars = false,
  interactive = true,
  dense = false,
  subheader,
  showDemo = false,
  children,
  ...props
}) => {
  const [selectedItem, setSelectedItem] = React.useState<string | number | null>(null);

  // Demo data
  const demoItems: ListItemData[] = [
    {
      id: 1,
      primary: 'John Doe',
      secondary: 'Software Engineer',
      avatar: '/placeholder.svg',
      icon: <PersonIcon />,
      onClick: () => setSelectedItem(1)
    },
    {
      id: 2,
      primary: 'Jane Smith',
      secondary: 'Product Manager',
      avatar: '/placeholder.svg',
      icon: <PersonIcon />,
      onClick: () => setSelectedItem(2)
    },
    {
      id: 3,
      primary: 'Mike Johnson',
      secondary: 'UI/UX Designer',
      avatar: '/placeholder.svg',
      icon: <PersonIcon />,
      onClick: () => setSelectedItem(3),
      badge: '5'
    },
    {
      id: 4,
      primary: 'Sarah Wilson',
      secondary: 'Data Scientist',
      avatar: '/placeholder.svg',
      icon: <PersonIcon />,
      onClick: () => setSelectedItem(4),
      divider: true
    },
  ];

  const listItems = items || demoItems;

  const renderListItem = (item: ListItemData, index: number) => {
    const isSelected = selectedItem === item.id;
    
    if (interactive) {
      return (
        <React.Fragment key={item.id}>
          <StyledListItemButton
            size={size}
            selected={isSelected}
            disabled={item.disabled}
            onClick={() => {
              if (item.onClick) {
                item.onClick();
              }
              if (showDemo) {
                setSelectedItem(item.id);
              }
            }}
          >
            {showIcons && item.icon && (
              <StyledListItemIcon size={size}>
                {item.icon}
              </StyledListItemIcon>
            )}
            
            {showAvatars && item.avatar && (
              <MuiListItemAvatar>
                <MuiAvatar 
                  src={item.avatar}
                  sx={{ 
                    width: size === 'small' ? 32 : size === 'large' ? 48 : 40,
                    height: size === 'small' ? 32 : size === 'large' ? 48 : 40
                  }}
                >
                  {item.primary.charAt(0)}
                </MuiAvatar>
              </MuiListItemAvatar>
            )}
            
            <StyledListItemText
              size={size}
              primary={
                <MuiBox sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  {item.primary}
                  {item.badge && (
                    <BadgeContainer>
                      {item.badge}
                    </BadgeContainer>
                  )}
                </MuiBox>
              }
              secondary={item.secondary}
            />
            
            <ChevronRightIcon sx={{ color: 'var(--color-text-tertiary)' }} />
          </StyledListItemButton>
          
          {(showDividers || item.divider) && index < listItems.length - 1 && (
            <MuiDivider variant="inset" component="li" />
          )}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment key={item.id}>
        <MuiListItem>
          {showIcons && item.icon && (
            <StyledListItemIcon size={size}>
              {item.icon}
            </StyledListItemIcon>
          )}
          
          {showAvatars && item.avatar && (
            <MuiListItemAvatar>
              <MuiAvatar 
                src={item.avatar}
                sx={{ 
                  width: size === 'small' ? 32 : size === 'large' ? 48 : 40,
                  height: size === 'small' ? 32 : size === 'large' ? 48 : 40
                }}
              >
                {item.primary.charAt(0)}
              </MuiAvatar>
            </MuiListItemAvatar>
          )}
          
          <StyledListItemText
            size={size}
            primary={
              <MuiBox sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {item.primary}
                {item.badge && (
                  <BadgeContainer>
                    {item.badge}
                  </BadgeContainer>
                )}
              </MuiBox>
            }
            secondary={item.secondary}
          />
        </MuiListItem>
        
        {(showDividers || item.divider) && index < listItems.length - 1 && (
          <MuiDivider variant="inset" component="li" />
        )}
      </React.Fragment>
    );
  };

  if (showDemo || items) {
    return (
      <StyledList
        variant={variant}
        size={size}
        interactive={interactive}
        dense={dense}
        subheader={subheader ? <StyledListSubheader>{subheader}</StyledListSubheader> : undefined}
        {...props}
      >
        {listItems.map((item, index) => renderListItem(item, index))}
      </StyledList>
    );
  }

  return (
    <StyledList
      variant={variant}
      size={size}
      interactive={interactive}
      dense={dense}
      subheader={subheader ? <StyledListSubheader>{subheader}</StyledListSubheader> : undefined}
      {...props}
    >
      {children}
    </StyledList>
  );
};

export default List;
