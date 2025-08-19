import React, { useState, useMemo } from 'react';
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  Chip,
  Avatar as MuiAvatar,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import {
  MoreVert,
  Edit,
  Delete,
  Visibility,
  Download,
  Upload,
  FilterList,
  Search,
  Add,
  Refresh
} from '@mui/icons-material';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Table from '../components/ui/Table';
import Pagination from '../components/ui/Pagination';
import Select from '../components/ui/Select';
import Checkbox from '../components/ui/Checkbox';
import Alert from '../components/ui/Alert';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  lastActive: string;
  avatar?: string;
  joinedDate: string;
}

interface DataTableProps {
  showDemo?: boolean;
  data?: User[];
  onEdit?: (user: User) => void;
  onDelete?: (user: User) => void;
  onView?: (user: User) => void;
}

export const DataTable: React.FC<DataTableProps> = ({
  showDemo = true,
  data,
  onEdit,
  onDelete,
  onView
}) => {
  // Sample data
  const sampleUsers: User[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      status: 'active',
      lastActive: '2024-01-15 10:30 AM',
      joinedDate: '2023-06-15'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Editor',
      status: 'active',
      lastActive: '2024-01-15 09:15 AM',
      joinedDate: '2023-08-22'
    },
    {
      id: '3',
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      role: 'Viewer',
      status: 'inactive',
      lastActive: '2024-01-10 02:45 PM',
      joinedDate: '2023-09-30'
    },
    {
      id: '4',
      name: 'Alice Brown',
      email: 'alice.brown@example.com',
      role: 'Editor',
      status: 'pending',
      lastActive: 'Never',
      joinedDate: '2024-01-14'
    },
    {
      id: '5',
      name: 'Charlie Wilson',
      email: 'charlie.wilson@example.com',
      role: 'Admin',
      status: 'active',
      lastActive: '2024-01-14 04:20 PM',
      joinedDate: '2023-03-10'
    },
    {
      id: '6',
      name: 'Diana Prince',
      email: 'diana.prince@example.com',
      role: 'Viewer',
      status: 'active',
      lastActive: '2024-01-15 08:00 AM',
      joinedDate: '2023-11-05'
    }
  ];

  const users = data || sampleUsers;
  
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<{ field: string; direction: 'asc' | 'desc' }>({
    field: 'name',
    direction: 'asc'
  });
  
  // Menu state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  
  // Dialog states
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [bulkActionDialogOpen, setBulkActionDialogOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Filtered and sorted data
  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
      const matchesRole = roleFilter === 'all' || user.role === roleFilter;
      
      return matchesSearch && matchesStatus && matchesRole;
    });
  }, [users, searchQuery, statusFilter, roleFilter]);

  const sortedUsers = useMemo(() => {
    return [...filteredUsers].sort((a, b) => {
      const aValue = a[sortBy.field as keyof User];
      const bValue = b[sortBy.field as keyof User];
      
      if (aValue < bValue) return sortBy.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortBy.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredUsers, sortBy]);

  // Pagination
  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
  const paginatedUsers = sortedUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, user: User) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedUser(null);
  };

  const handleEdit = () => {
    if (selectedUser) {
      if (onEdit) {
        onEdit(selectedUser);
      } else {
        setAlertMessage(`Edit action for ${selectedUser.name} not implemented in demo`);
      }
    }
    handleMenuClose();
  };

  const handleView = () => {
    if (selectedUser) {
      if (onView) {
        onView(selectedUser);
      } else {
        setAlertMessage(`View action for ${selectedUser.name} not implemented in demo`);
      }
    }
    handleMenuClose();
  };

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
    handleMenuClose();
  };

  const handleDeleteConfirm = () => {
    if (selectedUser) {
      if (onDelete) {
        onDelete(selectedUser);
      } else {
        setAlertMessage(`Delete action for ${selectedUser.name} not implemented in demo`);
      }
    }
    setDeleteDialogOpen(false);
    setSelectedUser(null);
  };

  const handleSelectUser = (userId: string) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSelectAll = () => {
    setSelectedUsers(
      selectedUsers.length === paginatedUsers.length 
        ? [] 
        : paginatedUsers.map(user => user.id)
    );
  };

  const handleBulkAction = (action: string) => {
    setAlertMessage(`Bulk ${action} for ${selectedUsers.length} users not implemented in demo`);
    setBulkActionDialogOpen(false);
    setSelectedUsers([]);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'success';
      case 'inactive': return 'error';
      case 'pending': return 'warning';
      default: return 'default';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin': return 'error';
      case 'Editor': return 'warning';
      case 'Viewer': return 'primary';
      default: return 'default';
    }
  };

  const columns = [
    {
      id: 'select',
      label: (
        <Checkbox
          checked={selectedUsers.length === paginatedUsers.length && paginatedUsers.length > 0}
          indeterminate={selectedUsers.length > 0 && selectedUsers.length < paginatedUsers.length}
          onChange={handleSelectAll}
        />
      ),
      sortable: false
    },
    { id: 'user', label: 'User', sortable: true },
    { id: 'role', label: 'Role', sortable: true },
    { id: 'status', label: 'Status', sortable: true },
    { id: 'lastActive', label: 'Last Active', sortable: true },
    { id: 'joinedDate', label: 'Joined', sortable: true },
    { id: 'actions', label: 'Actions', sortable: false }
  ];

  const rows = paginatedUsers.map(user => ({
    id: user.id,
    select: (
      <Checkbox
        checked={selectedUsers.includes(user.id)}
        onChange={() => handleSelectUser(user.id)}
      />
    ),
    user: (
      <Stack direction="row" spacing={2} alignItems="center">
        <MuiAvatar sx={{ width: 32, height: 32 }}>
          {user.name.charAt(0)}
        </MuiAvatar>
        <Box>
          <Typography variant="body2" fontWeight="medium">
            {user.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {user.email}
          </Typography>
        </Box>
      </Stack>
    ),
    role: (
      <Chip
        label={user.role}
        size="small"
        color={getRoleColor(user.role)}
        variant="outlined"
      />
    ),
    status: (
      <Chip
        label={user.status}
        size="small"
        color={getStatusColor(user.status)}
        variant="contained"
      />
    ),
    lastActive: user.lastActive,
    joinedDate: new Date(user.joinedDate).toLocaleDateString(),
    actions: (
      <IconButton
        size="small"
        onClick={(e) => handleMenuClick(e, user)}
      >
        <MoreVert />
      </IconButton>
    )
  }));

  return (
    <Box sx={{ p: 3 }}>
      <Card variant="contained">
        {/* Header */}
        <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider' }}>
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
            <Box>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Users Management
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Manage your team members and their permissions
              </Typography>
            </Box>
            
            <Stack direction="row" spacing={1}>
              <Tooltip title="Refresh">
                <IconButton onClick={() => setAlertMessage('Data refreshed')}>
                  <Refresh />
                </IconButton>
              </Tooltip>
              <Button variant="outlined" startIcon={<Download />} size="small">
                Export
              </Button>
              <Button variant="outlined" startIcon={<Upload />} size="small">
                Import
              </Button>
              <Button variant="gradient" startIcon={<Add />}>
                Add User
              </Button>
            </Stack>
          </Stack>
        </Box>

        {/* Filters and Search */}
        <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider' }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="center">
            <Input
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="small"
              sx={{ flex: 1, minWidth: 200 }}
              InputProps={{
                startAdornment: <Search sx={{ color: 'grey.500', mr: 1 }} />
              }}
            />
            
            <Select
              value={statusFilter}
              onChange={setStatusFilter}
              options={[
                { value: 'all', label: 'All Status' },
                { value: 'active', label: 'Active' },
                { value: 'inactive', label: 'Inactive' },
                { value: 'pending', label: 'Pending' }
              ]}
              size="small"
              sx={{ minWidth: 120 }}
            />
            
            <Select
              value={roleFilter}
              onChange={setRoleFilter}
              options={[
                { value: 'all', label: 'All Roles' },
                { value: 'Admin', label: 'Admin' },
                { value: 'Editor', label: 'Editor' },
                { value: 'Viewer', label: 'Viewer' }
              ]}
              size="small"
              sx={{ minWidth: 120 }}
            />
            
            <Button variant="outlined" startIcon={<FilterList />} size="small">
              More Filters
            </Button>
          </Stack>
        </Box>

        {/* Alert */}
        {alertMessage && (
          <Alert
            severity="info"
            sx={{ m: 3, mb: 0 }}
            onClose={() => setAlertMessage('')}
          >
            {alertMessage}
          </Alert>
        )}

        {/* Bulk Actions */}
        {selectedUsers.length > 0 && (
          <Box sx={{ p: 2, bgcolor: 'primary.50', borderBottom: 1, borderColor: 'divider' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="body2">
                {selectedUsers.length} user{selectedUsers.length !== 1 ? 's' : ''} selected
              </Typography>
              <Stack direction="row" spacing={1}>
                <Button 
                  variant="outlined" 
                  size="small"
                  onClick={() => handleBulkAction('activate')}
                >
                  Activate
                </Button>
                <Button 
                  variant="outlined" 
                  size="small"
                  onClick={() => handleBulkAction('deactivate')}
                >
                  Deactivate
                </Button>
                <Button 
                  variant="error" 
                  size="small"
                  onClick={() => setBulkActionDialogOpen(true)}
                >
                  Delete
                </Button>
              </Stack>
            </Stack>
          </Box>
        )}

        {/* Table */}
        <Table
          variant="minimal"
          showDemo={false}
          columns={columns}
          rows={rows}
          sx={{ '& .MuiTableCell-root': { borderBottom: '1px solid', borderColor: 'divider' } }}
        />

        {/* Pagination */}
        <Box sx={{ p: 3, borderTop: 1, borderColor: 'divider' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography variant="body2" color="text.secondary">
                Show:
              </Typography>
              <Select
                value={itemsPerPage.toString()}
                onChange={(value) => {
                  setItemsPerPage(Number(value));
                  setCurrentPage(1);
                }}
                options={[
                  { value: '5', label: '5' },
                  { value: '10', label: '10' },
                  { value: '25', label: '25' },
                  { value: '50', label: '50' }
                ]}
                size="small"
                sx={{ minWidth: 80 }}
              />
              <Typography variant="body2" color="text.secondary">
                of {sortedUsers.length} results
              </Typography>
            </Stack>
            
            <Pagination
              variant="outlined"
              count={totalPages}
              page={currentPage}
              onChange={(_, page) => setCurrentPage(page)}
              showFirstButton
              showLastButton
            />
          </Stack>
        </Box>
      </Card>

      {/* Action Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleView}>
          <Visibility sx={{ mr: 2 }} />
          View Details
        </MenuItem>
        <MenuItem onClick={handleEdit}>
          <Edit sx={{ mr: 2 }} />
          Edit User
        </MenuItem>
        <MenuItem onClick={handleDeleteClick} sx={{ color: 'error.main' }}>
          <Delete sx={{ mr: 2 }} />
          Delete User
        </MenuItem>
      </Menu>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete {selectedUser?.name}? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setDeleteDialogOpen(false)}>
            Cancel
          </Button>
          <Button variant="error" onClick={handleDeleteConfirm}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Bulk Delete Dialog */}
      <Dialog open={bulkActionDialogOpen} onClose={() => setBulkActionDialogOpen(false)}>
        <DialogTitle>Confirm Bulk Delete</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete {selectedUsers.length} selected users? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setBulkActionDialogOpen(false)}>
            Cancel
          </Button>
          <Button variant="error" onClick={() => handleBulkAction('delete')}>
            Delete All
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DataTable;
