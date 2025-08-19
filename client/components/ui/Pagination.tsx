import React from 'react';
import MuiPagination from '@mui/material/Pagination';
import MuiPaginationItem from '@mui/material/PaginationItem';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
import MuiSelect from '@mui/material/Select';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiFormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import { PaginationProps as MuiPaginationProps } from '@mui/material/Pagination';
import { 
  ArrowBackIos as ArrowBackIcon,
  ArrowForwardIos as ArrowForwardIcon,
  FirstPage as FirstPageIcon,
  LastPage as LastPageIcon
} from '@mui/icons-material';

export interface PaginationProps extends Omit<MuiPaginationProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  showFirstLast?: boolean;
  showJumper?: boolean;
  showSizeChanger?: boolean;
  pageSizeOptions?: number[];
  pageSize?: number;
  onPageSizeChange?: (pageSize: number) => void;
  showTotal?: boolean;
  total?: number;
  showDemo?: boolean;
}

// HEAVILY TRANSFORMED Pagination with design tokens
const StyledPagination = styled(MuiPagination, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<PaginationProps>(({ theme, variant = 'contained', size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  
  '& .MuiPaginationItem-root': {
    fontFamily: 'var(--font-family-sans)',
    fontWeight: 'var(--font-weight-medium)',
    transition: 'all var(--duration-fast) var(--ease-out)',
    border: 'none',
    margin: '0 var(--spacing-0-5)',
    
    // Size variations
    ...(size === 'small' && {
      fontSize: 'var(--font-size-xs)',
      minWidth: '28px',
      height: '28px',
      padding: '0 var(--spacing-1)',
    }),
    
    ...(size === 'medium' && {
      fontSize: 'var(--font-size-sm)',
      minWidth: '32px',
      height: '32px',
      padding: '0 var(--spacing-1-5)',
    }),
    
    ...(size === 'large' && {
      fontSize: 'var(--font-size-base)',
      minWidth: '40px',
      height: '40px',
      padding: '0 var(--spacing-2)',
    }),
  },
  
  // Variant-specific styling
  ...(variant === 'contained' && {
    '& .MuiPaginationItem-root': {
      backgroundColor: 'var(--color-white)',
      border: '1px solid var(--color-gray-200)',
      color: 'var(--color-text-primary)',
      borderRadius: 'var(--radius-md)',
      
      '&:hover': {
        backgroundColor: 'var(--color-primary-50)',
        borderColor: 'var(--color-primary-300)',
        color: 'var(--color-primary-600)',
        transform: 'translateY(-1px)',
        boxShadow: 'var(--shadow-sm)',
      },
      
      '&.Mui-selected': {
        backgroundColor: 'var(--color-primary-500)',
        borderColor: 'var(--color-primary-500)',
        color: 'var(--color-white)',
        
        '&:hover': {
          backgroundColor: 'var(--color-primary-600)',
          borderColor: 'var(--color-primary-600)',
          transform: 'translateY(-1px)',
        },
      },
      
      '&.Mui-disabled': {
        backgroundColor: 'var(--color-gray-100)',
        borderColor: 'var(--color-gray-200)',
        color: 'var(--color-text-disabled)',
        cursor: 'not-allowed',
      },
    },
  }),
  
  ...(variant === 'outlined' && {
    '& .MuiPaginationItem-root': {
      backgroundColor: 'transparent',
      border: '1px solid var(--color-gray-300)',
      color: 'var(--color-text-primary)',
      borderRadius: 'var(--radius-md)',
      
      '&:hover': {
        backgroundColor: 'var(--color-primary-50)',
        borderColor: 'var(--color-primary-400)',
        color: 'var(--color-primary-600)',
        transform: 'translateY(-1px)',
      },
      
      '&.Mui-selected': {
        backgroundColor: 'var(--color-primary-500)',
        borderColor: 'var(--color-primary-500)',
        color: 'var(--color-white)',
        
        '&:hover': {
          backgroundColor: 'var(--color-primary-600)',
          borderColor: 'var(--color-primary-600)',
        },
      },
      
      '&.Mui-disabled': {
        backgroundColor: 'transparent',
        borderColor: 'var(--color-gray-200)',
        color: 'var(--color-text-disabled)',
      },
    },
  }),
  
  ...(variant === 'minimal' && {
    '& .MuiPaginationItem-root': {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'var(--color-text-secondary)',
      borderRadius: 'var(--radius-md)',
      
      '&:hover': {
        backgroundColor: 'var(--color-gray-100)',
        color: 'var(--color-text-primary)',
        transform: 'translateY(-1px)',
      },
      
      '&.Mui-selected': {
        backgroundColor: 'var(--color-primary-100)',
        color: 'var(--color-primary-700)',
        
        '&:hover': {
          backgroundColor: 'var(--color-primary-200)',
        },
      },
      
      '&.Mui-disabled': {
        backgroundColor: 'transparent',
        color: 'var(--color-text-disabled)',
      },
    },
  }),
}));

const PaginationContainer = styled(MuiBox)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: 'var(--spacing-3)',
  fontFamily: 'var(--font-family-sans)',
}));

