import React from 'react';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import MuiTypography from '@mui/material/Typography';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { BreadcrumbsProps as MuiBreadcrumbsProps } from '@mui/material/Breadcrumbs';
import { 
  NavigateNext as NavigateNextIcon,
  Home as HomeIcon,
  ChevronRight as ChevronRightIcon,
  MoreHoriz as MoreHorizIcon
} from '@mui/icons-material';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactElement;
  disabled?: boolean;
}

export interface BreadcrumbsProps extends Omit<MuiBreadcrumbsProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  items?: BreadcrumbItem[];
  showHomeIcon?: boolean;
  maxItems?: number;
  separator?: React.ReactNode;
  showDemo?: boolean;
}

// HEAVILY TRANSFORMED Breadcrumbs with design tokens
const StyledBreadcrumbs = styled(MuiBreadcrumbs, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<BreadcrumbsProps>(({ theme, variant = 'contained', size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  
  // Container styling based on variant
  ...(variant === 'contained' && {
    backgroundColor: 'var(--color-gray-50)',
    padding: 'var(--spacing-2) var(--spacing-3)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--color-gray-200)',
  }),
  
  ...(variant === 'outlined' && {
    padding: 'var(--spacing-2) var(--spacing-3)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--color-gray-300)',
    backgroundColor: 'transparent',
  }),
  
  ...(variant === 'minimal' && {
    padding: 'var(--spacing-1) 0',
    backgroundColor: 'transparent',
  }),
  
  // Size variations
  ...(size === 'small' && {
    '& .MuiBreadcrumbs-separator': {
      fontSize: 'var(--font-size-xs)',
      margin: '0 var(--spacing-1)',
    },
  }),
  
  ...(size === 'medium' && {
    '& .MuiBreadcrumbs-separator': {
      fontSize: 'var(--font-size-sm)',
      margin: '0 var(--spacing-1-5)',
    },
  }),
  
  ...(size === 'large' && {
    '& .MuiBreadcrumbs-separator': {
      fontSize: 'var(--font-size-base)',
      margin: '0 var(--spacing-2)',
    },
  }),
  
  // Separator styling
  '& .MuiBreadcrumbs-separator': {
    color: 'var(--color-text-secondary)',
    fontWeight: 'var(--font-weight-normal)',
  },
  
  // List styling
  '& .MuiBreadcrumbs-ol': {
    alignItems: 'center',
  },
  
  // List item styling
  '& .MuiBreadcrumbs-li': {
    display: 'flex',
    alignItems: 'center',
  },
}));

const StyledBreadcrumbLink = styled(MuiLink, {
  shouldForwardProp: (prop) => !['size'].includes(prop),
})<{ size?: string }>(({ theme, size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  fontWeight: 'var(--font-weight-medium)',
  textDecoration: 'none',
  color: 'var(--color-text-secondary)',
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--spacing-1)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  borderRadius: 'var(--radius-sm)',
  padding: 'var(--spacing-1) var(--spacing-1-5)',
  
  // Size variations
  ...(size === 'small' && {
    fontSize: 'var(--font-size-xs)',
    gap: 'var(--spacing-0-5)',
    padding: 'var(--spacing-0-5) var(--spacing-1)',
    
    '& .MuiSvgIcon-root': {
      fontSize: '14px',
    },
  }),
  
  ...(size === 'medium' && {
    fontSize: 'var(--font-size-sm)',
    
    '& .MuiSvgIcon-root': {
      fontSize: '16px',
    },
  }),
  
  ...(size === 'large' && {
    fontSize: 'var(--font-size-base)',
    
    '& .MuiSvgIcon-root': {
      fontSize: '18px',
    },
  }),
  
  '&:hover': {
    backgroundColor: 'var(--color-primary-50)',
    color: 'var(--color-primary-600)',
    textDecoration: 'none',
    transform: 'translateY(-1px)',
  },
  
  '&:active': {
    transform: 'translateY(0)',
  },
  
  // Icon styling
  '& .MuiSvgIcon-root': {
    transition: 'color var(--duration-fast) var(--ease-out)',
  },
  
  '&:hover .MuiSvgIcon-root': {
    color: 'var(--color-primary-500)',
  },
}));

const StyledCurrentPage = styled(MuiTypography, {
  shouldForwardProp: (prop) => !['size'].includes(prop),
})<{ size?: string }>(({ theme, size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  fontWeight: 'var(--font-weight-semibold)',
  color: 'var(--color-text-primary)',
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--spacing-1)',
  
  // Size variations
  ...(size === 'small' && {
    fontSize: 'var(--font-size-xs)',
    gap: 'var(--spacing-0-5)',
    
    '& .MuiSvgIcon-root': {
      fontSize: '14px',
    },
  }),
  
  ...(size === 'medium' && {
    fontSize: 'var(--font-size-sm)',
    
    '& .MuiSvgIcon-root': {
      fontSize: '16px',
    },
  }),
  
  ...(size === 'large' && {
    fontSize: 'var(--font-size-base)',
    
    '& .MuiSvgIcon-root': {
      fontSize: '18px',
    },
  }),
}));

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  variant = 'contained',
  size = 'medium',
  items,
  showHomeIcon = false,
  maxItems = 8,
  separator,
  showDemo = false,
  children,
  ...props
}) => {
  // Demo data
  const demoItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/', icon: showHomeIcon ? <HomeIcon /> : undefined },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Smartphones', href: '/products/electronics/smartphones' },
    { label: 'iPhone 15 Pro', href: '/products/electronics/smartphones/iphone-15-pro' },
    { label: 'Space Black' }, // Current page, no href
  ];

  const breadcrumbItems = items || demoItems;
  const separatorIcon = separator || <NavigateNextIcon />;

  const renderBreadcrumbItem = (item: BreadcrumbItem, index: number, isLast: boolean) => {
    if (isLast) {
      return (
        <StyledCurrentPage key={index} size={size}>
          {item.icon}
          {item.label}
        </StyledCurrentPage>
      );
    }

    return (
      <StyledBreadcrumbLink
        key={index}
        href={item.href}
        size={size}
        underline="none"
        color="inherit"
        onClick={(e) => {
          if (showDemo) {
            e.preventDefault();
          }
        }}
      >
        {item.icon}
        {item.label}
      </StyledBreadcrumbLink>
    );
  };

  if (showDemo) {
    return (
      <MuiBox sx={{ width: '100%' }}>
        <StyledBreadcrumbs
          variant={variant}
          size={size}
          separator={separatorIcon}
          maxItems={maxItems}
          {...props}
        >
          {breadcrumbItems.map((item, index) =>
            renderBreadcrumbItem(item, index, index === breadcrumbItems.length - 1)
          )}
        </StyledBreadcrumbs>
      </MuiBox>
    );
  }

  if (items) {
    return (
      <StyledBreadcrumbs
        variant={variant}
        size={size}
        separator={separatorIcon}
        maxItems={maxItems}
        {...props}
      >
        {breadcrumbItems.map((item, index) =>
          renderBreadcrumbItem(item, index, index === breadcrumbItems.length - 1)
        )}
      </StyledBreadcrumbs>
    );
  }

  return (
    <StyledBreadcrumbs
      variant={variant}
      size={size}
      separator={separatorIcon}
      maxItems={maxItems}
      {...props}
    >
      {children}
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
