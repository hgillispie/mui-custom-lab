# AI Component Library Usage Guide

## 🎯 Overview
This is a comprehensive Material UI component library optimized for AI code generation. It contains 27 transformed components, 4 production templates, and consistent design patterns for building modern React applications.

## 🚀 Quick Start for AI Tools

### Essential Import Patterns
```jsx
// ✅ Use our transformed components for UI elements
import Button from './client/components/ui/Button';
import Input from './client/components/ui/Input';
import Card from './client/components/ui/Card';
import Switch from './client/components/ui/Switch';

// ✅ Use MUI directly for layout and utilities  
import { Box, Stack, Grid, Typography, Container } from '@mui/material';

// ✅ Use MUI icons
import { Search, Add, Delete, Settings, Home } from '@mui/icons-material';

// ❌ NEVER import MUI components we've transformed
// import { Button } from '@mui/material';  // NO - use our Button
// import { TextField } from '@mui/material'; // NO - use our Input/TextField
```

### Component Decision Matrix
| Use Case | Source | Example |
|----------|--------|---------|
| Interactive Elements | **Our Components** | `<Button variant="gradient">` |
| Layout & Spacing | **MUI Direct** | `<Box sx={{ p: 2 }}>` |
| Typography | **MUI Direct** | `<Typography variant="h4">` |
| Icons | **MUI Icons** | `<Search />` |
| Complete Pages | **Our Templates** | `<Dashboard />` |

## 📦 Available Components (27 Total)

### Forms (7 components)
- `Button` - Enhanced with gradient, ghost, success/warning/error variants
- `Input`/`TextField` - Custom focus animations, floating labels
- `Select` - Styled dropdown with smooth animations  
- `Checkbox` - Custom check animations
- `Radio` - Enhanced selection effects
- `Switch` - iOS-style toggle with smooth transitions
- `Slider` - Gradient tracks and custom thumbs

### Navigation (6 components) 
- `AppBar` - Glassmorphism and gradient variants
- `Tabs` - Animated indicators and custom styling
- `Menu` - Enhanced animations and hover effects
- `Drawer` - Slide animations with custom backdrop
- `Breadcrumbs` - Styled navigation path
- `Pagination` - Custom page controls

### Data Display (8 components)
- `Card` - Hover effects, glass/gradient variants
- `Table` - Minimal and styled variants
- `List` - Enhanced list items with animations
- `Avatar` - Rounded with hover effects
- `Chip` - Custom colors and animations
- `Badge` - Notification indicators
- `Tooltip` - Enhanced positioning and styling
- `Accordion` - Smooth expand/collapse

### Feedback (6 components)
- `Alert` - Success/warning/error with custom icons
- `Dialog` - Backdrop blur with smooth animations
- `Modal` - Enhanced modal with size variants
- `Snackbar` - Slide-in notifications
- `Progress` - Custom animations and gradients

## 🏗️ Production Templates

### Dashboard Template
Complete analytics dashboard with stats cards, charts, and data tables.
```jsx
import Dashboard from './client/templates/Dashboard';

<Dashboard 
  showDemo={true}  // Shows sample data
  onStatsClick={(stat) => handleStatClick(stat)}
  onActivitySelect={(activity) => handleActivity(activity)}
/>
```

### LoginForm Template  
Authentication form with validation, social login, and error handling.
```jsx
import LoginForm from './client/templates/LoginForm';

<LoginForm 
  onLogin={(email, password) => handleAuth(email, password)}
  onSignup={() => navigate('/signup')}
  onForgotPassword={() => navigate('/forgot')}
  loading={isLoading}
  error={authError}
/>
```

### SettingsForm Template
User preferences panel with tabs, switches, and form validation.
```jsx
import SettingsForm from './client/templates/SettingsForm';

<SettingsForm 
  initialSettings={userSettings}
  onSave={(settings) => updateUserSettings(settings)}
  onCancel={() => navigate('/dashboard')}
/>
```

