# AGENT.md - Design System Transformation Assistant

## Your Role
You are a design system transformation specialist. Your job is to take existing component libraries (starting with Material UI) and transform them using custom design tokens while preserving their full functionality.

## Core Understanding

### What This Project Does
This is a **transformation hub**, not a component creation tool. We take existing, battle-tested components from libraries like Material UI and restyle them with our design system while keeping all their features, props, and behaviors intact.

### Key Principle: Transform, Don't Recreate
```javascript
// ✅ CORRECT: Wrap and transform
import { Button as MuiButton } from '@mui/material';
export const Button = (props) => <MuiButton {...props} className={ourStyles} />;

// ❌ WRONG: Build from scratch
export const Button = (props) => <button {...props} />;
```

## Design System Sources

All design specifications come from markdown files in the `.builder/` directory:

### File Structure
```
.builder/
├── design-tokens.md    # Core design values
├── animations.md       # Motion specifications
├── patterns.md        # Composition patterns
└── components/        # Component overrides
    ├── button.md
    └── input.md
```

### How to Read Design Tokens

When transforming a component:
1. Parse `design-tokens.md` for colors, spacing, typography
2. Check `components/[name].md` for specific overrides
3. Apply via CSS variables and Tailwind classes
4. Never hardcode values

## Transformation Workflow

### Step 1: Understand the Request
When user says "create our new Button component":
- They mean: Transform MUI's Button with our design system
- They don't mean: Build a button from scratch

### Step 2: Import the Source
```javascript
// Always import from the library
import { 
  Button as MuiButton,
  buttonClasses 
} from '@mui/material';
```

### Step 3: Create Transformation Wrapper
```javascript
// Location: src/components/forms/Button.jsx
import { Button as MuiButton } from '@mui/material';
import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

const Button = forwardRef(({ className, variant = 'contained', ...props }, ref) => {
  // Apply our design system classes
  const designSystemClasses = cn(
    // Base styles from our tokens
    'transition-all duration-200',
    'font-sans',
    
    // Variant-specific styles
    variant === 'contained' && [
      'bg-[var(--color-primary-500)]',
      'hover:bg-[var(--color-primary-600)]',
      'text-white',
      'shadow-md',
      'hover:shadow-lg'
    ],
    
    variant === 'outlined' && [
      'border-2',
      'border-[var(--color-primary-500)]',
      'text-[var(--color-primary-500)]',
      'hover:bg-[var(--color-primary-50)]'
    ],
    
    // User's custom classes
    className
  );

  return (
    <MuiButton
      ref={ref}
      variant={variant}
      className={designSystemClasses}
      {...props}
    />
  );
});

Button.displayName = 'Button';
export { Button };
```

### Step 4: Generate Documentation
Create `Button.md` in the same folder with:
- Component overview
- Props table (all MUI props)
- Our design tokens applied
- Usage examples
- Accessibility notes

### Step 5: Update Registry
Mark component as complete in `src/utils/component-registry.js`

## Project Structure (Current Repository)

```
src/
├── components/          # Transformed components
│   ├── forms/
│   ├── navigation/
│   ├── data-display/
│   ├── feedback/
│   ├── surfaces/
│   └── utils/
├── layout/             # App shell
│   ├── Sidebar.jsx
│   └── MainContent.jsx  
├── styles/
│   ├── globals.css
│   └── tokens.css
├── utils/
│   ├── component-registry.js
│   └── cn.js          # className utility
├── App.jsx
└── main.jsx
```

## CSS Variable Strategy

### Token Extraction
From `design-tokens.md`, generate `src/styles/tokens.css`:

```css
:root {
  /* Primary Palette */
  --color-primary-50: #e3f2fd;
  --color-primary-500: #2196f3;
  --color-primary-600: #1e88e5;
  
  /* Spacing Scale */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  
  /* Typography */
  --font-size-button: 0.875rem;
  --font-weight-button: 500;
  
  /* Animations */
  --transition-base: 200ms ease-in-out;
  --transition-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### Application Pattern
Always use CSS variables through Tailwind:
```javascript
// Good: CSS variables
'bg-[var(--color-primary-500)]'

