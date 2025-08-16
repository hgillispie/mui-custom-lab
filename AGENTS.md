# AGENTS.md - Custom Component Library Builder

## Your Mission

You are building a **custom component library from scratch** that matches Material UI's API but uses our design system natively. No more fighting with style overrides - we're creating our own components with complete control.

## Core Philosophy

### Build, Don't Override
Instead of wrestling with Material UI's styles, we create clean, custom components that:
- Match Material UI's prop interface (for easy migration)
- Use our design tokens directly
- Are built with Tailwind CSS
- Have zero external UI dependencies
- Give us complete control

# .builderrules - Custom Component Library Creation

## CRITICAL: New Component Creation Strategy

### Component Creation Approach
- **Create custom components from scratch** that match Material UI's API
- **Use design tokens natively** - no style overrides needed
- **Maintain same props, variants, and behavior** as Material UI
- **Build with Tailwind + CSS variables** for complete control

### Why This Approach?
1. **No style conflicts** - We own the entire component
2. **Full design system control** - Direct token application
3. **Better performance** - No competing styles
4. **Cleaner code** - No !important or complex overrides
5. **True component library** - Can be published separately

## 🔴 PREREQUISITE: Font Setup (DO THIS BEFORE CREATING ANY COMPONENTS!)

### ⚠️ Without proper font configuration, your components will NOT work correctly!

1. **Import Figtree font in your global CSS** (at the very top of the file)
2. **Configure Tailwind to use Figtree as the default sans font**
3. **Apply font-sans class to all components to ensure font inheritance**
4. **Test that Figtree is loading by inspecting computed styles**

**Quick Test:** Open DevTools, inspect any text element, and verify the computed font-family shows "Figtree" first.

## Component Creation Process

### Step 1: Study the Material UI Component API
```javascript
// Example: Study MUI Button API
// Props: variant, size, color, disabled, startIcon, endIcon, fullWidth, etc.
// Variants: contained, outlined, text
// Sizes: small, medium, large
```

### Step 2: Create Custom Component with Same API
```javascript
// File: client/components/forms/Button.jsx

  // Build styles using design tokens
  // 🚨 IMPORTANT: Always include 'font-sans' to ensure Figtree is used!
  
```

## Project Structure

```
client/
├── components/           # Custom component library
│   ├── forms/
│   │   ├── Button.jsx
│   │   ├── TextField.jsx
│   │   ├── Select.jsx
│   │   ├── Checkbox.jsx
│   │   └── Switch.jsx
│   ├── navigation/
│   │   ├── Tabs.jsx
│   │   └── Breadcrumbs.jsx
│   ├── data-display/
│   │   ├── Table.jsx
│   │   ├── Card.jsx
│   │   └── List.jsx
│   ├── feedback/
│   │   ├── Alert.jsx
│   │   ├── Dialog.jsx
│   │   └── Snackbar.jsx
│   └── surfaces/
│       ├── Paper.jsx
│       └── AppBar.jsx
├── lib/
│   └── utils.js         # cn utility for className merging
├── styles/
│   ├── global.css       # Tailwind + custom styles
│   └── tokens.css       # Design system tokens
└── App.tsx
```

## 🚨 CRITICAL: Font Configuration (MUST DO FIRST!)

### ⚠️ IMPORTANT: Figtree Font Setup
**THE FONT MUST BE IMPORTED AND CONFIGURED PROPERLY OR YOUR COMPONENTS WON'T MATCH THE DESIGN SYSTEM!**

#### Step 1: Import the Font (REQUIRED)
Add to your main CSS file (`client/styles/global.css` or `index.css`):
```css
/* 🔴 CRITICAL: Add this at the VERY TOP of your global CSS file */
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800;900&display=swap');

/* Alternative: Local font files */
@font-face {
  font-family: 'Figtree';
  src: url('/fonts/Figtree-Variable.woff2') format('woff2-variations');
  font-weight: 300 900;
  font-display: swap;
}
```

#### Step 2: Apply Font Globally (REQUIRED)
In your global CSS file, ensure the font is applied:
```css
/* Apply Figtree as the default font for the entire app */
body {
  font-family: 'Figtree', system-ui, -apple-system, sans-serif;
}

/* Ensure all text elements use Figtree */
* {
  font-family: inherit;
}
```

