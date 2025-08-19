import React, { useState } from 'react';
import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableContainer from '@mui/material/TableContainer';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import MuiTableSortLabel from '@mui/material/TableSortLabel';
import MuiTablePagination from '@mui/material/TablePagination';
import MuiCheckbox from '@mui/material/Checkbox';
import MuiIconButton from '@mui/material/IconButton';
import MuiPaper from '@mui/material/Paper';
import MuiBox from '@mui/material/Box';
import MuiChip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import { TableProps as MuiTableProps } from '@mui/material/Table';
import { 
  MoreVert as MoreVertIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Warning as WarningIcon,
  Info as InfoIcon
} from '@mui/icons-material';

export interface TableColumn {
  id: string;
  label: string;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right';
  minWidth?: number;
  format?: (value: any) => string | React.ReactNode;
}

export interface TableRow {
  id: string | number;
  [key: string]: any;
}

export interface TableProps extends Omit<MuiTableProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  columns: TableColumn[];
  rows: TableRow[];
  selectable?: boolean;
  sortable?: boolean;
  pagination?: boolean;
  rowsPerPageOptions?: number[];
  onRowClick?: (row: TableRow) => void;
  onSelectionChange?: (selectedIds: (string | number)[]) => void;
  actions?: (row: TableRow) => React.ReactNode;
  showDemo?: boolean;
}

// HEAVILY TRANSFORMED Table Container with design tokens
const StyledTableContainer = styled(MuiPaper, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<{ variant?: string; size?: string }>(({ theme, variant = 'contained', size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  borderRadius: 'var(--radius-lg)',
  overflow: 'auto', // Enable both horizontal and vertical scrolling

  // Size variations
  ...(size === 'small' && {
    maxHeight: '300px',
  }),

  ...(size === 'medium' && {
    maxHeight: '500px',
  }),

  ...(size === 'large' && {
    maxHeight: '700px',
  }),

  // Variant styling
  ...(variant === 'contained' && {
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-border-default)',
    boxShadow: 'var(--shadow-md)',
  }),

  ...(variant === 'outlined' && {
    backgroundColor: 'var(--color-white)',
    border: '2px solid var(--color-border-default)',
    boxShadow: 'none',
  }),

  ...(variant === 'minimal' && {
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-border-subtle)',
    boxShadow: 'var(--shadow-sm)',
  }),

  // Ensure table has minimum width for horizontal scrolling
  '& .MuiTable-root': {
    minWidth: '650px', // Minimum width to trigger horizontal scrolling
  },
}));

// HEAVILY TRANSFORMED Table with design tokens
const StyledTable = styled(MuiTable, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<{ variant?: string; size?: string }>(({ theme, variant = 'contained', size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  
  // Size variations affecting cell padding
  ...(size === 'small' && {
    '& .MuiTableCell-root': {
      padding: 'var(--spacing-2) var(--spacing-3)',
      fontSize: 'var(--font-size-sm)',
    },
  }),
  
  ...(size === 'medium' && {
    '& .MuiTableCell-root': {
      padding: 'var(--spacing-3) var(--spacing-4)',
      fontSize: 'var(--font-size-base)',
    },
  }),
  
  ...(size === 'large' && {
    '& .MuiTableCell-root': {
      padding: 'var(--spacing-4) var(--spacing-5)',
      fontSize: 'var(--font-size-lg)',
    },
  }),
}));

// HEAVILY TRANSFORMED Table Head with design tokens
const StyledTableHead = styled(MuiTableHead, {
  shouldForwardProp: (prop) => !['variant'].includes(prop),
})<{ variant?: string }>(({ theme, variant = 'contained' }) => ({
  fontFamily: 'var(--font-family-sans)',
  
  '& .MuiTableCell-root': {
    fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--color-text-primary)',
    borderBottom: '2px solid var(--color-border-default)',
    position: 'relative',
    transition: 'all var(--duration-fast) var(--ease-out)',
  },

  // Variant-specific header styling
  ...(variant === 'contained' && {
    '& .MuiTableCell-root': {
      backgroundColor: 'var(--color-gray-50)',
    },
  }),

  ...(variant === 'outlined' && {
    '& .MuiTableCell-root': {
      backgroundColor: 'var(--color-white)',
    },
  }),

  ...(variant === 'minimal' && {
    '& .MuiTableCell-root': {
      backgroundColor: 'transparent',
      borderBottom: '1px solid var(--color-border-subtle)',
    },
  }),
}));

