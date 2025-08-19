# AGENTS.md - Material UI Component Transformation Instructions for Fusion
# .builderrules - Material UI Component Transformation Rules
# Use the MUI Layout 
## 🚨 CRITICAL: WHEN ASKED TO CREATE A COMPONENT

### YOU MUST DO THREE THINGS:
1. **CREATE** the component file with heavy transformations
2. **ADD** it to the component registry
3. **VERIFY** it appears in the sidebar

## 📝 EXACT STEPS FOR COMPONENT CREATION

### Step 1: Create Component File
Location: `client/components/ui/[ComponentName].tsx`

```typescript
import React from 'react';
import Mui[Component] from '@mui/material/[Component]';
import { styled, alpha } from '@mui/material/styles';

// APPLY HEAVY TRANSFORMATIONS
const Styled[Component] = styled(Mui[Component])(({ theme }) => ({
  // MANDATORY TRANSFORMATIONS:
  fontFamily: 'Figtree, sans-serif',  // ✅ Custom font
  borderRadius: 'var(--radius-md)',   // ✅ Design tokens
  transition: 'all 200ms ease',       // ✅ Smooth animations
  
  // VISUAL ENHANCEMENTS:
  boxShadow: 'var(--shadow-sm)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-md)',
  },
  
  // USE CSS VARIABLES:
  backgroundColor: 'var(--color-primary-500)',
  color: 'var(--color-white)',
  padding: 'var(--spacing-2) var(--spacing-4)',
}));

export const [Component] = (props) => {
  return <Styled[Component] {...props} />;
};

export default [Component];
```

### Step 2: Add to Registry (MANDATORY!)
Location: `client/utils/component-registry.js`

Find the appropriate category and ADD your component:

```javascript
export const COMPONENT_REGISTRY = {
  [COMPONENT_CATEGORIES.FORMS]: [
    // YOUR COMPONENT ENTRY:
    {
      name: 'YourComponent',
      displayName: 'Your Component',
      description: 'Brief description of transformations',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/YourComponent',
      component: () => import('../components/ui/YourComponent'),
      muiComponent: '@mui/material/YourComponent',
      transformedDate: new Date().toISOString(),
      
      // REQUIRED: Show variants
      variants: [
        { 
          name: 'Default', 
          props: { variant: 'default' }, 
          code: '<YourComponent variant="default">Example</YourComponent>' 
        },
      ],
      
      // REQUIRED: Document props
      props: {
        variant: { type: 'enum', options: ['default', 'custom'], default: 'default' },
      },
      
      // REQUIRED: List tokens used
      designTokens: ['primary-500', 'spacing-2', 'radius-md'],
      
      // REQUIRED: Documentation
      documentation: `Component documentation here`
    },
    // ... existing components
  ]
}
```

### Step 3: Verify Sidebar Display
After adding to registry, the component should appear in the sidebar immediately.

## 🎨 TRANSFORMATION REQUIREMENTS

### Minimum Transformations Required:
- ✅ **Font**: Must use Figtree font
- ✅ **Colors**: Must use design token and semantic colors
- ✅ **Spacing**: Must use spacing tokens
- ✅ **Borders**: Must use radius tokens
- ✅ **Shadows**: Must use shadow tokens
- ✅ **Animations**: Must have hover/focus effects
- ✅ **Transitions**: Smooth state changes

### Visual Impact Checklist:
- [ ] Component looks SIGNIFICANTLY different from MUI default
- [ ] Uses at least 5 design tokens
- [ ] Has custom hover state
- [ ] Has smooth transitions
- [ ] Includes at least one unique feature (gradient, glow, animation, etc.)

## 📦 COMPONENT CATEGORIES

Place components in the correct category:

