# AGENTS.md - Material UI Component Transformation Instructions for Fusion

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