// HEAVILY TRANSFORMED Table Row with design tokens
const StyledTableRow = styled(MuiTableRow, {
  shouldForwardProp: (prop) => !['variant', 'selectable', 'selected'].includes(prop),
})<{ variant?: string; selectable?: boolean; selected?: boolean }>(({ theme, variant = 'contained', selectable = false, selected = false }) => ({
  fontFamily: 'var(--font-family-sans)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  '& .MuiTableCell-root': {
    borderBottom: '1px solid var(--color-border-subtle)',
    color: 'var(--color-text-primary)',
  },

  // Interactive states
  ...(selectable && {
    cursor: 'pointer',
  }),

  '&:hover': {
    backgroundColor: selected ? 'var(--color-primary-100)' : 'var(--color-gray-50)',
    transform: selectable ? 'scale(1.001)' : 'none',
  },

  // Selected state
  ...(selected && {
    backgroundColor: 'var(--color-primary-50)',
    '&:hover': {
      backgroundColor: 'var(--color-primary-100)',
    },
  }),

  // Last row
  '&:last-child .MuiTableCell-root': {
    borderBottom: 'none',
  },
}));

// HEAVILY TRANSFORMED Table Cell with design tokens
const StyledTableCell = styled(MuiTableCell, {
  shouldForwardProp: (prop) => !['variant'].includes(prop),
})<{ variant?: string }>(({ theme, variant = 'contained' }) => ({
  fontFamily: 'var(--font-family-sans)',
  position: 'relative',
  
  // Sortable cell styling
  '&.sortable': {
    cursor: 'pointer',
    userSelect: 'none',
    
    '&:hover': {
      backgroundColor: 'var(--color-primary-50)',
    },
  },
}));

// HEAVILY TRANSFORMED Sort Label with design tokens
const StyledTableSortLabel = styled(MuiTableSortLabel)(({ theme }) => ({
  fontFamily: 'var(--font-family-sans)',
  fontWeight: 'var(--font-weight-semibold)',
  color: 'var(--color-text-primary)',
  
  '&:hover': {
    color: 'var(--color-primary-600)',
  },
  
  '&.Mui-active': {
    color: 'var(--color-primary-700)',
    
    '& .MuiTableSortLabel-icon': {
      color: 'var(--color-primary-700)',
    },
  },
  
  '& .MuiTableSortLabel-icon': {
    transition: 'all var(--duration-fast) var(--ease-out)',
  },
}));

// HEAVILY TRANSFORMED Pagination with design tokens
const StyledTablePagination = styled(MuiTablePagination)(({ theme }) => ({
  fontFamily: 'var(--font-family-sans)',
  borderTop: '1px solid var(--color-border-default)',
  backgroundColor: 'var(--color-gray-50)',
  
  '& .MuiTablePagination-toolbar': {
    padding: 'var(--spacing-2) var(--spacing-4)',
  },
  
  '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-secondary)',
  },
  
  '& .MuiTablePagination-select': {
    fontSize: 'var(--font-size-sm)',
    marginLeft: 'var(--spacing-2)',
    marginRight: 'var(--spacing-2)',
  },
  
  '& .MuiTablePagination-actions button': {
    borderRadius: 'var(--radius-md)',
    transition: 'all var(--duration-fast) var(--ease-out)',
    
    '&:hover': {
      backgroundColor: 'var(--color-primary-50)',
      transform: 'scale(1.05)',
    },
  },
}));

// Status Chip Component for demo data
const StatusChip: React.FC<{ status: string }> = ({ status }) => {
  const getStatusProps = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return { 
          color: 'success' as const, 
          icon: <CheckCircleIcon sx={{ fontSize: '16px !important' }} />
        };
      case 'inactive':
        return { 
          color: 'default' as const, 
          icon: <CancelIcon sx={{ fontSize: '16px !important' }} />
        };
      case 'pending':
        return { 
          color: 'warning' as const, 
          icon: <WarningIcon sx={{ fontSize: '16px !important' }} />
        };
      case 'processing':
        return { 
          color: 'info' as const, 
          icon: <InfoIcon sx={{ fontSize: '16px !important' }} />
        };
      default:
        return { color: 'default' as const };
    }
  };

  const props = getStatusProps(status);
  
  return (
    <MuiChip
      label={status.charAt(0).toUpperCase() + status.slice(1)}
      size="small"
      variant="filled"
      {...props}
      sx={{
        fontFamily: 'var(--font-family-sans)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: 'var(--font-weight-medium)',
        borderRadius: 'var(--radius-full)',
      }}
    />
  );
};

// Sample data for demo
const sampleColumns: TableColumn[] = [
  { id: 'name', label: 'Name', sortable: true, minWidth: 150 },
  { id: 'email', label: 'Email', sortable: true, minWidth: 200 },
  { id: 'role', label: 'Role', sortable: true, minWidth: 120 },
  { id: 'department', label: 'Department', sortable: true, minWidth: 140 },
  { id: 'joinDate', label: 'Join Date', sortable: true, minWidth: 120 },
  { id: 'status', label: 'Status', sortable: true, minWidth: 100, format: (value) => <StatusChip status={value} /> },
  { id: 'actions', label: 'Actions', align: 'center' as const, minWidth: 100 },
];