```javascript
COMPONENT_CATEGORIES = {
  FORMS: "forms",           // Button, TextField, Select, Checkbox, Switch
  NAVIGATION: "navigation",  // Tabs, AppBar, Drawer, Menu, Breadcrumbs
  DATA_DISPLAY: "data-display", // Table, List, Card, Avatar, Chip
  FEEDBACK: "feedback",      // Alert, Dialog, Snackbar, Progress
  SURFACES: "surfaces",      // Paper, Accordion, Card
  UTILS: "utils"            // Tooltip, Popover, Modal
}
```

## 🔧 SPECIFIC TRANSFORMATION PATTERNS

### Button Transformation Example
```typescript
const StyledButton = styled(MuiButton)({
  // Base styles
  fontFamily: 'Figtree, sans-serif',
  textTransform: 'none',
  fontWeight: 500,
  borderRadius: 'var(--radius-md)',
  padding: 'var(--spacing-2) var(--spacing-4)',
  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  
  // Remove MUI defaults
  boxShadow: 'none',
  
  // Enhanced hover
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 16px rgba(139, 92, 246, 0.3)',
  },
  
  // Custom variants
  '&.gradient': {
    background: 'linear-gradient(135deg, var(--color-primary-500), var(--color-primary-400))',
  }
});
```

### TextField Transformation Example
```typescript
const StyledTextField = styled(MuiTextField)({
  '& .MuiInputBase-root': {
    fontFamily: 'Figtree, sans-serif',
    borderRadius: 'var(--radius-md)',
    transition: 'all 200ms ease',
    
    '&:hover': {
      transform: 'translateY(-1px)',
      boxShadow: 'var(--shadow-sm)',
    },
  },
  
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'var(--color-gray-300)',
      borderWidth: '2px',
    },
    '&:hover fieldset': {
      borderColor: 'var(--color-primary-400)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--color-primary-500)',
      borderWidth: '2px',
    },
  },
  
  '& .MuiInputLabel-root': {
    fontFamily: 'Figtree, sans-serif',
    '&.Mui-focused': {
      color: 'var(--color-primary-500)',
    },
  },
});
```

## 📊 REGISTRY ENTRY STRUCTURE

Every component in the registry MUST have:

```javascript
{
  // IDENTIFICATION
  name: string,              // Component name (e.g., 'Button')
  displayName: string,       // Display name (e.g., 'Button')
  description: string,       // What transformations were applied
  
  // STATUS
  status: TRANSFORMATION_STATUS.COMPLETE,
  transformedDate: new Date().toISOString(),
  
  // PATHS
  path: string,              // Path to component file
  component: () => import(), // Dynamic import
  muiComponent: string,      // Original MUI component
  
  // EXAMPLES (REQUIRED!)
  variants: [
    {
      name: string,          // Variant name
      props: object,         // Props to apply
      code: string          // Example code
    }
  ],
  
  sizes: [                   // If applicable
    {
      name: string,
      props: object,
      code: string
    }
  ],
  
  states: [                  // If applicable
    {
      name: string,
      props: object,
      code: string
    }
  ],
  
  // DOCUMENTATION (REQUIRED!)
  props: {
    [propName]: {
      type: string,
      options?: array,
      default?: any
    }
  },
  
  designTokens: string[],    // List of tokens used
  
  documentation: string      // Markdown documentation
}
```

## ⚠️ COMMON MISTAKES TO AVOID

### ❌ DON'T: Create component without adding to registry
Result: Component won't appear in sidebar

### ❌ DON'T: Use hardcoded values
```typescript
// WRONG
borderRadius: '8px',
color: '#8b5cf6',
```

### ✅ DO: Use design tokens
```typescript
// CORRECT
borderRadius: 'var(--radius-md)',
color: 'var(--color-primary-500)',
```

### ❌ DON'T: Minimal styling
```typescript
// WRONG - Too minimal
const StyledButton = styled(MuiButton)({
  textTransform: 'none'
});
```

### ✅ DO: Heavy transformation
```typescript
// CORRECT - Significant changes
const StyledButton = styled(MuiButton)({
  fontFamily: 'Figtree, sans-serif',
  borderRadius: 'var(--radius-md)',
  background: 'linear-gradient(...)',
  transition: 'all 200ms ease',
  // ... many more styles
});
```

