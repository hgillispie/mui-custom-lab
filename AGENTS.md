# AGENTS.md - Material UI Design System Customization

## Your Mission

You are **customizing Material UI components** to match our design system using MUI's recommended best practices. We'll leverage Material UI's powerful theming and customization capabilities while maintaining our design tokens.

## Core Philosophy

### Customize, Don't Fight
We use Material UI's built-in customization methods to:
- Apply our design tokens through MUI's theme system
- Override component styles using the proper APIs
- Maintain all MUI functionality and features
- Achieve consistent design without hacky overrides
- Progressively customize components as needed

## Material UI Customization Strategy

### Customization Approach (Following MUI Best Practices)
1. **Theme-level customization** - Apply design tokens globally
2. **Component styleOverrides** - Customize specific components in theme
3. **sx prop** - One-off style adjustments using design tokens
4. **styled() API** - Create custom styled components when needed
5. **CSS variables** - Use our tokens within MUI theme

### Why This Approach?
1. **Maintains MUI functionality** - All features work out of the box
2. **Progressive enhancement** - Customize only what's needed
3. **Best practices** - Following official MUI guidelines
4. **Type safety** - Full TypeScript support
5. **Faster development** - Leverage MUI's robust components

## Setup Process

### Step 1: Theme Configuration
The MUI theme is configured in `client/theme/mui-theme.ts` with our design tokens:
- Figtree font family applied globally
- Color palette mapped from our design tokens
- Component-specific overrides for consistent styling
- Border radius, spacing, and shadows from our tokens

### Step 2: Theme Provider
Wrap your app with the MUI theme provider:
```tsx
import { MuiThemeProvider } from '@/components/providers/MuiThemeProvider';

function App() {
  return (
    <MuiThemeProvider>
      {/* Your app content */}
    </MuiThemeProvider>
  );
}
```

## Component Customization Methods

### Method 1: Global Theme Overrides
```typescript
// In mui-theme.ts
components: {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 'var(--radius-md)',
        textTransform: 'none',
        fontWeight: 500,
      },
      containedPrimary: {
        backgroundColor: 'var(--color-primary-500)',
        '&:hover': {
          backgroundColor: 'var(--color-primary-600)',
        },
      },
    },
  },
}
```

### Method 2: styled() API
```typescript
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, var(--color-primary-500) 30%, var(--color-primary-400) 90%)',
  borderRadius: 'var(--radius-lg)',
  boxShadow: 'var(--shadow-md)',
  '&:hover': {
    boxShadow: 'var(--shadow-lg)',
    transform: 'translateY(-2px)',
  },
}));
```

### Method 3: sx Prop
```tsx
<Button
  sx={{
    bgcolor: 'primary.main',
    borderRadius: 'var(--radius-md)',
    px: 'var(--spacing-4)',
    py: 'var(--spacing-2)',
    '&:hover': {
      bgcolor: 'primary.dark',
      transform: 'scale(1.02)',
    },
  }}
>
  Custom Button
</Button>
```

### Method 4: Component Wrapper
```tsx
// Create a wrapper component for consistent customization
import React from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <MuiButton
      {...props}
      sx={{
        // Default custom styles
        textTransform: 'none',
        borderRadius: 'var(--radius-md)',
        ...props.sx, // Allow override
      }}
    />
  );
};
```

## Design Token Integration

### Using CSS Variables in MUI
```typescript
// Access design tokens in theme
styleOverrides: {
  root: {
    // Direct CSS variable usage
    borderRadius: 'var(--radius-md)',
    padding: 'var(--spacing-2) var(--spacing-4)',
    boxShadow: 'var(--shadow-sm)',
    
    // Or use theme values
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
  },
}
```

### Color Palette Mapping
```typescript
// Our design tokens → MUI palette
palette: {
  primary: {
    50: '#f5f3ff',  // var(--color-primary-50)
    100: '#ede9fe', // var(--color-primary-100)
    // ... etc
    main: '#8b5cf6', // var(--color-primary-500)
    dark: '#7c3aed', // var(--color-primary-600)
  },
}
```

