# Sage & Pine Design System

A comprehensive Material UI design system with 27+ transformed components featuring the Sage & Pine color palette and Outfit + Poppins typography. Optimized for AI code generation tools with clear usage patterns and production-ready templates.

## 🎯 AI-Ready Component Library

This design system provides AI tools with:

- **27+ Transformed Components** with Sage & Pine styling
- **4 Production Templates** for complete page implementations  
- **Clear Usage Guidelines** for component vs MUI decisions
- **Consistent Prop Patterns** for predictable AI generation
- **Real-World Examples** showing proper composition

## 🏗️ System Architecture

### Component Categories
```
📁 client/components/ui/          # 27+ transformed components with Sage & Pine styling
📁 client/templates/              # 4 production-ready page templates
📁 client/styles/tokens.css       # Sage & Pine design token definitions
📁 client/theme/mui-theme.ts       # MUI theme with Outfit + Poppins fonts
```

### AI Usage Guidelines
- **Use Our Components** for all interactive UI elements (buttons, inputs, alerts)
- **Use Generic MUI** for layout, spacing, and non-visual utilities (Box, Stack, Typography)
- **Use Production Templates** for complete page implementations (Dashboard, LoginForm)
- **Follow Consistent Patterns** for prop usage and component composition

## 🧩 Component Usage for AI

### Critical Import Patterns
```jsx
// ✅ ALWAYS use our transformed components for interactive UI
import Button from '../mui-custom-lab/client/components/ui/Button';
import Input from '../mui-custom-lab/client/components/ui/Input';
import Card from '../mui-custom-lab/client/components/ui/Card';
import Switch from '../mui-custom-lab/client/components/ui/Switch';
import Alert from '../mui-custom-lab/client/components/ui/Alert';
import Modal from '../mui-custom-lab/client/components/ui/Modal';

// ✅ Use generic MUI for layout, spacing, and non-visual utilities
import { Box, Stack, Grid, Typography, Container, Divider } from '@mui/material';

// ✅ Use MUI icons
import { Search, Add, Delete, Settings, Home, User } from '@mui/icons-material';

// ❌ NEVER import MUI components that we've transformed
// import { Button } from '@mui/material';  // NO - use our Button
// import { TextField } from '@mui/material'; // NO - use our Input
// import { Switch } from '@mui/material'; // NO - use our Switch
```

### AI Decision Matrix
| Component Type | Source | Example |
|---------------|--------|---------|
| **Interactive UI** | **Our System** | `<Button variant="gradient">`, `<Input />`, `<Switch />` |
| **Layout & Spacing** | **Generic MUI** | `<Box sx={{ p: 2 }}>`, `<Stack spacing={3}>` |
| **Typography** | **Generic MUI** | `<Typography variant="h4">` (inherits Outfit + Poppins) |
| **Icons** | **MUI Icons** | `<Search />`, `<Add />` |
| **Non-Visual Utils** | **Generic MUI** | `<Divider />`, `<Container />` |
| **Complete Pages** | **Our Templates** | `<Dashboard />`, `<LoginForm />` |

## 📋 Available Templates (AI Usage)

### Real-World Page Templates
```jsx
// Dashboard with stats, tables, charts
import Dashboard from '../mui-custom-lab/client/templates/Dashboard';
<Dashboard showDemo={true} />

// Authentication forms with validation
import LoginForm from '../mui-custom-lab/client/templates/LoginForm';
<LoginForm 
  onLogin={(email, password) => handleAuth(email, password)}
  onSignup={() => navigate('/signup')}
/>

// Settings panel with tabs and preferences
import SettingsForm from '../mui-custom-lab/client/templates/SettingsForm';
<SettingsForm onSave={(settings) => updateUserSettings(settings)} />

// Data table with filtering, pagination, actions
import DataTable from '../mui-custom-lab/client/templates/DataTable';
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

### 📄 Production Templates (4 complete)
- **Dashboard** - Analytics with stats cards, charts, data tables
- **LoginForm** - Authentication with validation, social login options
- **SettingsForm** - User preferences with tabbed interface, form validation
- **DataTable** - CRUD operations with filtering, sorting, bulk actions

### 🌿 Design System Features
- **Sage & Pine Color Palette** - Professional nature-inspired aesthetic
- **Outfit + Poppins Typography** - Modern font pairing for excellent readability
- **Enhanced Animations** - Smooth hover effects, focus states, transitions
- **CSS Design Tokens** - Consistent styling across all components

## 🚀 Quick Start for AI

### 1. Basic Page with Sage & Pine Styling
```jsx
import { Box, Container, Stack, Typography } from '@mui/material';
import Card from '../mui-custom-lab/client/components/ui/Card';
import Button from '../mui-custom-lab/client/components/ui/Button';

function MyPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Stack spacing={4}>
          <Typography variant="h4" component="h1">Page Title</Typography>
          <Card variant="contained">
            <Stack spacing={3}>
              <Typography variant="body1">Content with Outfit font</Typography>
              <Button variant="gradient">Pine & Sage Button</Button>
            </Stack>
          </Card>
        </Stack>
      </Box>
    </Container>
  );
}
```

### 2. Form with Sage & Pine Components
```jsx
import { useState } from 'react';
import { Stack } from '@mui/material';
import Card from '../mui-custom-lab/client/components/ui/Card';
import Input from '../mui-custom-lab/client/components/ui/Input';
import Button from '../mui-custom-lab/client/components/ui/Button';
import Alert from '../mui-custom-lab/client/components/ui/Alert';

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
            Submit Form
          </Button>
        </Stack>
      </form>
    </Card>
  );
}
```

### 3. Using Production Templates
```jsx
import Dashboard from '../mui-custom-lab/client/templates/Dashboard';
import LoginForm from '../mui-custom-lab/client/templates/LoginForm';
import DataTable from '../mui-custom-lab/client/templates/DataTable';

// Analytics dashboard with Sage & Pine styling
function DashboardPage() {
  return <Dashboard showDemo={true} />;
}

// Authentication with Pine/Sage theme
function LoginPage() {
  return (
    <LoginForm 
      onLogin={(email, password) => handleAuth(email, password)}
      onSignup={() => navigate('/signup')}
    />
  );
}

// Data management with enhanced styling
function UsersPage() {
  return (
    <DataTable 
      data={users}
      onEdit={(user) => handleEditUser(user)}
      onDelete={(user) => handleDeleteUser(user)}
    />
  );
}
```

## 💡 AI Best Practices

### Do's ✅
- Use our Sage & Pine components for all interactive UI elements
- Use generic MUI for layout, spacing, and non-visual utilities
- Wrap related content in Card components for visual grouping
- Follow consistent prop patterns (variant, size, error, loading)
- Implement proper loading, error, and success states
- Use production templates for complete page implementations

### Don'ts ❌
- Don't import MUI components that we've transformed (Button, TextField, Switch)
- Don't skip error handling and validation in forms
- Don't ignore responsive design with MUI's breakpoint system
- Don't mix component systems unnecessarily
- Don't hardcode colors instead of using our themed components

---

**🌿 Sage & Pine Design System**: Professional nature-inspired component library with Pine (`#31473a`) primary and Sage (`#7c8363`) secondary colors, featuring Outfit + Poppins typography. Optimized for AI code generation with clear usage patterns, 27+ transformed components, and 4 production-ready templates.
