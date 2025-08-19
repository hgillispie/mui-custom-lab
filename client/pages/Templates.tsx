import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Stack,
  Chip,
  IconButton,
  Card as MuiCard,
  CardContent,
  CardActions,
  Avatar as MuiAvatar
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Login as LoginIcon,
  Settings as SettingsIcon,
  TableChart as TableIcon,
  Visibility,
  Code,
  ContentCopy
} from '@mui/icons-material';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Modal from '../components/ui/Modal';
import Alert from '../components/ui/Alert';

// Import templates
import Dashboard from '../templates/Dashboard';
import LoginForm from '../templates/LoginForm';
import SettingsForm from '../templates/SettingsForm';
import DataTable from '../templates/DataTable';

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  component: React.ComponentType<any>;
  codeSnippet: string;
  features: string[];
  complexity: 'Simple' | 'Medium' | 'Complex';
}

const templates: Template[] = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    description: 'Complete analytics dashboard with stats cards, data tables, and activity feeds',
    category: 'Data Display',
    icon: <DashboardIcon />,
    component: Dashboard,
    complexity: 'Complex',
    features: ['Stats Cards', 'Data Visualization', 'Activity Feed', 'Navigation', 'Progress Indicators'],
    codeSnippet: `import Dashboard from '@/templates/Dashboard';

<Dashboard 
  showDemo={true}
/>`
  },
  {
    id: 'login',
    name: 'Login Form',
    description: 'Modern authentication form with social login options and validation',
    category: 'Forms',
    icon: <LoginIcon />,
    component: LoginForm,
    complexity: 'Medium',
    features: ['Social Login', 'Form Validation', 'Password Toggle', 'Remember Me', 'Error Handling'],
    codeSnippet: `import LoginForm from '@/templates/LoginForm';

<LoginForm 
  onLogin={(email, password) => handleLogin(email, password)}
  onSignup={() => handleSignup()}
  onForgotPassword={() => handleForgotPassword()}
/>`
  },
  {
    id: 'settings',
    name: 'Settings Form',
    description: 'Comprehensive settings panel with tabs, switches, and profile management',
    category: 'Forms',
    icon: <SettingsIcon />,
    component: SettingsForm,
    complexity: 'Complex',
    features: ['Tabbed Interface', 'Profile Management', 'Preferences', 'Security Settings', 'Theme Toggle'],
    codeSnippet: `import SettingsForm from '@/templates/SettingsForm';

<SettingsForm 
  onSave={(settings) => handleSaveSettings(settings)}
/>`
  },
  {
    id: 'datatable',
    name: 'Data Table',
    description: 'Advanced data table with filtering, sorting, pagination, and bulk actions',
    category: 'Data Display',
    icon: <TableIcon />,
    component: DataTable,
    complexity: 'Complex',
    features: ['Search & Filter', 'Sorting', 'Pagination', 'Bulk Actions', 'Row Selection', 'Action Menus'],
    codeSnippet: `import DataTable from '@/templates/DataTable';

<DataTable 
  data={users}
  onEdit={(user) => handleEdit(user)}
  onDelete={(user) => handleDelete(user)}
  onView={(user) => handleView(user)}
/>`
  }
];