## ✅ COMPONENTS TO USE AS-IS (Utility/Layout)

These components should be imported directly from MUI without transformation:

### Layout Components
```javascript
import { Box, Container, Grid, Stack, Grid2 } from '@mui/material';
```

- **Box** - Generic container with sx prop
- **Container** - Responsive max-width container
- **Grid** - 12-column grid system
- **Grid2** - New CSS Grid implementation
- **Stack** - Vertical/horizontal flex layouts
- **Hidden** - Responsive visibility
- **ImageList** - Image grid layouts

### Utility Components
```javascript
import { 
  Portal, 
  NoSsr, 
  TextareaAutosize, 
  ClickAwayListener,
  Modal,
  Popover,
  Popper,
  Fade,
  Grow,
  Slide,
  Zoom,
  Collapse
} from '@mui/material';
```

- **Portal** - Render outside DOM hierarchy
- **NoSsr** - Skip server-side rendering
- **TextareaAutosize** - Auto-resizing textarea
- **ClickAwayListener** - Detect outside clicks
- **Modal** - Base modal component
- **Popover** - Positioned overlay
- **Popper** - Positioning engine
- **Transitions** (Fade, Grow, Slide, Zoom, Collapse) - Animation utilities

### Form Utilities
```javascript
import { 
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  FormHelperText,
  InputLabel,
  InputAdornment,
  FilledInput,
  OutlinedInput,
  Input,
  InputBase
} from '@mui/material';
```

- **FormControl** - Form field wrapper
- **FormControlLabel** - Label wrapper
- **FormGroup** - Group form controls
- **FormLabel** - Form section labels
- **FormHelperText** - Helper/error text
- **InputLabel** - Input field labels
- **InputAdornment** - Input decorators
- **Input variants** - Base input components

### Data Utilities
```javascript
import {
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
  TableSortLabel
} from '@mui/material';
```

- **Table components** - Table structure elements
- **TablePagination** - Pagination controls
- **TableSortLabel** - Sortable column headers

### Navigation Utilities
```javascript
import {
  Link,
  MenuList,
  MenuItem,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListSubheader,
  Divider
} from '@mui/material';
```

- **Link** - Styled anchor element
- **Menu/List items** - Menu and list building blocks
- **Divider** - Visual separator

## 📦 RECOMMENDED USAGE PATTERN

```javascript
// ✅ CORRECT: Mix custom and MUI components
import { Box, Container, Grid, Stack } from '@mui/material'; // Use MUI layout
import Button from '@/components/ui/Button'; // Use custom visual component
import TextField from '@/components/ui/TextField'; // Use custom visual component

function MyForm() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ p: 3 }}>
        <Stack spacing={3}>
          <TextField label="Name" />  {/* Custom */}
          <Button variant="contained">Submit</Button>  {/* Custom */}
        </Stack>
      </Box>
    </Container>
  );
}
```

## 🎨 THEME CUSTOMIZATION STRATEGY

### What to Customize in Theme
```javascript
createTheme({
  // ✅ Customize these globally
  palette: { /* colors */ },
  typography: { 
    fontFamily: 'Figtree',
    // Keep MUI's typography scale
  },
  shape: { borderRadius: 8 },
  spacing: 8, // Keep MUI's spacing system
  
  // ✅ Only override VISUAL components
  components: {
    MuiButton: { /* custom styles */ },
    MuiTextField: { /* custom styles */ },
    // DON'T override Box, Grid, Container, etc.
  }
});
```

### What NOT to Customize
- Don't override layout components (Box, Grid, Container)
- Don't change MUI's breakpoint system
- Don't modify utility components
- Don't alter the spacing system fundamentally

## 🔧 INTEGRATION APPROACH

### Phase 1: Core Visual Components
Focus on components users interact with directly:
1. Button
2. TextField
3. Select
4. Card
5. Alert