### Token Structure in tokens.css
```css
:root {
  /* Typography - Figtree font */
  --font-sans: 'Figtree', system-ui, -apple-system, sans-serif;
  --font-display: 'Figtree', system-ui, -apple-system, sans-serif;
  --font-body: 'Figtree', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Color Palette - From design-tokens.md */
  --color-primary-50: #f5f3ff;
  --color-primary-100: #ede9fe;
  --color-primary-200: #ddd6fe;
  --color-primary-300: #c4b5fd;
  --color-primary-400: #a78bfa;
  --color-primary-500: #8b5cf6;
  --color-primary-600: #7c3aed;
  --color-primary-700: #6d28d9;
  --color-primary-800: #5b21b6;
  --color-primary-900: #4c1d95;
  
  /* Spacing Scale */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}
```

### 🔴 CRITICAL: Tailwind Config Font Setup
```javascript
// tailwind.config.js
// ⚠️ IMPORTANT: This MUST be configured or Tailwind won't use Figtree!
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // 🚨 OVERRIDE the default sans font with Figtree
        sans: ['Figtree', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Figtree', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['Figtree', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          // ... etc
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          // ... etc
        }
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
      }
    }
  }
}
```

## Component Categories & Examples

### Forms Components
- **Button**: All variants, sizes, states
- **TextField**: Input with label, helper text, error states
- **Select**: Dropdown with options
- **Checkbox**: With label support
- **RadioGroup**: Radio button groups
- **Switch**: Toggle switches
- **Slider**: Range sliders

### Navigation Components
- **Tabs**: Tab navigation
- **Breadcrumbs**: Breadcrumb navigation
- **Menu**: Dropdown menus
- **Drawer**: Side drawers
- **Stepper**: Step-by-step navigation

### Data Display Components
- **Table**: Data tables with sorting/filtering
- **Card**: Content cards
- **List**: Lists with items
- **Accordion**: Collapsible panels
- **Avatar**: User avatars
- **Badge**: Notification badges
- **Chip**: Tag chips

### Feedback Components
- **Alert**: Alert messages
- **Dialog**: Modal dialogs
- **Snackbar**: Toast notifications
- **Progress**: Progress indicators
- **Skeleton**: Loading skeletons

### Surface Components
- **Paper**: Elevated surfaces
- **AppBar**: Application bars
- **Toolbar**: Tool bars

## Component Documentation Template

```markdown
# [Component] Component

## API Reference

### Props
# Look up Material UI Component documentation for each component to ensure all variants and states are included

### Usage Examples
\```jsx
<Button variant="contained" color="primary">
  Click Me
</Button>

<Button variant="outlined" size="large" fullWidth>
  Full Width Button
</Button>
\```

### Design Tokens Used
- Colors: primary-500, primary-600, primary-700
- Spacing: spacing-sm, spacing-md, spacing-lg
- Radius: radius-md
- Shadow: shadow-sm
```

## Implementation Guidelines

### 1. Start Simple
- Begin with basic props
- Add complexity gradually
- Test each variant thoroughly

### 2. Maintain Consistency
- Use consistent prop names across components
- Follow Material UI's API patterns
- Keep similar components aligned

### 3. Accessibility First
- Include proper ARIA attributes
- Support keyboard navigation
- Ensure color contrast compliance
- Add focus indicators

### 4. Performance Considerations
- Use forwardRef for all components
- Memoize expensive computations
- Lazy load heavy components

## Common Patterns

### Base Component Structure
```javascript
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const ComponentName = forwardRef(({ 
  // Common props
  className,
  children,
  ...props 
}, ref) => {
  return (
    <element
      ref={ref}
      className={cn(
        // Base styles
        'base-styles',
        // Conditional styles
        condition && 'conditional-styles',
        // User styles
        className
      )}
      {...props}
    >
      {children}
    </element>
  );
});

ComponentName.displayName = 'ComponentName';
```

### Variant Pattern
```javascript
const variants = {
  variant1: 'styles-for-variant1',
  variant2: 'styles-for-variant2',
};

const selectedVariant = variants[variant] || variants.default;
```

### Size Pattern
```javascript
const sizes = {
  small: 'text-sm px-2 py-1',
  medium: 'text-base px-4 py-2',
  large: 'text-lg px-6 py-3',
};

const selectedSize = sizes[size] || sizes.medium;
```

## Testing Strategy

### Component Testing Checklist
- [ ] All props work as expected
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Disabled state prevents interaction
- [ ] Component is accessible
- [ ] Responsive on all screen sizes
- [ ] Dark mode support (if applicable)

## Migration Path from Material UI

### Phase 1: Core Components
1. Button
2. TextField
3. Select
4. Checkbox
5. Card