### DataTable Template
CRUD operations with filtering, sorting, and bulk actions.
```jsx
import DataTable from './client/templates/DataTable';

<DataTable 
  data={users}
  onEdit={(user) => editUser(user)}
  onDelete={(user) => deleteUser(user)}
  onView={(user) => viewUser(user)}
  searchable={true}
  filterable={true}
/>
```

## 🎨 Component Usage Patterns

### Form Pattern
```jsx
<Card variant="contained">
  <Stack spacing={3}>
    <Input 
      label="Email" 
      type="email"
      error={!!errors.email}
      helperText={errors.email}
      required
    />
    <Input 
      label="Password" 
      type="password"
      error={!!errors.password}
      helperText={errors.password}
      required
    />
    <Button variant="gradient" type="submit" fullWidth>
      Sign In
    </Button>
  </Stack>
</Card>
```

### Settings Panel Pattern
```jsx
<Card variant="contained">
  <Stack spacing={3}>
    <Typography variant="h6">Preferences</Typography>
    <Switch 
      label="Email notifications"
      checked={settings.notifications}
      onChange={(checked) => updateSetting('notifications', checked)}
    />
    <Switch 
      label="Dark mode"
      checked={settings.darkMode}
      onChange={(checked) => updateSetting('darkMode', checked)}
    />
    <Button variant="gradient">Save Changes</Button>
  </Stack>
</Card>
```

### Data Display Pattern
```jsx
<Card variant="contained">
  <Table
    variant="minimal"
    columns={[
      { id: 'name', label: 'Name' },
      { id: 'status', label: 'Status' },
      { id: 'actions', label: 'Actions' }
    ]}
    rows={data.map(item => ({
      id: item.id,
      name: item.name,
      status: <Chip label={item.status} color="success" size="small" />,
      actions: (
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" size="small">Edit</Button>
          <Button variant="error" size="small">Delete</Button>
        </Stack>
      )
    }))}
  />
</Card>
```

## 🔧 Universal Component Props

### Base Props (All Components)
```typescript
interface BaseComponentProps {
  variant?: 'contained' | 'outlined' | 'minimal' | 'gradient' | 'glass';
  size?: 'small' | 'medium' | 'large';
  showDemo?: boolean;  // Component preview mode
}
```

### Form Component Examples
```jsx
// Enhanced Input/TextField
<Input 
  label="Field Label"
  placeholder="Enter text..."
  error={hasError}
  helperText="Helper or error text"
  variant="outlined" | "filled" | "standard" | "gradient"
  size="small" | "medium" | "large"
  fullWidth
/>

// Enhanced Button with variants
<Button 
  variant="contained" | "outlined" | "text" | "gradient" | "ghost" | "success" | "warning" | "error"
  size="small" | "medium" | "large"
  loading={isLoading}
  startIcon={<Icon />}
  endIcon={<Icon />}
  fullWidth
>
  Button Text
</Button>

// Enhanced Switch
<Switch 
  label="Switch Label"
  checked={isChecked}
  onChange={(checked) => handleChange(checked)}
  variant="contained" | "outlined" | "minimal"
  helperText="Optional description"
/>
```

### Navigation Component Examples
```jsx
// Enhanced AppBar
<AppBar 
  variant="default" | "elevated" | "gradient" | "glass"
  title="Application Title"
  actions={<>
    <Button variant="ghost">Profile</Button>
    <Button variant="outlined">Settings</Button>
  </>}
/>

// Enhanced Tabs
<Tabs 
  value={activeTab}
  onChange={(_, newValue) => setActiveTab(newValue)}
  tabs={[
    { label: 'Overview', content: <OverviewPanel /> },
    { label: 'Analytics', content: <AnalyticsPanel /> },
    { label: 'Settings', content: <SettingsPanel /> }
  ]}
  variant="contained" | "outlined" | "minimal"
/>
```