## Component Examples

### Customized Button
```tsx
// Already customized via theme
import Button from '@mui/material/Button';

<Button variant="contained" color="primary">
  This uses our design tokens
</Button>
```

### Customized TextField
```tsx
import TextField from '@mui/material/TextField';

<TextField
  label="Email"
  variant="outlined"
  sx={{
    '& .MuiOutlinedInput-root': {
      borderRadius: 'var(--radius-md)',
      '&.Mui-focused fieldset': {
        borderColor: 'var(--color-primary-500)',
      },
    },
  }}
/>
```

### Customized Card
```tsx
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

<Card
  sx={{
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-md)',
    '&:hover': {
      boxShadow: 'var(--shadow-lg)',
    },
  }}
>
  <CardContent>
    Your content here
  </CardContent>
</Card>
```

## Progressive Enhancement Strategy

### Phase 1: Core Components (Start Here)
1. **Button** - Apply theme overrides
2. **TextField** - Customize input styles
3. **Card** - Update elevation and radius
4. **Typography** - Ensure Figtree font usage

### Phase 2: Form Components
1. **Select** - Match design system dropdowns
2. **Checkbox** - Custom colors and sizing
3. **Switch** - Brand-aligned toggle styles
4. **RadioButton** - Consistent selection controls

### Phase 3: Navigation & Layout
1. **AppBar** - Header customization
2. **Drawer** - Sidebar styling
3. **Tabs** - Navigation components
4. **Breadcrumbs** - Wayfinding elements

### Phase 4: Feedback & Data Display
1. **Alert** - Notification styling
2. **Dialog** - Modal customization
3. **Table** - Data grid theming
4. **Chip** - Tag components

## Best Practices

### DO's
✅ Use theme overrides for global changes
✅ Leverage sx prop for component-specific styles
✅ Reference design tokens via CSS variables
✅ Maintain MUI's accessibility features
✅ Test components across all states (hover, focus, disabled)
✅ Use TypeScript for type safety
✅ Document customizations

### DON'Ts
❌ Don't use !important unless absolutely necessary
❌ Don't override MUI's core functionality
❌ Don't fight the framework - work with it
❌ Don't duplicate effort - use theme inheritance
❌ Don't forget about dark mode considerations

## Testing Customizations

### Visual Testing Checklist
- [ ] Component matches design system colors
- [ ] Figtree font is applied correctly
- [ ] Border radius follows design tokens
- [ ] Spacing is consistent with tokens
- [ ] Shadows match design system
- [ ] Hover/focus states work properly
- [ ] Disabled states are styled correctly
- [ ] Responsive behavior is maintained

### Code Review Checklist
- [ ] Design tokens are used (not hardcoded values)
- [ ] Customizations are in appropriate location
- [ ] No unnecessary overrides
- [ ] TypeScript types are correct
- [ ] Accessibility is maintained
- [ ] Performance impact is minimal

## Migration Path

### From Custom Components to MUI
1. **Identify** existing custom components
2. **Map** props to MUI equivalents
3. **Apply** theme customizations
4. **Test** functionality
5. **Replace** gradually

### Example Migration
```tsx
// Before: Custom Button
<CustomButton variant="primary" size="large">
  Click Me
</CustomButton>

// After: MUI Button with theme
<Button variant="contained" color="primary" size="large">
  Click Me
</Button>
```

## Resources

- [MUI Customization Guide](https://mui.com/material-ui/customization/how-to-customize/)
- [Theme Configuration](https://mui.com/material-ui/customization/theming/)
- [styled() API](https://mui.com/system/styled/)
- [sx Prop](https://mui.com/system/getting-started/the-sx-prop/)
- [Component Overrides](https://mui.com/material-ui/customization/theme-components/)

## Success Metrics

A component is successfully customized when:
- ✅ Uses our design tokens
- ✅ Maintains MUI functionality
- ✅ Figtree font is applied
- ✅ Follows accessibility standards
- ✅ Performs well
- ✅ Is properly documented
- ✅ Has consistent behavior across states