export const Templates: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const categories = ['all', ...new Set(templates.map(t => t.category))];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleCopyCode = (code: string, templateId: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(templateId);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Simple': return 'success';
      case 'Medium': return 'warning';
      case 'Complex': return 'error';
      default: return 'default';
    }
  };

  const renderPreviewModal = () => {
    if (!previewTemplate) return null;

    const TemplateComponent = previewTemplate.component;

    return (
      <Modal
        open={!!previewTemplate}
        onClose={() => setPreviewTemplate(null)}
        title={`${previewTemplate.name} Template`}
        size="fullscreen"
        showDemo={false}
      >
        <Box sx={{ height: '100%', overflow: 'auto' }}>
          <TemplateComponent showDemo={true} />
        </Box>
      </Modal>
    );
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50', p: 3 }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Templates
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
            Pre-built templates showcasing how our design system components work together in real-world scenarios
          </Typography>
          
          <Alert severity="info" sx={{ mb: 3 }}>
            These templates demonstrate component composition patterns that can be used by AI tools like Builder.io Fusion 
            to understand how to create complex interfaces using your design system.
          </Alert>
        </Box>

        {/* Filters */}
        <Box sx={{ mb: 4 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="center">
            <Input
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ flex: 1, maxWidth: 400 }}
              InputProps={{
                startAdornment: <Box sx={{ mr: 1, color: 'grey.500' }}>🔍</Box>
              }}
            />
            
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {categories.map(category => (
                <Chip
                  key={category}
                  label={category === 'all' ? 'All Templates' : category}
                  onClick={() => setSelectedCategory(category)}
                  color={selectedCategory === category ? 'primary' : 'default'}
                  variant={selectedCategory === category ? 'filled' : 'outlined'}
                />
              ))}
            </Stack>
          </Stack>
        </Box>

        {/* Templates Grid */}
        <Grid container spacing={3}>
          {filteredTemplates.map((template) => (
            <Grid item xs={12} md={6} lg={4} key={template.id}>
              <MuiCard 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                  }
                }}
              >
                <CardContent sx={{ flex: 1 }}>
                  {/* Template Header */}
                  <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                    <MuiAvatar
                      sx={{ 
                        bgcolor: 'primary.100', 
                        color: 'primary.600',
                        width: 48,
                        height: 48
                      }}
                    >
                      {template.icon}
                    </MuiAvatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" fontWeight="bold">
                        {template.name}
                      </Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Chip 
                          label={template.category} 
                          size="small" 
                          variant="outlined"
                        />
                        <Chip 
                          label={template.complexity} 
                          size="small" 
                          color={getComplexityColor(template.complexity)}
                          variant="filled"
                        />
                      </Stack>
                    </Box>
                  </Stack>

                  {/* Description */}
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {template.description}
                  </Typography>

                  {/* Features */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" fontWeight="medium" color="text.secondary" gutterBottom display="block">
                      KEY FEATURES
                    </Typography>
                    <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                      {template.features.map((feature, index) => (
                        <Chip
                          key={index}
                          label={feature}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: '0.7rem' }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </CardContent>

                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Stack direction="row" spacing={1} width="100%">
                    <Button
                      variant="gradient"
                      size="small"
                      startIcon={<Visibility />}
                      onClick={() => setPreviewTemplate(template)}
                      sx={{ flex: 1 }}
                    >
                      Preview
                    </Button>
                    <IconButton
                      size="small"
                      onClick={() => handleCopyCode(template.codeSnippet, template.id)}
                      sx={{ 
                        border: 1, 
                        borderColor: 'divider',
                        bgcolor: copiedCode === template.id ? 'success.50' : 'transparent'
                      }}
                    >
                      {copiedCode === template.id ? (
                        <Box sx={{ color: 'success.600' }}>✓</Box>
                      ) : (
                        <ContentCopy />
                      )}
                    </IconButton>
                  </Stack>
                </CardActions>
              </MuiCard>
            </Grid>
          ))}
        </Grid>

        {/* No Results */}
        {filteredTemplates.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No templates found
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try adjusting your search or filter criteria
            </Typography>
          </Box>
        )}

        {/* Usage Guide */}
        <Box sx={{ mt: 6, p: 4, bgcolor: 'primary.50', borderRadius: 2 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            How to Use Templates
          </Typography>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                <Typography variant="h6" fontWeight="medium">
                  1. Browse & Preview
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Explore templates and click "Preview" to see them in action with live interactions
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                <Typography variant="h6" fontWeight="medium">
                  2. Copy Code
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Click the copy button to get the import and usage code for any template
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                <Typography variant="h6" fontWeight="medium">
                  3. Customize
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Modify the templates by passing your own props and data to fit your needs
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Preview Modal */}
      {renderPreviewModal()}
    </Box>
  );
};

export default Templates;