### Feedback Component Examples
```jsx
// Enhanced Alert
<Alert 
  severity="success" | "warning" | "error" | "info"
  variant="contained" | "outlined" | "gradient"
  onClose={() => handleClose()}
>
  Notification message
</Alert>

// Enhanced Modal
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  size="small" | "medium" | "large" | "fullscreen"
  actions={<>
    <Button variant="outlined" onClick={onCancel}>Cancel</Button>
    <Button variant="gradient" onClick={onConfirm}>Confirm</Button>
  </>}
>
  Modal content goes here
</Modal>
```

## 🎯 AI Decision Guidelines

### When to Use Templates vs Components

**Use Templates When:**
- Building complete pages (dashboard, login, settings, data management)
- Need proven component combinations
- Rapid prototyping of full features
- Implementing common UI patterns

**Use Individual Components When:**
- Building custom layouts
- Need specific component combinations  
- Implementing unique business logic
- Fine-grained control over behavior

### Component Combination Rules

1. **Container Hierarchy**: Wrap related content in `Card` components
2. **Layout Structure**: Use MUI's `Box`, `Stack`, `Grid` for positioning
3. **Form Patterns**: Group inputs with consistent error handling
4. **Action Grouping**: Use `Stack direction="row"` for button groups
5. **Feedback Integration**: Include loading/error/success states

### Props Naming Conventions
```jsx
// Standard patterns AI should recognize
variant="contained"      // Visual style variation
size="medium"           // Component sizing
error={hasError}        // Error state boolean
helperText="message"    // Supporting descriptive text
onChange={handler}      // Event callback functions
loading={isLoading}     // Loading state boolean
disabled={isDisabled}   // Disabled state boolean
fullWidth={true}        // Layout modifier boolean

// State-specific props
checked={isChecked}     // For switches, checkboxes
selected={isSelected}   // For selectable items
active={isActive}       // For navigation items
```

## 📱 Responsive Patterns

### Mobile-First Approach
```jsx
// Use MUI's responsive system
<Box sx={{
  p: { xs: 2, md: 4 },  // Padding: 16px mobile, 32px desktop
  gap: { xs: 1, md: 2 }  // Gap: 8px mobile, 16px desktop
}}>
  <Stack 
    direction={{ xs: 'column', md: 'row' }}  // Stack vertically on mobile
    spacing={{ xs: 2, md: 3 }}
  >
    <Button size={{ xs: 'small', md: 'medium' }}>
      Action
    </Button>
  </Stack>
</Box>
```

## 🏗️ Page Structure Template

### Basic Page Layout
```jsx
import { Box, Container, Typography, Stack } from '@mui/material';
import Card from './client/components/ui/Card';
import Button from './client/components/ui/Button';

function StandardPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Stack spacing={4}>
          <Typography variant="h4" component="h1">
            Page Title
          </Typography>
          
          <Card variant="contained">
            <Stack spacing={3}>
              <Typography variant="h6">Section Title</Typography>
              <Typography variant="body1">
                Content description goes here.
              </Typography>
              <Button variant="gradient">
                Primary Action
              </Button>
            </Stack>
          </Card>
        </Stack>
      </Box>
    </Container>
  );
}
```

### Form Page Layout
```jsx
import { Container, Box, Stack, Typography } from '@mui/material';
import Card from './client/components/ui/Card';
import Input from './client/components/ui/Input';
import Button from './client/components/ui/Button';
import Alert from './client/components/ui/Alert';

function FormPage() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Stack spacing={4} alignItems="center">
          <Typography variant="h4" component="h1" textAlign="center">
            Form Title
          </Typography>
          
          <Card variant="contained" sx={{ width: '100%', maxWidth: 500 }}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                {success && (
                  <Alert severity="success">
                    Form submitted successfully!
                  </Alert>
                )}
                
                <Input
                  label="Field Name"
                  value={formData.field}
                  onChange={(e) => updateField('field', e.target.value)}
                  error={!!errors.field}
                  helperText={errors.field}
                  required
                />
                
                <Button type="submit" variant="gradient" fullWidth>
                  Submit Form
                </Button>
              </Stack>
            </form>
          </Card>
        </Stack>
      </Box>
    </Container>
  );
}
```