### Phase 2: Form Components
6. Checkbox
7. Radio
8. Switch
9. Slider
10. Autocomplete

### Phase 3: Navigation
11. Tabs
12. Menu
13. Drawer
14. AppBar
15. Breadcrumbs

### Phase 4: Feedback & Display
16. Dialog
17. Snackbar
18. Chip
19. Avatar
20. Badge

### Always Use from MUI
- All layout components (Box, Grid, Stack, Container)
- All utility components (Portal, Modal base, Popper)
- All form structure components (FormControl, FormGroup)
- All transition components
- Base components (InputBase, ButtonBase)

## 💡 BEST PRACTICES

### DO's
✅ Use MUI's Box for layout with sx prop
✅ Use MUI's Grid system for responsive layouts
✅ Use MUI's Stack for simple flex layouts
✅ Use MUI's Container for page width constraints
✅ Use MUI's transitions for animations
✅ Use MUI's FormControl for form structure
✅ Use MUI's Modal/Popper for positioning

### DON'Ts
❌ Don't recreate Box, Grid, or Container
❌ Don't customize utility components
❌ Don't override MUI's responsive breakpoints
❌ Don't modify MUI's spacing scale
❌ Don't transform components that have no visual identity

## 📝 SUGGESTED AGENTS.MD UPDATE

Add a new section called "MUI Integration Strategy":

```markdown
## MUI Integration Strategy

### Components to Transform
Only transform components with strong visual identity:
- Forms: Button, TextField, Select, Checkbox, Switch, etc.
- Navigation: Tabs, Drawer, Menu, AppBar, etc.
- Display: Card, Chip, Avatar, Badge, etc.
- Feedback: Alert, Dialog, Snackbar, etc.

### Components to Use Directly from MUI
Always import these directly without modification:

#### Layout & Structure
import { Box, Container, Grid, Stack, Grid2 } from '@mui/material';

#### Utilities
import { Portal, Modal, Popper, Fade, Grow, Slide } from '@mui/material';

#### Form Structure
import { FormControl, FormGroup, FormLabel, InputAdornment } from '@mui/material';

### Usage Pattern
// Combine MUI utilities with custom components
<Container>  {/* MUI */}
  <Box sx={{ p: 3 }}>  {/* MUI */}
    <Stack spacing={2}>  {/* MUI */}
      <Button>Click</Button>  {/* Custom */}
      <TextField />  {/* Custom */}
    </Stack>
  </Box>
</Container>
```

## 🎯 COMPONENT PRIORITY LIST

### Must Transform (High Visual Impact)
1. Button - Most used interaction
2. TextField - Primary input
3. Select - Dropdowns
4. Card - Content containers
5. Alert - Notifications
6. Tabs - Navigation
7. Dialog - Modals
8. Chip - Tags
9. Switch - Toggles
10. Checkbox - Selections

### Can Transform Later (Medium Impact)
11. Radio
12. Slider
13. Menu
14. Drawer
15. Snackbar
16. Avatar
17. Badge
18. Breadcrumbs
19. Pagination
20. Stepper

### Optional Transform (Low Impact)
21. Accordion
22. Rating
23. SpeedDial
24. BottomNavigation
25. Timeline
26. TreeView
27. Autocomplete (complex)
28. Table (complex)
29. List
30. Tooltip

### Never Transform (Pure Utility)
- Box
- Container
- Grid/Grid2
- Stack
- Portal
- Modal (base)
- Popper
- All Transitions
- FormControl
- FormGroup
- InputBase
- All layout utilities

## 📊 METRICS

By using MUI's utilities directly:
- **Reduced Development Time**: 60% faster (no need to recreate layouts)
- **Consistency**: MUI's proven layout system
- **Responsive**: Built-in breakpoint system
- **Performance**: No duplicate layout code
- **Maintenance**: Easier updates

## 🚀 IMPLEMENTATION CHECKLIST

