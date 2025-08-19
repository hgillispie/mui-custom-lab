import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Stack,
  Divider,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card as MuiCard,
  CardContent
} from '@mui/material';
import {
  ExpandMore,
  Code,
  Layers,
  Settings,
  Dashboard,
  TableChart
} from '@mui/icons-material';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Alert from '../components/ui/Alert';
import Switch from '../components/ui/Switch';
import Checkbox from '../components/ui/Checkbox';
import Tabs from '../components/ui/Tabs';
import Modal from '../components/ui/Modal';

interface PatternExample {
  id: string;
  name: string;
  description: string;
  components: string[];
  category: string;
  complexity: 'Simple' | 'Medium' | 'Complex';
  codeExample: string;
  liveExample: React.ReactNode;
  useCases: string[];
}

export const CompositionGuide: React.FC = () => {
  const [selectedPattern, setSelectedPattern] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const patterns: PatternExample[] = [
    {
      id: 'form-with-validation',
      name: 'Form with Validation',
      description: 'Combining Input, Button, and Alert components for form handling',
      components: ['Input', 'Button', 'Alert', 'Card'],
      category: 'Forms',
      complexity: 'Medium',
      useCases: ['User registration', 'Contact forms', 'Settings panels'],
      codeExample: `// Form with validation pattern
import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Alert from '@/components/ui/Alert';
import Card from '@/components/ui/Card';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic here
    if (isValid) {
      setSuccess(true);
    }
  };

  return (
    <Card variant="contained">
      <form onSubmit={handleSubmit}>
        {success && (
          <Alert severity="success">
            Message sent successfully!
          </Alert>
        )}
        
        <Input
          label="Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          error={!!errors.name}
          helperText={errors.name}
        />
        
        <Input
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          error={!!errors.email}
          helperText={errors.email}
        />
        
        <Button type="submit" variant="gradient" fullWidth>
          Send Message
        </Button>
      </form>
    </Card>
  );
};`,
      liveExample: (
        <FormValidationExample />
      )
    },
    {
      id: 'settings-panel',
      name: 'Settings Panel',
      description: 'Using Tabs, Switch, and Card components for preferences',
      components: ['Tabs', 'Switch', 'Card', 'Button'],
      category: 'Navigation',
      complexity: 'Complex',
      useCases: ['User preferences', 'App configuration', 'Admin panels'],
      codeExample: `// Settings panel pattern
import Tabs from '@/components/ui/Tabs';
import Switch from '@/components/ui/Switch';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const SettingsPanel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true
  });

  const tabs = [
    { label: 'General', content: <GeneralSettings /> },
    { label: 'Privacy', content: <PrivacySettings /> },
    { label: 'Advanced', content: <AdvancedSettings /> }
  ];

  return (
    <Card variant="contained">
      <Tabs
        value={activeTab}
        onChange={(_, newValue) => setActiveTab(newValue)}
        tabs={tabs}
      />
      
      <Box sx={{ p: 3 }}>
        <Switch
          label="Email notifications"
          checked={settings.notifications}
          onChange={(checked) => setSettings({...settings, notifications: checked})}
        />
        
        <Switch
          label="Dark mode"
          checked={settings.darkMode}
          onChange={(checked) => setSettings({...settings, darkMode: checked})}
        />
        
        <Button variant="gradient" sx={{ mt: 2 }}>
          Save Settings
        </Button>
      </Box>
    </Card>
  );
};`,
      liveExample: (
        <SettingsPanelExample />
      )
    },
    {
      id: 'modal-workflow',
      name: 'Modal Workflow',
      description: 'Combining Modal, Button, and Form components for user interactions',
      components: ['Modal', 'Button', 'Input', 'Alert'],
      category: 'Feedback',
      complexity: 'Medium',
      useCases: ['Confirmations', 'Data entry', 'Multi-step workflows'],
      codeExample: `// Modal workflow pattern
import { useState } from 'react';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Alert from '@/components/ui/Alert';

const CreateUserModal = ({ open, onClose, onSave }) => {
  const [userData, setUserData] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      await onSave(userData);
      onClose();
    } catch (error) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Create New User"
      actions={
        <>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            variant="gradient" 
            onClick={handleSave}
            loading={loading}
          >
            Create User
          </Button>
        </>
      }
    >
      <Stack spacing={3}>
        <Input
          label="Full Name"
          value={userData.name}
          onChange={(e) => setUserData({...userData, name: e.target.value})}
          fullWidth
        />
        
        <Input
          label="Email Address"
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({...userData, email: e.target.value})}
          fullWidth
        />
      </Stack>
    </Modal>
  );
};`,
      liveExample: (
        <ModalWorkflowExample />
      )
    },
    {
      id: 'data-display',
      name: 'Data Display with Actions',
      description: 'Combining Table, Button, and Badge for data management',
      components: ['Table', 'Button', 'Badge', 'Chip'],
      category: 'Data Display',
      complexity: 'Complex',
      useCases: ['Admin dashboards', 'User management', 'Content moderation'],
      codeExample: `// Data display pattern
import Table from '@/components/ui/Table';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Chip from '@/components/ui/Chip';

const UserTable = ({ users, onEdit, onDelete }) => {
  const columns = [
    { id: 'name', label: 'Name' },
    { id: 'status', label: 'Status' },
    { id: 'role', label: 'Role' },
    { id: 'actions', label: 'Actions' }
  ];

  const rows = users.map(user => ({
    id: user.id,
    name: user.name,
    status: (
      <Chip
        label={user.status}
        color={user.status === 'active' ? 'success' : 'error'}
        size="small"
      />
    ),
    role: (
      <Badge
        badgeContent={user.role}
        color={user.role === 'admin' ? 'error' : 'primary'}
      />
    ),
    actions: (
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          size="small"
          onClick={() => onEdit(user)}
        >
          Edit
        </Button>
        <Button
          variant="error"
          size="small"
          onClick={() => onDelete(user)}
        >
          Delete
        </Button>
      </Stack>
    )
  }));

  return (
    <Table
      variant="contained"
      columns={columns}
      rows={rows}
    />
  );
};`,
      liveExample: (
        <DataDisplayExample />
      )
    }
  ];

  const categories = [...new Set(patterns.map(p => p.category))];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50', p: 3 }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Component Composition Guide
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
            Learn how to combine components effectively to create complex user interfaces
          </Typography>
          
          <Alert severity="info" sx={{ mb: 3 }}>
            This guide shows common patterns for combining our design system components. 
            These examples help AI tools understand component relationships and usage patterns.
          </Alert>
        </Box>

        {/* Quick Reference */}
        <Card variant="contained" sx={{ mb: 4 }}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Composition Principles
            </Typography>
            
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12} md={4}>
                <Stack alignItems="center" textAlign="center" spacing={1}>
                  <Box sx={{ 
                    p: 2, 
                    bgcolor: 'primary.100', 
                    borderRadius: 2,
                    color: 'primary.600'
                  }}>
                    <Layers fontSize="large" />
                  </Box>
                  <Typography variant="h6" fontWeight="medium">
                    Layered Structure
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Use Card components as containers for logical groupings of related elements
                  </Typography>
                </Stack>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Stack alignItems="center" textAlign="center" spacing={1}>
                  <Box sx={{ 
                    p: 2, 
                    bgcolor: 'success.100', 
                    borderRadius: 2,
                    color: 'success.600'
                  }}>
                    <Settings fontSize="large" />
                  </Box>
                  <Typography variant="h6" fontWeight="medium">
                    Progressive Enhancement
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Start with basic functionality and add features like validation, loading states
                  </Typography>
                </Stack>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Stack alignItems="center" textAlign="center" spacing={1}>
                  <Box sx={{ 
                    p: 2, 
                    bgcolor: 'warning.100', 
                    borderRadius: 2,
                    color: 'warning.600'
                  }}>
                    <Code fontSize="large" />
                  </Box>
                  <Typography variant="h6" fontWeight="medium">
                    Consistent Patterns
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Reuse proven component combinations across your application
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Card>

        {/* Pattern Categories */}
        <Grid container spacing={3}>
          {categories.map(category => (
            <Grid item xs={12} key={category}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {category} Patterns
              </Typography>
              
              <Grid container spacing={3}>
                {patterns
                  .filter(pattern => pattern.category === category)
                  .map(pattern => (
                    <Grid item xs={12} lg={6} key={pattern.id}>
                      <MuiCard sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: 1 }}>
                          <Stack spacing={2}>
                            {/* Header */}
                            <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                              <Box>
                                <Typography variant="h6" fontWeight="bold">
                                  {pattern.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {pattern.description}
                                </Typography>
                              </Box>
                              <Chip 
                                label={pattern.complexity} 
                                size="small"
                                color={
                                  pattern.complexity === 'Simple' ? 'success' :
                                  pattern.complexity === 'Medium' ? 'warning' : 'error'
                                }
                              />
                            </Stack>

                            {/* Components Used */}
                            <Box>
                              <Typography variant="caption" color="text.secondary" gutterBottom display="block">
                                COMPONENTS USED
                              </Typography>
                              <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                                {pattern.components.map(component => (
                                  <Chip
                                    key={component}
                                    label={component}
                                    size="small"
                                    variant="outlined"
                                    sx={{ fontSize: '0.7rem' }}
                                  />
                                ))}
                              </Stack>
                            </Box>

                            {/* Use Cases */}
                            <Box>
                              <Typography variant="caption" color="text.secondary" gutterBottom display="block">
                                COMMON USE CASES
                              </Typography>
                              <Typography variant="body2">
                                {pattern.useCases.join(', ')}
                              </Typography>
                            </Box>

                            {/* Live Example */}
                            <Box>
                              <Typography variant="caption" color="text.secondary" gutterBottom display="block">
                                LIVE EXAMPLE
                              </Typography>
                              <Box sx={{ 
                                p: 2, 
                                border: 1, 
                                borderColor: 'divider', 
                                borderRadius: 1,
                                bgcolor: 'grey.50',
                                minHeight: 120,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                {pattern.liveExample}
                              </Box>
                            </Box>

                            {/* Code Example */}
                            <Accordion>
                              <AccordionSummary expandIcon={<ExpandMore />}>
                                <Typography variant="body2" fontWeight="medium">
                                  View Code Example
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Box sx={{ 
                                  bgcolor: 'grey.900', 
                                  color: 'white',
                                  p: 2, 
                                  borderRadius: 1,
                                  overflow: 'auto'
                                }}>
                                  <pre style={{ 
                                    margin: 0, 
                                    fontFamily: 'monospace', 
                                    fontSize: '0.8rem',
                                    whiteSpace: 'pre-wrap'
                                  }}>
                                    {pattern.codeExample}
                                  </pre>
                                </Box>
                              </AccordionDetails>
                            </Accordion>
                          </Stack>
                        </CardContent>
                      </MuiCard>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          ))}
        </Grid>

        {/* Best Practices */}
        <Card variant="outlined" sx={{ mt: 6, p: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Composition Best Practices
          </Typography>
          
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight="medium" gutterBottom>
                ✅ Do's
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2">• Use Card components as logical containers</Typography>
                <Typography variant="body2">• Combine related actions in Button groups</Typography>
                <Typography variant="body2">• Provide feedback with Alert components</Typography>
                <Typography variant="body2">• Use consistent spacing and sizing</Typography>
                <Typography variant="body2">• Group form inputs logically</Typography>
              </Stack>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight="medium" gutterBottom>
                ❌ Don'ts
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2">• Don't mix multiple design variants unnecessarily</Typography>
                <Typography variant="body2">• Avoid complex nesting without clear structure</Typography>
                <Typography variant="body2">• Don't ignore loading and error states</Typography>
                <Typography variant="body2">• Avoid inconsistent component spacing</Typography>
                <Typography variant="body2">• Don't skip accessibility considerations</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Box>
  );
};

// Example components for live demos
const FormValidationExample = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 300 }}>
      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Form submitted successfully!
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <Input
            label="Name"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <Input
            label="Email"
            type="email"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <Button type="submit" variant="gradient" size="small" fullWidth>
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

const SettingsPanelExample = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Box sx={{ width: '100%', maxWidth: 300 }}>
      <Stack spacing={2}>
        <Switch
          label="Notifications"
          size="small"
          checked={notifications}
          onChange={setNotifications}
        />
        <Switch
          label="Dark Mode"
          size="small"
          checked={darkMode}
          onChange={setDarkMode}
        />
        <Button variant="gradient" size="small">
          Save Settings
        </Button>
      </Stack>
    </Box>
  );
};

const ModalWorkflowExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Button
        variant="outlined"
        size="small"
        onClick={() => setOpen(true)}
      >
        Open Modal
      </Button>
      
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Example Modal"
        size="small"
        showDemo={false}
      >
        <Stack spacing={2}>
          <Input label="Name" size="small" fullWidth />
          <Input label="Email" size="small" fullWidth />
          <Stack direction="row" spacing={1} justifyContent="flex-end">
            <Button variant="outlined" size="small" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="gradient" size="small" onClick={() => setOpen(false)}>
              Save
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </Box>
  );
};

const DataDisplayExample = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={1}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" fontWeight="medium">John Doe</Typography>
          <Chip label="Active" color="success" size="small" />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" size="small">Edit</Button>
          <Button variant="error" size="small">Delete</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CompositionGuide;