## 💡 Best Practices for AI

### Do's ✅
- Always use our transformed components for UI elements
- Wrap related content in Card components for grouping
- Use MUI's layout components (Box, Stack, Grid) for positioning
- Follow consistent prop naming patterns
- Implement proper loading, error, and success states
- Use templates for complete page implementations
- Leverage responsive breakpoints with MUI's system

### Don'ts ❌
- Don't mix MUI default components with our system unnecessarily
- Don't forget error handling and validation in forms
- Don't skip loading states for async operations
- Don't ignore responsive design considerations
- Don't use hardcoded values instead of our design tokens
- Don't pass unsupported props to components

## 🔍 Component Reference

### Quick Component Lookup
```jsx
// Forms
import Button from './client/components/ui/Button';
import Input from './client/components/ui/Input';
import TextField from './client/components/ui/TextField';  // Alias for Input
import Select from './client/components/ui/Select';
import Checkbox from './client/components/ui/Checkbox';
import Radio from './client/components/ui/Radio';
import Switch from './client/components/ui/Switch';
import Slider from './client/components/ui/Slider';

// Navigation  
import AppBar from './client/components/ui/AppBar';
import Tabs from './client/components/ui/Tabs';
import Menu from './client/components/ui/Menu';
import Drawer from './client/components/ui/Drawer';
import Breadcrumbs from './client/components/ui/Breadcrumbs';
import Pagination from './client/components/ui/Pagination';

// Display
import Card from './client/components/ui/Card';
import Table from './client/components/ui/Table';
import List from './client/components/ui/List';
import Avatar from './client/components/ui/Avatar';
import Chip from './client/components/ui/Chip';
import Badge from './client/components/ui/Badge';
import Tooltip from './client/components/ui/Tooltip';
import Accordion from './client/components/ui/Accordion';

// Feedback
import Alert from './client/components/ui/Alert';
import Dialog from './client/components/ui/Dialog';
import Modal from './client/components/ui/Modal';
import Snackbar from './client/components/ui/Snackbar';
import Progress from './client/components/ui/Progress';

// Templates
import Dashboard from './client/templates/Dashboard';
import LoginForm from './client/templates/LoginForm';
import SettingsForm from './client/templates/SettingsForm';
import DataTable from './client/templates/DataTable';
```

## 🎨 Design Token Reference

Our components use CSS custom properties for consistent theming:

### Colors
- `--color-primary-500` - Primary brand color
- `--color-success-500` - Success states
- `--color-warning-500` - Warning states  
- `--color-error-500` - Error states
- `--color-gray-300` - Light borders
- `--color-white` - Pure white

### Spacing
- `--spacing-1` through `--spacing-8` - Consistent spacing scale
- `--spacing-2` = 8px, `--spacing-4` = 16px, etc.

### Radius
- `--radius-sm` - Small border radius
- `--radius-md` - Medium border radius  
- `--radius-lg` - Large border radius

### Shadows
- `--shadow-sm` - Subtle shadow
- `--shadow-md` - Standard shadow
- `--shadow-lg` - Prominent shadow

## 🚀 Getting Started Checklist

When using this component library:

1. **Import patterns**: Use our components for UI, MUI for layout
2. **Choose approach**: Templates for complete pages, components for custom builds
3. **Follow patterns**: Consistent prop naming and component composition
4. **Handle states**: Always include loading, error, and success states
5. **Responsive design**: Use MUI's breakpoint system
6. **Design tokens**: Components automatically use our design system

**🤖 AI Integration Ready**: This library is optimized for AI code generation with predictable patterns, comprehensive examples, and consistent APIs. Use templates for rapid development and individual components for custom implementations.