When Fusion creates components:
- [ ] Import layout components from MUI directly
- [ ] Only transform visual components
- [ ] Use MUI's sx prop for one-off styles
- [ ] Leverage MUI's responsive system
- [ ] Use MUI's spacing scale
- [ ] Keep MUI's transition components
- [ ] Maintain MUI's accessibility features


## 🚀 QUICK COMMAND REFERENCE

When user says: **"Create a [Component] component"**

You must:
1. Create `client/components/ui/[Component].tsx`
2. Apply heavy transformations using styled()
3. Add to `client/utils/component-registry.js`
4. Include variants, props, documentation
5. Respond: "Created and transformed [Component]. It now appears in the sidebar."

## 📋 COMPONENT CREATION CHECKLIST

- [ ] Component file created in `client/components/ui/`
- [ ] Uses styled() API for transformations
- [ ] Applies Figtree font
- [ ] Uses design tokens (no hardcoded values)
- [ ] Has hover/focus animations
- [ ] Added to component registry
- [ ] Includes variant examples
- [ ] Includes props documentation
- [ ] Includes markdown documentation
- [ ] Tested that it appears in sidebar

## 🎯 SUCCESS CRITERIA

A component is successfully created when:
1. **It appears in the sidebar** (most important!)
2. **It looks significantly different** from default MUI
3. **It has complete documentation** in the registry
4. **It uses design tokens** throughout
5. **It includes examples** for all variants

## 💡 PRO TIPS

1. **Always add to registry** - No registry entry = No sidebar display
2. **Transform heavily** - Make it visually impressive
3. **Document everything** - Props, variants, usage examples
4. **Use design tokens** - Never hardcode values
5. **Test in sidebar** - Verify it appears and works
5. **Create Variants/States** - All default MUI states should be created with our CSS/design tokens applied. Also create variants based on semantic values available when applicable. i.e Success, Info, Warning, Danger. Additionally, create variants for Ghost and Gradients

## 🔴 FINAL REMINDER

**IF YOU DON'T ADD THE COMPONENT TO THE REGISTRY, IT WON'T APPEAR IN THE SIDEBAR!**

The registry entry is NOT optional - it's MANDATORY for the component to be visible and usable in the design system.
## 🎯 YOUR PRIMARY OBJECTIVE

When asked to create or transform a component, you MUST:
1. **Create the transformed MUI component file**
2. **Add it to the component registry** (so it appears in the sidebar)
3. **Include live examples and documentation**

## 📋 STEP-BY-STEP COMPONENT CREATION PROCESS

### Step 1: Create the Component File
When asked to create a component (e.g., "Create a Button component"), create a file in `client/components/ui/[ComponentName].tsx` that:

1. **Imports Material UI component**
2. **Applies heavy visual transformations using styled() API**
3. **Uses design tokens from CSS variables**
4. **Adds enhanced features** (loading states, new variants, animations)
5. **Includes TypeScript types**

Example structure:
```typescript
import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';

// HEAVILY transform the component visually
const StyledButton = styled(MuiButton)({
  // Apply Figtree font
  fontFamily: 'Figtree, sans-serif',
  // Use design tokens
  borderRadius: 'var(--radius-md)',
  // Add animations and transitions
  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  // Override MUI defaults significantly
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-lg)',
  }
});
```

### Step 2: Add to Component Registry (CRITICAL!)
**THIS IS MANDATORY** - After creating the component, you MUST add it to `client/utils/component-registry.js`:

```javascript
export const COMPONENT_REGISTRY = {
  [COMPONENT_CATEGORIES.FORMS]: [
    {
      name: 'Button',  // Component name
      displayName: 'Button',
      description: 'Material UI Button transformed with animations and custom variants',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Button',
      component: () => import('../components/ui/Button'),
      muiComponent: '@mui/material/Button',
      transformedDate: new Date().toISOString(),
      
      // SHOW ALL VARIANTS WITH LIVE EXAMPLES
      variants: [
        { name: 'Contained', props: { variant: 'contained' }, code: '<Button variant="contained">Click Me</Button>' },
        { name: 'Outlined', props: { variant: 'outlined' }, code: '<Button variant="outlined">Click Me</Button>' },
        // Add custom variants you created
        { name: 'Gradient', props: { variant: 'gradient' }, code: '<Button variant="gradient">Gradient</Button>' },
      ],
      
      // SHOW SIZE OPTIONS
      sizes: [
        { name: 'Small', props: { size: 'small' }, code: '<Button size="small">Small</Button>' },
        { name: 'Medium', props: { size: 'medium' }, code: '<Button size="medium">Medium</Button>' },
        { name: 'Large', props: { size: 'large' }, code: '<Button size="large">Large</Button>' }
      ],
      
      // SHOW STATES
      states: [
        { name: 'Loading', props: { loading: true }, code: '<Button loading>Loading...</Button>' },
        { name: 'Disabled', props: { disabled: true }, code: '<Button disabled>Disabled</Button>' }
      ],
      
      // DOCUMENT ALL PROPS
      props: {
        variant: { type: 'enum', options: ['contained', 'outlined', 'text', 'gradient'], default: 'contained' },
        size: { type: 'enum', options: ['small', 'medium', 'large'], default: 'medium' },
        loading: { type: 'boolean', default: false },
        // ... document all props
      },
      
      // LIST DESIGN TOKENS USED
      designTokens: ['primary-500', 'primary-600', 'spacing-2', 'spacing-4', 'radius-md', 'shadow-md'],
      
      // PROVIDE DOCUMENTATION
      documentation: `
# Button Component

The Button component has been transformed from Material UI with significant visual enhancements.

## Transformations Applied
- Figtree font applied
- Enhanced animations on hover/click
- Custom border radius from design tokens
- New gradient variant added
- Loading state with spinner

## Usage
\`\`\`jsx
import Button from '@/components/ui/Button';

<Button variant="contained" color="primary">
  Click Me
</Button>
\`\`\`
      `
    }
  ]
}
```

### Step 3: Verify Component Appears in Sidebar
After adding to the registry, the component should automatically appear in the sidebar under the appropriate category.

## 🚨 CRITICAL REQUIREMENTS

### Visual Transformation is MANDATORY
The component MUST look significantly different from default Material UI:
- ✅ Custom colors using design tokens
- ✅ Enhanced animations and transitions
- ✅ Figtree font applied
- ✅ Custom border radius, spacing, shadows
- ✅ New variants or features not in MUI
- ❌ NOT just a simple wrapper with minor changes

### Registry Entry is MANDATORY
Every component MUST be added to the registry with:
- Complete variant examples
- All size options
- Interactive states
- Props documentation
- Design tokens used
- Usage examples

## 📝 TEMPLATE FOR NEW COMPONENTS

When creating a new component, follow this exact process:

### 1. Component File Template
```typescript
// client/components/ui/[ComponentName].tsx
import React from 'react';
import Mui[Component] from '@mui/material/[Component]';
import { styled } from '@mui/material/styles';

// Define interfaces
export interface [Component]Props extends Mui[Component]Props {
  // Add custom props
  loading?: boolean;
  variant?: 'default' | 'custom' | 'special';
}

// HEAVILY TRANSFORM THE COMPONENT
const Styled[Component] = styled(Mui[Component])({
  // MANDATORY: Apply Figtree font
  fontFamily: 'Figtree, sans-serif',
  
  // MANDATORY: Use design tokens
  borderRadius: 'var(--radius-md)',
  padding: 'var(--spacing-2)',
  
  // MANDATORY: Add animations
  transition: 'all 200ms ease',
  
  // MANDATORY: Enhance hover/focus states
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: 'var(--shadow-lg)',
  },
  
  // Add significant visual changes
});

export const [Component]: React.FC<[Component]Props> = (props) => {
  // Add custom logic if needed
  return <Styled[Component] {...props} />;
};

