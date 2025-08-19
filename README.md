# Material Design System

A comprehensive, heavily-transformed Material UI design system with custom variants, design tokens, enhanced animations, and real-world templates. Built for AI-powered development with Builder.io Fusion and similar tools.

## 🎯 AI Development System

This design system is specifically optimized for AI code generation tools like Builder.io Fusion. It provides:

- **35+ Production-Ready Components** with consistent API patterns
- **Real-World Templates** demonstrating component composition
- **Composition Patterns** showing how components work together
- **Comprehensive Documentation** for AI understanding
- **Predictable Prop Interfaces** following consistent conventions

## 🏗️ System Architecture

### Component Categories
```
📁 client/components/ui/          # 35+ transformed components
📁 client/templates/              # Real-world page templates
📁 client/pages/                  # Interactive documentation
📁 client/styles/tokens.css       # Design token definitions
📁 client/utils/component-registry.js  # AI-readable component specs
```

### AI Navigation Guide
- **Templates** (`/templates`) - Pre-built page patterns for common use cases
- **Component Library** (`/components`) - Individual component documentation with live examples
- **Composition Guide** (`/composition-guide`) - Patterns for combining components effectively

## 🧩 Component Usage for AI

### Import Patterns (Critical for AI)
```jsx
// ✅ ALWAYS use our transformed components for UI elements
import Button from './client/components/ui/Button';
import Input from './client/components/ui/Input';  // Alias for TextField
import Card from './client/components/ui/Card';
import Switch from './client/components/ui/Switch';

// ✅ Use MUI directly for layout and utilities
import { Box, Stack, Grid, Typography, Divider } from '@mui/material';

// ✅ Use MUI icons
import { Search, Add, Delete, Settings } from '@mui/icons-material';

// ❌ NEVER import MUI components that we've transformed
// import { Button } from '@mui/material';  // NO - use our Button
// import { TextField } from '@mui/material'; // NO - use our Input/TextField
```

### Component Decision Matrix for AI
| Use Case | Component Source | Example |
|----------|------------------|---------|
| Buttons, Forms, Cards | **Our System** | `<Button variant="gradient">` |
| Layout, Spacing | **MUI Direct** | `<Box sx={{ p: 2 }}>` |
| Typography | **MUI Direct** | `<Typography variant="h4">` |
| Icons | **MUI Icons** | `<Search />` |
| Complex Layouts | **Our Templates** | `<Dashboard />` |

## 📋 Available Templates (AI Usage)

### Real-World Page Templates
```jsx
// Dashboard with stats, tables, charts
import Dashboard from './client/templates/Dashboard';
<Dashboard showDemo={true} />

// Authentication forms with validation
import LoginForm from './client/templates/LoginForm';
<LoginForm 
  onLogin={(email, password) => handleAuth(email, password)}
  onSignup={() => navigate('/signup')}
/>

// Settings panel with tabs and preferences
import SettingsForm from './client/templates/SettingsForm';
<SettingsForm onSave={(settings) => updateUserSettings(settings)} />

// Data table with filtering, pagination, actions
import DataTable from './client/templates/DataTable';
<DataTable 
  data={users}
  onEdit={(user) => editUser(user)}
  onDelete={(user) => deleteUser(user)}
/>
```

### Template Usage Patterns
- **Dashboard**: Analytics, stats cards, activity feeds, data tables
- **LoginForm**: Authentication, social login, validation, error handling
- **SettingsForm**: User preferences, tabbed interface, form validation
- **DataTable**: CRUD operations, filtering, sorting, bulk actions

## 🎨 Component Composition Patterns

### Form Composition
```jsx
// ✅ Standard form pattern
<Card variant="contained">
  <Stack spacing={3}>
    <Input 
      label="Email" 
      type="email"
      error={!!errors.email}
      helperText={errors.email}
    />
    <Input 
      label="Password" 
      type="password"
      error={!!errors.password}
      helperText={errors.password}
    />
    <Button variant="gradient" type="submit" fullWidth>
      Sign In
    </Button>
  </Stack>
</Card>
```

### Settings Panel Pattern
```jsx
// ✅ Settings with switches and validation
<Card variant="contained">
  <Stack spacing={3}>
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
    <Button variant="gradient">Save Settings</Button>
  </Stack>
</Card>
```

### Data Display Pattern
```jsx
// ✅ Table with actions and status indicators
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

## 🔧 Component Specifications

### Universal Props (All Components)
```typescript
interface BaseComponentProps {
  variant?: 'contained' | 'outlined' | 'minimal' | 'gradient' | 'glass';
  size?: 'small' | 'medium' | 'large';
  showDemo?: boolean;  // For component preview mode
}
```

### Form Components
```jsx
// Input/TextField
<Input 
  label="Field Label"
  placeholder="Placeholder text"
  error={boolean}
  helperText="Helper or error text"
  variant="outlined" | "filled" | "standard" | "gradient" | "glass"
  size="small" | "medium" | "large"
/>

// Button
<Button 
  variant="contained" | "outlined" | "text" | "gradient" | "ghost" | "success" | "warning" | "error"
  size="small" | "medium" | "large"
  loading={boolean}
  startIcon={<Icon />}
  endIcon={<Icon />}
>
  Button Text
</Button>

// Switch/Toggle
<Switch 
  label="Switch Label"
  checked={boolean}
  onChange={(checked) => handleChange(checked)}
  variant="contained" | "outlined" | "minimal"
  helperText="Optional helper text"
/>
```

### Navigation Components
```jsx
// AppBar/Header
<AppBar 
  variant="default" | "elevated" | "gradient" | "glass" | "minimal"
  title="Page Title"
  actions={<ActionButtons />}
  showDemo={false}
/>

