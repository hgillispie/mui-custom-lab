import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  Avatar as MuiAvatar,
  Chip
} from '@mui/material';
import {
  TrendingUp,
  People,
  ShoppingCart,
  AttachMoney,
  MoreVert,
  Notifications,
  Settings,
  Search
} from '@mui/icons-material';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Progress from '../components/ui/Progress';
import AppBar from '../components/ui/AppBar';
import Table from '../components/ui/Table';
import Input from '../components/ui/Input';

interface DashboardProps {
  showDemo?: boolean;
}

export const Dashboard: React.FC<DashboardProps> = ({ showDemo = true }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchValue, setSearchValue] = useState('');

  const statsCards = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: '+20.1%',
      trend: 'up',
      icon: <AttachMoney sx={{ fontSize: 24 }} />,
      color: 'success'
    },
    {
      title: 'Active Users',
      value: '2,345',
      change: '+15.3%',
      trend: 'up',
      icon: <People sx={{ fontSize: 24 }} />,
      color: 'primary'
    },
    {
      title: 'Orders',
      value: '1,234',
      change: '+12.5%',
      trend: 'up',
      icon: <ShoppingCart sx={{ fontSize: 24 }} />,
      color: 'warning'
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '-2.1%',
      trend: 'down',
      icon: <TrendingUp sx={{ fontSize: 24 }} />,
      color: 'error'
    }
  ];

  const recentOrders = [
    {
      id: '#12345',
      customer: 'John Doe',
      email: 'john@example.com',
      status: 'Completed',
      amount: '$129.00',
      date: '2024-01-15'
    },
    {
      id: '#12346',
      customer: 'Jane Smith',
      email: 'jane@example.com',
      status: 'Processing',
      amount: '$89.50',
      date: '2024-01-15'
    },
    {
      id: '#12347',
      customer: 'Bob Johnson',
      email: 'bob@example.com',
      status: 'Shipped',
      amount: '$199.99',
      date: '2024-01-14'
    },
    {
      id: '#12348',
      customer: 'Alice Brown',
      email: 'alice@example.com',
      status: 'Cancelled',
      amount: '$45.00',
      date: '2024-01-14'
    }
  ];

  const recentActivity = [
    { action: 'New user registered', time: '2 minutes ago', type: 'user' },
    { action: 'Order #12349 completed', time: '5 minutes ago', type: 'order' },
    { action: 'Payment received', time: '10 minutes ago', type: 'payment' },
    { action: 'New review submitted', time: '15 minutes ago', type: 'review' }
  ];

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'success';
      case 'processing': return 'warning';
      case 'shipped': return 'primary';
      case 'cancelled': return 'error';
      default: return 'default';
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50' }}>
      {/* Header */}
      <AppBar
        variant="contained"
        title="Dashboard"
        showDemo={false}
        actions={
          <Stack direction="row" spacing={1} alignItems="center">
            <Input
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              size="small"
              sx={{ width: 200 }}
              InputProps={{
                startAdornment: <Search sx={{ color: 'grey.500', mr: 1 }} />
              }}
            />
            <Badge badgeContent={3} color="error">
              <IconButton>
                <Notifications />
              </IconButton>
            </Badge>
            <IconButton onClick={handleMenuClick}>
              <MuiAvatar sx={{ width: 32, height: 32 }}>JD</MuiAvatar>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </Stack>
        }
      />

      <Box sx={{ p: 3 }}>
        {/* Stats Grid */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {statsCards.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card variant="contained" size="medium">
                <Box sx={{ p: 3 }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Box>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {stat.title}
                      </Typography>
                      <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
                        {stat.value}
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Chip
                          label={stat.change}
                          size="small"
                          color={stat.trend === 'up' ? 'success' : 'error'}
                          variant="outlined"
                        />
                        <Typography variant="caption" color="text.secondary">
                          vs last month
                        </Typography>
                      </Stack>
                    </Box>
                    <Box sx={{ 
                      p: 1.5, 
                      borderRadius: 2, 
                      bgcolor: `${stat.color}.50`,
                      color: `${stat.color}.600`
                    }}>
                      {stat.icon}
                    </Box>
                  </Stack>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3}>
          {/* Recent Orders */}
          <Grid item xs={12} lg={8}>
            <Card variant="contained">
              <Box sx={{ p: 3, pb: 0 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Typography variant="h6" fontWeight="semibold">
                    Recent Orders
                  </Typography>
                  <Button variant="outlined" size="small">
                    View All
                  </Button>
                </Stack>
              </Box>
              
              <Table
                variant="minimal"
                showDemo={false}
                columns={[
                  { id: 'id', label: 'Order ID' },
                  { id: 'customer', label: 'Customer' },
                  { id: 'status', label: 'Status' },
                  { id: 'amount', label: 'Amount' },
                  { id: 'date', label: 'Date' },
                  { id: 'actions', label: 'Actions' }
                ]}
                rows={recentOrders.map(order => ({
                  id: order.id,
                  customer: (
                    <Box>
                      <Typography variant="body2" fontWeight="medium">
                        {order.customer}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {order.email}
                      </Typography>
                    </Box>
                  ),
                  status: (
                    <Chip
                      label={order.status}
                      size="small"
                      color={getStatusColor(order.status)}
                      variant="outlined"
                    />
                  ),
                  amount: (
                    <Typography variant="body2" fontWeight="medium">
                      {order.amount}
                    </Typography>
                  ),
                  date: order.date,
                  actions: (
                    <IconButton size="small">
                      <MoreVert />
                    </IconButton>
                  )
                }))}
              />
            </Card>
          </Grid>

          {/* Activity Feed & Performance */}
          <Grid item xs={12} lg={4}>
            <Stack spacing={3}>
              {/* Performance Card */}
              <Card variant="gradient">
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" fontWeight="semibold" sx={{ mb: 2, color: 'white' }}>
                    Performance Overview
                  </Typography>
                  
                  <Stack spacing={2}>
                    <Box>
                      <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                        <Typography variant="body2" sx={{ color: 'white', opacity: 0.9 }}>
                          Sales Target
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'white' }}>
                          68%
                        </Typography>
                      </Stack>
                      <Progress variant="contained" value={68} sx={{ height: 6 }} />
                    </Box>
                    
                    <Box>
                      <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                        <Typography variant="body2" sx={{ color: 'white', opacity: 0.9 }}>
                          Customer Satisfaction
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'white' }}>
                          92%
                        </Typography>
                      </Stack>
                      <Progress variant="contained" value={92} sx={{ height: 6 }} />
                    </Box>
                    
                    <Box>
                      <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                        <Typography variant="body2" sx={{ color: 'white', opacity: 0.9 }}>
                          Revenue Growth
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'white' }}>
                          85%
                        </Typography>
                      </Stack>
                      <Progress variant="contained" value={85} sx={{ height: 6 }} />
                    </Box>
                  </Stack>
                </Box>
              </Card>

              {/* Recent Activity */}
              <Card variant="outlined">
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" fontWeight="semibold" sx={{ mb: 2 }}>
                    Recent Activity
                  </Typography>
                  
                  <Stack spacing={2}>
                    {recentActivity.map((activity, index) => (
                      <Stack key={index} direction="row" spacing={2} alignItems="center">
                        <Box sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: 'primary.500',
                          flexShrink: 0
                        }} />
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Typography variant="body2" sx={{ mb: 0.5 }}>
                            {activity.action}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {activity.time}
                          </Typography>
                        </Box>
                      </Stack>
                    ))}
                  </Stack>
                  
                  <Button variant="text" size="small" fullWidth sx={{ mt: 2 }}>
                    View All Activity
                  </Button>
                </Box>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