### Phase 2: Navigation
1. Tabs
2. Menu
3. Breadcrumbs
4. Drawer

### Phase 3: Data Display
1. Table
2. List
3. Accordion
4. Avatar

### Phase 4: Feedback
1. Alert
2. Dialog
3. Snackbar
4. Progress

### Phase 5: Advanced
1. DataGrid
2. DatePicker
3. Autocomplete

## Success Metrics

A component is complete when:
- ✅ Matches Material UI's core API
- ✅ Uses design tokens exclusively
- ✅ No external UI library dependencies
- ✅ Fully accessible
- ✅ Well documented
- ✅ Includes usage examples
- ✅ Tested across browsers
- ✅ Responsive design
- ✅ Performs well

## DO's and DON'Ts

### DO's
- ✅ Create components from scratch using HTML/React
- ✅ Use Tailwind classes with design tokens
- ✅ Match Material UI's prop interface
- ✅ Include all common variants
- ✅ Make components fully accessible
- ✅ Use forwardRef for all components
- ✅ Document thoroughly

### DON'Ts
- ❌ Import from @mui/material
- ❌ Try to override Material UI styles
- ❌ Use inline styles
- ❌ Hardcode color values
- ❌ Skip accessibility features
- ❌ Create overly complex APIs
- ❌ Forget about mobile responsiveness

### Example: The Difference
```javascript
// ❌ OLD WAY: Fighting with MUI styles
<MuiButton 
  sx={{ 
    '&.MuiButton-containedPrimary': {
      backgroundColor: 'var(--color-primary) !important'
    }
  }}
/>

// ✅ NEW WAY: Our component, our rules
<Button variant="contained" color="primary" />
// Internally uses: className="bg-primary-500 hover:bg-primary-600"
```

## Component Creation Workflow

### Step 1: Analyze Material UI Component
Before creating, study the MUI component:
- What props does it accept?
- What variants exist?
- What are the size options?
- How does it handle state (hover, focus, disabled)?
- What accessibility features does it have?

### Step 2: Create Component Structure
```javascript
// client/components/forms/Button.jsx
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const Button = forwardRef(({ 
  // Match MUI's prop interface
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  disabled = false,
  startIcon,
  endIcon,
  fullWidth = false,
  className,
  children,
  ...props 
}, ref) => {
  // Component implementation
});
```

### Step 3: Apply Design Tokens
```javascript
// Use Tailwind classes that reference our CSS variables
const variants = {
  contained: {
    primary: 'bg-primary-500 text-white hover:bg-primary-600',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
  },
  outlined: {
    primary: 'border-2 border-primary-500 text-primary-500',
    secondary: 'border-2 border-secondary-500 text-secondary-500',
  }
};
```

### Step 4: Document the Component
Create comprehensive documentation showing:
- All props and their types
- Usage examples
- Design tokens used
- Accessibility features

### Step 5: Add Component to Sidebar Navigation & Component Display

#### A. Update Component Registry
```javascript
// client/utils/component-registry.js

```

#### B. Component Display in MainContent
When a component is selected from the sidebar, MainContent should display:

```javascript
// client/components/layout/MainContent.jsx
// Should render the following sections:

// 1. Component Header
<div className="component-header">
  <h1>{component.name}</h1>
  <p>{component.description}</p>
  <div className="status-badge">{component.status}</div>
</div>

// 2. Live Preview Section with ALL Variants
<div className="preview-section">
  <h2>Component Variants</h2>
  <div className="variant-grid">
    {Object.entries(component.variants).map(([name, example]) => (
      <div className="variant-card" key={name}>
        <div className="variant-preview">
          {example}
        </div>
        <div className="variant-label">{name}</div>
      </div>
    ))}
  </div>
</div>

// 3. Interactive Playground
<div className="playground-section">
  <h2>Interactive Playground</h2>
  <div className="controls">
    {/* Generate controls based on component.props */}
    <select name="variant">
      {component.props.variant.map(v => <option>{v}</option>)}
    </select>
    <select name="size">
      {component.props.size.map(s => <option>{s}</option>)}
    </select>
    {/* etc... */}
  </div>
  <div className="playground-preview">
    {/* Live component with selected props */}
  </div>
</div>

// 4. Code Examples with Syntax Highlighting
<div className="code-section">
  <h2>Code Examples</h2>
  <pre className="code-block">
    <code>{component.codeExample}</code>
  </pre>
  <button className="copy-button">Copy Code</button>
</div>

// 5. Props Documentation Table
<div className="props-section">
  <h2>Props</h2>
  <table className="props-table">
    <thead>
      <tr>
        <th>Prop</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(component.props).map(([prop, type]) => (
        <tr key={prop}>
          <td>{prop}</td>
          <td>{Array.isArray(type) ? type.join(' | ') : type}</td>
          <td>{/* default value */}</td>
          <td>{/* description */}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

// 6. Design Tokens Used
<div className="tokens-section">
  <h2>Design Tokens</h2>
  <ul>
    {component.documentation.designTokens.map(token => (
      <li key={token}>
        <code>--color-{token}</code>
      </li>
    ))}
  </ul>
</div>

// 7. Accessibility Notes
<div className="accessibility-section">
  <h2>Accessibility</h2>
  <p>{component.documentation.accessibility}</p>
</div>
```