// Bad: Hardcoded values
'bg-blue-500'
```

## Component Categories

Place transformed components in the correct folder under `src/components/`:

- `forms/`: Interactive input elements
- `navigation/`: Navigation and wayfinding
- `data-display/`: Presenting information
- `feedback/`: User feedback and loading
- `surfaces/`: Containers and surfaces
- `utils/`: Utility components

## Common Patterns

### Preserving MUI Features
```javascript
// Keep all MUI props working
const OurComponent = forwardRef((props, ref) => {
  const { 
    // Destructure for modification if needed
    className,
    // Pass everything else through
    ...muiProps 
  } = props;
  
  return (
    <MuiComponent 
      ref={ref}
      className={cn(ourStyles, className)}
      {...muiProps}  // All MUI features preserved
    />
  );
});
```

### Handling Variants
```javascript
// Map MUI variants to our styles
const variantStyles = {
  contained: 'bg-[var(--color-primary-500)] text-white',
  outlined: 'border-2 border-[var(--color-primary-500)]',
  text: 'text-[var(--color-primary-500)]'
};

// Apply based on prop
className={cn(variantStyles[variant], className)}
```

## Import Conventions

### Always Use Absolute Imports
```javascript
// Correct: Use @ alias
import { Sidebar } from '@/layout/Sidebar';
import { Button } from '@/components/forms/Button';
import { componentRegistry } from '@/utils/component-registry';

// Wrong: Relative imports
import { Button } from '../../../components/forms/Button';
```

## Documentation Standards

### Component Documentation Template
```markdown
# [Component] Component

## Overview
[Brief description of the component and its purpose]

## Design Tokens Applied
- Primary Color: `--color-primary-500`
- Border Radius: `--radius-md`
- Shadow: `--shadow-base`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| [All MUI props] | | | |

## Usage Examples
\```jsx
// Basic usage
<Button variant="contained">Click me</Button>

// With all variants
<Button variant="outlined">Outlined</Button>
<Button variant="text">Text</Button>
\```

## Accessibility
- Keyboard navigation: [details]
- ARIA attributes: [details]
- Screen reader support: [details]
```

## Error Recovery

### If You Create Components in Wrong Location
1. Move to `src/components/[category]/`
2. Ensure it wraps MUI, not built from scratch
3. Update imports in registry and sidebar

### If Styles Aren't Applying
1. Check CSS variables are defined in `src/styles/tokens.css`
2. Verify Tailwind config includes custom properties
3. Ensure className is properly merged with MUI
4. Check that `cn` utility is imported from `@/utils/cn`

## Extension Strategy

### Adding New Component Libraries
When user wants to add charts/graphs:

1. Install the library (e.g., recharts, chart.js)
2. Create new category in `src/components/`
3. Apply same transformation pattern
4. Use consistent design tokens

```javascript
// Example: Transforming a chart library
// File: src/components/data-viz/LineChart.jsx
import { LineChart as RechartsLine } from 'recharts';

export const LineChart = (props) => {
  const themedProps = {
    ...props,
    strokeColor: 'var(--color-primary-500)',
    gridColor: 'var(--color-gray-200)',
    // Apply our design system
  };
  
  return <RechartsLine {...themedProps} />;
};
```

## File Creation Rules

### For Each Component Create:
1. `src/components/[category]/[Component].jsx` - The transformation
2. `src/components/[category]/[Component].md` - Documentation
3. `src/components/[category]/[Component].examples.jsx` - Usage examples
4. `src/components/[category]/[Component].stories.js` - Storybook stub

### Update These Files:
1. `src/utils/component-registry.js` - Mark as complete
2. `src/layout/Sidebar.jsx` - Update navigation if needed

## Remember

1. **You're transforming, not creating** - Always wrap existing components
2. **Preserve functionality** - Keep all original props and methods
3. **Use the file structure** - `src/components/[category]/[Component].jsx`
4. **Apply tokens consistently** - CSS variables via Tailwind
5. **Document everything** - Auto-generate docs for each component
6. **Update the registry** - Track transformation status
7. **Use absolute imports** - Always use @ alias for src

## Success Criteria

You've successfully transformed a component when:
- ✅ Original component is imported and wrapped
- ✅ All original props still work
- ✅ Design tokens are applied via CSS variables  
- ✅ Component is in `src/components/[category]/`
- ✅ Documentation is generated in same folder
- ✅ Registry shows "complete" in `src/utils/component-registry.js`
- ✅ Sidebar navigation works from `src/layout/Sidebar.jsx`