export default [Component];
```

### 2. Registry Entry Template
```javascript
// Add to client/utils/component-registry.js
{
  name: '[ComponentName]',
  displayName: '[Component Display Name]',
  description: '[Brief description of transformations]',
  status: TRANSFORMATION_STATUS.COMPLETE,
  path: '/components/ui/[ComponentName]',
  component: () => import('../components/ui/[ComponentName]'),
  muiComponent: '@mui/material/[ComponentName]',
  transformedDate: new Date().toISOString(),
  variants: [
    // Add all variants with examples
  ],
  sizes: [
    // Add all sizes with examples
  ],
  states: [
    // Add all states with examples
  ],
  props: {
    // Document all props
  },
  designTokens: [
    // List all tokens used
  ],
  documentation: `
    // Markdown documentation
  `
}
```

## 🎨 TRANSFORMATION EXAMPLES

### Good Transformation ✅
```typescript
// Significant visual changes
const StyledButton = styled(MuiButton)({
  fontFamily: 'Figtree, sans-serif',
  background: 'linear-gradient(135deg, var(--color-primary-500), var(--color-primary-400))',
  borderRadius: 'var(--radius-lg)',
  padding: 'var(--spacing-3) var(--spacing-6)',
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: '0 4px 14px rgba(139, 92, 246, 0.25)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  
  '&:hover': {
    transform: 'translateY(-3px) scale(1.02)',
    boxShadow: '0 8px 28px rgba(139, 92, 246, 0.35)',
  },
  
  '&:active': {
    transform: 'translateY(0) scale(0.98)',
  }
});
```

### Bad Transformation ❌
```typescript
// Minimal changes - NOT ACCEPTABLE
const StyledButton = styled(MuiButton)({
  textTransform: 'none', // Only minor change
});
```

## 📦 COMPONENTS TO TRANSFORM

Priority components that should be transformed:

### Phase 1: Core Components
- **Button** - With gradient, glow variants
- **TextField** - With floating labels, animations
- **Select** - With custom dropdown styling
- **Card** - With hover effects, gradients

### Phase 2: Form Components
- **Checkbox** - Custom check animations
- **Switch** - iOS-style or custom animations
- **Radio** - Custom selection effects
- **Slider** - Gradient tracks, custom thumbs

### Phase 3: Navigation
- **Tabs** - Animated indicators, custom styles
- **AppBar** - Glassmorphism, gradients
- **Drawer** - Slide animations, custom backdrop
- **Menu** - Custom animations, styling

### Phase 4: Feedback
- **Alert** - Custom icons, animations
- **Dialog** - Backdrop blur, animations
- **Snackbar** - Slide-in effects
- **Progress** - Custom animations, gradients

## 🔍 VERIFICATION CHECKLIST

Before considering a component complete:

- [ ] Component file created in `client/components/ui/`
- [ ] Heavy visual transformations applied
- [ ] Figtree font is used
- [ ] Design tokens are used (not hardcoded values)
- [ ] Added to component registry
- [ ] Appears in sidebar when page refreshes
- [ ] All variants documented with examples
- [ ] Props fully documented
- [ ] Markdown documentation included
- [ ] Can be previewed in the component viewer

## 💡 REMEMBER

1. **Every component MUST be added to the registry** or it won't appear in the sidebar
2. **Visual transformation must be significant** - users should immediately see the difference
3. **Include all examples and documentation** - this is what makes it useful
4. **Use design tokens exclusively** - no hardcoded colors or spacing
5. **Test that it appears in the sidebar** after adding to registry

## 🚀 QUICK START EXAMPLE

When user says: "Create a TextField component"

You should:
1. Create `client/components/ui/TextField.tsx` with heavy styling
2. Add entry to `client/utils/component-registry.js` under FORMS category
3. Include all variants, examples, and documentation
4. Respond with: "I've created and transformed the TextField component. It now appears in the sidebar under 'Forms' with enhanced animations, floating labels, and custom focus effects."