#### C. Sidebar Display Requirements
```javascript
// client/components/layout/Sidebar.jsx
// The sidebar should automatically:

1. Read from componentRegistry
2. Display components grouped by category
3. Show live component count per category
4. Display status indicators:
   - ✅ Green dot/checkmark for 'complete'
   - 🚧 Orange dot for 'in-progress'  
   - ⏳ Gray dot for 'pending'
5. Make completed components clickable with hover effect
6. Show component description on hover (tooltip)
7. Include search functionality that filters by:
   - Component name
   - Description
   - Props
8. Highlight currently selected component
9. Show a mini preview on hover (optional)
```

The sidebar should update automatically when componentRegistry changes - no manual edits needed!

## Design System Implementation

### Reading Design Tokens
Pull design values from `design-tokens.md`:

```markdown
// From design-tokens.md
Primary Palette - Violet:
- 50: #f5f3ff
- 500: #8b5cf6 (main)
- 600: #7c3aed (hover)

Secondary Palette - Amber:
- 500: #f59e0b (main)
- 600: #d97706 (hover)
```

### Converting to CSS Variables
```css
/* client/styles/tokens.css */
:root {
  --color-primary-50: #f5f3ff;
  --color-primary-500: #8b5cf6;
  --color-primary-600: #7c3aed;
  
  --color-secondary-500: #f59e0b;
  --color-secondary-600: #d97706;
}
```

### Using in Components
```javascript
// Direct Tailwind usage
className="bg-primary-500 hover:bg-primary-600"

// Or with arbitrary values when needed
className="bg-[var(--color-primary-500)]"
```

## Component Patterns

### Base Pattern
Every component follows this structure:
```javascript
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const Component = forwardRef((props, ref) => {
  const {
    variant = 'default',
    size = 'medium',
    className,
    children,
    ...restProps
  } = props;

  return (
    <element
      ref={ref}
      className={cn(
        // Base styles
        'base-styles',
        // Variant styles
        variantStyles[variant],
        // Size styles
        sizeStyles[size],
        // User overrides
        className
      )}
      {...restProps}
    >
      {children}
    </element>
  );
});

Component.displayName = 'Component';
```

### State Management Pattern
```javascript
// Handle interactive states
const interactiveStyles = cn(
  'transition-all duration-200',
  !disabled && 'hover:shadow-md active:scale-[0.98]',
  disabled && 'opacity-50 cursor-not-allowed'
);
```

### Composition Pattern
```javascript
// Support icons and additional content
<button className={styles}>
  {startIcon && <span className="mr-2">{startIcon}</span>}
  {children}
  {endIcon && <span className="ml-2">{endIcon}</span>}
</button>
```

## Sidebar Navigation Integration

### How the Sidebar Works
The sidebar is the main navigation for browsing all components in the library. It should:

1. **Display Component Categories**
   ```javascript
   const categories = {
     forms: { icon: '📝', label: 'Form Controls' },
     navigation: { icon: '🧭', label: 'Navigation' },
     'data-display': { icon: '📊', label: 'Data Display' },
     feedback: { icon: '💬', label: 'Feedback' },
     surfaces: { icon: '📄', label: 'Surfaces' }
   };
   ```

2. **Show Component Status**
   ```javascript
   // Visual indicators in sidebar
   '✅' // Complete - ready to use
   '🚧' // In Progress - being developed
   '⏳' // Pending - planned but not started
   ```

3. **Enable Component Preview**
   - Clicking a completed component shows it in MainContent
   - Display live preview with all variants
   - Show code examples below preview
   - Include props documentation

### Adding New Components to Sidebar

After creating a component, you MUST:

1. **Update the Registry** (`client/utils/component-registry.js`):
   ```javascript
   export const componentRegistry = {
     forms: {
       existingComponents...,
       YourNewComponent: {
         name: 'YourNewComponent',
         path: '/components/forms/YourNewComponent',
         component: lazy(() => import('@/components/forms/YourNewComponent')),
         status: 'complete',
         description: 'Brief description',
         props: ['prop1', 'prop2'],
         examples: 2
       }
     }
   };
   ```

2. **Sidebar Auto-Updates**
   - The Sidebar component reads from componentRegistry
   - New components appear automatically
   - Status changes reflect immediately
   - No manual sidebar edits needed

3. **Component Display in MainContent**
   ```javascript
   // MainContent.jsx should render:
   // - Component preview with variants
   // - Interactive prop controls
   // - Code examples
   // - Copy-to-clipboard functionality
   // - Design tokens used
   ```

### Sidebar Search Functionality
The sidebar should include a search bar that:
- Filters components by name
- Searches in component descriptions
- Highlights matching text
- Shows category if only one component matches
- Clears search with ESC key

## Component Categories

### Priority 1: Core Forms
Start with the most commonly used components:
1. **Button** - All variants and sizes
2. **TextField** - Input with validation
3. **Select** - Dropdown selections
4. **Checkbox** - Checkboxes with labels
5. **Switch** - Toggle switches

### Priority 2: Layout & Navigation
6. **Card** - Content containers
7. **Tabs** - Tab navigation
8. **Dialog** - Modal dialogs
9. **Menu** - Dropdown menus
10. **Drawer** - Side panels

### Priority 3: Feedback & Display
11. **Alert** - Alert messages
12. **Table** - Data tables
13. **Progress** - Loading indicators
14. **Chip** - Tags and badges
15. **Avatar** - User avatars

## Real Example: Complete Button Component

```javascript
// client/components/forms/Button.jsx
import { forwardRef } from 'react';

```

## Testing Your Components

### Quick Test Checklist
```javascript
// Test all variants

// Test all sizes


// Test states


// Test with icons

```

## File Organization

```
client/
├── components/
│   ├── forms/
│   │   ├── Button.jsx
│   │   ├── Button.test.jsx
│   │   └── Button.md
│   ├── navigation/
│   ├── data-display/
│   ├── feedback/
│   └── surfaces/
├── lib/
│   └── utils.js
├── styles/
│   ├── global.css
│   └── tokens.css
└── App.tsx
```

## Common Utilities

### The `cn` Utility
```javascript
// client/lib/utils.js
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

This utility:
- Combines class names
- Handles conditionals
- Merges Tailwind classes properly
- Prevents style conflicts

## Accessibility Requirements

Every component must:
1. **Support keyboard navigation** - Tab, Enter, Space, Escape
2. **Have proper ARIA attributes** - role, aria-label, aria-describedby
3. **Show focus indicators** - Visible focus rings
4. **Support screen readers** - Semantic HTML, proper labels
5. **Handle disabled states** - Prevent interaction, reduce opacity

## Migration Strategy

### From Material UI to Our Components
```javascript
// Before (Material UI)
import Button from '@mui/material/Button';
<Button variant="contained" color="primary">Click</Button>

// After (Our component)
import { Button } from '@/components/forms/Button';
<Button variant="contained" color="primary">Click</Button>
// Same API, but using our design system!
```

## Quality Checklist

Before marking a component as complete:
- [ ] Matches MUI's main props
- [ ] All variants implemented
- [ ] All sizes implemented
- [ ] Hover/focus/active states work
- [ ] Disabled state works
- [ ] Keyboard accessible
- [ ] ARIA attributes included
- [ ] Uses design tokens only
- [ ] No hardcoded colors
- [ ] Responsive on mobile
- [ ] Documented with examples
- [ ] ForwardRef implemented

## Remember

1. **We're building from scratch** - No Material UI imports
2. **Match the API** - Same props as MUI for easy migration
3. **Use design tokens** - Via Tailwind and CSS variables
4. **Keep it simple** - Start basic, add features gradually
5. **Document everything** - Props, examples, tokens used
6. **Test thoroughly** - All variants, sizes, and states
7. **Accessibility first** - Never compromise on a11y

## Success Metrics

You've created a successful component when:
- ✅ It works exactly like MUI's version (same props)
- ✅ It uses only our design tokens
- ✅ It has zero external dependencies
- ✅ It's fully accessible
- ✅ It's well documented
- ✅ It performs better than the MUI version
- ✅ The code is clean and maintainable