const sampleRows: TableRow[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    department: 'Engineering',
    joinDate: '2023-01-15',
    status: 'active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'User',
    department: 'Marketing',
    joinDate: '2023-03-22',
    status: 'pending',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'Editor',
    department: 'Content',
    joinDate: '2022-11-08',
    status: 'active',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    role: 'User',
    department: 'Sales',
    joinDate: '2023-02-14',
    status: 'inactive',
  },
  {
    id: 5,
    name: 'Charlie Wilson',
    email: 'charlie.wilson@example.com',
    role: 'Admin',
    department: 'Engineering',
    joinDate: '2022-09-30',
    status: 'processing',
  },
];

export const Table: React.FC<TableProps> = ({
  variant = 'contained',
  size = 'medium',
  columns: propColumns,
  rows: propRows,
  selectable = false,
  sortable = true,
  pagination = true,
  rowsPerPageOptions = [5, 10, 25, 50],
  onRowClick,
  onSelectionChange,
  actions,
  showDemo = true,
  ...props
}) => {
  // Use provided data or fall back to sample data for demo
  const columns = propColumns.length > 0 ? propColumns : sampleColumns;
  const rows = propRows.length > 0 ? propRows : sampleRows;

  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<string>('name');
  const [selected, setSelected] = useState<(string | number)[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const handleRequestSort = (property: string) => {
    if (!sortable) return;
    
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      onSelectionChange?.(newSelected);
      return;
    }
    setSelected([]);
    onSelectionChange?.([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string | number, row: TableRow) => {
    event.preventDefault();
    
    if (selectable) {
      const selectedIndex = selected.indexOf(id);
      let newSelected: (string | number)[] = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }

      setSelected(newSelected);
      onSelectionChange?.(newSelected);
    }
    
    onRowClick?.(row);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: string | number) => selected.indexOf(id) !== -1;

  // Sort function
  const sortedRows = React.useMemo(() => {
    if (!sortable) return rows;
    
    return [...rows].sort((a, b) => {
      const aValue = a[orderBy];
      const bValue = b[orderBy];
      
      if (bValue < aValue) {
        return order === 'desc' ? -1 : 1;
      }
      if (bValue > aValue) {
        return order === 'desc' ? 1 : -1;
      }
      return 0;
    });
  }, [rows, order, orderBy, sortable]);

  // Paginated rows
  const paginatedRows = pagination 
    ? sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    : sortedRows;

  const defaultActions = (row: TableRow) => (
    <MuiIconButton 
      size="small"
      sx={{
        borderRadius: 'var(--radius-md)',
        transition: 'all var(--duration-fast) var(--ease-out)',
        '&:hover': {
          backgroundColor: 'var(--color-primary-50)',
          transform: 'scale(1.1)',
        },
      }}
    >
      <MoreVertIcon fontSize="small" />
    </MuiIconButton>
  );

  return (
    <StyledTableContainer variant={variant} size={size} elevation={0}>
      <StyledTable variant={variant} size={size} {...props}>
        <StyledTableHead variant={variant}>
          <MuiTableRow>
            {selectable && (
              <StyledTableCell variant={variant} padding="checkbox">
                <MuiCheckbox
                  color="primary"
                  indeterminate={selected.length > 0 && selected.length < rows.length}
                  checked={rows.length > 0 && selected.length === rows.length}
                  onChange={handleSelectAllClick}
                  inputProps={{
                    'aria-label': 'select all rows',
                  }}
                />
              </StyledTableCell>
            )}
            {columns.map((column) => (
              <StyledTableCell
                key={column.id}
                variant={variant}
                align={column.align}
                style={{ minWidth: column.minWidth }}
                className={column.sortable && sortable ? 'sortable' : ''}
              >
                {column.sortable && sortable ? (
                  <StyledTableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : 'asc'}
                    onClick={() => handleRequestSort(column.id)}
                  >
                    {column.label}
                  </StyledTableSortLabel>
                ) : (
                  column.label
                )}
              </StyledTableCell>
            ))}
          </MuiTableRow>
        </StyledTableHead>
        <MuiTableBody>
          {paginatedRows.map((row) => {
            const isItemSelected = isSelected(row.id);
            
            return (
              <StyledTableRow
                hover
                onClick={(event) => handleClick(event, row.id, row)}
                role={selectable ? "checkbox" : undefined}
                aria-checked={selectable ? isItemSelected : undefined}
                tabIndex={-1}
                key={row.id}
                selected={isItemSelected}
                variant={variant}
                selectable={selectable || !!onRowClick}
              >
                {selectable && (
                  <StyledTableCell variant={variant} padding="checkbox">
                    <MuiCheckbox
                      color="primary"
                      checked={isItemSelected}
                      inputProps={{
                        'aria-labelledby': `enhanced-table-checkbox-${row.id}`,
                      }}
                    />
                  </StyledTableCell>
                )}
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    variant={variant}
                    align={column.align}
                  >
                    {column.id === 'actions' 
                      ? (actions ? actions(row) : defaultActions(row))
                      : column.format 
                        ? column.format(row[column.id])
                        : row[column.id]
                    }
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            );
          })}
        </MuiTableBody>
      </StyledTable>
      {pagination && (
        <StyledTablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </StyledTableContainer>
  );
};

export default Table;