// Tabs
<Tabs 
  value={activeTab}
  onChange={(_, newValue) => setActiveTab(newValue)}
  tabs={[
    { label: 'Tab 1', content: <Content1 /> },
    { label: 'Tab 2', content: <Content2 /> }
  ]}
  variant="contained" | "outlined" | "minimal"
/>
```

### Feedback Components
```jsx
// Alert/Notification
<Alert 
  severity="success" | "warning" | "error" | "info"
  variant="contained" | "outlined" | "minimal" | "gradient" | "glass"
  onClose={() => handleClose()}
>
  Alert message content
</Alert>

// Modal/Dialog
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  size="small" | "medium" | "large" | "fullscreen"
  actions={
    <>
      <Button variant="outlined" onClick={onCancel}>Cancel</Button>
      <Button variant="gradient" onClick={onConfirm}>Confirm</Button>
    </>
  }
>
  Modal content
</Modal>
```

## 🎯 AI Decision Guidelines

### When to Use Templates vs Components

**Use Templates When:**
- Building complete pages (dashboard, login, settings)
- Need complex component interactions
- Implementing common UI patterns
- Rapid prototyping of full features

**Use Individual Components When:**
- Building custom layouts
- Need specific component combinations
- Implementing unique business logic
- Fine-grained control over behavior

### Component Combination Rules

1. **Container Hierarchy**: Always wrap content in `Card` for logical grouping
2. **Layout Structure**: Use MUI's `Box`, `Stack`, `Grid` for positioning
3. **Form Patterns**: Group related inputs with consistent error handling
4. **Action Grouping**: Use `Stack direction="row"` for button groups
5. **Feedback Integration**: Always provide loading/error/success states

### Props Naming Conventions (AI Recognition)

```jsx
// ✅ Standard prop patterns
variant="contained"      // Visual style
size="medium"           // Component sizing
error={hasError}        // Error states
helperText="message"    // Supporting text
onChange={handler}      // Event handlers
loading={isLoading}     // Loading states
disabled={isDisabled}   // Disabled states
fullWidth={true}        // Layout modifiers

// ✅ Boolean props for states
checked={isChecked}     // For switches, checkboxes
selected={isSelected}   // For selectable items
active={isActive}       // For navigation items
```

## 📊 Component Coverage Status

### ✅ Production Ready (35 components)
| Category | Components | Status |
|----------|------------|--------|
| **Forms** | Button, Input/TextField, Select, Checkbox, Radio, Switch, Slider | Complete |
| **Navigation** | AppBar, Menu, Tabs, Drawer, Breadcrumbs, Pagination | Complete |
| **Display** | Card, Table, Avatar, Badge, Chip, List, Tooltip, Accordion | Complete |
| **Feedback** | Alert, Modal, Dialog, Snackbar, Progress | Complete |

### 📋 Templates Available
- **Dashboard** - Analytics dashboard with stats and tables
- **LoginForm** - Authentication with social login
- **SettingsForm** - User preferences with tabs
- **DataTable** - CRUD operations with filtering

### 🔗 Integration Resources
- **Component Registry** (`/client/utils/component-registry.js`) - Complete component specifications
- **Live Documentation** (`/components`) - Interactive component explorer
- **Composition Guide** (`/composition-guide`) - Component combination patterns
- **Template Gallery** (`/templates`) - Real-world usage examples

## 🚀 Quick Start for AI

### 1. Basic Page Structure
```jsx
import { Box, Stack, Typography } from '@mui/material';
import Card from './client/components/ui/Card';
import Button from './client/components/ui/Button';

function MyPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Page Title</Typography>
      <Card variant="contained">
        <Stack spacing={2}>
          <Typography variant="body1">Content goes here</Typography>
          <Button variant="gradient">Action Button</Button>
        </Stack>
      </Card>
    </Box>
  );
}
```

### 2. Form with Validation
```jsx
import { useState } from 'react';
import { Stack } from '@mui/material';
import Card from './client/components/ui/Card';
import Input from './client/components/ui/Input';
import Button from './client/components/ui/Button';
import Alert from './client/components/ui/Alert';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  return (
    <Card variant="contained">
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {success && (
            <Alert severity="success">Form submitted successfully!</Alert>
          )}
          
          <Input
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            error={!!errors.name}
            helperText={errors.name}
            required
          />
          
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            error={!!errors.email}
            helperText={errors.email}
            required
          />
          
          <Button type="submit" variant="gradient" fullWidth>
            Submit
          </Button>
        </Stack>
      </form>
    </Card>
  );
}
```

### 3. Using Complete Templates
```jsx
import Dashboard from './client/templates/Dashboard';
import DataTable from './client/templates/DataTable';

// Full dashboard page
function DashboardPage() {
  return <Dashboard showDemo={true} />;
}

// Data management page
function UsersPage() {
  return (
    <DataTable 
      data={users}
      onEdit={(user) => handleEditUser(user)}
      onDelete={(user) => handleDeleteUser(user)}
      onView={(user) => handleViewUser(user)}
    />
  );
}
```

## 💡 AI Best Practices

### Do's ✅
- Always use our transformed components for UI elements
- Wrap content in Cards for logical grouping
- Use Stack/Grid for layout, our components for interaction
- Follow consistent prop naming patterns
- Implement proper error states and loading indicators
- Use templates for complete page implementations

### Don'ts ❌
- Don't mix MUI default components with our system unnecessarily
- Don't forget error handling in forms
- Don't skip loading states for async operations
- Don't ignore responsive design considerations
- Don't pass unsupported props to styled components

---

**🤖 AI Integration Ready**: This design system is optimized for AI code generation with predictable patterns, comprehensive documentation, and real-world examples. Use `/templates` for complete pages, `/components` for individual elements, and `/composition-guide` for combination patterns.