const PaginationInfo = styled(MuiTypography)(({ theme }) => ({
  fontFamily: 'var(--font-family-sans)',
  fontSize: 'var(--font-size-sm)',
  color: 'var(--color-text-secondary)',
  whiteSpace: 'nowrap',
}));

const PageSizeSelector = styled(MuiFormControl)(({ theme }) => ({
  minWidth: '80px',
  
  '& .MuiSelect-select': {
    fontFamily: 'var(--font-family-sans)',
    fontSize: 'var(--font-size-sm)',
    padding: 'var(--spacing-1) var(--spacing-2)',
  },
}));

const Pagination: React.FC<PaginationProps> = ({
  variant = 'contained',
  size = 'medium',
  showFirstLast = false,
  showJumper = false,
  showSizeChanger = false,
  pageSizeOptions = [10, 20, 50, 100],
  pageSize = 10,
  onPageSizeChange,
  showTotal = false,
  total = 0,
  showDemo = false,
  count = 10,
  page = 1,
  onChange,
  ...props
}) => {
  const [currentPage, setCurrentPage] = React.useState(page);
  const [currentPageSize, setCurrentPageSize] = React.useState(pageSize);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    if (onChange) {
      onChange(event, value);
    }
  };

  const handlePageSizeChange = (event: any) => {
    const newPageSize = event.target.value;
    setCurrentPageSize(newPageSize);
    if (onPageSizeChange) {
      onPageSizeChange(newPageSize);
    }
  };

  const startItem = (currentPage - 1) * currentPageSize + 1;
  const endItem = Math.min(currentPage * currentPageSize, total);

  const renderItem = (item: any) => {
    if (showFirstLast) {
      if (item.type === 'first') {
        return (
          <MuiPaginationItem
            {...item}
            slots={{ previous: FirstPageIcon }}
          />
        );
      }
      if (item.type === 'last') {
        return (
          <MuiPaginationItem
            {...item}
            slots={{ next: LastPageIcon }}
          />
        );
      }
    }
    
    return <MuiPaginationItem {...item} />;
  };

  if (showDemo) {
    return (
      <MuiBox sx={{ width: '100%' }}>
        <PaginationContainer>
          {showTotal && total > 0 && (
            <PaginationInfo>
              Showing {startItem}-{endItem} of {total} items
            </PaginationInfo>
          )}
          
          <StyledPagination
            variant={variant}
            size={size}
            count={count}
            page={currentPage}
            onChange={handlePageChange}
            showFirstButton={showFirstLast}
            showLastButton={showFirstLast}
            renderItem={renderItem}
            {...props}
          />
          
          {showSizeChanger && (
            <MuiBox sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PaginationInfo>Show</PaginationInfo>
              <PageSizeSelector size="small">
                <MuiSelect
                  value={currentPageSize}
                  onChange={handlePageSizeChange}
                  variant="outlined"
                >
                  {pageSizeOptions.map((option) => (
                    <MuiMenuItem key={option} value={option}>
                      {option}
                    </MuiMenuItem>
                  ))}
                </MuiSelect>
              </PageSizeSelector>
              <PaginationInfo>per page</PaginationInfo>
            </MuiBox>
          )}
        </PaginationContainer>
      </MuiBox>
    );
  }

  return (
    <PaginationContainer>
      {showTotal && total > 0 && (
        <PaginationInfo>
          Showing {startItem}-{endItem} of {total} items
        </PaginationInfo>
      )}
      
      <StyledPagination
        variant={variant}
        size={size}
        count={count}
        page={currentPage}
        onChange={handlePageChange}
        showFirstButton={showFirstLast}
        showLastButton={showFirstLast}
        renderItem={renderItem}
        {...props}
      />
      
      {showSizeChanger && (
        <MuiBox sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <PaginationInfo>Show</PaginationInfo>
          <PageSizeSelector size="small">
            <MuiSelect
              value={currentPageSize}
              onChange={handlePageSizeChange}
              variant="outlined"
            >
              {pageSizeOptions.map((option) => (
                <MuiMenuItem key={option} value={option}>
                  {option}
                </MuiMenuItem>
              ))}
            </MuiSelect>
          </PageSizeSelector>
          <PaginationInfo>per page</PaginationInfo>
        </MuiBox>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
