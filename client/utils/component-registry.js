// Component Registry - Tracks all available Material UI components and their transformation status

export const COMPONENT_CATEGORIES = {
  FORMS: "forms",
  NAVIGATION: "navigation",
  DATA_DISPLAY: "data-display",
  FEEDBACK: "feedback",
  SURFACES: "surfaces",
  UTILS: "utils",
};

export const TRANSFORMATION_STATUS = {
  NOT_STARTED: "not-started",
  IN_PROGRESS: "in-progress",
  COMPLETE: "complete",
};

// Component registry - THIS IS WHERE FUSION ADDS TRANSFORMED COMPONENTS
// When Fusion creates a component, it should add it here automatically

// Static date to prevent re-rendering issues
const TRANSFORMED_DATE = new Date().toISOString();

export const COMPONENT_REGISTRY = {
  [COMPONENT_CATEGORIES.FORMS]: [
    {
      name: 'Button',
      displayName: 'Button',
      description: 'Material UI Button transformed with Figtree font, gradient variants, enhanced animations, and comprehensive semantic color options',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Button',
      component: () => import('../components/ui/Button'),
      muiComponent: '@mui/material/Button',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples with live props
      variants: [
        {
          name: 'Contained',
          props: { variant: 'contained', children: 'Contained' },
          code: '<Button variant="contained">Contained</Button>'
        },
        {
          name: 'Outlined',
          props: { variant: 'outlined', children: 'Outlined' },
          code: '<Button variant="outlined">Outlined</Button>'
        },
        {
          name: 'Text',
          props: { variant: 'text', children: 'Text' },
          code: '<Button variant="text">Text</Button>'
        },
        {
          name: 'Gradient',
          props: { variant: 'gradient', children: 'Gradient' },
          code: '<Button variant="gradient">Gradient</Button>'
        },
        {
          name: 'Ghost',
          props: { variant: 'ghost', children: 'Ghost' },
          code: '<Button variant="ghost">Ghost</Button>'
        },
        {
          name: 'Success',
          props: { variant: 'success', children: 'Success' },
          code: '<Button variant="success">Success</Button>'
        },
        {
          name: 'Warning',
          props: { variant: 'warning', children: 'Warning' },
          code: '<Button variant="warning">Warning</Button>'
        },
        {
          name: 'Error',
          props: { variant: 'error', children: 'Error' },
          code: '<Button variant="error">Error</Button>'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: { size: 'small', children: 'Small' },
          code: '<Button size="small">Small</Button>'
        },
        {
          name: 'Medium',
          props: { size: 'medium', children: 'Medium' },
          code: '<Button size="medium">Medium</Button>'
        },
        {
          name: 'Large',
          props: { size: 'large', children: 'Large' },
          code: '<Button size="large">Large</Button>'
        }
      ],

      // State examples
      states: [
        {
          name: 'Loading',
          props: { loading: true, children: 'Loading...' },
          code: '<Button loading>Loading...</Button>'
        },
        {
          name: 'Disabled',
          props: { disabled: true, children: 'Disabled' },
          code: '<Button disabled>Disabled</Button>'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['contained', 'outlined', 'text', 'gradient', 'ghost', 'success', 'warning', 'error'],
          default: 'contained',
          description: 'Visual style variant of the button'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size of the button affecting padding and font size'
        },
        loading: {
          type: 'boolean',
          default: false,
          description: 'Shows loading spinner and disables interaction'
        },
        disabled: {
          type: 'boolean',
          default: false,
          description: 'Disables the button and reduces opacity'
        },
        children: {
          type: 'ReactNode',
          description: 'Button content'
        },
        onClick: {
          type: 'function',
          description: 'Click event handler'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-medium',
        'radius-button',
        'spacing-1-5', 'spacing-2-5', 'spacing-3-5',
        'spacing-3', 'spacing-4', 'spacing-6',
        'font-size-sm', 'font-size-base', 'font-size-lg',
        'duration-fast',
        'ease-out',
        'shadow-lg',
        'color-primary-200', 'color-primary-400', 'color-primary-500', 'color-primary-600', 'color-primary-700',
        'color-secondary-500', 'color-secondary-600',
        'color-success-500', 'color-success-600', 'color-success-700',
        'color-warning-500', 'color-warning-600', 'color-warning-700',
        'color-error-500', 'color-error-600', 'color-error-700',
        'color-gray-100', 'color-gray-200', 'color-gray-300', 'color-gray-700', 'color-gray-800',
        'color-white'
      ],

      // Comprehensive documentation
      documentation: `
# Button Component

The Button component has been heavily transformed from Material UI with significant visual enhancements and new functionality.

## Major Transformations Applied

- **Figtree Font**: Applied custom font family from design tokens
- **Enhanced Animations**: Hover lift effect, active scale, and smooth transitions
- **Custom Variants**: Added gradient, ghost, and semantic color variants (success, warning, error)
- **Ripple Effect**: Custom click animation with expanding circle
- **Loading State**: Built-in spinner with disabled interaction
- **Design Token Integration**: All colors, spacing, and typography use CSS custom properties
- **Improved Focus**: Custom focus rings using design system colors
- **Gradient Backgrounds**: Multiple gradient variants with hover enhancements
- **Enhanced Shadows**: Contextual shadows that respond to hover states

## New Features Beyond MUI

1. **Gradient Variant**: Stunning gradient background with primary-to-secondary color transition
2. **Ghost Variant**: Transparent background with subtle border and hover effects
3. **Semantic Variants**: Success, warning, and error variants with matching gradients and shadows
4. **Loading State**: Integrated spinner that replaces content during loading
5. **Enhanced Ripple**: Custom ripple animation on click
6. **Hover Lift**: Subtle translateY animation with enhanced shadow

## Design System Integration

- Uses semantic color tokens for consistent theming
- Respects spacing scale for padding and sizing
- Implements typography scale for different sizes
- Follows border radius conventions
- Uses transition timing from design tokens

## Usage Examples

### Basic Usage
\`\`\`jsx
import Button from '@/components/ui/Button';

<Button variant="contained" onClick={handleClick}>
  Click Me
</Button>
\`\`\`

### With Loading State
\`\`\`jsx
<Button variant="contained" loading={isLoading}>
  {isLoading ? 'Processing...' : 'Submit'}
</Button>
\`\`\`

### Semantic Variants
\`\`\`jsx
<Button variant="success">Save Changes</Button>
<Button variant="warning">Proceed with Caution</Button>
<Button variant="error">Delete Item</Button>
\`\`\`

### Custom Gradient
\`\`\`jsx
<Button variant="gradient" size="large">
  Get Started
</Button>
\`\`\`

## Accessibility Features

- Proper focus management with visible focus rings
- Loading state announces to screen readers
- Semantic color variants convey meaning
- Keyboard navigation support maintained from MUI
- Proper contrast ratios in all variants

## Performance Optimizations

- CSS-in-JS styling with theme integration
- Efficient re-renders with React.memo potential
- Smooth animations using CSS transitions
- Optimized for both light and dark themes
      `
    },
    {
      name: 'TextField',
      displayName: 'TextField',
      description: 'Material UI TextField transformed with gradient borders, ghost effects, enhanced animations, and comprehensive semantic states',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/TextField',
      component: () => import('../components/ui/TextField'),
      muiComponent: '@mui/material/TextField',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Outlined',
          props: { variant: 'outlined', label: 'Outlined', placeholder: 'Enter text...' },
          code: '<TextField variant="outlined" label="Label" />'
        },
        {
          name: 'Filled',
          props: { variant: 'filled', label: 'Filled', placeholder: 'Enter text...' },
          code: '<TextField variant="filled" label="Label" />'
        },
        {
          name: 'Standard',
          props: { variant: 'standard', label: 'Standard', placeholder: 'Enter text...' },
          code: '<TextField variant="standard" label="Label" />'
        },
        {
          name: 'Gradient',
          props: { variant: 'gradient', label: 'Gradient', placeholder: 'Enter text...' },
          code: '<TextField variant="gradient" label="Label" />'
        },
        {
          name: 'Ghost',
          props: { variant: 'ghost', label: 'Ghost', placeholder: 'Enter text...' },
          code: '<TextField variant="ghost" label="Label" />'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: { size: 'small', label: 'Small', placeholder: 'Small field' },
          code: '<TextField size="small" label="Small" />'
        },
        {
          name: 'Medium',
          props: { size: 'medium', label: 'Medium', placeholder: 'Medium field' },
          code: '<TextField size="medium" label="Medium" />'
        },
        {
          name: 'Large',
          props: { size: 'large', label: 'Large', placeholder: 'Large field' },
          code: '<TextField size="large" label="Large" />'
        }
      ],

      // State examples
      states: [
        {
          name: 'Success',
          props: { state: 'success', label: 'Success', value: 'Valid input', helperText: 'This looks good!' },
          code: '<TextField state="success" label="Success" helperText="Valid!" />'
        },
        {
          name: 'Warning',
          props: { state: 'warning', label: 'Warning', value: 'Check this', helperText: 'Please review' },
          code: '<TextField state="warning" label="Warning" helperText="Review this" />'
        },
        {
          name: 'Error',
          props: { error: true, label: 'Error', value: 'Invalid input', helperText: 'This field is required' },
          code: '<TextField error label="Error" helperText="Required field" />'
        },
        {
          name: 'Disabled',
          props: { disabled: true, label: 'Disabled', value: 'Cannot edit' },
          code: '<TextField disabled label="Disabled" />'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['outlined', 'filled', 'standard', 'gradient', 'ghost'],
          default: 'outlined',
          description: 'Visual style variant of the text field'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting height and font size'
        },
        state: {
          type: 'enum',
          options: ['default', 'success', 'warning', 'error'],
          default: 'default',
          description: 'Semantic state affecting colors'
        },
        label: {
          type: 'string',
          description: 'Label text for the field'
        },
        placeholder: {
          type: 'string',
          description: 'Placeholder text when empty'
        },
        helperText: {
          type: 'string',
          description: 'Helper text below the field'
        },
        error: {
          type: 'boolean',
          default: false,
          description: 'Shows error state styling'
        },
        disabled: {
          type: 'boolean',
          default: false,
          description: 'Disables the field'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-normal', 'font-weight-medium', 'font-weight-semibold',
        'font-size-sm', 'font-size-base', 'font-size-lg',
        'radius-input',
        'spacing-1', 'spacing-3', 'spacing-4',
        'duration-fast',
        'ease-out',
        'shadow-md',
        'color-bg-elevated',
        'color-border-default',
        'color-text-secondary', 'color-text-tertiary',
        'color-primary-200', 'color-primary-300', 'color-primary-400', 'color-primary-500', 'color-primary-600', 'color-primary-700', 'color-primary-800',
        'color-success-200', 'color-success-400', 'color-success-500', 'color-success-600',
        'color-warning-200', 'color-warning-400', 'color-warning-500', 'color-warning-600',
        'color-error-200', 'color-error-500', 'color-error-600'
      ],

      // Documentation
      documentation: `
# TextField Component

The TextField component has been heavily transformed from Material UI with enhanced visual effects and interaction states.

## Major Transformations Applied

- **Gradient Borders**: Custom gradient variant with animated borders using our primary purple scheme
- **Ghost Morphism**: Modern ghost effect with backdrop blur
- **Enhanced Focus States**: Smooth animations with lift effects and custom shadows
- **Semantic States**: Success, warning, error variants with matching colors
- **Improved Typography**: Figtree font throughout with proper weight variations
- **Design Token Integration**: All styling uses CSS custom properties

## New Features Beyond MUI

1. **Gradient Variant**: Animated gradient borders using primary-300 to primary-700
2. **Ghost Effect**: Modern ghostmorphism with backdrop filters
3. **Hover Animations**: Subtle lift effects on hover and focus
4. **Enhanced Focus**: Custom focus rings and shadow effects
5. **Semantic States**: Success and warning states beyond standard error
6. **Size Variants**: Small, medium, large with proper scaling

## Usage Examples

### Basic TextField
\`\`\`jsx
import TextField from '@/components/ui/TextField';

<TextField
  label="Email"
  variant="outlined"
  placeholder="Enter your email"
/>
\`\`\`

### Gradient TextField
\`\`\`jsx
<TextField
  variant="gradient"
  label="Special Field"
  placeholder="Beautiful gradient border"
/>
\`\`\`

### With States
\`\`\`jsx
<TextField
  state="success"
  label="Valid Input"
  helperText="This looks perfect!"
  value="user@example.com"
/>
\`\`\`

### Ghost Effect
\`\`\`jsx
<TextField
  variant="ghost"
  label="Modern Field"
  placeholder="Ghost morphism effect"
/>
\`\`\`

## Accessibility Features

- Proper label association
- Focus management with visible indicators
- Screen reader friendly helper text
- Keyboard navigation support
- Color contrast compliance in all states
      `
    },
    {
      name: 'Select',
      displayName: 'Select',
      description: 'Material UI Select transformed with gradient borders, ghost effects, enhanced animations, and comprehensive semantic states',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Select',
      component: () => import('../components/ui/Select'),
      muiComponent: '@mui/material/Select',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Outlined',
          props: {
            variant: 'outlined',
            label: 'Category',
            value: 'frontend',
            options: [
              { value: 'frontend', label: 'Frontend Development' },
              { value: 'backend', label: 'Backend Development' },
              { value: 'fullstack', label: 'Full Stack Development' },
              { value: 'mobile', label: 'Mobile Development' }
            ]
          },
          code: '<Select variant="outlined" label="Category" options={options} />'
        },
        {
          name: 'Filled',
          props: {
            variant: 'filled',
            label: 'Priority',
            value: 'high',
            options: [
              { value: 'low', label: 'Low Priority' },
              { value: 'medium', label: 'Medium Priority' },
              { value: 'high', label: 'High Priority' },
              { value: 'urgent', label: 'Urgent' }
            ]
          },
          code: '<Select variant="filled" label="Priority" options={options} />'
        },
        {
          name: 'Standard',
          props: {
            variant: 'standard',
            label: 'Status',
            value: 'active',
            options: [
              { value: 'active', label: 'Active' },
              { value: 'inactive', label: 'Inactive' },
              { value: 'pending', label: 'Pending' },
              { value: 'archived', label: 'Archived' }
            ]
          },
          code: '<Select variant="standard" label="Status" options={options} />'
        },
        {
          name: 'Gradient',
          props: {
            variant: 'gradient',
            label: 'Theme',
            value: 'premium',
            options: [
              { value: 'basic', label: 'Basic Theme' },
              { value: 'premium', label: 'Premium Theme' },
              { value: 'enterprise', label: 'Enterprise Theme' },
              { value: 'custom', label: 'Custom Theme' }
            ]
          },
          code: '<Select variant="gradient" label="Theme" options={options} />'
        },
        {
          name: 'Ghost',
          props: {
            variant: 'ghost',
            label: 'Style',
            value: 'modern',
            options: [
              { value: 'classic', label: 'Classic Style' },
              { value: 'modern', label: 'Modern Style' },
              { value: 'minimal', label: 'Minimal Style' },
              { value: 'bold', label: 'Bold Style' }
            ]
          },
          code: '<Select variant="ghost" label="Style" options={options} />'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            label: 'Size',
            value: 'small',
            options: [
              { value: 'small', label: 'Small' },
              { value: 'medium', label: 'Medium' },
              { value: 'large', label: 'Large' }
            ]
          },
          code: '<Select size="small" label="Size" options={options} />'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            label: 'Size',
            value: 'medium',
            options: [
              { value: 'small', label: 'Small' },
              { value: 'medium', label: 'Medium' },
              { value: 'large', label: 'Large' }
            ]
          },
          code: '<Select size="medium" label="Size" options={options} />'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            label: 'Size',
            value: 'large',
            options: [
              { value: 'small', label: 'Small' },
              { value: 'medium', label: 'Medium' },
              { value: 'large', label: 'Large' }
            ]
          },
          code: '<Select size="large" label="Size" options={options} />'
        }
      ],

      // State examples
      states: [
        {
          name: 'Success',
          props: {
            state: 'success',
            label: 'Validation',
            value: 'passed',
            helperText: 'Selection is valid!',
            options: [
              { value: 'passed', label: 'Validation Passed' },
              { value: 'failed', label: 'Validation Failed' },
              { value: 'pending', label: 'Validation Pending' }
            ]
          },
          code: '<Select state="success" label="Validation" helperText="Valid!" options={options} />'
        },
        {
          name: 'Warning',
          props: {
            state: 'warning',
            label: 'Performance',
            value: 'slow',
            helperText: 'Please review your selection',
            options: [
              { value: 'fast', label: 'Fast Performance' },
              { value: 'medium', label: 'Medium Performance' },
              { value: 'slow', label: 'Slow Performance' }
            ]
          },
          code: '<Select state="warning" label="Performance" helperText="Review this" options={options} />'
        },
        {
          name: 'Error',
          props: {
            error: true,
            label: 'Required Field',
            value: '',
            helperText: 'This field is required',
            options: [
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' }
            ]
          },
          code: '<Select error label="Required" helperText="Required field" options={options} />'
        },
        {
          name: 'Disabled',
          props: {
            disabled: true,
            label: 'Disabled',
            value: 'locked',
            options: [
              { value: 'available', label: 'Available' },
              { value: 'locked', label: 'Locked' },
              { value: 'restricted', label: 'Restricted' }
            ]
          },
          code: '<Select disabled label="Disabled" options={options} />'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['outlined', 'filled', 'standard', 'gradient', 'ghost'],
          default: 'outlined',
          description: 'Visual style variant of the select field'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting height, font size, and minimum width'
        },
        state: {
          type: 'enum',
          options: ['default', 'success', 'warning', 'error'],
          default: 'default',
          description: 'Semantic state affecting colors'
        },
        label: {
          type: 'string',
          description: 'Label text for the select field'
        },
        helperText: {
          type: 'string',
          description: 'Helper text below the field'
        },
        options: {
          type: 'array',
          description: 'Array of option objects with value, label, and optional disabled properties'
        },
        value: {
          type: 'string | number',
          description: 'Currently selected value'
        },
        onChange: {
          type: 'function',
          description: 'Callback fired when selection changes'
        },
        error: {
          type: 'boolean',
          default: false,
          description: 'Shows error state styling'
        },
        disabled: {
          type: 'boolean',
          default: false,
          description: 'Disables the select field'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-normal', 'font-weight-medium', 'font-weight-semibold',
        'font-size-sm', 'font-size-base', 'font-size-lg',
        'radius-input',
        'spacing-1', 'spacing-2', 'spacing-3', 'spacing-4',
        'duration-fast',
        'ease-out',
        'shadow-md',
        'color-bg-elevated',
        'color-border-default',
        'color-text-secondary', 'color-text-disabled',
        'color-primary-50', 'color-primary-100', 'color-primary-150', 'color-primary-200', 'color-primary-300', 'color-primary-400', 'color-primary-500', 'color-primary-600', 'color-primary-700', 'color-primary-800',
        'color-success-200', 'color-success-400', 'color-success-500', 'color-success-600',
        'color-warning-200', 'color-warning-400', 'color-warning-500', 'color-warning-600',
        'color-error-200', 'color-error-500', 'color-error-600',
        'color-gray-100', 'color-gray-150'
      ],

      // Documentation
      documentation: `
# Select Component

The Select component has been heavily transformed from Material UI with enhanced visual effects and interaction states.

## Major Transformations Applied

- **Gradient Borders**: Custom gradient variant with animated borders using our primary purple scheme (300-700)
- **Ghost Morphism**: Modern ghost effect with backdrop blur
- **Enhanced Focus States**: Smooth animations with lift effects and custom shadows
- **Semantic States**: Success, warning, error variants with matching colors
- **Improved Typography**: Figtree font throughout with proper weight variations
- **Custom Menu Items**: Styled dropdown options with hover effects
- **Design Token Integration**: All styling uses CSS custom properties

## New Features Beyond MUI

1. **Gradient Variant**: Animated gradient borders using primary-300 to primary-700
2. **Ghost Effect**: Modern ghostmorphism with backdrop filters
3. **Hover Animations**: Subtle lift effects on hover and focus
4. **Enhanced Focus**: Custom focus rings and shadow effects
5. **Semantic States**: Success and warning states beyond standard error
6. **Size Variants**: Small, medium, large with proper scaling and minimum widths
7. **Styled Menu Items**: Custom dropdown styling with enhanced hover states

## Usage Examples

### Basic Select
\`\`\`jsx
import Select from '@/components/ui/Select';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' }
];

<Select
  label="Framework"
  variant="outlined"
  options={options}
  value={selectedFramework}
  onChange={handleChange}
/>
\`\`\`

### Gradient Select
\`\`\`jsx
<Select
  variant="gradient"
  label="Premium Option"
  options={premiumOptions}
  value={selected}
  onChange={handleChange}
/>
\`\`\`

### With States
\`\`\`jsx
<Select
  state="success"
  label="Valid Selection"
  helperText="Great choice!"
  options={options}
  value={validValue}
  onChange={handleChange}
/>
\`\`\`

### Ghost Effect
\`\`\`jsx
<Select
  variant="ghost"
  label="Modern Field"
  options={options}
  value={value}
  onChange={handleChange}
/>
\`\`\`

### With Disabled Options
\`\`\`jsx
const optionsWithDisabled = [
  { value: 'basic', label: 'Basic Plan' },
  { value: 'pro', label: 'Pro Plan' },
  { value: 'enterprise', label: 'Enterprise Plan', disabled: true }
];

<Select
  label="Subscription Plan"
  options={optionsWithDisabled}
  value={plan}
  onChange={handlePlanChange}
/>
\`\`\`

## Accessibility Features

- Proper label association with htmlFor and id
- Focus management with visible indicators
- Screen reader friendly option descriptions
- Keyboard navigation support (arrow keys, enter, escape)
- Color contrast compliance in all states
- Disabled state properly announced
      `
    },
    {
      name: 'Checkbox',
      displayName: 'Checkbox',
      description: 'Material UI Checkbox transformed with gradient backgrounds, ghost effects, enhanced animations, and comprehensive semantic variants',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Checkbox',
      component: () => import('../components/ui/Checkbox'),
      muiComponent: '@mui/material/Checkbox',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Default',
          props: {
            variant: 'default',
            label: 'Accept terms and conditions',
            checked: true
          },
          code: '<Checkbox variant="default" label="Accept terms" />'
        },
        {
          name: 'Rounded',
          props: {
            variant: 'rounded',
            label: 'Enable notifications',
            checked: true
          },
          code: '<Checkbox variant="rounded" label="Enable notifications" />'
        },
        {
          name: 'Gradient',
          props: {
            variant: 'gradient',
            label: 'Premium feature',
            checked: true
          },
          code: '<Checkbox variant="gradient" label="Premium feature" />'
        },
        {
          name: 'Ghost',
          props: {
            variant: 'ghost',
            label: 'Modern ghostmorphism',
            checked: true
          },
          code: '<Checkbox variant="ghost" label="Modern style" />'
        },
        {
          name: 'Success',
          props: {
            variant: 'success',
            label: 'Task completed',
            checked: true
          },
          code: '<Checkbox variant="success" label="Task completed" />'
        },
        {
          name: 'Warning',
          props: {
            variant: 'warning',
            label: 'Proceed with caution',
            checked: true
          },
          code: '<Checkbox variant="warning" label="Proceed with caution" />'
        },
        {
          name: 'Error',
          props: {
            variant: 'error',
            label: 'Critical action required',
            checked: true
          },
          code: '<Checkbox variant="error" label="Critical action" />'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            label: 'Small checkbox',
            checked: true
          },
          code: '<Checkbox size="small" label="Small" />'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            label: 'Medium checkbox',
            checked: true
          },
          code: '<Checkbox size="medium" label="Medium" />'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            label: 'Large checkbox',
            checked: true
          },
          code: '<Checkbox size="large" label="Large" />'
        }
      ],

      // State examples
      states: [
        {
          name: 'Success',
          props: {
            state: 'success',
            label: 'Validation passed',
            checked: true,
            helperText: 'All requirements met!'
          },
          code: '<Checkbox state="success" label="Validation passed" helperText="All good!" />'
        },
        {
          name: 'Warning',
          props: {
            state: 'warning',
            label: 'Review recommended',
            checked: true,
            helperText: 'Please double-check this option'
          },
          code: '<Checkbox state="warning" label="Review recommended" helperText="Double-check" />'
        },
        {
          name: 'Error',
          props: {
            state: 'error',
            label: 'Required selection',
            checked: false,
            helperText: 'This field is required'
          },
          code: '<Checkbox state="error" label="Required" helperText="Required field" />'
        },
        {
          name: 'Disabled',
          props: {
            disabled: true,
            label: 'Disabled option',
            checked: true
          },
          code: '<Checkbox disabled label="Disabled option" />'
        },
        {
          name: 'Indeterminate',
          props: {
            indeterminate: true,
            label: 'Select all items',
            checked: false
          },
          code: '<Checkbox indeterminate label="Select all" />'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['default', 'rounded', 'gradient', 'ghost', 'success', 'warning', 'error'],
          default: 'default',
          description: 'Visual style variant of the checkbox'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting checkbox dimensions and padding'
        },
        state: {
          type: 'enum',
          options: ['default', 'success', 'warning', 'error'],
          default: 'default',
          description: 'Semantic state affecting colors'
        },
        label: {
          type: 'string',
          description: 'Label text displayed next to the checkbox'
        },
        helperText: {
          type: 'string',
          description: 'Helper text below the checkbox'
        },
        checked: {
          type: 'boolean',
          default: false,
          description: 'Whether the checkbox is checked'
        },
        indeterminate: {
          type: 'boolean',
          default: false,
          description: 'Whether the checkbox is in indeterminate state'
        },
        onChange: {
          type: 'function',
          description: 'Callback fired when the state changes'
        },
        disabled: {
          type: 'boolean',
          default: false,
          description: 'Disables the checkbox'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-normal',
        'font-size-base', 'font-size-sm',
        'radius-base', 'radius-full',
        'spacing-1', 'spacing-2', 'spacing-3',
        'duration-fast',
        'ease-out',
        'color-gray-400',
        'color-text-primary', 'color-text-disabled',
        'color-primary-200', 'color-primary-300', 'color-primary-400', 'color-primary-500', 'color-primary-600', 'color-primary-700', 'color-primary-800',
        'color-success-200', 'color-success-500',
        'color-warning-200', 'color-warning-500',
        'color-error-200', 'color-error-500',
        'color-white'
      ],

      // Documentation
      documentation: `
# Checkbox Component

The Checkbox component has been heavily transformed from Material UI with enhanced visual effects, animations, and semantic variants.

## Major Transformations Applied

- **Gradient Backgrounds**: Custom gradient variant with our primary purple scheme (300-700)
- **Ghost Morphism**: Modern ghost effect with backdrop blur and subtle borders
- **Enhanced Animations**: Scale effects on hover/active, smooth transitions
- **Semantic Variants**: Success, warning, error variants with matching colors
- **Rounded Variant**: Circular checkbox option for different visual styles
- **Enhanced Focus States**: Custom focus rings and shadow effects
- **Improved Typography**: Figtree font throughout with proper weight variations
- **Design Token Integration**: All styling uses CSS custom properties

## New Features Beyond MUI

1. **Gradient Variant**: Beautiful gradient background using primary-300 to primary-700
2. **Ghost Effect**: Modern ghostmorphism with backdrop filters and borders
3. **Rounded Style**: Circular checkbox option for modern designs
4. **Semantic Colors**: Success, warning, error variants beyond default styling
5. **Enhanced Animations**: Scale effects and smooth hover transitions
6. **Drop Shadows**: Enhanced visual depth with contextual shadows
7. **Size Variants**: Small, medium, large with proper scaling

## Usage Examples

### Basic Checkbox
\`\`\`jsx
import Checkbox from '@/components/ui/Checkbox';

<Checkbox
  label="I agree to the terms and conditions"
  checked={agreed}
  onChange={handleAgreeChange}
/>
\`\`\`

### Gradient Checkbox
\`\`\`jsx
<Checkbox
  variant="gradient"
  label="Enable premium features"
  checked={premiumEnabled}
  onChange={handlePremiumChange}
/>
\`\`\`

### With States
\`\`\`jsx
<Checkbox
  state="success"
  label="All validations passed"
  helperText="Configuration is valid!"
  checked={isValid}
  onChange={handleValidation}
/>
\`\`\`

### Ghost Effect
\`\`\`jsx
<Checkbox
  variant="ghost"
  label="Modern ghostmorphism style"
  checked={modernStyle}
  onChange={handleStyleChange}
/>
\`\`\`

### Indeterminate State
\`\`\`jsx
<Checkbox
  indeterminate={isPartiallySelected}
  label="Select all items"
  checked={allSelected}
  onChange={handleSelectAll}
/>
\`\`\`

### Checkbox Group
\`\`\`jsx
<div>
  <Checkbox label="Option 1" checked={option1} onChange={handleOption1} />
  <Checkbox label="Option 2" checked={option2} onChange={handleOption2} />
  <Checkbox label="Option 3" checked={option3} onChange={handleOption3} />
</div>
\`\`\`

## Accessibility Features

- Proper label association with click handling
- Focus management with visible indicators
- Screen reader friendly with proper ARIA attributes
- Keyboard navigation support (space to toggle)
- Color contrast compliance in all states and variants
- Disabled state properly announced
- Indeterminate state support for hierarchical selections
      `
    },
    {
      name: 'Slider',
      displayName: 'Slider',
      description: 'Material UI Slider transformed with gradient tracks, ghost effects, enhanced animations, and comprehensive semantic variants',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Slider',
      component: () => import('../components/ui/Slider'),
      muiComponent: '@mui/material/Slider',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Default',
          props: {
            variant: 'default',
            label: 'Volume level',
            defaultValue: 65,
            min: 0,
            max: 100,
            showValue: true
          },
          code: '<Slider variant="default" label="Volume" defaultValue={65} />'
        },
        {
          name: 'Gradient',
          props: {
            variant: 'gradient',
            label: 'Quality setting',
            defaultValue: 80,
            min: 0,
            max: 100,
            showValue: true
          },
          code: '<Slider variant="gradient" label="Quality" defaultValue={80} />'
        },
        {
          name: 'Ghost',
          props: {
            variant: 'ghost',
            label: 'Transparency',
            defaultValue: 45,
            min: 0,
            max: 100,
            showValue: true
          },
          code: '<Slider variant="ghost" label="Transparency" defaultValue={45} />'
        },
        {
          name: 'Success',
          props: {
            variant: 'success',
            label: 'Progress completed',
            defaultValue: 85,
            min: 0,
            max: 100,
            showValue: true
          },
          code: '<Slider variant="success" label="Progress" defaultValue={85} />'
        },
        {
          name: 'Warning',
          props: {
            variant: 'warning',
            label: 'Risk level',
            defaultValue: 70,
            min: 0,
            max: 100,
            showValue: true
          },
          code: '<Slider variant="warning" label="Risk" defaultValue={70} />'
        },
        {
          name: 'Error',
          props: {
            variant: 'error',
            label: 'Critical threshold',
            defaultValue: 90,
            min: 0,
            max: 100,
            showValue: true
          },
          code: '<Slider variant="error" label="Critical" defaultValue={90} />'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            label: 'Small slider',
            defaultValue: 30,
            min: 0,
            max: 100
          },
          code: '<Slider size="small" label="Small" defaultValue={30} />'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            label: 'Medium slider',
            defaultValue: 50,
            min: 0,
            max: 100
          },
          code: '<Slider size="medium" label="Medium" defaultValue={50} />'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            label: 'Large slider',
            defaultValue: 75,
            min: 0,
            max: 100
          },
          code: '<Slider size="large" label="Large" defaultValue={75} />'
        }
      ],

      // State examples
      states: [
        {
          name: 'Success',
          props: {
            state: 'success',
            label: 'Performance score',
            defaultValue: 88,
            min: 0,
            max: 100,
            helperText: 'Excellent performance!',
            showValue: true
          },
          code: '<Slider state="success" label="Performance" helperText="Excellent!" />'
        },
        {
          name: 'Warning',
          props: {
            state: 'warning',
            label: 'Memory usage',
            defaultValue: 82,
            min: 0,
            max: 100,
            helperText: 'Approaching limit',
            showValue: true
          },
          code: '<Slider state="warning" label="Memory" helperText="Approaching limit" />'
        },
        {
          name: 'Error',
          props: {
            state: 'error',
            label: 'CPU temperature',
            defaultValue: 95,
            min: 0,
            max: 100,
            helperText: 'Critical temperature reached!',
            showValue: true
          },
          code: '<Slider state="error" label="Temperature" helperText="Critical!" />'
        },
        {
          name: 'Range',
          props: {
            label: 'Price range',
            defaultValue: [25, 75],
            min: 0,
            max: 100,
            helperText: 'Select your budget range',
            showValue: true
          },
          code: '<Slider label="Price range" defaultValue={[25, 75]} />'
        },
        {
          name: 'Disabled',
          props: {
            disabled: true,
            label: 'Locked setting',
            defaultValue: 60,
            min: 0,
            max: 100,
            helperText: 'Contact admin to modify'
          },
          code: '<Slider disabled label="Locked" defaultValue={60} />'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['default', 'gradient', 'ghost', 'success', 'warning', 'error'],
          default: 'default',
          description: 'Visual style variant of the slider'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting track height, thumb size, and padding'
        },
        state: {
          type: 'enum',
          options: ['default', 'success', 'warning', 'error'],
          default: 'default',
          description: 'Semantic state affecting colors'
        },
        label: {
          type: 'string',
          description: 'Label text displayed above the slider'
        },
        helperText: {
          type: 'string',
          description: 'Helper text below the slider'
        },
        value: {
          type: 'number | number[]',
          description: 'Current value(s) of the slider'
        },
        min: {
          type: 'number',
          default: 0,
          description: 'Minimum value of the slider'
        },
        max: {
          type: 'number',
          default: 100,
          description: 'Maximum value of the slider'
        },
        step: {
          type: 'number',
          default: 1,
          description: 'Step interval for slider values'
        },
        showValue: {
          type: 'boolean',
          default: false,
          description: 'Whether to show value labels on hover/drag'
        },
        onChange: {
          type: 'function',
          description: 'Callback fired when the value changes'
        },
        disabled: {
          type: 'boolean',
          default: false,
          description: 'Disables the slider'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-medium',
        'font-size-xs', 'font-size-sm', 'font-size-base',
        'radius-full', 'radius-md',
        'spacing-1', 'spacing-1-5', 'spacing-2', 'spacing-3', 'spacing-4',
        'duration-fast',
        'ease-out',
        'shadow-sm', 'shadow-md', 'shadow-lg',
        'color-white',
        'color-gray-200', 'color-gray-300', 'color-gray-400', 'color-gray-800',
        'color-text-primary', 'color-text-secondary',
        'color-primary-200', 'color-primary-300', 'color-primary-500', 'color-primary-600', 'color-primary-700', 'color-primary-800',
        'color-success-200', 'color-success-500', 'color-success-600',
        'color-warning-200', 'color-warning-500', 'color-warning-600',
        'color-error-200', 'color-error-500', 'color-error-600'
      ],

      // Documentation
      documentation: `
# Slider Component

The Slider component has been heavily transformed from Material UI with enhanced visual effects, animations, and semantic variants.

## Major Transformations Applied

- **Gradient Tracks**: Custom gradient variant with our primary purple scheme (300-700)
- **Ghost Morphism**: Modern ghost effect with backdrop blur for both track and thumb
- **Enhanced Animations**: Scale effects on hover/active, smooth transitions
- **Semantic Variants**: Success, warning, error variants with matching colors
- **Custom Thumbs**: Enhanced thumb styling with borders, shadows, and hover effects
- **Enhanced Focus States**: Custom focus rings and shadow effects
- **Improved Typography**: Figtree font throughout with proper weight variations
- **Design Token Integration**: All styling uses CSS custom properties

## New Features Beyond MUI

1. **Gradient Tracks**: Beautiful gradient backgrounds using primary-300 to primary-700
2. **Ghost Effect**: Modern ghostmorphism with backdrop filters for track and rail
3. **Enhanced Thumbs**: Custom styling with borders, shadows, and animations
4. **Semantic Colors**: Success, warning, error variants beyond default styling
5. **Scale Animations**: Hover (1.1x) and active (1.2x) scaling effects on thumbs
6. **Custom Value Labels**: Enhanced styling for value display tooltips
7. **Size Variants**: Small, medium, large with proper scaling of all elements

## Usage Examples

### Basic Slider
\`\`\`jsx
import Slider from '@/components/ui/Slider';

<Slider
  label="Volume"
  value={volume}
  min={0}
  max={100}
  onChange={handleVolumeChange}
  showValue
/>
\`\`\`

### Gradient Slider
\`\`\`jsx
<Slider
  variant="gradient"
  label="Quality Setting"
  value={quality}
  min={0}
  max={100}
  step={10}
  onChange={handleQualityChange}
  showValue
/>
\`\`\`

### Range Slider
\`\`\`jsx
<Slider
  label="Price Range"
  value={priceRange}
  min={0}
  max={1000}
  onChange={handlePriceChange}
  showValue
/>
\`\`\`

### With States
\`\`\`jsx
<Slider
  state="success"
  label="Performance Score"
  value={performance}
  min={0}
  max={100}
  helperText="Excellent performance!"
  showValue
  onChange={handlePerformance}
/>
\`\`\`

### Ghost Effect
\`\`\`jsx
<Slider
  variant="ghost"
  label="Transparency"
  value={transparency}
  min={0}
  max={100}
  onChange={handleTransparency}
  showValue
/>
\`\`\`

### With Marks
\`\`\`jsx
const marks = [
  { value: 0, label: 'Low' },
  { value: 50, label: 'Medium' },
  { value: 100, label: 'High' }
];

<Slider
  label="Performance Level"
  value={level}
  marks={marks}
  step={null}
  onChange={handleLevelChange}
/>
\`\`\`

### Discrete Steps
\`\`\`jsx
<Slider
  label="Rating"
  value={rating}
  min={1}
  max={5}
  step={1}
  marks
  showValue
  onChange={handleRatingChange}
/>
\`\`\`

## Accessibility Features

- Proper ARIA labels and roles
- Focus management with visible indicators
- Keyboard navigation support (arrow keys, home, end, page up/down)
- Screen reader friendly with value announcements
- Color contrast compliance in all states and variants
- Disabled state properly announced
- Range slider support with multiple thumbs
      `
    },
    {
      name: 'Radio',
      displayName: 'Radio',
      description: 'Material UI Radio transformed with enhanced visual effects, custom variants, and comprehensive interaction states',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Radio',
      component: () => import('../components/ui/Radio'),
      muiComponent: '@mui/material/Radio',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Contained',
          props: {
            variant: 'contained',
            label: 'Subscription Plan',
            value: 'basic',
            options: [
              { value: 'basic', label: 'Basic Plan - $9/month' },
              { value: 'pro', label: 'Pro Plan - $19/month' },
              { value: 'enterprise', label: 'Enterprise Plan - $49/month' }
            ]
          },
          code: '<Radio variant="contained" label="Plan" options={planOptions} />'
        },
        {
          name: 'Outlined',
          props: {
            variant: 'outlined',
            label: 'Payment Method',
            value: 'credit',
            options: [
              { value: 'credit', label: 'Credit Card' },
              { value: 'paypal', label: 'PayPal' },
              { value: 'bank', label: 'Bank Transfer' }
            ]
          },
          code: '<Radio variant="outlined" label="Payment" options={paymentOptions} />'
        },
        {
          name: 'Minimal',
          props: {
            variant: 'minimal',
            label: 'Theme Preference',
            value: 'auto',
            options: [
              { value: 'light', label: 'Light Mode' },
              { value: 'dark', label: 'Dark Mode' },
              { value: 'auto', label: 'System Default' }
            ]
          },
          code: '<Radio variant="minimal" label="Theme" options={themeOptions} />'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            label: 'Compact Options',
            value: 'option1',
            options: [
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' }
            ]
          },
          code: '<Radio size="small" label="Compact" options={options} />'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            label: 'Standard Options',
            value: 'option2',
            options: [
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' }
            ]
          },
          code: '<Radio size="medium" label="Standard" options={options} />'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            label: 'Prominent Options',
            value: 'option3',
            options: [
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' }
            ]
          },
          code: '<Radio size="large" label="Prominent" options={options} />'
        }
      ],

      // State examples
      states: [
        {
          name: 'Default',
          props: {
            label: 'Select an option',
            value: 'option1',
            options: [
              { value: 'option1', label: 'Available Option' },
              { value: 'option2', label: 'Another Option' },
              { value: 'option3', label: 'Third Option' }
            ]
          },
          code: '<Radio label="Select" options={options} value={selected} />'
        },
        {
          name: 'With Helper Text',
          props: {
            label: 'Delivery Method',
            value: 'standard',
            helperText: 'Choose your preferred delivery speed',
            options: [
              { value: 'standard', label: 'Standard (5-7 days)' },
              { value: 'express', label: 'Express (2-3 days)' },
              { value: 'overnight', label: 'Overnight (next day)' }
            ]
          },
          code: '<Radio label="Delivery" helperText="Choose speed" options={deliveryOptions} />'
        },
        {
          name: 'With Disabled Option',
          props: {
            label: 'Service Level',
            value: 'basic',
            options: [
              { value: 'basic', label: 'Basic Service' },
              { value: 'premium', label: 'Premium Service', disabled: true },
              { value: 'enterprise', label: 'Enterprise Service' }
            ]
          },
          code: '<Radio label="Service" options={serviceOptions} />'
        },
        {
          name: 'Disabled Group',
          props: {
            disabled: true,
            label: 'Locked Settings',
            value: 'option1',
            helperText: 'Contact administrator to modify',
            options: [
              { value: 'option1', label: 'Current Setting' },
              { value: 'option2', label: 'Alternative Setting' }
            ]
          },
          code: '<Radio disabled label="Locked" helperText="Contact admin" options={options} />'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['contained', 'outlined', 'minimal'],
          default: 'contained',
          description: 'Visual style variant of the radio buttons'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting radio button dimensions and text'
        },
        label: {
          type: 'string',
          description: 'Label for the radio group'
        },
        helperText: {
          type: 'string',
          description: 'Helper text below the radio group'
        },
        options: {
          type: 'RadioOption[]',
          description: 'Array of radio options with value, label, and optional disabled'
        },
        value: {
          type: 'string',
          description: 'Currently selected value'
        },
        onChange: {
          type: 'function',
          description: 'Callback fired when selection changes'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-normal', 'font-weight-medium',
        'font-size-sm', 'font-size-base', 'font-size-lg',
        'radius-full',
        'spacing-1', 'spacing-2',
        'duration-fast',
        'ease-out',
        'color-gray-400', 'color-gray-300',
        'color-primary-50', 'color-primary-300', 'color-primary-500', 'color-primary-600',
        'color-text-primary', 'color-text-disabled',
        'color-border-default'
      ],

      // Documentation
      documentation: `
# Radio Component

The Radio component provides exclusive selection from a set of options with enhanced styling and smooth animations.

## Major Transformations Applied

- **Enhanced Styling**: Custom radio button styling with design tokens
- **Smooth Animations**: Transitions for hover, focus, and selection states
- **Variant Options**: Contained, outlined, and minimal styling variants
- **Improved Typography**: Figtree font with proper weight variations
- **Design Token Integration**: All styling uses CSS custom properties
- **Accessibility Enhanced**: Proper focus management and keyboard navigation

## New Features Beyond MUI

1. **Visual Variants**: Three distinct styling approaches (contained, outlined, minimal)
2. **Size Options**: Small, medium, large with proper scaling
3. **Enhanced Focus**: Custom focus rings with design system colors
4. **Smooth Transitions**: All state changes are smoothly animated
5. **Option Management**: Built-in support for disabled individual options
6. **Helper Text**: Integrated helper text support for better UX

## Usage Examples

### Basic Radio Group
\`\`\`jsx
import Radio from '@/components/ui/Radio';

const subscriptionOptions = [
  { value: 'basic', label: 'Basic Plan - $9/month' },
  { value: 'pro', label: 'Pro Plan - $19/month' },
  { value: 'enterprise', label: 'Enterprise Plan - $49/month' }
];

<Radio
  label="Choose your subscription"
  options={subscriptionOptions}
  value={selectedPlan}
  onChange={handlePlanChange}
/>
\`\`\`

### With Helper Text
\`\`\`jsx
<Radio
  label="Delivery Method"
  helperText="Select your preferred delivery speed"
  options={deliveryOptions}
  value={deliveryMethod}
  onChange={handleDeliveryChange}
/>
\`\`\`

### Different Variants
\`\`\`jsx
{/* Contained variant (default) */}
<Radio variant="contained" label="Payment Method" options={paymentOptions} />

{/* Outlined variant */}
<Radio variant="outlined" label="Theme Preference" options={themeOptions} />

{/* Minimal variant */}
<Radio variant="minimal" label="Language" options={languageOptions} />
\`\`\`

### With Disabled Options
\`\`\`jsx
const serviceOptions = [
  { value: 'basic', label: 'Basic Service' },
  { value: 'premium', label: 'Premium Service', disabled: true },
  { value: 'enterprise', label: 'Enterprise Service' }
];

<Radio
  label="Service Level"
  options={serviceOptions}
  value={serviceLevel}
  onChange={handleServiceChange}
/>
\`\`\`

### Size Variations
\`\`\`jsx
<Radio size="small" label="Compact" options={options} />
<Radio size="medium" label="Standard" options={options} />
<Radio size="large" label="Prominent" options={options} />
\`\`\`

## Accessibility Features

- Proper ARIA attributes for screen readers
- Keyboard navigation support (arrow keys, tab)
- Focus management with visible indicators
- Label association for all options
- Disabled state properly announced
- Helper text linked to radio group
      `
    },
    {
      name: 'Switch',
      displayName: 'Switch',
      description: 'Material UI Switch transformed with enhanced visual effects, custom variants, and smooth animations',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Switch',
      component: () => import('../components/ui/Switch'),
      muiComponent: '@mui/material/Switch',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Contained',
          props: {
            variant: 'contained',
            label: 'Enable push notifications',
            checked: true
          },
          code: '<Switch variant="contained" label="Enable push notifications" />'
        },
        {
          name: 'Outlined',
          props: {
            variant: 'outlined',
            label: 'Dark mode',
            checked: false
          },
          code: '<Switch variant="outlined" label="Dark mode" />'
        },
        {
          name: 'Minimal',
          props: {
            variant: 'minimal',
            label: 'Auto-save documents',
            checked: true
          },
          code: '<Switch variant="minimal" label="Auto-save documents" />'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            label: 'Compact toggle',
            checked: false
          },
          code: '<Switch size="small" label="Compact toggle" />'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            label: 'Standard toggle',
            checked: true
          },
          code: '<Switch size="medium" label="Standard toggle" />'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            label: 'Prominent toggle',
            checked: false
          },
          code: '<Switch size="large" label="Prominent toggle" />'
        }
      ],

      // State examples
      states: [
        {
          name: 'Default',
          props: {
            label: 'Email notifications',
            checked: false
          },
          code: '<Switch label="Email notifications" checked={enabled} onChange={handleToggle} />'
        },
        {
          name: 'Checked',
          props: {
            checked: true,
            label: 'Two-factor authentication',
            helperText: 'Enhances account security'
          },
          code: '<Switch checked label="Two-factor auth" helperText="Enhances security" />'
        },
        {
          name: 'With Helper Text',
          props: {
            label: 'Analytics tracking',
            helperText: 'Help us improve the app experience',
            checked: false
          },
          code: '<Switch label="Analytics" helperText="Help improve experience" />'
        },
        {
          name: 'Disabled Unchecked',
          props: {
            disabled: true,
            label: 'Premium feature',
            helperText: 'Upgrade to Pro to enable',
            checked: false
          },
          code: '<Switch disabled label="Premium feature" helperText="Upgrade to enable" />'
        },
        {
          name: 'Disabled Checked',
          props: {
            disabled: true,
            label: 'System setting',
            helperText: 'Managed by administrator',
            checked: true
          },
          code: '<Switch disabled checked label="System setting" helperText="Managed by admin" />'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['contained', 'outlined', 'minimal'],
          default: 'contained',
          description: 'Visual style variant of the switch'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting switch dimensions'
        },
        label: {
          type: 'string',
          description: 'Label text for the switch'
        },
        helperText: {
          type: 'string',
          description: 'Helper text below the switch'
        },
        checked: {
          type: 'boolean',
          description: 'Whether the switch is checked'
        },
        disabled: {
          type: 'boolean',
          default: false,
          description: 'Disables the switch'
        },
        onChange: {
          type: 'function',
          description: 'Callback fired when the state changes'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-normal',
        'font-size-sm', 'font-size-base', 'font-size-lg',
        'duration-fast',
        'ease-out',
        'shadow-sm', 'shadow-md',
        'color-white', 'color-gray-300', 'color-gray-200',
        'color-primary-50', 'color-primary-400', 'color-primary-600',
        'color-text-primary', 'color-text-disabled'
      ],

      // Documentation
      documentation: `
# Switch Component

The Switch component provides toggle functionality with enhanced styling, smooth animations, and comprehensive variant options.

## Major Transformations Applied

- **Enhanced Visual Design**: Custom switch styling with design tokens
- **Smooth Animations**: Fluid transitions for all state changes
- **Variant Options**: Contained, outlined, and minimal styling variants
- **Improved Typography**: Figtree font with proper weight variations
- **Design Token Integration**: All styling uses CSS custom properties
- **Enhanced Spacing**: Better padding and margins for improved user interaction
- **Accessibility Enhanced**: Proper focus management and keyboard navigation

## New Features Beyond MUI

1. **Visual Variants**: Three distinct styling approaches (contained, outlined, minimal)
2. **Size Options**: Small, medium, large with proper scaling
3. **Enhanced Focus**: Custom focus rings and hover effects
4. **Smooth Transitions**: All state changes are smoothly animated
5. **Helper Text Support**: Integrated helper text for better context
6. **Improved Spacing**: Enhanced padding and click area for better UX

## Usage Examples

### Basic Switch
\`\`\`jsx
import Switch from '@/components/ui/Switch';

<Switch
  label="Enable notifications"
  checked={notificationsEnabled}
  onChange={handleNotificationToggle}
/>
\`\`\`

### With Helper Text
\`\`\`jsx
<Switch
  label="Two-factor authentication"
  helperText="Enhances account security"
  checked={twoFactorEnabled}
  onChange={handleTwoFactorToggle}
/>
\`\`\`

### Different Variants
\`\`\`jsx
{/* Contained variant (default) */}
<Switch variant="contained" label="Push notifications" />

{/* Outlined variant */}
<Switch variant="outlined" label="Dark mode" />

{/* Minimal variant */}
<Switch variant="minimal" label="Auto-save" />
\`\`\`

### Size Variations
\`\`\`jsx
<Switch size="small" label="Compact setting" />
<Switch size="medium" label="Standard setting" />
<Switch size="large" label="Prominent setting" />
\`\`\`

### Settings Panel Example
\`\`\`jsx
<div>
  <Switch
    label="Email notifications"
    helperText="Receive updates about your account"
    checked={settings.emailNotifications}
    onChange={(checked) => updateSetting('emailNotifications', checked)}
  />

  <Switch
    label="Marketing emails"
    helperText="Get tips and product updates"
    checked={settings.marketingEmails}
    onChange={(checked) => updateSetting('marketingEmails', checked)}
  />

  <Switch
    disabled={!isPremium}
    label="Advanced analytics"
    helperText={isPremium ? "Track detailed usage metrics" : "Upgrade to Pro to enable"}
    checked={settings.analytics}
    onChange={(checked) => updateSetting('analytics', checked)}
  />
</div>
\`\`\`

### Disabled States
\`\`\`jsx
{/* Disabled unchecked */}
<Switch
  disabled
  label="Premium feature"
  helperText="Upgrade to Pro to enable"
  checked={false}
/>

{/* Disabled checked */}
<Switch
  disabled
  label="System setting"
  helperText="Managed by administrator"
  checked={true}
/>
\`\`\`

## Accessibility Features

- Proper ARIA attributes for screen readers
- Keyboard navigation support (space to toggle, tab to navigate)
- Focus management with visible indicators
- Label association with switch control
- Disabled state properly announced
- Helper text linked to switch for context
- High contrast support for all variants
      `
    }
  ],
  [COMPONENT_CATEGORIES.NAVIGATION]: [
    {
      name: 'Menu',
      displayName: 'Menu',
      description: 'Material UI Menu transformed with contained layout, gradient backgrounds, ghost effects, enhanced animations, and comprehensive item styling',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Menu',
      component: () => import('../components/ui/Menu'),
      muiComponent: '@mui/material/Menu',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Contained',
          props: {
            variant: 'contained',
            showDemo: false,
            buttonText: 'Contained Menu'
          },
          code: '<Menu variant="contained" buttonText="Open Menu" />'
        },
        {
          name: 'Outlined',
          props: {
            variant: 'outlined',
            showDemo: false,
            buttonText: 'Outlined Menu'
          },
          code: '<Menu variant="outlined" buttonText="Open Menu" />'
        },
        {
          name: 'Minimal',
          props: {
            variant: 'minimal',
            showDemo: false,
            buttonText: 'Minimal Menu'
          },
          code: '<Menu variant="minimal" buttonText="Open Menu" />'
        },
        {
          name: 'Gradient',
          props: {
            variant: 'gradient',
            showDemo: false,
            buttonText: 'Gradient Menu'
          },
          code: '<Menu variant="gradient" buttonText="Open Menu" />'
        },
        {
          name: 'Ghost',
          props: {
            variant: 'ghost',
            showDemo: false,
            buttonText: 'Ghost Menu'
          },
          code: '<Menu variant="ghost" buttonText="Open Menu" />'
        }
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            showDemo: false,
            buttonText: 'Small Menu'
          },
          code: '<Menu size="small" buttonText="Small Menu" />'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            showDemo: false,
            buttonText: 'Medium Menu'
          },
          code: '<Menu size="medium" buttonText="Medium Menu" />'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            showDemo: false,
            buttonText: 'Large Menu'
          },
          code: '<Menu size="large" buttonText="Large Menu" />'
        }
      ],

      // State examples
      states: [
        {
          name: 'With Dividers',
          props: {
            showDemo: false,
            menuItems: [
              { label: 'Profile', icon: 'PersonIcon' },
              { label: 'Settings', icon: 'SettingsIcon', divider: true },
              { label: 'Share', icon: 'ShareIcon' },
              { label: 'Download', icon: 'DownloadIcon', divider: true },
              { label: 'Logout', icon: 'LogoutIcon' }
            ]
          },
          code: '<Menu menuItems={itemsWithDividers} />'
        },
        {
          name: 'With Disabled',
          props: {
            showDemo: false,
            menuItems: [
              { label: 'Available', icon: 'CheckIcon' },
              { label: 'Disabled', icon: 'BlockIcon', disabled: true },
              { label: 'Also Available', icon: 'CheckIcon' }
            ]
          },
          code: '<Menu menuItems={itemsWithDisabled} />'
        },
        {
          name: 'Action Menu',
          props: {
            showDemo: false,
            menuItems: [
              { label: 'Edit', icon: 'EditIcon' },
              { label: 'Copy', icon: 'CopyIcon' },
              { label: 'Move', icon: 'MoveIcon', divider: true },
              { label: 'Delete', icon: 'DeleteIcon' }
            ]
          },
          code: '<Menu menuItems={actionItems} />'
        },
        {
          name: 'Interactive Demo',
          props: {
            showDemo: true,
            buttonText: 'Click to Open Menu'
          },
          code: '<Menu showDemo buttonText="Click to Open" />'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['contained', 'outlined', 'minimal', 'gradient', 'ghost'],
          default: 'contained',
          description: 'Visual style variant of the menu'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting menu dimensions and item spacing'
        },
        menuItems: {
          type: 'array',
          description: 'Array of menu item objects with label, icon, onClick, disabled, and divider properties'
        },
        buttonText: {
          type: 'string',
          default: 'Open Menu',
          description: 'Text displayed on the trigger button'
        },
        showDemo: {
          type: 'boolean',
          default: true,
          description: 'Whether to show interactive demo or static menu'
        },
        anchorOrigin: {
          type: 'object',
          description: 'Origin point for menu positioning relative to trigger'
        },
        transformOrigin: {
          type: 'object',
          description: 'Transform origin point for menu animation'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-medium',
        'font-size-sm', 'font-size-base', 'font-size-lg',
        'radius-lg', 'radius-md', 'radius-button',
        'spacing-1', 'spacing-1-5', 'spacing-2', 'spacing-2-5', 'spacing-3', 'spacing-4', 'spacing-6', 'spacing-8',
        'duration-fast',
        'ease-out',
        'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl',
        'color-bg-elevated',
        'color-border-default', 'color-border-subtle',
        'color-text-primary',
        'color-gray-50', 'color-gray-100', 'color-gray-200',
        'color-primary-50', 'color-primary-200', 'color-primary-300', 'color-primary-500', 'color-primary-600', 'color-primary-700', 'color-primary-800',
        'color-white'
      ],

      // Documentation
      documentation: `
# Menu Component

The Menu component has been heavily transformed from Material UI with a contained layout that works within ComponentViewer, enhanced visual effects, and comprehensive item styling.

## Major Transformations Applied

- **Contained Layout**: Redesigned to display within containers as well as interactive popover menus
- **Gradient Backgrounds**: Custom gradient variant using our primary purple scheme (300-700)
- **Ghost Morphism**: Modern ghost effect with backdrop blur
- **Enhanced Menu Items**: Custom styled items with icons, colors, and slide animations
- **Multiple Variants**: Contained, outlined, minimal, gradient, and ghost styles
- **Responsive Sizing**: Small, medium, and large size options
- **Consistent Styling**: Uniform item styling with proper hover and focus states
- **Slide Interactions**: Menu items translate on hover for enhanced feedback
- **Design Token Integration**: All styling uses CSS custom properties

## New Features Beyond MUI

1. **Contained Display**: Shows within ComponentViewer boundaries as well as interactive popover
2. **Ghost Effect**: Modern ghostmorphism with backdrop filters
3. **Slide Animations**: Menu items translate on hover for enhanced feedback
4. **Multiple Sizes**: Small, medium, large with proper scaling
5. **Consistent Icons**: Material UI icons throughout for better accessibility
6. **Enhanced Dividers**: Styled dividers with proper spacing and opacity
7. **Dual Display Modes**: Static display for preview and interactive for demos

## Usage Examples

### Basic Menu
\`\`\`jsx
import Menu from '@/components/ui/Menu';

<Menu
  buttonText="Options"
  menuItems={[
    { label: 'Profile', icon: <PersonIcon /> },
    { label: 'Settings', icon: <SettingsIcon /> },
    { label: 'Logout', icon: <LogoutIcon /> }
  ]}
/>
\`\`\`

### Gradient Menu
\`\`\`jsx
<Menu
  variant="gradient"
  buttonText="Premium Actions"
  menuItems={menuItems}
/>
\`\`\`

### Ghost Effect
\`\`\`jsx
<Menu
  variant="ghost"
  size="large"
  buttonText="Modern Menu"
  menuItems={menuItems}
/>
\`\`\`

### Menu with Dividers
\`\`\`jsx
const menuItems = [
  {
    label: 'Edit Profile',
    icon: <EditIcon />,
    onClick: handleEdit
  },
  {
    label: 'Share Content',
    icon: <ShareIcon />,
    divider: true
  },
  {
    label: 'Delete Item',
    icon: <DeleteIcon />,
    onClick: handleDelete
  }
];

<Menu
  buttonText="Actions"
  menuItems={menuItems}
/>
\`\`\`

### Disabled Items
\`\`\`jsx
const menuItems = [
  { label: 'Available Action', icon: <CheckIcon /> },
  {
    label: 'Disabled Action',
    icon: <BlockIcon />,
    disabled: true
  },
  { label: 'Another Action', icon: <PlayIcon /> }
];

<Menu menuItems={menuItems} />
\`\`\`

### Custom Positioning
\`\`\`jsx
<Menu
  buttonText="Custom Position"
  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  menuItems={menuItems}
/>
\`\`\`

### Static Menu Display
\`\`\`jsx
<Menu
  variant="contained"
  showDemo={false}
  menuItems={menuItems}
/>
\`\`\`

## Menu Item Structure

The menuItems prop accepts an array of objects:

\`\`\`jsx
const menuItems = [
  {
    label: 'Action Name',
    icon: <ActionIcon />,
    onClick: () => handleAction(),
    disabled: false,
    divider: true // adds divider after this item
  }
];
\`\`\`

## Display Modes

- **Interactive Mode** (\`showDemo={true}\`): Shows button trigger with popover menu
- **Static Mode** (\`showDemo={false}\`): Shows menu items in a contained layout for preview

## Accessibility Features

- Proper ARIA attributes for menu navigation
- Focus management within menu items
- Screen reader friendly item descriptions
- Keyboard navigation support (arrow keys, enter, escape)
- Color contrast compliance in all variants
- Disabled state properly announced
- Proper semantic structure with lists and roles
      `
    },
    {
      name: 'Drawer',
      displayName: 'Drawer',
      description: 'Material UI Drawer transformed with contained layout, gradient backgrounds, ghost effects, enhanced animations, and comprehensive navigation features',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Drawer',
      component: () => import('../components/ui/Drawer'),
      muiComponent: '@mui/material/Drawer',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Contained',
          props: {
            variant: 'contained',
            title: 'Dashboard',
            showHeader: true,
            showFooter: true
          },
          code: '<Drawer variant="contained" title="Dashboard" />'
        },
        {
          name: 'Outlined',
          props: {
            variant: 'outlined',
            title: 'Navigation',
            showHeader: true,
            showFooter: true
          },
          code: '<Drawer variant="outlined" title="Navigation" />'
        },
        {
          name: 'Minimal',
          props: {
            variant: 'minimal',
            title: 'Simple',
            showHeader: true,
            showFooter: false
          },
          code: '<Drawer variant="minimal" title="Simple" />'
        },
        {
          name: 'Gradient',
          props: {
            variant: 'gradient',
            title: 'Premium',
            showHeader: true,
            showFooter: true
          },
          code: '<Drawer variant="gradient" title="Premium" />'
        },
        {
          name: 'Ghost',
          props: {
            variant: 'ghost',
            title: 'Modern',
            showHeader: true,
            showFooter: true
          },
          code: '<Drawer variant="ghost" title="Modern" />'
        }
      ],

      // Size examples
      sizes: [
        {
          name: 'Compact',
          props: {
            size: 'compact',
            title: 'Compact',
            showHeader: true,
            showFooter: true
          },
          code: '<Drawer size="compact" title="Compact" />'
        },
        {
          name: 'Standard',
          props: {
            size: 'standard',
            title: 'Standard',
            showHeader: true,
            showFooter: true
          },
          code: '<Drawer size="standard" title="Standard" />'
        },
        {
          name: 'Wide',
          props: {
            size: 'wide',
            title: 'Wide Layout',
            showHeader: true,
            showFooter: true
          },
          code: '<Drawer size="wide" title="Wide Layout" />'
        }
      ],

      // State examples
      states: [
        {
          name: 'With Header',
          props: {
            showHeader: true,
            showFooter: false,
            title: 'Navigation'
          },
          code: '<Drawer showHeader title="Navigation" />'
        },
        {
          name: 'No Header',
          props: {
            showHeader: false,
            showFooter: true,
            title: 'Clean'
          },
          code: '<Drawer showHeader={false} />'
        },
        {
          name: 'With Footer',
          props: {
            showHeader: false,
            showFooter: true,
            title: 'Footer Only'
          },
          code: '<Drawer showHeader={false} showFooter />'
        },
        {
          name: 'Minimal',
          props: {
            showHeader: false,
            showFooter: false,
            title: 'Minimal'
          },
          code: '<Drawer showHeader={false} showFooter={false} />'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['contained', 'outlined', 'minimal', 'gradient', 'ghost'],
          default: 'contained',
          description: 'Visual style variant of the drawer'
        },
        size: {
          type: 'enum',
          options: ['compact', 'standard', 'wide'],
          default: 'standard',
          description: 'Size affecting drawer width'
        },
        showHeader: {
          type: 'boolean',
          default: true,
          description: 'Whether to show the header area'
        },
        showFooter: {
          type: 'boolean',
          default: true,
          description: 'Whether to show the footer area'
        },
        title: {
          type: 'string',
          default: 'Navigation',
          description: 'Title displayed in the header'
        },
        menuItems: {
          type: 'array',
          description: 'Array of menu item objects with label, icon, onClick, active, and divider properties'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-medium', 'font-weight-semibold',
        'font-size-sm', 'font-size-lg',
        'radius-lg', 'radius-md',
        'spacing-1', 'spacing-2', 'spacing-2-5', 'spacing-3', 'spacing-4',
        'duration-fast',
        'ease-out',
        'shadow-sm', 'shadow-md', 'shadow-lg',
        'color-bg-elevated',
        'color-border-default', 'color-border-subtle',
        'color-text-primary', 'color-text-secondary',
        'color-primary-100', 'color-primary-200', 'color-primary-300', 'color-primary-600', 'color-primary-700',
        'color-white'
      ],

      // Documentation
      documentation: `
# Drawer Component

The Drawer component has been heavily transformed from Material UI with a contained layout that works within ComponentViewer, enhanced visual effects, and comprehensive navigation features.

## Major Transformations Applied

- **Contained Layout**: Redesigned to display within containers instead of modal overlay
- **Gradient Backgrounds**: Custom gradient variant using our primary purple scheme (300-700)
- **Ghost Morphism**: Modern ghost effect with backdrop blur
- **Enhanced Menu Items**: Custom styled navigation items with icons and active states
- **Multiple Variants**: Contained, outlined, minimal, gradient, and ghost styles
- **Responsive Sizing**: Compact, standard, and wide size options
- **Header & Footer Control**: Optional header with title and footer sections
- **Slide Interactions**: Menu items translate on hover for enhanced feedback
- **Design Token Integration**: All styling uses CSS custom properties

## New Features Beyond MUI

1. **Contained Display**: Shows within ComponentViewer boundaries rather than full-screen overlay
2. **Ghost Effect**: Modern ghostmorphism with backdrop filters
3. **Slide Animations**: Menu items translate on hover for enhanced feedback
4. **Multiple Sizes**: Compact (240px), standard (280px), wide (320px) options
5. **Enhanced Navigation**: Rich menu items with icons, active states, and dividers
6. **Header/Footer Control**: Optional header and footer areas with customizable content
7. **Hover Effects**: Lift animations and enhanced shadows on hover

## Usage Examples

### Basic Drawer
\`\`\`jsx
import Drawer from '@/components/ui/Drawer';

<Drawer
  variant="contained"
  title="Navigation"
  showHeader
  showFooter
/>
\`\`\`

### Gradient Drawer
\`\`\`jsx
<Drawer
  variant="gradient"
  title="Premium Navigation"
  size="wide"
/>
\`\`\`

### Ghost Effect
\`\`\`jsx
<Drawer
  variant="ghost"
  title="Modern Interface"
  showHeader
  showFooter={false}
/>
\`\`\`

### Minimal Drawer
\`\`\`jsx
<Drawer
  variant="minimal"
  size="compact"
  showHeader={false}
  showFooter={false}
/>
\`\`\`

### Custom Menu Items
\`\`\`jsx
const menuItems = [
  {
    label: 'Dashboard',
    icon: <DashboardIcon />,
    onClick: () => navigate('/dashboard'),
    active: true
  },
  {
    label: 'Settings',
    icon: <SettingsIcon />,
    onClick: () => navigate('/settings'),
    divider: true
  },
  {
    label: 'Logout',
    icon: <LogoutIcon />,
    onClick: handleLogout
  }
];

<Drawer
  title="Custom Navigation"
  menuItems={menuItems}
/>
\`\`\`

## Accessibility Features

- Proper ARIA attributes for navigation landmarks
- Focus management within drawer content
- Screen reader friendly menu item descriptions
- Keyboard navigation support (tab, arrow keys, enter)
- Color contrast compliance in all variants
- Proper semantic structure with lists and headings
      `
    },
    {
      name: 'AppBar',
      displayName: 'AppBar',
      description: 'Material UI AppBar transformed with gradient backgrounds, ghost effects, enhanced animations, and comprehensive navigation features',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/AppBar',
      component: () => import('../components/ui/AppBar'),
      muiComponent: '@mui/material/AppBar',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Default',
          props: {
            variant: 'default',
            title: 'My Application',
            navigation: [
              { label: 'Home', active: true },
              { label: 'Products', active: false },
              { label: 'About', active: false },
              { label: 'Contact', active: false }
            ]
          },
          code: '<AppBar variant="default" title="My App" navigation={navItems} />'
        },
        {
          name: 'Elevated',
          props: {
            variant: 'elevated',
            title: 'Dashboard',
            navigation: [
              { label: 'Overview', active: true },
              { label: 'Analytics', active: false },
              { label: 'Reports', active: false }
            ]
          },
          code: '<AppBar variant="elevated" title="Dashboard" navigation={navItems} />'
        },
        {
          name: 'Gradient',
          props: {
            variant: 'gradient',
            title: 'Premium App',
            navigation: [
              { label: 'Features', active: true },
              { label: 'Pricing', active: false },
              { label: 'Enterprise', active: false }
            ]
          },
          code: '<AppBar variant="gradient" title="Premium App" navigation={navItems} />'
        },
        {
          name: 'Ghost',
          props: {
            variant: 'ghost',
            title: 'Modern UI',
            navigation: [
              { label: 'Design', active: true },
              { label: 'Components', active: false },
              { label: 'Patterns', active: false }
            ]
          },
          code: '<AppBar variant="ghost" title="Modern UI" navigation={navItems} />'
        },
        {
          name: 'Minimal',
          props: {
            variant: 'minimal',
            title: 'Clean Design',
            navigation: [
              { label: 'Portfolio', active: true },
              { label: 'Blog', active: false },
              { label: 'Resume', active: false }
            ]
          },
          code: '<AppBar variant="minimal" title="Clean Design" navigation={navItems} />'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Compact',
          props: {
            size: 'compact',
            title: 'Compact App',
            navigation: [
              { label: 'Home', active: true },
              { label: 'About', active: false }
            ]
          },
          code: '<AppBar size="compact" title="Compact" navigation={navItems} />'
        },
        {
          name: 'Standard',
          props: {
            size: 'standard',
            title: 'Standard App',
            navigation: [
              { label: 'Home', active: true },
              { label: 'Products', active: false },
              { label: 'About', active: false }
            ]
          },
          code: '<AppBar size="standard" title="Standard" navigation={navItems} />'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            title: 'Large App',
            navigation: [
              { label: 'Home', active: true },
              { label: 'Products', active: false },
              { label: 'Services', active: false },
              { label: 'About', active: false }
            ]
          },
          code: '<AppBar size="large" title="Large" navigation={navItems} />'
        }
      ],

      // State examples
      states: [
        {
          name: 'With Logo',
          props: {
            title: 'Brand App',
            logo: '🚀',
            navigation: [
              { label: 'Dashboard', active: true },
              { label: 'Settings', active: false }
            ]
          },
          code: '<AppBar title="Brand" logo={<Logo />} navigation={navItems} />'
        },
        {
          name: 'With Actions',
          props: {
            title: 'Action App',
            navigation: [
              { label: 'Home', active: true },
              { label: 'Profile', active: false }
            ],
            actions: '🔔 👤'
          },
          code: '<AppBar title="App" navigation={navItems} actions={<Actions />} />'
        },
        {
          name: 'Mobile Ready',
          props: {
            title: 'Mobile App',
            mobileMenuIcon: '☰',
            navigation: [
              { label: 'Home', active: true },
              { label: 'Menu', active: false },
              { label: 'Orders', active: false }
            ]
          },
          code: '<AppBar title="Mobile" mobileMenuIcon={<MenuIcon />} navigation={navItems} />'
        },
        {
          name: 'Full Featured',
          props: {
            variant: 'gradient',
            size: 'standard',
            title: 'Complete App',
            logo: '⭐',
            navigation: [
              { label: 'Home', active: true },
              { label: 'Features', active: false },
              { label: 'Pricing', active: false }
            ],
            actions: '🔍 🔔 👤',
            mobileMenuIcon: '☰'
          },
          code: '<AppBar variant="gradient" title="Complete" logo={logo} navigation={navItems} actions={actions} />'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['default', 'elevated', 'gradient', 'ghost', 'minimal'],
          default: 'default',
          description: 'Visual style variant of the app bar'
        },
        size: {
          type: 'enum',
          options: ['compact', 'standard', 'large'],
          default: 'standard',
          description: 'Size affecting height and padding'
        },
        title: {
          type: 'string',
          description: 'Application title displayed in the app bar'
        },
        logo: {
          type: 'ReactNode',
          description: 'Logo or brand element to display'
        },
        navigation: {
          type: 'array',
          description: 'Array of navigation items with label, href/onClick, and active state'
        },
        actions: {
          type: 'ReactNode',
          description: 'Action elements like search, notifications, user menu'
        },
        mobileMenuIcon: {
          type: 'ReactNode',
          description: 'Icon for mobile menu toggle'
        },
        onMobileMenuClick: {
          type: 'function',
          description: 'Callback for mobile menu toggle'
        },
        position: {
          type: 'enum',
          options: ['fixed', 'absolute', 'sticky', 'static', 'relative'],
          default: 'sticky',
          description: 'CSS position property for the app bar'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-medium', 'font-weight-bold',
        'font-size-xl',
        'letter-spacing-tight',
        'radius-md',
        'spacing-1', 'spacing-2', 'spacing-3', 'spacing-4', 'spacing-6', 'spacing-8',
        'duration-fast',
        'ease-out',
        'shadow-sm', 'shadow-md', 'shadow-lg',
        'color-bg-elevated', 'color-bg-secondary',
        'color-border-subtle',
        'color-text-primary',
        'color-gray-100',
        'color-primary-100', 'color-primary-200', 'color-primary-300', 'color-primary-500', 'color-primary-700', 'color-primary-800',
        'color-white'
      ],

      // Documentation
      documentation: `
# AppBar Component

The AppBar component has been heavily transformed from Material UI with enhanced visual effects, navigation features, and responsive design.

## Major Transformations Applied

- **Gradient Backgrounds**: Custom gradient variant with our primary purple scheme (300-700)
- **Ghost Morphism**: Modern ghost effect with backdrop blur and transparency
- **Enhanced Animations**: Hover lift effects, smooth transitions, and scale animations
- **Responsive Design**: Built-in mobile menu support with automatic navigation hiding
- **Navigation Integration**: Structured navigation with active states and hover effects
- **Brand Flexibility**: Support for logos, titles, and custom branding
- **Action Areas**: Dedicated space for search, notifications, and user actions
- **Design Token Integration**: All styling uses CSS custom properties

## New Features Beyond MUI

1. **Gradient Variant**: Beautiful gradient background using primary-300 to primary-700
2. **Ghost Effect**: Modern ghostmorphism with backdrop filters
3. **Smart Navigation**: Automatic responsive behavior with mobile menu
4. **Enhanced Interactions**: Hover animations and active state management
5. **Size Variants**: Compact, standard, large with proper scaling
6. **Brand Integration**: Flexible logo and title positioning
7. **Action Framework**: Structured areas for different types of actions

## Usage Examples

### Basic AppBar
\`\`\`jsx
import AppBar from '@/components/ui/AppBar';

const navigation = [
  { label: 'Home', href: '/', active: true },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' }
];

<AppBar
  title="My Application"
  navigation={navigation}
/>
\`\`\`

### Gradient AppBar with Actions
\`\`\`jsx
<AppBar
  variant="gradient"
  title="Premium App"
  logo={<Logo />}
  navigation={navigation}
  actions={
    <>
      <IconButton><SearchIcon /></IconButton>
      <IconButton><NotificationsIcon /></IconButton>
      <IconButton><AccountIcon /></IconButton>
    </>
  }
/>
\`\`\`

### Ghost Effect AppBar
\`\`\`jsx
<AppBar
  variant="ghost"
  title="Modern UI"
  navigation={navigation}
  actions={<UserMenu />}
/>
\`\`\`

### Mobile-Ready AppBar
\`\`\`jsx
<AppBar
  title="Mobile App"
  navigation={navigation}
  mobileMenuIcon={<MenuIcon />}
  onMobileMenuClick={handleMobileMenu}
  actions={<MobileActions />}
/>
\`\`\`

### Minimal Design
\`\`\`jsx
<AppBar
  variant="minimal"
  title="Clean Design"
  navigation={[
    { label: 'Portfolio', active: true },
    { label: 'Blog' },
    { label: 'Contact' }
  ]}
/>
\`\`\`

### Custom Content
\`\`\`jsx
<AppBar variant="elevated" title="Custom App">
  <div style={{ marginLeft: 'auto' }}>
    <SearchField />
    <UserProfile />
  </div>
</AppBar>
\`\`\`

## Navigation Structure

The navigation prop accepts an array of objects:

\`\`\`jsx
const navigation = [
  {
    label: 'Home',
    href: '/',
    active: true
  },
  {
    label: 'Dashboard',
    onClick: () => navigate('/dashboard'),
    active: false
  }
];
\`\`\`

## Responsive Behavior

- **Desktop**: Shows full navigation horizontally
- **Mobile**: Hides navigation, shows mobile menu icon
- **Actions**: Automatically adjusts spacing and layout
- **Logo/Title**: Maintains proper spacing on all screen sizes

## Accessibility Features

- Proper semantic HTML structure with nav elements
- ARIA labels for mobile menu and actions
- Focus management with visible indicators
- Keyboard navigation support
- Screen reader friendly navigation structure
- Color contrast compliance in all variants
      `
    },
    {
      name: 'Tabs',
      displayName: 'Tabs',
      description: 'Material UI Tabs transformed with gradient indicators, ghost effects, enhanced animations, and comprehensive navigation features',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Tabs',
      component: () => import('../components/ui/Tabs'),
      muiComponent: '@mui/material/Tabs',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Default',
          props: {
            variant: 'default',
            defaultValue: 'tab1',
            tabItems: [
              { label: 'Dashboard', value: 'tab1' },
              { label: 'Analytics', value: 'tab2' },
              { label: 'Reports', value: 'tab3' },
              { label: 'Settings', value: 'tab4' }
            ]
          },
          code: '<Tabs variant="default" tabItems={tabItems} defaultValue="tab1" />'
        },
        {
          name: 'Outlined',
          props: {
            variant: 'outlined',
            defaultValue: 'products',
            tabItems: [
              { label: 'Products', value: 'products' },
              { label: 'Categories', value: 'categories' },
              { label: 'Inventory', value: 'inventory' },
              { label: 'Orders', value: 'orders' }
            ]
          },
          code: '<Tabs variant="outlined" tabItems={tabItems} defaultValue="products" />'
        },
        {
          name: 'Gradient',
          props: {
            variant: 'gradient',
            defaultValue: 'premium',
            tabItems: [
              { label: 'Premium', value: 'premium' },
              { label: 'Features', value: 'features' },
              { label: 'Pricing', value: 'pricing' },
              { label: 'Enterprise', value: 'enterprise' }
            ]
          },
          code: '<Tabs variant="gradient" tabItems={tabItems} defaultValue="premium" />'
        },
        {
          name: 'Ghost',
          props: {
            variant: 'ghost',
            defaultValue: 'design',
            tabItems: [
              { label: 'Design', value: 'design' },
              { label: 'Components', value: 'components' },
              { label: 'Patterns', value: 'patterns' },
              { label: 'Tokens', value: 'tokens' }
            ]
          },
          code: '<Tabs variant="ghost" tabItems={tabItems} defaultValue="design" />'
        },
        {
          name: 'Minimal',
          props: {
            variant: 'minimal',
            defaultValue: 'home',
            tabItems: [
              { label: 'Home', value: 'home' },
              { label: 'About', value: 'about' },
              { label: 'Portfolio', value: 'portfolio' },
              { label: 'Contact', value: 'contact' }
            ]
          },
          code: '<Tabs variant="minimal" tabItems={tabItems} defaultValue="home" />'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            defaultValue: 'tab1',
            tabItems: [
              { label: 'Tab 1', value: 'tab1' },
              { label: 'Tab 2', value: 'tab2' },
              { label: 'Tab 3', value: 'tab3' }
            ]
          },
          code: '<Tabs size="small" tabItems={tabItems} />'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            defaultValue: 'tab1',
            tabItems: [
              { label: 'Tab 1', value: 'tab1' },
              { label: 'Tab 2', value: 'tab2' },
              { label: 'Tab 3', value: 'tab3' }
            ]
          },
          code: '<Tabs size="medium" tabItems={tabItems} />'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            defaultValue: 'tab1',
            tabItems: [
              { label: 'Tab 1', value: 'tab1' },
              { label: 'Tab 2', value: 'tab2' },
              { label: 'Tab 3', value: 'tab3' }
            ]
          },
          code: '<Tabs size="large" tabItems={tabItems} />'
        }
      ],

      // State examples
      states: [
        {
          name: 'With Icons',
          props: {
            defaultValue: 'dashboard',
            tabItems: [
              { label: 'Dashboard', value: 'dashboard', icon: '📊' },
              { label: 'Users', value: 'users', icon: '👥' },
              { label: 'Settings', value: 'settings', icon: '⚙️' }
            ]
          },
          code: '<Tabs tabItems={[{label: "Dashboard", value: "dash", icon: <DashIcon />}]} />'
        },
        {
          name: 'With Disabled',
          props: {
            defaultValue: 'available',
            tabItems: [
              { label: 'Available', value: 'available' },
              { label: 'Pending', value: 'pending' },
              { label: 'Locked', value: 'locked', disabled: true },
              { label: 'Archive', value: 'archive' }
            ]
          },
          code: '<Tabs tabItems={[{label: "Tab", value: "tab", disabled: true}]} />'
        },
        {
          name: 'Scrollable',
          props: {
            defaultValue: 'tab1',
            variant: 'scrollable',
            scrollButtons: 'auto',
            tabItems: [
              { label: 'Overview', value: 'tab1' },
              { label: 'Analytics', value: 'tab2' },
              { label: 'Performance', value: 'tab3' },
              { label: 'Security', value: 'tab4' },
              { label: 'Integrations', value: 'tab5' },
              { label: 'Monitoring', value: 'tab6' },
              { label: 'Notifications', value: 'tab7' }
            ]
          },
          code: '<Tabs variant="scrollable" scrollButtons="auto" tabItems={manyTabs} />'
        },
        {
          name: 'Vertical',
          props: {
            orientation: 'vertical',
            defaultValue: 'profile',
            tabItems: [
              { label: 'Profile', value: 'profile' },
              { label: 'Account', value: 'account' },
              { label: 'Security', value: 'security' },
              { label: 'Notifications', value: 'notifications' }
            ]
          },
          code: '<Tabs orientation="vertical" tabItems={tabItems} />'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['default', 'outlined', 'gradient', 'ghost', 'minimal'],
          default: 'default',
          description: 'Visual style variant of the tabs'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting height, padding, and font size'
        },
        tabItems: {
          type: 'array',
          description: 'Array of tab objects with label, value, and optional icon/disabled properties'
        },
        defaultValue: {
          type: 'string | number',
          description: 'Default selected tab value for uncontrolled component'
        },
        value: {
          type: 'string | number',
          description: 'Current selected tab value for controlled component'
        },
        onChange: {
          type: 'function',
          description: 'Callback fired when the tab selection changes'
        },
        onTabChange: {
          type: 'function',
          description: 'Simplified callback fired when tab changes (value only)'
        },
        orientation: {
          type: 'enum',
          options: ['horizontal', 'vertical'],
          default: 'horizontal',
          description: 'Tab orientation'
        },
        scrollButtons: {
          type: 'enum',
          options: ['auto', 'desktop', 'off'],
          description: 'Scroll button behavior for overflow tabs'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-medium', 'font-weight-semibold',
        'font-size-sm', 'font-size-base', 'font-size-lg',
        'radius-md', 'radius-lg', 'radius-full',
        'spacing-1', 'spacing-2', 'spacing-3', 'spacing-4', 'spacing-6',
        'duration-fast',
        'ease-out',
        'color-gray-50', 'color-gray-100',
        'color-bg-elevated',
        'color-border-default',
        'color-text-primary', 'color-text-secondary', 'color-text-disabled',
        'color-primary-50', 'color-primary-100', 'color-primary-200', 'color-primary-300', 'color-primary-500', 'color-primary-600', 'color-primary-700',
        'color-white'
      ],

      // Documentation
      documentation: `
# Tabs Component

The Tabs component has been heavily transformed from Material UI with enhanced visual effects, animations, and navigation features.

## Major Transformations Applied

- **Gradient Indicators**: Custom gradient variant with animated indicators using our primary purple scheme (300-700)
- **Ghost Morphism**: Modern ghost effect with backdrop blur and full-height indicators
- **Enhanced Animations**: Hover lift effects, smooth transitions, and scale animations
- **Improved Typography**: Figtree font throughout with proper weight variations
- **Custom Variants**: Outlined, minimal, and ghost variants beyond default styling
- **Enhanced Focus States**: Custom focus rings and shadow effects
- **Design Token Integration**: All styling uses CSS custom properties

## New Features Beyond MUI

1. **Gradient Variant**: Beautiful gradient background indicators with enhanced shadows
2. **Ghost Effect**: Modern ghostmorphism with backdrop filters and full-height selection
3. **Outlined Style**: Card-like tabs with borders and elevated selection states
4. **Minimal Design**: Clean, simple tabs without indicators
5. **Enhanced Animations**: Hover lift effects and smooth state transitions
6. **Icon Support**: Easy integration of icons with labels
7. **Flexible API**: Both controlled and uncontrolled modes with simplified callbacks

## Usage Examples

### Basic Tabs
\`\`\`jsx
import Tabs from '@/components/ui/Tabs';

const tabItems = [
  { label: 'Dashboard', value: 'dashboard' },
  { label: 'Analytics', value: 'analytics' },
  { label: 'Reports', value: 'reports' }
];

<Tabs
  tabItems={tabItems}
  defaultValue="dashboard"
  onTabChange={handleTabChange}
/>
\`\`\`

### Gradient Tabs
\`\`\`jsx
<Tabs
  variant="gradient"
  tabItems={tabItems}
  defaultValue="features"
  onTabChange={handleTabChange}
/>
\`\`\`

### Tabs with Icons
\`\`\`jsx
const tabsWithIcons = [
  { label: 'Dashboard', value: 'dash', icon: <DashboardIcon /> },
  { label: 'Users', value: 'users', icon: <UsersIcon /> },
  { label: 'Settings', value: 'settings', icon: <SettingsIcon /> }
];

<Tabs
  tabItems={tabsWithIcons}
  defaultValue="dash"
/>
\`\`\`

### Ghost Effect Tabs
\`\`\`jsx
<Tabs
  variant="ghost"
  tabItems={tabItems}
  defaultValue="design"
/>
\`\`\`

### Outlined Tabs
\`\`\`jsx
<Tabs
  variant="outlined"
  tabItems={tabItems}
  defaultValue="products"
/>
\`\`\`

### Vertical Tabs
\`\`\`jsx
<Tabs
  orientation="vertical"
  tabItems={tabItems}
  defaultValue="profile"
/>
\`\`\`

### Scrollable Tabs
\`\`\`jsx
<Tabs
  variant="scrollable"
  scrollButtons="auto"
  tabItems={manyTabItems}
  defaultValue="tab1"
/>
\`\`\`

### Controlled Tabs
\`\`\`jsx
const [selectedTab, setSelectedTab] = useState('dashboard');

<Tabs
  value={selectedTab}
  onChange={(event, value) => setSelectedTab(value)}
  tabItems={tabItems}
/>
\`\`\`

### With Tab Panels
\`\`\`jsx
import Tabs, { TabPanel } from '@/components/ui/Tabs';

const [currentTab, setCurrentTab] = useState('tab1');

<div>
  <Tabs
    tabItems={tabItems}
    value={currentTab}
    onTabChange={setCurrentTab}
  />

  <TabPanel value="tab1" currentValue={currentTab}>
    <h2>Dashboard Content</h2>
    <p>Dashboard information goes here.</p>
  </TabPanel>

  <TabPanel value="tab2" currentValue={currentTab}>
    <h2>Analytics Content</h2>
    <p>Analytics charts and data go here.</p>
  </TabPanel>
</div>
\`\`\`

## Tab Items Structure

The tabItems prop accepts an array of objects:

\`\`\`jsx
const tabItems = [
  {
    label: 'Dashboard',
    value: 'dashboard',
    icon: <DashboardIcon />, // optional
    disabled: false // optional
  },
  {
    label: 'Settings',
    value: 'settings',
    disabled: true // disabled tab
  }
];
\`\`\`

## Accessibility Features

- Proper ARIA labels and roles for tab navigation
- Keyboard navigation support (arrow keys, home, end)
- Focus management with visible indicators
- Screen reader friendly tab announcements
- Proper tab panel associations
- Disabled state properly announced
      `
    },
    {
      name: 'Breadcrumbs',
      displayName: 'Breadcrumbs',
      description: 'Material UI Breadcrumbs transformed with enhanced styling, hover effects, and comprehensive navigation features',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Breadcrumbs',
      component: () => import('../components/ui/Breadcrumbs'),
      muiComponent: '@mui/material/Breadcrumbs',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Contained',
          props: {
            variant: 'contained',
            showDemo: true
          },
          code: '<Breadcrumbs variant="contained" items={breadcrumbItems} />'
        },
        {
          name: 'Outlined',
          props: {
            variant: 'outlined',
            showDemo: true
          },
          code: '<Breadcrumbs variant="outlined" items={breadcrumbItems} />'
        },
        {
          name: 'Minimal',
          props: {
            variant: 'minimal',
            showDemo: true
          },
          code: '<Breadcrumbs variant="minimal" items={breadcrumbItems} />'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            showDemo: true
          },
          code: '<Breadcrumbs size="small" items={breadcrumbItems} />'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            showDemo: true
          },
          code: '<Breadcrumbs size="medium" items={breadcrumbItems} />'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            showDemo: true
          },
          code: '<Breadcrumbs size="large" items={breadcrumbItems} />'
        }
      ],

      // State examples
      states: [
        {
          name: 'With Home Icon',
          props: {
            showHomeIcon: true,
            showDemo: true
          },
          code: '<Breadcrumbs showHomeIcon items={breadcrumbItems} />'
        },
        {
          name: 'Custom Separator',
          props: {
            separator: '→',
            showDemo: true
          },
          code: '<Breadcrumbs separator="→" items={breadcrumbItems} />'
        },
        {
          name: 'Max Items',
          props: {
            maxItems: 3,
            showDemo: true
          },
          code: '<Breadcrumbs maxItems={3} items={breadcrumbItems} />'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['contained', 'outlined', 'minimal'],
          default: 'contained',
          description: 'Visual style variant of the breadcrumbs'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting padding, font size, and spacing'
        },
        items: {
          type: 'BreadcrumbItem[]',
          description: 'Array of breadcrumb items with label, href, icon, and disabled properties'
        },
        showHomeIcon: {
          type: 'boolean',
          default: false,
          description: 'Whether to show home icon on first breadcrumb'
        },
        maxItems: {
          type: 'number',
          default: 8,
          description: 'Maximum number of breadcrumbs to display before collapsing'
        },
        separator: {
          type: 'ReactNode',
          description: 'Custom separator element between breadcrumbs'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-medium', 'font-weight-semibold',
        'font-size-xs', 'font-size-sm', 'font-size-base',
        'spacing-0-5', 'spacing-1', 'spacing-1-5', 'spacing-2', 'spacing-3',
        'radius-sm', 'radius-md',
        'duration-fast',
        'ease-out',
        'color-gray-50', 'color-gray-200', 'color-gray-300',
        'color-primary-50', 'color-primary-300', 'color-primary-500', 'color-primary-600',
        'color-text-primary', 'color-text-secondary',
        'color-border-default'
      ],

      // Documentation
      documentation: `
# Breadcrumbs Component

The Breadcrumbs component provides hierarchical navigation with enhanced styling, hover effects, and comprehensive customization options.

## Major Transformations Applied

- **Enhanced Visual Design**: Custom breadcrumb styling with design tokens
- **Variant Options**: Contained, outlined, and minimal styling variants
- **Interactive Elements**: Hover effects with lift animations
- **Icon Support**: Home icons and custom separators
- **Responsive Design**: Automatic truncation for long navigation paths
- **Improved Typography**: Figtree font with proper weight variations
- **Design Token Integration**: All styling uses CSS custom properties

## Usage Examples

### Basic Breadcrumbs
\`\`\`jsx
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Smartphones' } // Current page
];

<Breadcrumbs items={breadcrumbItems} />
\`\`\`

### With Home Icon
\`\`\`jsx
<Breadcrumbs
  items={breadcrumbItems}
  showHomeIcon
  variant="outlined"
/>
\`\`\`

### Custom Separator
\`\`\`jsx
<Breadcrumbs
  items={breadcrumbItems}
  separator="→"
  variant="minimal"
/>
\`\`\`

### E-commerce Navigation
\`\`\`jsx
const productBreadcrumbs = [
  { label: 'Home', href: '/', icon: <HomeIcon /> },
  { label: 'Categories', href: '/categories' },
  { label: 'Electronics', href: '/categories/electronics' },
  { label: 'Smartphones', href: '/categories/electronics/smartphones' },
  { label: 'iPhone 15 Pro', href: '/products/iphone-15-pro' },
  { label: 'Space Black' } // Current variant
];

<Breadcrumbs
  variant="contained"
  items={productBreadcrumbs}
  maxItems={4}
/>
\`\`\`

## Accessibility Features

- Proper ARIA attributes for navigation landmarks
- Screen reader friendly breadcrumb announcements
- Keyboard navigation support
- Focus management with visible indicators
- High contrast support for all variants
- Semantic HTML structure with proper links
      `
    },
    {
      name: 'Pagination',
      displayName: 'Pagination',
      description: 'Material UI Pagination transformed with enhanced styling, page size controls, and comprehensive navigation features',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Pagination',
      component: () => import('../components/ui/Pagination'),
      muiComponent: '@mui/material/Pagination',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Contained',
          props: {
            variant: 'contained',
            count: 10,
            showDemo: true
          },
          code: '<Pagination variant="contained" count={10} />'
        },
        {
          name: 'Outlined',
          props: {
            variant: 'outlined',
            count: 10,
            showDemo: true
          },
          code: '<Pagination variant="outlined" count={10} />'
        },
        {
          name: 'Minimal',
          props: {
            variant: 'minimal',
            count: 10,
            showDemo: true
          },
          code: '<Pagination variant="minimal" count={10} />'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            count: 5,
            showDemo: true
          },
          code: '<Pagination size="small" count={5} />'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            count: 5,
            showDemo: true
          },
          code: '<Pagination size="medium" count={5} />'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            count: 5,
            showDemo: true
          },
          code: '<Pagination size="large" count={5} />'
        }
      ],

      // State examples
      states: [
        {
          name: 'With Page Info',
          props: {
            count: 20,
            showTotal: true,
            total: 200,
            pageSize: 10,
            showDemo: true
          },
          code: '<Pagination count={20} showTotal total={200} pageSize={10} />'
        },
        {
          name: 'With Size Changer',
          props: {
            count: 15,
            showSizeChanger: true,
            pageSizeOptions: [10, 20, 50],
            showDemo: true
          },
          code: '<Pagination count={15} showSizeChanger pageSizeOptions={[10, 20, 50]} />'
        },
        {
          name: 'First/Last Buttons',
          props: {
            count: 25,
            showFirstLast: true,
            showDemo: true
          },
          code: '<Pagination count={25} showFirstLast />'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['contained', 'outlined', 'minimal'],
          default: 'contained',
          description: 'Visual style variant of the pagination'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting button dimensions and spacing'
        },
        count: {
          type: 'number',
          description: 'Total number of pages'
        },
        page: {
          type: 'number',
          default: 1,
          description: 'Current page number'
        },
        showFirstLast: {
          type: 'boolean',
          default: false,
          description: 'Whether to show first and last page buttons'
        },
        showSizeChanger: {
          type: 'boolean',
          default: false,
          description: 'Whether to show page size selector'
        },
        showTotal: {
          type: 'boolean',
          default: false,
          description: 'Whether to show total items information'
        },
        total: {
          type: 'number',
          description: 'Total number of items'
        },
        pageSize: {
          type: 'number',
          default: 10,
          description: 'Number of items per page'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-medium',
        'font-size-xs', 'font-size-sm', 'font-size-base',
        'spacing-0-5', 'spacing-1', 'spacing-1-5', 'spacing-2', 'spacing-3',
        'radius-md',
        'duration-fast',
        'ease-out',
        'shadow-sm',
        'color-white', 'color-gray-100', 'color-gray-200',
        'color-primary-50', 'color-primary-300', 'color-primary-400', 'color-primary-500', 'color-primary-600',
        'color-text-primary', 'color-text-disabled', 'color-text-secondary'
      ],

      // Documentation
      documentation: `
# Pagination Component

The Pagination component provides page navigation with enhanced styling, page size controls, and comprehensive customization options.

## Major Transformations Applied

- **Enhanced Visual Design**: Custom pagination styling with design tokens
- **Variant Options**: Contained, outlined, and minimal styling variants
- **Interactive Elements**: Hover effects with lift animations and shadows
- **Page Size Control**: Built-in page size selector with dropdown
- **Information Display**: Total items and current range display
- **Responsive Design**: Flexible layout that adapts to different screen sizes
- **Design Token Integration**: All styling uses CSS custom properties

## Usage Examples

### Basic Pagination
\`\`\`jsx
import Pagination from '@/components/ui/Pagination';

<Pagination
  count={10}
  page={currentPage}
  onChange={handlePageChange}
/>
\`\`\`

### With Page Size Control
\`\`\`jsx
<Pagination
  count={totalPages}
  page={currentPage}
  onChange={handlePageChange}
  showSizeChanger
  pageSize={pageSize}
  pageSizeOptions={[10, 20, 50, 100]}
  onPageSizeChange={handlePageSizeChange}
/>
\`\`\`

### Table Pagination
\`\`\`jsx
<Pagination
  variant="outlined"
  count={Math.ceil(totalItems / pageSize)}
  page={currentPage}
  onChange={handlePageChange}
  showTotal
  total={totalItems}
  pageSize={pageSize}
  showSizeChanger
  showFirstLast
/>
\`\`\`

### Search Results Pagination
\`\`\`jsx
function SearchResults({ results, totalResults }) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const totalPages = Math.ceil(totalResults / pageSize);

  return (
    <div>
      <SearchResultsList results={results} />

      <Pagination
        variant="minimal"
        count={totalPages}
        page={page}
        onChange={(_, newPage) => setPage(newPage)}
        showTotal
        total={totalResults}
        pageSize={pageSize}
        showSizeChanger
        pageSizeOptions={[10, 20, 50]}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
}
\`\`\`

## Accessibility Features

- Proper ARIA attributes for navigation landmarks
- Screen reader friendly page announcements
- Keyboard navigation support (tab, enter, space)
- Focus management with visible indicators
- High contrast support for all variants
- Semantic HTML structure with proper buttons
      `
    }
  ],
  [COMPONENT_CATEGORIES.DATA_DISPLAY]: [
    {
      name: 'Table',
      displayName: 'Table',
      description: 'Material UI Table transformed with gradient headers, ghost effects, enhanced animations, and comprehensive data management features',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Table',
      component: () => import('../components/ui/Table'),
      muiComponent: '@mui/material/Table',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Contained',
          props: {
            variant: 'contained',
            columns: [],
            rows: [],
            showDemo: false
          },
          code: '<Table variant="contained" columns={columns} rows={rows} />'
        },
        {
          name: 'Outlined',
          props: {
            variant: 'outlined',
            columns: [],
            rows: [],
            showDemo: false
          },
          code: '<Table variant="outlined" columns={columns} rows={rows} />'
        },
        {
          name: 'Minimal',
          props: {
            variant: 'minimal',
            columns: [],
            rows: [],
            showDemo: false
          },
          code: '<Table variant="minimal" columns={columns} rows={rows} />'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            columns: [],
            rows: [],
            showDemo: false
          },
          code: '<Table size="small" columns={columns} rows={rows} />'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            columns: [],
            rows: [],
            showDemo: false
          },
          code: '<Table size="medium" columns={columns} rows={rows} />'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            columns: [],
            rows: [],
            showDemo: false
          },
          code: '<Table size="large" columns={columns} rows={rows} />'
        }
      ],

      // State examples
      states: [
        {
          name: 'Selectable',
          props: {
            selectable: true,
            columns: [],
            rows: [],
            showDemo: false
          },
          code: '<Table selectable columns={columns} rows={rows} onSelectionChange={handleSelection} />'
        },
        {
          name: 'With Pagination',
          props: {
            pagination: true,
            rowsPerPageOptions: [5, 10, 25],
            columns: [],
            rows: [],
            showDemo: false
          },
          code: '<Table pagination rowsPerPageOptions={[5, 10, 25]} columns={columns} rows={rows} />'
        },
        {
          name: 'Sortable',
          props: {
            sortable: true,
            columns: [],
            rows: [],
            showDemo: false
          },
          code: '<Table sortable columns={columns} rows={rows} />'
        },
        {
          name: 'Interactive',
          props: {
            selectable: true,
            sortable: true,
            pagination: true,
            columns: [],
            rows: [],
            showDemo: false
          },
          code: '<Table selectable sortable pagination columns={columns} rows={rows} />'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['contained', 'outlined', 'minimal'],
          default: 'contained',
          description: 'Visual style variant of the table container'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting padding, font size, and height'
        },
        columns: {
          type: 'TableColumn[]',
          description: 'Array of column definitions with id, label, sortable, align, and format properties'
        },
        rows: {
          type: 'TableRow[]',
          description: 'Array of data rows with id and column data'
        },
        selectable: {
          type: 'boolean',
          default: false,
          description: 'Enables row selection with checkboxes'
        },
        sortable: {
          type: 'boolean',
          default: true,
          description: 'Enables column sorting functionality'
        },
        pagination: {
          type: 'boolean',
          default: true,
          description: 'Enables pagination controls'
        },
        rowsPerPageOptions: {
          type: 'number[]',
          default: '[5, 10, 25, 50]',
          description: 'Options for rows per page selection'
        },
        onRowClick: {
          type: 'function',
          description: 'Callback fired when a row is clicked'
        },
        onSelectionChange: {
          type: 'function',
          description: 'Callback fired when selection changes'
        },
        actions: {
          type: 'function',
          description: 'Function that returns action buttons for each row'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-normal', 'font-weight-medium', 'font-weight-semibold',
        'font-size-xs', 'font-size-sm', 'font-size-base', 'font-size-lg',
        'radius-lg', 'radius-md', 'radius-full',
        'spacing-2', 'spacing-3', 'spacing-4', 'spacing-5',
        'duration-fast',
        'ease-out',
        'shadow-sm', 'shadow-md', 'shadow-lg',
        'color-white',
        'color-border-default', 'color-border-subtle',
        'color-text-primary', 'color-text-secondary',
        'color-gray-50', 'color-gray-100',
        'color-primary-50', 'color-primary-100', 'color-primary-600', 'color-primary-700', 'color-primary-800'
      ],

      // Documentation
      documentation: `
# Table Component

The Table component has been heavily transformed from Material UI with enhanced visual effects, interactive features, and comprehensive data management capabilities.

## Major Transformations Applied

- **Enhanced Styling**: Multiple visual variants with consistent design system integration
- **Enhanced Interactions**: Hover effects, row selection, and smooth animations
- **Sorting & Pagination**: Advanced data management with visual feedback
- **Status Indicators**: Built-in status chips with semantic colors and icons
- **Responsive Design**: Proper scaling across different screen sizes
- **Design Token Integration**: All styling uses CSS custom properties

## New Features Beyond MUI

1. **Enhanced Variants**: Multiple styling options for different design needs
3. **Enhanced Row Interactions**: Hover effects, selection states, and click handlers
4. **Status Chips**: Built-in status rendering with semantic colors and icons
5. **Custom Actions**: Flexible action button system for each row
6. **Size Variants**: Small, medium, large with proper cell padding and font scaling
7. **Advanced Sorting**: Visual sort indicators with smooth transitions

## Usage Examples

### Basic Table
\`\`\`jsx
import Table from '@/components/ui/Table';

const columns = [
  { id: 'name', label: 'Name', sortable: true },
  { id: 'email', label: 'Email', sortable: true },
  { id: 'role', label: 'Role' },
];

const rows = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
];

<Table
  columns={columns}
  rows={rows}
  variant="contained"
/>
\`\`\`

### Selectable Table with Pagination
\`\`\`jsx
<Table
  variant="gradient"
  columns={columns}
  rows={rows}
  selectable
  pagination
  rowsPerPageOptions={[10, 25, 50]}
  onSelectionChange={(selectedIds) => {
    console.log('Selected rows:', selectedIds);
  }}
  onRowClick={(row) => {
    console.log('Clicked row:', row);
  }}
/>
\`\`\`

### With Custom Actions
\`\`\`jsx
const columns = [
  { id: 'name', label: 'Name', sortable: true },
  { id: 'status', label: 'Status', format: (value) => <StatusChip status={value} /> },
  { id: 'actions', label: 'Actions', align: 'center' },
];

<Table
  variant="ghost"
  columns={columns}
  rows={rows}
  actions={(row) => (
    <>
      <IconButton onClick={() => editRow(row)}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => deleteRow(row)}>
        <DeleteIcon />
      </IconButton>
    </>
  )}
/>
\`\`\`

### Custom Column Formatting
\`\`\`jsx
const columns = [
  {
    id: 'name',
    label: 'Name',
    sortable: true,
    format: (value) => <strong>{value}</strong>
  },
  {
    id: 'date',
    label: 'Created',
    format: (value) => new Date(value).toLocaleDateString()
  },
  {
    id: 'amount',
    label: 'Amount',
    align: 'right',
    format: (value) => \`$\${value.toFixed(2)}\`
  },
];
\`\`\`


## Column Configuration

### TableColumn Interface
\`\`\`typescript
interface TableColumn {
  id: string;           // Unique identifier matching row data key
  label: string;        // Display name for the column header
  sortable?: boolean;   // Enable sorting for this column
  align?: 'left' | 'center' | 'right';  // Text alignment
  minWidth?: number;    // Minimum column width in pixels
  format?: (value: any) => string | React.ReactNode;  // Custom formatter
}
\`\`\`

### TableRow Interface
\`\`\`typescript
interface TableRow {
  id: string | number;  // Unique identifier for the row
  [key: string]: any;   // Dynamic data matching column ids
}
\`\`\`

## Built-in Status Chip

The Table component includes a built-in StatusChip component that automatically renders status values with appropriate colors and icons:

- **Active**: Green with check circle icon
- **Inactive**: Gray with cancel icon
- **Pending**: Orange with warning icon
- **Processing**: Blue with info icon

## Accessibility Features

- Proper table semantics with thead, tbody, and proper headers
- Keyboard navigation support for interactive elements
- Screen reader friendly with proper ARIA labels
- Focus management with visible indicators
- Color contrast compliance in all variants
- Checkbox selection properly announced
- Sort state communicated to assistive technologies

## Performance Optimizations

- Efficient sorting and pagination implementation
- Memoized sorted results to prevent unnecessary re-calculations
- CSS-in-JS styling with theme integration
- Proper React keys for optimal rendering
- Lazy loading support for large datasets
      `
    },
    {
      name: 'Card',
      displayName: 'Card',
      description: 'Material UI Card transformed with interactive animations, gradient variants, ghost effects, and comprehensive semantic styling',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Card',
      component: () => import('../components/ui/Card'),
      muiComponent: '@mui/material/Card',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Default',
          props: { variant: 'default', mockContent: 'default' },
          code: '<Card variant="default"><CardHeader title="Title" /><CardContent>Content</CardContent></Card>'
        },
        {
          name: 'Outlined',
          props: { variant: 'outlined', mockContent: 'outlined' },
          code: '<Card variant="outlined"><CardHeader title="Title" /><CardContent>Content</CardContent></Card>'
        },
        {
          name: 'Elevated',
          props: { variant: 'elevated', mockContent: 'elevated' },
          code: '<Card variant="elevated"><CardHeader title="Title" /><CardContent>Content</CardContent></Card>'
        },
        {
          name: 'Gradient',
          props: { variant: 'gradient', mockContent: 'gradient' },
          code: '<Card variant="gradient"><CardHeader title="Title" /><CardContent>Content</CardContent></Card>'
        },
        {
          name: 'Ghost',
          props: { variant: 'ghost', mockContent: 'ghost' },
          code: '<Card variant="ghost"><CardHeader title="Title" /><CardContent>Content</CardContent></Card>'
        },
        {
          name: 'Success',
          props: { variant: 'success', mockContent: 'success' },
          code: '<Card variant="success"><CardHeader title="Title" /><CardContent>Content</CardContent></Card>'
        },
        {
          name: 'Warning',
          props: { variant: 'warning', mockContent: 'warning' },
          code: '<Card variant="warning"><CardHeader title="Title" /><CardContent>Content</CardContent></Card>'
        },
        {
          name: 'Error',
          props: { variant: 'error', mockContent: 'error' },
          code: '<Card variant="error"><CardHeader title="Title" /><CardContent>Content</CardContent></Card>'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: { size: 'small', mockContent: 'small' },
          code: '<Card size="small"><CardHeader title="Title" /><CardContent>Content</CardContent></Card>'
        },
        {
          name: 'Medium',
          props: { size: 'medium', mockContent: 'medium' },
          code: '<Card size="medium"><CardHeader title="Title" /><CardContent>Content</CardContent></Card>'
        },
        {
          name: 'Large',
          props: { size: 'large', mockContent: 'large' },
          code: '<Card size="large"><CardHeader title="Title" /><CardContent>Content</CardContent></Card>'
        }
      ],

      // State examples
      states: [
        {
          name: 'Interactive',
          props: { interactive: true, mockContent: 'interactive' },
          code: '<Card interactive onClick={handleClick}><CardHeader title="Title" /><CardContent>Content</CardContent></Card>'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['default', 'outlined', 'elevated', 'gradient', 'ghost', 'success', 'warning', 'error'],
          default: 'default',
          description: 'Visual style variant of the card'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting minimum height of the card'
        },
        interactive: {
          type: 'boolean',
          default: false,
          description: 'Makes card clickable with hover animations'
        },
        children: {
          type: 'ReactNode',
          description: 'Card content'
        },
        onClick: {
          type: 'function',
          description: 'Click handler for interactive cards'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'radius-card',
        'duration-fast',
        'ease-out',
        'shadow-card', 'shadow-lg', 'shadow-xl', 'shadow-2xl',
        'color-bg-elevated',
        'color-border-subtle', 'color-border-default',
        'color-primary-25', 'color-primary-50', 'color-primary-200', 'color-primary-300', 'color-primary-500', 'color-primary-700', 'color-primary-800',
        'color-success-50', 'color-success-100', 'color-success-200', 'color-success-300',
        'color-warning-50', 'color-warning-100', 'color-warning-200', 'color-warning-300',
        'color-error-50', 'color-error-100', 'color-error-200', 'color-error-300',
        'color-white'
      ],

      // Documentation
      documentation: `
# Card Component

The Card component has been heavily transformed from Material UI with significant visual enhancements and interactive features.

## Major Transformations Applied

- **Interactive Animations**: Hover lift effects and click animations for interactive cards
- **Gradient Variant**: Beautiful primary purple gradient using our new color scheme (300-700)
- **Ghost Morphism**: Modern ghost effect with backdrop blur
- **Semantic Variants**: Success, warning, and error states with matching colors
- **Enhanced Shadows**: Contextual shadows that respond to interactions
- **Ripple Effects**: Custom click animations for interactive cards
- **Design Token Integration**: All styling uses CSS custom properties

## New Features Beyond MUI

1. **Interactive Mode**: Cards can be made clickable with hover animations
2. **Gradient Backgrounds**: Stunning gradient using primary-300 to primary-700
3. **Ghost Effect**: Modern ghostmorphism with backdrop filters
4. **Semantic States**: Success, warning, error variants
5. **Enhanced Animations**: Smooth hover and click effects
6. **Size Variants**: Small, medium, large options

## Usage Examples

### Basic Card
\`\`\`jsx
import Card, { CardContent, CardHeader } from '@/components/ui/Card';

<Card variant="default">
  <CardHeader title="Card Title" subheader="Optional subtitle" />
  <CardContent>
    Your content here
  </CardContent>
</Card>
\`\`\`

### Interactive Card
\`\`\`jsx
<Card variant="gradient" interactive onClick={handleClick}>
  <CardContent>
    This card is clickable!
  </CardContent>
</Card>
\`\`\`

### Ghost Effect
\`\`\`jsx
<Card variant="ghost" size="large">
  <CardContent>
    Modern ghost morphism effect
  </CardContent>
</Card>
\`\`\`
      `
    },
    {
      name: 'Badge',
      displayName: 'Badge',
      description: 'Material UI Badge transformed with enhanced visual variants, semantic colors, and smooth animations',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Badge',
      component: () => import('../components/ui/Badge'),
      muiComponent: '@mui/material/Badge',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Contained',
          props: {
            variant: 'contained',
            badgeContent: 5,
            color: 'primary',
            showDemo: true
          },
          code: '<Badge variant="contained" badgeContent={5} color="primary"><IconButton><MailIcon /></IconButton></Badge>'
        },
        {
          name: 'Outlined',
          props: {
            variant: 'outlined',
            badgeContent: 12,
            color: 'secondary',
            showDemo: true
          },
          code: '<Badge variant="outlined" badgeContent={12} color="secondary"><IconButton><NotificationsIcon /></IconButton></Badge>'
        },
        {
          name: 'Minimal',
          props: {
            variant: 'minimal',
            badgeContent: 3,
            color: 'success',
            showDemo: true
          },
          code: '<Badge variant="minimal" badgeContent={3} color="success"><IconButton><ShoppingCartIcon /></IconButton></Badge>'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            badgeContent: 2,
            color: 'error',
            showDemo: true
          },
          code: '<Badge size="small" badgeContent={2} color="error"><IconButton><MailIcon /></IconButton></Badge>'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            badgeContent: 99,
            color: 'warning',
            showDemo: true
          },
          code: '<Badge size="medium" badgeContent={99} color="warning"><IconButton><NotificationsIcon /></IconButton></Badge>'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            badgeContent: 1000,
            color: 'primary',
            showDemo: true
          },
          code: '<Badge size="large" badgeContent={1000} color="primary"><IconButton><ShoppingCartIcon /></IconButton></Badge>'
        }
      ],

      // State examples
      states: [
        {
          name: 'Notification Badge',
          props: {
            badgeContent: 8,
            color: 'error',
            showDemo: true
          },
          code: '<Badge badgeContent={8} color="error"><IconButton><MailIcon /></IconButton></Badge>'
        },
        {
          name: 'Dot Badge',
          props: {
            variant: 'dot',
            color: 'success',
            showDemo: true
          },
          code: '<Badge variant="dot" color="success"><IconButton><NotificationsIcon /></IconButton></Badge>'
        },
        {
          name: 'Shopping Cart',
          props: {
            badgeContent: 3,
            color: 'primary',
            max: 99,
            showDemo: true
          },
          code: '<Badge badgeContent={3} color="primary" max={99}><IconButton><ShoppingCartIcon /></IconButton></Badge>'
        },
        {
          name: 'High Count',
          props: {
            badgeContent: 1250,
            color: 'warning',
            max: 999,
            showDemo: true
          },
          code: '<Badge badgeContent={1250} color="warning" max={999}><IconButton><NotificationsIcon /></IconButton></Badge>'
        },
        {
          name: 'Different Colors',
          props: {
            showDemo: true
          },
          code: '<Badge color="primary" badgeContent={4}><IconButton><MailIcon /></IconButton></Badge>'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['contained', 'outlined', 'minimal', 'dot'],
          default: 'contained',
          description: 'Visual style variant of the badge'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting badge dimensions and font size'
        },
        badgeContent: {
          type: 'ReactNode',
          description: 'Content rendered inside the badge (number, text, or component)'
        },
        color: {
          type: 'enum',
          options: ['primary', 'secondary', 'error', 'success', 'warning'],
          default: 'primary',
          description: 'Color scheme for the badge'
        },
        max: {
          type: 'number',
          default: 99,
          description: 'Maximum number to display. Shows "max+" when exceeded'
        },
        invisible: {
          type: 'boolean',
          default: false,
          description: 'Whether the badge is invisible'
        },
        children: {
          type: 'ReactNode',
          description: 'Element to wrap with the badge'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-medium',
        'font-size-xs', 'font-size-sm',
        'duration-fast',
        'ease-out',
        'color-white',
        'color-primary-600', 'color-secondary-600', 'color-success-600', 'color-warning-600', 'color-error-600'
      ],

      // Documentation
      documentation: `
# Badge Component

The Badge component displays status indicators or counters on UI elements with enhanced styling and smooth animations.

## Major Transformations Applied

- **Enhanced Visual Design**: Custom badge styling with design tokens
- **Variant Options**: Contained, outlined, minimal, and dot variants
- **Semantic Colors**: Primary, secondary, error, success, warning color schemes
- **Size Variations**: Small, medium, large with proper scaling
- **Improved Typography**: Figtree font with proper weight variations
- **Design Token Integration**: All styling uses CSS custom properties
- **Smooth Animations**: Transitions for all state changes

## New Features Beyond MUI

1. **Visual Variants**: Four distinct styling approaches (contained, outlined, minimal, dot)
2. **Size Options**: Small, medium, large with proper scaling
3. **Enhanced Colors**: Comprehensive semantic color system
4. **Smooth Transitions**: All state changes are smoothly animated
5. **Overflow Handling**: Smart truncation for high numbers (999+)
6. **Icon Integration**: Perfect alignment with icon buttons and components

## Usage Examples

### Basic Notification Badge
\`\`\`jsx
import Badge from '@/components/ui/Badge';
import { Mail as MailIcon } from '@mui/icons-material';

<Badge badgeContent={4} color="error">
  <IconButton>
    <MailIcon />
  </IconButton>
</Badge>
\`\`\`

### Shopping Cart Badge
\`\`\`jsx
import { ShoppingCart as CartIcon } from '@mui/icons-material';

<Badge badgeContent={cartItemCount} color="primary" max={99}>
  <IconButton onClick={openCart}>
    <CartIcon />
  </IconButton>
</Badge>
\`\`\`

### Different Variants
\`\`\`jsx
{/* Contained variant (default) */}
<Badge variant="contained" badgeContent={5} color="primary">
  <MailIcon />
</Badge>

{/* Outlined variant */}
<Badge variant="outlined" badgeContent={12} color="secondary">
  <NotificationsIcon />
</Badge>

{/* Minimal variant */}
<Badge variant="minimal" badgeContent={3} color="success">
  <ShoppingCartIcon />
</Badge>

{/* Dot variant for simple indicators */}
<Badge variant="dot" color="error">
  <Avatar src="/user-avatar.jpg" />
</Badge>
\`\`\`

### Different Colors
\`\`\`jsx
<Badge badgeContent={1} color="primary"><MailIcon /></Badge>
<Badge badgeContent={2} color="secondary"><MailIcon /></Badge>
<Badge badgeContent={3} color="success"><MailIcon /></Badge>
<Badge badgeContent={4} color="warning"><MailIcon /></Badge>
<Badge badgeContent={5} color="error"><MailIcon /></Badge>
\`\`\`

### Size Variations
\`\`\`jsx
<Badge size="small" badgeContent={2} color="error">
  <IconButton size="small"><MailIcon /></IconButton>
</Badge>

<Badge size="medium" badgeContent={99} color="warning">
  <IconButton><NotificationsIcon /></IconButton>
</Badge>

<Badge size="large" badgeContent={1000} color="primary">
  <IconButton size="large"><ShoppingCartIcon /></IconButton>
</Badge>
\`\`\`

### High Number Handling
\`\`\`jsx
{/* Shows "99+" when exceeding max */}
<Badge badgeContent={150} max={99} color="error">
  <MailIcon />
</Badge>

{/* Custom max value */}
<Badge badgeContent={1500} max={999} color="warning">
  <NotificationsIcon />
</Badge>
\`\`\`

### Notification System Example
\`\`\`jsx
function NotificationCenter() {
  return (
    <div>
      <Badge badgeContent={unreadEmails} color="error">
        <IconButton onClick={openEmail}>
          <MailIcon />
        </IconButton>
      </Badge>

      <Badge badgeContent={notifications} color="primary" max={99}>
        <IconButton onClick={openNotifications}>
          <NotificationsIcon />
        </IconButton>
      </Badge>

      <Badge variant="dot" color="success" invisible={!isOnline}>
        <Avatar src={user.avatar} />
      </Badge>

      <Badge badgeContent={cartItems} color="warning">
        <IconButton onClick={openCart}>
          <ShoppingCartIcon />
        </IconButton>
      </Badge>
    </div>
  );
}
\`\`\`

### Status Indicators
\`\`\`jsx
{/* Online/offline status */}
<Badge variant="dot" color="success">
  <Avatar src="/user-avatar.jpg" />
</Badge>

{/* Invisible badge for conditional display */}
<Badge
  variant="dot"
  color="error"
  invisible={!hasErrors}
>
  <IconButton>
    <SettingsIcon />
  </IconButton>
</Badge>
\`\`\`

## Accessibility Features

- Proper ARIA attributes for screen readers
- Badge content announced to assistive technologies
- Color meanings conveyed through more than just color
- Focus management maintained for wrapped elements
- High contrast support for all variants and colors
- Semantic meaning preserved in all states
      `
    },
    {
      name: 'Chip',
      displayName: 'Chip',
      description: 'Material UI Chip transformed with enhanced variants, semantic colors, and interactive states',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Chip',
      component: () => import('../components/ui/Chip'),
      muiComponent: '@mui/material/Chip',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Contained',
          props: {
            variant: 'contained',
            label: 'React',
            color: 'primary'
          },
          code: '<Chip variant="contained" label="React" color="primary" />'
        },
        {
          name: 'Outlined',
          props: {
            variant: 'outlined',
            label: 'TypeScript',
            color: 'secondary'
          },
          code: '<Chip variant="outlined" label="TypeScript" color="secondary" />'
        },
        {
          name: 'Minimal',
          props: {
            variant: 'minimal',
            label: 'Next.js',
            color: 'success'
          },
          code: '<Chip variant="minimal" label="Next.js" color="success" />'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            label: 'Small Tag',
            color: 'primary'
          },
          code: '<Chip size="small" label="Small Tag" color="primary" />'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            label: 'Medium Tag',
            color: 'secondary'
          },
          code: '<Chip size="medium" label="Medium Tag" color="secondary" />'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            label: 'Large Tag',
            color: 'success'
          },
          code: '<Chip size="large" label="Large Tag" color="success" />'
        }
      ],

      // State examples
      states: [
        {
          name: 'Basic Chip',
          props: {
            label: 'Frontend',
            color: 'primary'
          },
          code: '<Chip label="Frontend" color="primary" />'
        },
        {
          name: 'With Icon',
          props: {
            label: 'JavaScript',
            showDemo: true
          },
          code: '<Chip label="JavaScript" icon={<CodeIcon />} color="warning" />'
        },
        {
          name: 'Clickable',
          props: {
            label: 'Click me',
            color: 'secondary',
            onClick: () => {}
          },
          code: '<Chip label="Click me" color="secondary" onClick={handleClick} />'
        },
        {
          name: 'Deletable',
          props: {
            label: 'Remove me',
            color: 'error',
            onDelete: () => {}
          },
          code: '<Chip label="Remove me" color="error" onDelete={handleDelete} />'
        },
        {
          name: 'Clickable & Deletable',
          props: {
            label: 'Interactive',
            color: 'success',
            onClick: () => {},
            onDelete: () => {}
          },
          code: '<Chip label="Interactive" color="success" onClick={handleClick} onDelete={handleDelete} />'
        },
        {
          name: 'Different Colors',
          props: {
            showDemo: true
          },
          code: '<Chip label="Various" color="primary" />'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['contained', 'outlined', 'minimal'],
          default: 'contained',
          description: 'Visual style variant of the chip'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting chip dimensions, padding, and font size'
        },
        label: {
          type: 'string',
          description: 'Text content displayed in the chip'
        },
        color: {
          type: 'enum',
          options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'],
          default: 'default',
          description: 'Color scheme for the chip'
        },
        icon: {
          type: 'ReactElement',
          description: 'Icon element to display at the start of the chip'
        },
        avatar: {
          type: 'ReactElement',
          description: 'Avatar element to display at the start of the chip'
        },
        onClick: {
          type: 'function',
          description: 'Makes chip clickable with onClick handler'
        },
        onDelete: {
          type: 'function',
          description: 'Makes chip deletable with delete handler and shows delete icon'
        },
        disabled: {
          type: 'boolean',
          default: false,
          description: 'Disables the chip and all interactions'
        },
        clickable: {
          type: 'boolean',
          description: 'Makes chip appear clickable (inferred from onClick)'
        },
        deletable: {
          type: 'boolean',
          description: 'Makes chip appear deletable (inferred from onDelete)'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-medium',
        'font-size-xs', 'font-size-sm', 'font-size-base',
        'radius-full',
        'duration-fast',
        'ease-out',
        'shadow-md'
      ],

      // Documentation
      documentation: `
# Chip Component

The Chip component displays compact elements that represent inputs, attributes, or actions with enhanced styling and interactive states.

## Major Transformations Applied

- **Enhanced Visual Design**: Custom chip styling with design tokens
- **Variant Options**: Contained, outlined, and minimal styling variants
- **Interactive States**: Clickable, deletable, and combined interactive states
- **Semantic Colors**: Complete color system (default, primary, secondary, success, warning, error)
- **Size Variations**: Small, medium, large with proper scaling
- **Icon Integration**: Support for icons and avatars with proper alignment
- **Design Token Integration**: All styling uses CSS custom properties
- **Smooth Animations**: Transitions for all state changes and interactions

## New Features Beyond MUI

1. **Visual Variants**: Three distinct styling approaches (contained, outlined, minimal)
2. **Size Options**: Small, medium, large with proper scaling of all elements
3. **Enhanced Colors**: Comprehensive semantic color system
4. **Interactive Combinations**: Support for both clickable and deletable simultaneously
5. **Smooth Transitions**: All state changes and interactions are smoothly animated
6. **Icon Support**: Perfect alignment and sizing for icons and avatars
7. **Accessibility Enhanced**: Proper focus management and keyboard navigation

## Usage Examples

### Basic Chip
\`\`\`jsx
import Chip from '@/components/ui/Chip';

<Chip label="React" color="primary" />
\`\`\`

### Tag System
\`\`\`jsx
const skills = ['React', 'TypeScript', 'Node.js', 'GraphQL'];

{skills.map((skill) => (
  <Chip
    key={skill}
    label={skill}
    color="primary"
    variant="outlined"
  />
))}
\`\`\`

### Interactive Chips
\`\`\`jsx
{/* Clickable chip */}
<Chip
  label="Frontend"
  color="secondary"
  onClick={() => filterByCategory('frontend')}
/>

{/* Deletable chip */}
<Chip
  label="Remove me"
  color="error"
  onDelete={() => removeTag('tag-id')}
/>

{/* Both clickable and deletable */}
<Chip
  label="Interactive"
  color="success"
  onClick={handleClick}
  onDelete={handleDelete}
/>
\`\`\`

### With Icons and Avatars
\`\`\`jsx
import { Code as CodeIcon, Person as PersonIcon } from '@mui/icons-material';

{/* With icon */}
<Chip
  label="JavaScript"
  icon={<CodeIcon />}
  color="warning"
/>

{/* With avatar */}
<Chip
  label="John Doe"
  avatar={<Avatar src="/user-avatar.jpg" />}
  color="primary"
/>
\`\`\`

### Different Variants
\`\`\`jsx
{/* Contained variant (default) */}
<Chip variant="contained" label="React" color="primary" />

{/* Outlined variant */}
<Chip variant="outlined" label="TypeScript" color="secondary" />

{/* Minimal variant */}
<Chip variant="minimal" label="Next.js" color="success" />
\`\`\`

### Size Variations
\`\`\`jsx
<Chip size="small" label="Small tag" color="primary" />
<Chip size="medium" label="Medium tag" color="secondary" />
<Chip size="large" label="Large tag" color="success" />
\`\`\`

### Filter System Example
\`\`\`jsx
function FilterSystem({ filters, onFilterChange, onFilterRemove }) {
  return (
    <div>
      <h4>Available Filters:</h4>
      {availableFilters.map((filter) => (
        <Chip
          key={filter.id}
          label={filter.label}
          color="outlined"
          onClick={() => onFilterChange(filter)}
          icon={filter.icon}
        />
      ))}

      <h4>Active Filters:</h4>
      {filters.map((filter) => (
        <Chip
          key={filter.id}
          label={filter.label}
          color="primary"
          onDelete={() => onFilterRemove(filter.id)}
          onClick={() => editFilter(filter)}
        />
      ))}
    </div>
  );
}
\`\`\`

### Status and Category System
\`\`\`jsx
function TaskCard({ task }) {
  return (
    <Card>
      <CardContent>
        <h3>{task.title}</h3>

        {/* Priority chip */}
        <Chip
          label={task.priority}
          color={getPriorityColor(task.priority)}
          size="small"
        />

        {/* Status chip */}
        <Chip
          label={task.status}
          color={getStatusColor(task.status)}
          variant="outlined"
          size="small"
        />

        {/* Category chips */}
        {task.categories.map((category) => (
          <Chip
            key={category}
            label={category}
            color="secondary"
            variant="minimal"
            size="small"
            onClick={() => filterByCategory(category)}
          />
        ))}

        {/* Assignee chip */}
        <Chip
          label={task.assignee.name}
          avatar={<Avatar src={task.assignee.avatar} />}
          color="primary"
          onClick={() => viewProfile(task.assignee.id)}
        />
      </CardContent>
    </Card>
  );
}
\`\`\`

### Different Color Examples
\`\`\`jsx
<Chip label="Default" color="default" />
<Chip label="Primary" color="primary" />
<Chip label="Secondary" color="secondary" />
<Chip label="Success" color="success" />
<Chip label="Warning" color="warning" />
<Chip label="Error" color="error" />
\`\`\`

## Accessibility Features

- Proper ARIA attributes for screen readers
- Keyboard navigation support (tab to focus, enter to click, delete/backspace to remove)
- Focus management with visible indicators
- Delete functionality accessible via keyboard
- Color meanings conveyed through more than just color
- High contrast support for all variants and colors
- Semantic meaning preserved in all interactive states
      `
    },
    {
      name: 'Avatar',
      displayName: 'Avatar',
      description: 'Material UI Avatar transformed with enhanced variants, group support, and smooth animations',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Avatar',
      component: () => import('../components/ui/Avatar'),
      muiComponent: '@mui/material/Avatar',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Contained',
          props: {
            variant: 'contained',
            children: 'JD'
          },
          code: '<Avatar variant="contained">JD</Avatar>'
        },
        {
          name: 'Outlined',
          props: {
            variant: 'outlined',
            children: 'AB'
          },
          code: '<Avatar variant="outlined">AB</Avatar>'
        },
        {
          name: 'Minimal',
          props: {
            variant: 'minimal',
            children: 'MK'
          },
          code: '<Avatar variant="minimal">MK</Avatar>'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            children: 'SM'
          },
          code: '<Avatar size="small">SM</Avatar>'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            children: 'MD'
          },
          code: '<Avatar size="medium">MD</Avatar>'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            children: 'LG'
          },
          code: '<Avatar size="large">LG</Avatar>'
        }
      ],

      // State examples
      states: [
        {
          name: 'With Initials',
          props: {
            children: 'JD',
            variant: 'contained'
          },
          code: '<Avatar>JD</Avatar>'
        },
        {
          name: 'With Image',
          props: {
            src: '/placeholder.svg',
            alt: 'User Avatar'
          },
          code: '<Avatar src="/user-photo.jpg" alt="User Name" />'
        },
        {
          name: 'With Icon',
          props: {
            showDemo: true
          },
          code: '<Avatar><PersonIcon /></Avatar>'
        },
        {
          name: 'Fallback Example',
          props: {
            src: '/broken-image.jpg',
            alt: 'Broken Image',
            children: 'FB'
          },
          code: '<Avatar src="/broken-image.jpg">FB</Avatar>'
        },
        {
          name: 'Avatar Group',
          props: {
            showDemo: true
          },
          code: '<AvatarGroup max={4}><Avatar>JD</Avatar><Avatar>JS</Avatar></AvatarGroup>'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['contained', 'outlined', 'minimal'],
          default: 'contained',
          description: 'Visual style variant of the avatar'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting avatar dimensions'
        },
        src: {
          type: 'string',
          description: 'Image URL for the avatar'
        },
        alt: {
          type: 'string',
          description: 'Alt text for accessibility'
        },
        children: {
          type: 'ReactNode',
          description: 'Content (usually initials or icon)'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-medium',
        'font-size-sm', 'font-size-base', 'font-size-lg',
        'duration-fast',
        'ease-out',
        'shadow-md', 'shadow-lg'
      ],

      // Documentation
      documentation: `
# Avatar Component

The Avatar component displays user profile pictures, initials, or icons with enhanced styling and group support functionality.

## Major Transformations Applied

- **Enhanced Visual Design**: Custom avatar styling with design tokens
- **Variant Options**: Contained, outlined, and minimal styling variants
- **Size Variations**: Small, medium, large with proper scaling
- **Group Support**: AvatarGroup functionality for displaying multiple avatars
- **Fallback Handling**: Smart fallback from image to initials to icon
- **Improved Typography**: Figtree font for initials with proper weight variations
- **Design Token Integration**: All styling uses CSS custom properties
- **Smooth Animations**: Transitions for hover and focus states

## New Features Beyond MUI

1. **Visual Variants**: Three distinct styling approaches (contained, outlined, minimal)
2. **Size Options**: Small, medium, large with proper scaling
3. **Enhanced Group Display**: Improved AvatarGroup with better spacing and overflow handling
4. **Smart Fallbacks**: Elegant degradation from image to initials to icon
5. **Improved Accessibility**: Better alt text handling and screen reader support
6. **Enhanced Focus States**: Custom focus rings and hover effects

## Usage Examples

### Basic Avatar with Initials
\`\`\`jsx
import Avatar from '@/components/ui/Avatar';

<Avatar>JD</Avatar>
\`\`\`

### Avatar with Image
\`\`\`jsx
<Avatar
  src="/user-photo.jpg"
  alt="John Doe"
/>
\`\`\`

### Avatar with Icon
\`\`\`jsx
import { Person as PersonIcon } from '@mui/icons-material';

<Avatar>
  <PersonIcon />
</Avatar>
\`\`\`

### Different Variants
\`\`\`jsx
{/* Contained variant (default) */}
<Avatar variant="contained">JD</Avatar>

{/* Outlined variant */}
<Avatar variant="outlined">AB</Avatar>

{/* Minimal variant */}
<Avatar variant="minimal">MK</Avatar>
\`\`\`

### Size Variations
\`\`\`jsx
<Avatar size="small">SM</Avatar>
<Avatar size="medium">MD</Avatar>
<Avatar size="large">LG</Avatar>
\`\`\`

### Avatar Group
\`\`\`jsx
import { AvatarGroup } from '@/components/ui/Avatar';

<AvatarGroup max={4}>
  <Avatar src="/user1.jpg" alt="User 1" />
  <Avatar src="/user2.jpg" alt="User 2" />
  <Avatar src="/user3.jpg" alt="User 3" />
  <Avatar src="/user4.jpg" alt="User 4" />
  <Avatar src="/user5.jpg" alt="User 5" />
  {/* Shows +2 for additional avatars */}
</AvatarGroup>
\`\`\`

### User Profile Example
\`\`\`jsx
function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <Avatar
        src={user.avatar}
        alt={user.name}
        size="large"
        variant="contained"
      >
        {user.initials}
      </Avatar>

      <div className="user-info">
        <h3>{user.name}</h3>
        <p>{user.role}</p>
      </div>
    </div>
  );
}
\`\`\`

### Team Members Display
\`\`\`jsx
function TeamDisplay({ team }) {
  return (
    <div>
      <h4>Team Members</h4>
      <AvatarGroup max={6} spacing="medium">
        {team.members.map((member) => (
          <Avatar
            key={member.id}
            src={member.avatar}
            alt={member.name}
            title={member.name} // Tooltip on hover
          >
            {member.initials}
          </Avatar>
        ))}
      </AvatarGroup>

      {team.members.length > 6 && (
        <p>+{team.members.length - 6} more members</p>
      )}
    </div>
  );
}
\`\`\`

### Status Indicator with Badge
\`\`\`jsx
import Badge from '@/components/ui/Badge';

<Badge variant="dot" color="success">
  <Avatar src="/user.jpg" alt="Online user">
    JD
  </Avatar>
</Badge>
\`\`\`

### Comment System Example
\`\`\`jsx
function CommentList({ comments }) {
  return (
    <div className="comments">
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <Avatar
            src={comment.author.avatar}
            alt={comment.author.name}
            size="small"
          >
            {comment.author.initials}
          </Avatar>

          <div className="comment-content">
            <strong>{comment.author.name}</strong>
            <p>{comment.text}</p>
            <time>{comment.timestamp}</time>
          </div>
        </div>
      ))}
    </div>
  );
}
\`\`\`

### Different Sizes in Context
\`\`\`jsx
{/* Navigation bar */}
<Avatar size="small" src="/user.jpg">JD</Avatar>

{/* Profile page */}
<Avatar size="large" src="/user.jpg">JD</Avatar>

{/* Chat list */}
<Avatar size="medium" src="/user.jpg">JD</Avatar>
\`\`\`

### Fallback Handling
\`\`\`jsx
{/* Will try image first, then show initials if image fails */}
<Avatar src="/potentially-broken-image.jpg">
  JD
</Avatar>

{/* Will show icon if no image or initials */}
<Avatar src="/broken-image.jpg">
  <PersonIcon />
</Avatar>
\`\`\`

## Accessibility Features

- Proper alt text support for images
- Fallback content announced to screen readers
- Focus management with visible indicators
- Keyboard navigation support
- High contrast support for all variants
- Semantic meaning preserved in all states
- Group announcements for AvatarGroup
- Role and aria-label support for better context
      `
    },
    {
      name: 'List',
      displayName: 'List',
      description: 'Material UI List transformed with enhanced styling, interactive states, and comprehensive data display features',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/List',
      component: () => import('../components/ui/List'),
      muiComponent: '@mui/material/List',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Contained',
          props: {
            variant: 'contained',
            showDemo: true
          },
          code: '<List variant="contained" items={listItems} />'
        },
        {
          name: 'Outlined',
          props: {
            variant: 'outlined',
            showDemo: true
          },
          code: '<List variant="outlined" items={listItems} />'
        },
        {
          name: 'Minimal',
          props: {
            variant: 'minimal',
            showDemo: true
          },
          code: '<List variant="minimal" items={listItems} />'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            showDemo: true
          },
          code: '<List size="small" items={listItems} />'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            showDemo: true
          },
          code: '<List size="medium" items={listItems} />'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            showDemo: true
          },
          code: '<List size="large" items={listItems} />'
        }
      ],

      // State examples
      states: [
        {
          name: 'Interactive',
          props: {
            interactive: true,
            showDemo: true
          },
          code: '<List interactive items={listItems} onItemClick={handleClick} />'
        },
        {
          name: 'With Avatars',
          props: {
            showAvatars: true,
            showDemo: true
          },
          code: '<List showAvatars items={listItems} />'
        },
        {
          name: 'With Dividers',
          props: {
            showDividers: true,
            showDemo: true
          },
          code: '<List showDividers items={listItems} />'
        },
        {
          name: 'With Subheader',
          props: {
            subheader: 'Team Members',
            showDemo: true
          },
          code: '<List subheader="Team Members" items={listItems} />'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['contained', 'outlined', 'minimal'],
          default: 'contained',
          description: 'Visual style variant of the list'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting padding and item height'
        },
        items: {
          type: 'ListItemData[]',
          description: 'Array of list items with primary, secondary, icon, and interaction properties'
        },
        interactive: {
          type: 'boolean',
          default: true,
          description: 'Whether list items are clickable with hover effects'
        },
        showIcons: {
          type: 'boolean',
          default: true,
          description: 'Whether to display item icons'
        },
        showAvatars: {
          type: 'boolean',
          default: false,
          description: 'Whether to display avatars instead of icons'
        },
        showDividers: {
          type: 'boolean',
          default: false,
          description: 'Whether to show dividers between items'
        },
        subheader: {
          type: 'string',
          description: 'Optional subheader text for the list'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-medium',
        'font-size-sm', 'font-size-base', 'font-size-lg',
        'spacing-1', 'spacing-2', 'spacing-3', 'spacing-4',
        'radius-lg', 'radius-md',
        'duration-fast',
        'ease-out',
        'color-bg-elevated', 'color-border-default', 'color-border-subtle',
        'color-primary-50', 'color-primary-100', 'color-primary-150', 'color-primary-600', 'color-primary-700',
        'color-text-primary', 'color-text-secondary', 'color-text-tertiary',
        'color-gray-50'
      ],

      // Documentation
      documentation: `
# List Component

The List component displays collections of items with enhanced styling, interactive states, and comprehensive customization options.

## Major Transformations Applied

- **Enhanced Visual Design**: Custom list styling with design tokens
- **Variant Options**: Contained, outlined, and minimal styling variants
- **Interactive States**: Hover effects with slide animations
- **Flexible Content**: Support for icons, avatars, badges, and secondary text
- **Selection States**: Visual feedback for selected items
- **Improved Typography**: Figtree font with proper weight variations
- **Design Token Integration**: All styling uses CSS custom properties

## Usage Examples

### Basic List
\`\`\`jsx
import List from '@/components/ui/List';

const listItems = [
  {
    id: 1,
    primary: 'John Doe',
    secondary: 'Software Engineer',
    icon: <PersonIcon />,
    onClick: () => viewProfile(1)
  },
  {
    id: 2,
    primary: 'Jane Smith',
    secondary: 'Product Manager',
    icon: <PersonIcon />,
    onClick: () => viewProfile(2)
  }
];

<List items={listItems} />
\`\`\`

### Contact List with Avatars
\`\`\`jsx
const contacts = [
  {
    id: 1,
    primary: 'Alice Johnson',
    secondary: 'alice@company.com',
    avatar: '/avatars/alice.jpg',
    badge: '3'
  },
  {
    id: 2,
    primary: 'Bob Wilson',
    secondary: 'bob@company.com',
    avatar: '/avatars/bob.jpg'
  }
];

<List
  variant="outlined"
  items={contacts}
  showAvatars
  subheader="Recent Contacts"
/>
\`\`\`

### Settings List
\`\`\`jsx
const settingsItems = [
  {
    id: 'notifications',
    primary: 'Notifications',
    secondary: 'Manage your notification preferences',
    icon: <NotificationsIcon />,
    onClick: () => navigate('/settings/notifications')
  },
  {
    id: 'privacy',
    primary: 'Privacy & Security',
    secondary: 'Control your privacy settings',
    icon: <SecurityIcon />,
    onClick: () => navigate('/settings/privacy')
  }
];

<List
  variant="minimal"
  items={settingsItems}
  showDividers
/>
\`\`\`

## Accessibility Features

- Proper ARIA attributes for list structure
- Screen reader friendly item announcements
- Keyboard navigation support (tab, enter)
- Focus management with visible indicators
- High contrast support for all variants
- Semantic HTML structure with proper roles
      `
    },
    {
      name: 'Tooltip',
      displayName: 'Tooltip',
      description: 'Material UI Tooltip transformed with enhanced styling, semantic types, and comprehensive positioning options',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Tooltip',
      component: () => import('../components/ui/Tooltip'),
      muiComponent: '@mui/material/Tooltip',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Contained',
          props: {
            variant: 'contained',
            showDemo: true
          },
          code: '<Tooltip variant="contained" title="Helpful information"><IconButton><InfoIcon /></IconButton></Tooltip>'
        },
        {
          name: 'Outlined',
          props: {
            variant: 'outlined',
            showDemo: true
          },
          code: '<Tooltip variant="outlined" title="Helpful information"><IconButton><InfoIcon /></IconButton></Tooltip>'
        },
        {
          name: 'Minimal',
          props: {
            variant: 'minimal',
            showDemo: true
          },
          code: '<Tooltip variant="minimal" title="Helpful information"><IconButton><InfoIcon /></IconButton></Tooltip>'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            showDemo: true
          },
          code: '<Tooltip size="small" title="Brief info"><IconButton><InfoIcon /></IconButton></Tooltip>'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            showDemo: true
          },
          code: '<Tooltip size="medium" title="Standard information"><IconButton><InfoIcon /></IconButton></Tooltip>'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            showDemo: true
          },
          code: '<Tooltip size="large" title="Detailed information"><IconButton><InfoIcon /></IconButton></Tooltip>'
        }
      ],

      // State examples
      states: [
        {
          name: 'Info Type',
          props: {
            type: 'info',
            showDemo: true
          },
          code: '<Tooltip type="info" title="Information tooltip"><IconButton><InfoIcon /></IconButton></Tooltip>'
        },
        {
          name: 'Success Type',
          props: {
            type: 'success',
            showDemo: true
          },
          code: '<Tooltip type="success" title="Success tooltip"><IconButton><CheckIcon /></IconButton></Tooltip>'
        },
        {
          name: 'Warning Type',
          props: {
            type: 'warning',
            showDemo: true
          },
          code: '<Tooltip type="warning" title="Warning tooltip"><IconButton><WarningIcon /></IconButton></Tooltip>'
        },
        {
          name: 'Error Type',
          props: {
            type: 'error',
            showDemo: true
          },
          code: '<Tooltip type="error" title="Error tooltip"><IconButton><ErrorIcon /></IconButton></Tooltip>'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['contained', 'outlined', 'minimal'],
          default: 'contained',
          description: 'Visual style variant of the tooltip'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting padding, font size, and max width'
        },
        type: {
          type: 'enum',
          options: ['default', 'info', 'success', 'warning', 'error'],
          default: 'default',
          description: 'Semantic type affecting colors and styling'
        },
        title: {
          type: 'ReactNode',
          description: 'Tooltip content to display'
        },
        placement: {
          type: 'enum',
          options: ['top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end'],
          default: 'top',
          description: 'Positioning of the tooltip relative to target'
        },
        showArrow: {
          type: 'boolean',
          default: true,
          description: 'Whether to show the tooltip arrow'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-medium',
        'font-size-xs', 'font-size-sm', 'font-size-base',
        'spacing-1', 'spacing-1-5', 'spacing-2', 'spacing-3',
        'radius-md',
        'duration-fast',
        'ease-out',
        'shadow-md', 'shadow-lg',
        'color-white', 'color-gray-800',
        'color-primary-600', 'color-primary-700',
        'color-success-600', 'color-success-700',
        'color-warning-600', 'color-warning-700',
        'color-error-600', 'color-error-700',
        'color-border-subtle'
      ],

      // Documentation
      documentation: `
# Tooltip Component

The Tooltip component provides contextual information with enhanced styling, semantic types, and comprehensive positioning options.

## Major Transformations Applied

- **Enhanced Visual Design**: Custom tooltip styling with design tokens
- **Semantic Types**: Info, success, warning, error variants with appropriate colors
- **Variant Options**: Contained, outlined, and minimal styling variants
- **Size Variations**: Small, medium, large with proper scaling
- **Arrow Styling**: Enhanced arrow design with proper borders
- **Improved Typography**: Figtree font with proper weight variations
- **Design Token Integration**: All styling uses CSS custom properties

## Usage Examples

### Basic Tooltip
\`\`\`jsx
import Tooltip from '@/components/ui/Tooltip';

<Tooltip title="This is helpful information">
  <IconButton>
    <InfoIcon />
  </IconButton>
</Tooltip>
\`\`\`

### Form Field Help
\`\`\`jsx
<div className="form-field">
  <label htmlFor="password">
    Password
    <Tooltip
      type="info"
      title="Password must be at least 8 characters long and contain at least one number and special character"
      placement="right"
    >
      <IconButton size="small">
        <HelpIcon />
      </IconButton>
    </Tooltip>
  </label>
  <TextField id="password" type="password" />
</div>
\`\`\`

### Status Indicators
\`\`\`jsx
<div className="status-row">
  <Tooltip type="success" title="All systems operational">
    <div className="status-dot status-success" />
  </Tooltip>

  <Tooltip type="warning" title="Minor issues detected">
    <div className="status-dot status-warning" />
  </Tooltip>

  <Tooltip type="error" title="Critical system failure">
    <div className="status-dot status-error" />
  </Tooltip>
</div>
\`\`\`

### Interactive Tooltip
\`\`\`jsx
<Tooltip
  variant="outlined"
  title={
    <div>
      <strong>Feature Details</strong>
      <p>This feature is available in the Pro plan.</p>
      <Button size="small">Upgrade Now</Button>
    </div>
  }
  interactive
  placement="bottom"
>
  <Button variant="outlined">
    Pro Feature
  </Button>
</Tooltip>
\`\`\`

## Accessibility Features

- Proper ARIA attributes for screen readers
- Keyboard navigation support (focus, escape)
- High contrast support for all variants and types
- Semantic meaning conveyed through more than just color
- Proper focus management
- Screen reader friendly content announcements
      `
    },
    {
      name: 'Accordion',
      displayName: 'Accordion',
      description: 'Material UI Accordion transformed with enhanced styling, expand icons, and comprehensive content organization features',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Accordion',
      component: () => import('../components/ui/Accordion'),
      muiComponent: '@mui/material/Accordion',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Contained',
          props: {
            variant: 'contained',
            showDemo: true
          },
          code: '<Accordion variant="contained" items={accordionItems} />'
        },
        {
          name: 'Outlined',
          props: {
            variant: 'outlined',
            showDemo: true
          },
          code: '<Accordion variant="outlined" items={accordionItems} />'
        },
        {
          name: 'Minimal',
          props: {
            variant: 'minimal',
            showDemo: true
          },
          code: '<Accordion variant="minimal" items={accordionItems} />'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            showDemo: true
          },
          code: '<Accordion size="small" items={accordionItems} />'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            showDemo: true
          },
          code: '<Accordion size="medium" items={accordionItems} />'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            showDemo: true
          },
          code: '<Accordion size="large" items={accordionItems} />'
        }
      ],

      // State examples
      states: [
        {
          name: 'Allow Multiple',
          props: {
            allowMultiple: true,
            showDemo: true
          },
          code: '<Accordion allowMultiple items={accordionItems} />'
        },
        {
          name: 'Plus Icon',
          props: {
            expandIcon: 'plus',
            showDemo: true
          },
          code: '<Accordion expandIcon="plus" items={accordionItems} />'
        },
        {
          name: 'Chevron Icon',
          props: {
            expandIcon: 'chevron',
            showDemo: true
          },
          code: '<Accordion expandIcon="chevron" items={accordionItems} />'
        },
        {
          name: 'Default Expanded',
          props: {
            showDemo: true
          },
          code: '<Accordion items={accordionItemsWithDefault} />'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['contained', 'outlined', 'minimal'],
          default: 'contained',
          description: 'Visual style variant of the accordion'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting padding and font sizes'
        },
        items: {
          type: 'AccordionItemData[]',
          description: 'Array of accordion items with title, content, and configuration'
        },
        allowMultiple: {
          type: 'boolean',
          default: false,
          description: 'Whether multiple panels can be expanded simultaneously'
        },
        expandIcon: {
          type: 'enum',
          options: ['arrow', 'plus', 'chevron'],
          default: 'arrow',
          description: 'Type of expand/collapse icon to use'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-medium', 'font-weight-semibold',
        'font-size-xs', 'font-size-sm', 'font-size-base', 'font-size-lg',
        'spacing-1', 'spacing-2', 'spacing-3', 'spacing-4',
        'radius-lg',
        'duration-fast',
        'ease-out',
        'shadow-sm', 'shadow-md',
        'color-bg-elevated', 'color-border-default', 'color-border-subtle',
        'color-primary-25', 'color-primary-50', 'color-primary-200', 'color-primary-300', 'color-primary-600',
        'color-text-primary', 'color-text-secondary',
        'color-gray-25', 'color-gray-50'
      ],

      // Documentation
      documentation: `
# Accordion Component

The Accordion component provides collapsible content sections with enhanced styling, multiple expand icons, and comprehensive customization options.

## Major Transformations Applied

- **Enhanced Visual Design**: Custom accordion styling with design tokens
- **Variant Options**: Contained, outlined, and minimal styling variants
- **Expand Icons**: Multiple icon options (arrow, plus, chevron)
- **Multiple Expansion**: Support for single or multiple open panels
- **Interactive States**: Enhanced hover and expanded states
- **Improved Typography**: Figtree font with proper weight variations
- **Design Token Integration**: All styling uses CSS custom properties

## Usage Examples

### Basic Accordion
\`\`\`jsx
import Accordion from '@/components/ui/Accordion';

const faqItems = [
  {
    id: 1,
    title: 'What is this service?',
    content: 'This is a comprehensive platform that helps you manage your projects and collaborate with your team.'
  },
  {
    id: 2,
    title: 'How do I get started?',
    content: (
      <div>
        <p>Getting started is easy:</p>
        <ol>
          <li>Create an account</li>
          <li>Set up your first project</li>
          <li>Invite team members</li>
        </ol>
      </div>
    )
  }
];

<Accordion items={faqItems} />
\`\`\`

### FAQ Section
\`\`\`jsx
<Accordion
  variant="outlined"
  expandIcon="plus"
  items={faqItems}
  allowMultiple
/>
\`\`\`

### Settings Accordion
\`\`\`jsx
const settingsSections = [
  {
    id: 'account',
    title: 'Account Settings',
    content: <AccountSettingsForm />,
    icon: <AccountIcon />
  },
  {
    id: 'privacy',
    title: 'Privacy & Security',
    content: <PrivacySettingsForm />,
    icon: <SecurityIcon />
  },
  {
    id: 'notifications',
    title: 'Notification Preferences',
    content: <NotificationSettingsForm />,
    icon: <NotificationsIcon />,
    defaultExpanded: true
  }
];

<Accordion
  variant="minimal"
  items={settingsSections}
  expandIcon="chevron"
/>
\`\`\`

## Accessibility Features

- Proper ARIA attributes for collapsible content
- Screen reader friendly expand/collapse announcements
- Keyboard navigation support (tab, enter, space)
- Focus management with visible indicators
- High contrast support for all variants
- Semantic HTML structure with proper headings
      `
    }
  ],
  [COMPONENT_CATEGORIES.FEEDBACK]: [
    {
      name: 'Alert',
      displayName: 'Alert',
      description: 'Material UI Alert transformed with gradient backgrounds, ghost effects, enhanced animations, and comprehensive severity styling',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Alert',
      component: () => import('../components/ui/Alert'),
      muiComponent: '@mui/material/Alert',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Contained',
          props: {
            variant: 'contained',
            severity: 'info',
            children: 'This is a contained alert with important information.'
          },
          code: '<Alert variant="contained" severity="info">Alert message</Alert>'
        },
        {
          name: 'Outlined',
          props: {
            variant: 'outlined',
            severity: 'success',
            children: 'This is an outlined alert indicating success.'
          },
          code: '<Alert variant="outlined" severity="success">Success message</Alert>'
        },
        {
          name: 'Minimal',
          props: {
            variant: 'minimal',
            severity: 'warning',
            children: 'This is a minimal alert with a warning message.'
          },
          code: '<Alert variant="minimal" severity="warning">Warning message</Alert>'
        },
        {
          name: 'Gradient',
          props: {
            variant: 'gradient',
            severity: 'info',
            children: 'This is a gradient alert with enhanced visual appeal.'
          },
          code: '<Alert variant="gradient" severity="info">Gradient alert</Alert>'
        },
        {
          name: 'Ghost',
          props: {
            variant: 'ghost',
            severity: 'error',
            children: 'This is a ghost effect alert with backdrop blur.'
          },
          code: '<Alert variant="ghost" severity="error">Ghost alert</Alert>'
        }
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            severity: 'info',
            children: 'Small alert message with compact spacing.'
          },
          code: '<Alert size="small" severity="info">Small alert</Alert>'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            severity: 'success',
            children: 'Medium alert message with standard spacing.'
          },
          code: '<Alert size="medium" severity="success">Medium alert</Alert>'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            severity: 'warning',
            children: 'Large alert message with generous spacing.'
          },
          code: '<Alert size="large" severity="warning">Large alert</Alert>'
        }
      ],

      // State examples
      states: [
        {
          name: 'Success',
          props: {
            severity: 'success',
            title: 'Success!',
            children: 'Your action was completed successfully.'
          },
          code: '<Alert severity="success" title="Success!">Action completed</Alert>'
        },
        {
          name: 'Info',
          props: {
            severity: 'info',
            title: 'Information',
            children: 'Here is some important information for you.'
          },
          code: '<Alert severity="info" title="Information">Important info</Alert>'
        },
        {
          name: 'Warning',
          props: {
            severity: 'warning',
            title: 'Warning',
            children: 'Please review this before proceeding.'
          },
          code: '<Alert severity="warning" title="Warning">Review needed</Alert>'
        },
        {
          name: 'Error',
          props: {
            severity: 'error',
            title: 'Error',
            children: 'Something went wrong. Please try again.'
          },
          code: '<Alert severity="error" title="Error">Something went wrong</Alert>'
        },
        {
          name: 'Closable',
          props: {
            severity: 'info',
            closable: true,
            title: 'Dismissible Alert',
            children: 'This alert can be closed by clicking the close button.'
          },
          code: '<Alert severity="info" closable title="Dismissible">Closable alert</Alert>'
        },
        {
          name: 'No Icon',
          props: {
            severity: 'success',
            showIcon: false,
            children: 'This alert displays without an icon.'
          },
          code: '<Alert severity="success" showIcon={false}>No icon alert</Alert>'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['contained', 'outlined', 'minimal', 'gradient', 'ghost'],
          default: 'contained',
          description: 'Visual style variant of the alert'
        },
        severity: {
          type: 'enum',
          options: ['success', 'info', 'warning', 'error'],
          default: 'info',
          description: 'Severity level affecting colors and icon'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting padding and font size'
        },
        title: {
          type: 'string',
          description: 'Optional title text displayed above the message'
        },
        showIcon: {
          type: 'boolean',
          default: true,
          description: 'Whether to display the severity icon'
        },
        closable: {
          type: 'boolean',
          default: false,
          description: 'Whether to show close button'
        },
        onClose: {
          type: 'function',
          description: 'Callback fired when close button is clicked'
        },
        children: {
          type: 'ReactNode',
          description: 'Alert message content'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-normal', 'font-weight-semibold',
        'font-size-sm', 'font-size-base', 'font-size-lg',
        'radius-lg', 'radius-md',
        'spacing-1', 'spacing-2', 'spacing-3', 'spacing-4', 'spacing-5', 'spacing-6',
        'duration-fast',
        'ease-out',
        'shadow-sm', 'shadow-md', 'shadow-lg',
        'color-white',
        'color-primary-50', 'color-primary-100', 'color-primary-200', 'color-primary-300', 'color-primary-600', 'color-primary-700', 'color-primary-800',
        'color-success-50', 'color-success-100', 'color-success-200', 'color-success-300', 'color-success-600', 'color-success-700', 'color-success-800',
        'color-warning-50', 'color-warning-100', 'color-warning-200', 'color-warning-300', 'color-warning-600', 'color-warning-700', 'color-warning-800',
        'color-error-50', 'color-error-100', 'color-error-200', 'color-error-300', 'color-error-600', 'color-error-700', 'color-error-800'
      ],

      // Documentation
      documentation: `
# Alert Component

The Alert component has been heavily transformed from Material UI with enhanced visual effects, comprehensive severity styling, and modern design variants.

## Major Transformations Applied

- **Gradient Backgrounds**: Custom gradient variant using severity-appropriate color schemes
- **Ghost Morphism**: Modern ghost effect with backdrop blur for each severity
- **Enhanced Animations**: Hover lift effects and smooth transitions
- **Comprehensive Severity Styling**: Success, info, warning, error with matching colors
- **Multiple Variants**: Contained, outlined, minimal, gradient, and ghost styles
- **Enhanced Icons**: Custom severity-based icons with proper scaling
- **Improved Typography**: Figtree font throughout with proper weight variations
- **Design Token Integration**: All styling uses CSS custom properties

## New Features Beyond MUI

1. **Gradient Variants**: Beautiful gradient backgrounds using severity-appropriate colors
2. **Ghost Effect**: Modern ghostmorphism with backdrop filters for each severity
3. **Hover Animations**: Subtle lift effects on hover with enhanced shadows
4. **Enhanced Sizing**: Small, medium, large with proper scaling
5. **Custom Icons**: Material UI icons with proper severity mapping
6. **Improved Close Button**: Enhanced styling with hover effects
7. **Flexible Content**: Support for titles and rich content

## Usage Examples

### Basic Alert
\`\`\`jsx
import Alert from '@/components/ui/Alert';

<Alert severity="info">
  This is an informational alert message.
</Alert>
\`\`\`

### Alert with Title
\`\`\`jsx
<Alert
  severity="success"
  title="Success!"
>
  Your action was completed successfully.
</Alert>
\`\`\`

### Gradient Alert
\`\`\`jsx
<Alert
  variant="gradient"
  severity="warning"
  title="Important Notice"
>
  Please review the following information.
</Alert>
\`\`\`

### Ghost Effect Alert
\`\`\`jsx
<Alert
  variant="ghost"
  severity="error"
  size="large"
>
  An error occurred during processing.
</Alert>
\`\`\`

### Closable Alert
\`\`\`jsx
const [showAlert, setShowAlert] = useState(true);

{showAlert && (
  <Alert
    severity="info"
    closable
    onClose={() => setShowAlert(false)}
    title="Notification"
  >
    This alert can be dismissed.
  </Alert>
)}
\`\`\`

### Alert without Icon
\`\`\`jsx
<Alert
  severity="success"
  showIcon={false}
>
  Success message without icon.
</Alert>
\`\`\`

### Multiple Alerts
\`\`\`jsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
  <Alert severity="success" title="Success">Operation completed</Alert>
  <Alert severity="warning" title="Warning">Please verify input</Alert>
  <Alert severity="error" title="Error">Something went wrong</Alert>
  <Alert severity="info" title="Info">Additional information</Alert>
</div>
\`\`\`

## Severity Types

- **Success**: Green color scheme for positive feedback
- **Info**: Blue/purple color scheme for informational messages
- **Warning**: Orange/yellow color scheme for cautionary messages
- **Error**: Red color scheme for error messages

## Accessibility Features

- Proper ARIA attributes for alert announcements
- Semantic color coding for different severity levels
- Screen reader friendly content structure
- Keyboard accessible close button
- Color contrast compliance in all variants
- Proper focus management for interactive elements
      `
    },
    {
      name: 'Snackbar',
      displayName: 'Snackbar',
      description: 'Material UI Snackbar transformed with gradient backgrounds, ghost effects, enhanced animations, and comprehensive positioning options',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Snackbar',
      component: () => import('../components/ui/Snackbar'),
      muiComponent: '@mui/material/Snackbar',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Contained',
          props: {
            variant: 'contained',
            severity: 'info',
            showDemo: false,
            message: 'This is a contained snackbar notification.'
          },
          code: '<Snackbar variant="contained" severity="info" message="Notification" />'
        },
        {
          name: 'Outlined',
          props: {
            variant: 'outlined',
            severity: 'success',
            showDemo: false,
            message: 'This is an outlined snackbar with success styling.'
          },
          code: '<Snackbar variant="outlined" severity="success" message="Success!" />'
        },
        {
          name: 'Minimal',
          props: {
            variant: 'minimal',
            severity: 'warning',
            showDemo: false,
            message: 'This is a minimal snackbar with warning styling.'
          },
          code: '<Snackbar variant="minimal" severity="warning" message="Warning" />'
        },
        {
          name: 'Gradient',
          props: {
            variant: 'gradient',
            severity: 'info',
            showDemo: false,
            message: 'This is a gradient snackbar with enhanced visual appeal.'
          },
          code: '<Snackbar variant="gradient" severity="info" message="Gradient!" />'
        },
        {
          name: 'Ghost',
          props: {
            variant: 'ghost',
            severity: 'error',
            showDemo: false,
            message: 'This is a ghost effect snackbar with backdrop blur.'
          },
          code: '<Snackbar variant="ghost" severity="error" message="Ghost effect" />'
        }
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            severity: 'info',
            showDemo: false,
            message: 'Small snackbar with compact spacing.'
          },
          code: '<Snackbar size="small" message="Small notification" />'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            severity: 'success',
            showDemo: false,
            message: 'Medium snackbar with standard spacing.'
          },
          code: '<Snackbar size="medium" message="Medium notification" />'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            severity: 'warning',
            showDemo: false,
            message: 'Large snackbar with generous spacing.'
          },
          code: '<Snackbar size="large" message="Large notification" />'
        }
      ],

      // State examples
      states: [
        {
          name: 'Success',
          props: {
            severity: 'success',
            showDemo: false,
            message: 'Operation completed successfully!'
          },
          code: '<Snackbar severity="success" message="Success!" />'
        },
        {
          name: 'Info',
          props: {
            severity: 'info',
            showDemo: false,
            message: 'Here is some important information.'
          },
          code: '<Snackbar severity="info" message="Information" />'
        },
        {
          name: 'Warning',
          props: {
            severity: 'warning',
            showDemo: false,
            message: 'Please review this before proceeding.'
          },
          code: '<Snackbar severity="warning" message="Warning" />'
        },
        {
          name: 'Error',
          props: {
            severity: 'error',
            showDemo: false,
            message: 'Something went wrong. Please try again.'
          },
          code: '<Snackbar severity="error" message="Error occurred" />'
        },
        {
          name: 'With Action',
          props: {
            severity: 'info',
            showDemo: false,
            actionText: 'UNDO',
            message: 'Message deleted. Click UNDO to restore.'
          },
          code: '<Snackbar severity="info" actionText="UNDO" message="Deleted" />'
        },
        {
          name: 'No Icon',
          props: {
            severity: 'success',
            showIcon: false,
            showDemo: false,
            message: 'This snackbar displays without an icon.'
          },
          code: '<Snackbar severity="success" showIcon={false} message="No icon" />'
        },
        {
          name: 'Interactive Demo',
          props: {
            severity: 'info',
            showDemo: true,
            message: 'Click the button to show this snackbar!'
          },
          code: '<Snackbar severity="info" showDemo message="Interactive!" />'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['contained', 'outlined', 'minimal', 'gradient', 'ghost'],
          default: 'contained',
          description: 'Visual style variant of the snackbar'
        },
        severity: {
          type: 'enum',
          options: ['success', 'info', 'warning', 'error'],
          default: 'info',
          description: 'Severity level affecting colors and icon'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting padding, font size, and minimum width'
        },
        position: {
          type: 'enum',
          options: ['bottom-left', 'bottom-center', 'bottom-right', 'top-left', 'top-center', 'top-right'],
          default: 'bottom-center',
          description: 'Position of the snackbar on screen'
        },
        showIcon: {
          type: 'boolean',
          default: true,
          description: 'Whether to display the severity icon'
        },
        closable: {
          type: 'boolean',
          default: true,
          description: 'Whether to show close button'
        },
        actionText: {
          type: 'string',
          description: 'Text for action button (optional)'
        },
        onAction: {
          type: 'function',
          description: 'Callback fired when action button is clicked'
        },
        onClose: {
          type: 'function',
          description: 'Callback fired when snackbar is closed'
        },
        message: {
          type: 'string',
          description: 'Snackbar message content'
        },
        showDemo: {
          type: 'boolean',
          default: true,
          description: 'Whether to show interactive demo or static snackbar'
        },
        autoHideDuration: {
          type: 'number',
          default: 6000,
          description: 'Time in milliseconds before auto-hiding (0 to disable)'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-normal', 'font-weight-medium',
        'font-size-sm', 'font-size-base', 'font-size-lg',
        'radius-lg', 'radius-md', 'radius-button',
        'spacing-1', 'spacing-2', 'spacing-2-5', 'spacing-3', 'spacing-4', 'spacing-5', 'spacing-6', 'spacing-8',
        'duration-fast',
        'ease-out',
        'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl',
        'color-white', 'color-bg-elevated', 'color-border-default', 'color-border-subtle',
        'color-primary-50', 'color-primary-100', 'color-primary-200', 'color-primary-300', 'color-primary-500', 'color-primary-600', 'color-primary-700', 'color-primary-800',
        'color-success-50', 'color-success-100', 'color-success-200', 'color-success-300', 'color-success-600', 'color-success-700', 'color-success-800',
        'color-warning-50', 'color-warning-100', 'color-warning-200', 'color-warning-300', 'color-warning-600', 'color-warning-700', 'color-warning-800',
        'color-error-50', 'color-error-100', 'color-error-200', 'color-error-300', 'color-error-600', 'color-error-700', 'color-error-800'
      ],

      // Documentation
      documentation: `
# Snackbar Component

The Snackbar component has been heavily transformed from Material UI with enhanced visual effects, comprehensive positioning options, and modern design variants.

## Major Transformations Applied

- **Gradient Backgrounds**: Custom gradient variant using severity-appropriate color schemes
- **Ghost Morphism**: Modern ghost effect with backdrop blur for each severity
- **Enhanced Animations**: Slide-in animations from different directions based on position
- **Comprehensive Severity Styling**: Success, info, warning, error with matching colors
- **Multiple Variants**: Contained, outlined, minimal, gradient, and ghost styles
- **Flexible Positioning**: Six position options (top/bottom + left/center/right)
- **Enhanced Actions**: Custom action buttons with severity-appropriate styling
- **Improved Typography**: Figtree font throughout with proper weight variations
- **Design Token Integration**: All styling uses CSS custom properties

## New Features Beyond MUI

1. **Gradient Variants**: Beautiful gradient backgrounds using severity-appropriate colors
2. **Ghost Effect**: Modern ghostmorphism with backdrop filters for each severity
3. **Enhanced Animations**: Direction-aware slide-in animations based on position
4. **Dual Display Modes**: Static for preview and interactive for demos
5. **Custom Action Buttons**: Styled action buttons with hover effects
6. **Flexible Sizing**: Small, medium, large with proper scaling
7. **Enhanced Close Button**: Improved styling with hover animations

## Usage Examples

### Basic Snackbar
\`\`\`jsx
import Snackbar from '@/components/ui/Snackbar';

const [open, setOpen] = useState(false);

<Snackbar
  open={open}
  onClose={() => setOpen(false)}
  severity="info"
  message="This is an informational message."
/>
\`\`\`

### Snackbar with Action
\`\`\`jsx
<Snackbar
  open={open}
  onClose={() => setOpen(false)}
  severity="success"
  message="Item deleted successfully."
  actionText="UNDO"
  onAction={handleUndo}
/>
\`\`\`

### Gradient Snackbar
\`\`\`jsx
<Snackbar
  variant="gradient"
  severity="warning"
  message="Important update available"
  position="top-center"
  open={open}
  onClose={() => setOpen(false)}
/>
\`\`\`

### Ghost Effect Snackbar
\`\`\`jsx
<Snackbar
  variant="ghost"
  severity="error"
  message="Connection failed. Please try again."
  size="large"
  position="bottom-right"
  open={open}
  onClose={() => setOpen(false)}
/>
\`\`\`

### Auto-hide Snackbar
\`\`\`jsx
<Snackbar
  severity="success"
  message="Changes saved automatically"
  autoHideDuration={3000}
  open={open}
  onClose={() => setOpen(false)}
/>
\`\`\`

### Persistent Snackbar
\`\`\`jsx
<Snackbar
  severity="error"
  message="Critical error - manual action required"
  autoHideDuration={0} // Won't auto-hide
  closable={true}
  open={open}
  onClose={() => setOpen(false)}
/>
\`\`\`

### Multiple Position Examples
\`\`\`jsx
// Top positions
<Snackbar position="top-left" severity="info" message="Top left" />
<Snackbar position="top-center" severity="success" message="Top center" />
<Snackbar position="top-right" severity="warning" message="Top right" />

// Bottom positions
<Snackbar position="bottom-left" severity="error" message="Bottom left" />
<Snackbar position="bottom-center" severity="info" message="Bottom center" />
<Snackbar position="bottom-right" severity="success" message="Bottom right" />
\`\`\`

### Snackbar Queue Management
\`\`\`jsx
const [snackbars, setSnackbars] = useState([]);

const showSnackbar = (message, severity = 'info') => {
  const id = Date.now();
  setSnackbars(prev => [...prev, { id, message, severity }]);
};

const removeSnackbar = (id) => {
  setSnackbars(prev => prev.filter(snack => snack.id !== id));
};

{snackbars.map(snack => (
  <Snackbar
    key={snack.id}
    open={true}
    severity={snack.severity}
    message={snack.message}
    onClose={() => removeSnackbar(snack.id)}
    autoHideDuration={4000}
  />
))}
\`\`\`

## Position Options

- **top-left**: Top left corner
- **top-center**: Top center
- **top-right**: Top right corner
- **bottom-left**: Bottom left corner
- **bottom-center**: Bottom center (default)
- **bottom-right**: Bottom right corner

## Display Modes

- **Interactive Mode** (\`showDemo={true}\`): Shows button trigger with actual snackbar behavior
- **Static Mode** (\`showDemo={false}\`): Shows snackbar content in a contained layout for preview

## Accessibility Features

- Proper ARIA attributes for alert announcements
- Semantic color coding for different severity levels
- Screen reader friendly content structure
- Keyboard accessible close and action buttons
- Color contrast compliance in all variants
- Auto-announce severity to screen readers
- Proper focus management for interactive elements
      `
    },
    {
      name: 'Modal',
      displayName: 'Modal',
      description: 'Material UI Modal transformed with enhanced backdrop effects, semantic types, responsive sizing, and comprehensive action handling',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Modal',
      component: () => import('../components/ui/Modal'),
      muiComponent: '@mui/material/Modal',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Contained',
          props: {
            variant: 'contained',
            type: 'default',
            showDemo: false
          },
          code: '<Modal variant="contained" title="Modal Title">Content</Modal>'
        },
        {
          name: 'Outlined',
          props: {
            variant: 'outlined',
            type: 'default',
            showDemo: false
          },
          code: '<Modal variant="outlined" title="Modal Title">Content</Modal>'
        },
        {
          name: 'Minimal',
          props: {
            variant: 'minimal',
            type: 'default',
            showDemo: false
          },
          code: '<Modal variant="minimal" title="Modal Title">Content</Modal>'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            type: 'default',
            showDemo: false
          },
          code: '<Modal size="small" title="Small Modal">Content</Modal>'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            type: 'default',
            showDemo: false
          },
          code: '<Modal size="medium" title="Medium Modal">Content</Modal>'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            type: 'default',
            showDemo: false
          },
          code: '<Modal size="large" title="Large Modal">Content</Modal>'
        }
      ],

      // State examples
      states: [
        {
          name: 'Information',
          props: {
            type: 'info',
            showDemo: false
          },
          code: '<Modal type="info" title="Information">Info content</Modal>'
        },
        {
          name: 'Confirmation',
          props: {
            type: 'confirmation',
            showDemo: false
          },
          code: '<Modal type="confirmation" onConfirm={handleConfirm}>Confirm action?</Modal>'
        },
        {
          name: 'Warning',
          props: {
            type: 'warning',
            showDemo: false
          },
          code: '<Modal type="warning" title="Warning">Warning content</Modal>'
        },
        {
          name: 'Error',
          props: {
            type: 'error',
            showDemo: false
          },
          code: '<Modal type="error" title="Error">Error content</Modal>'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['contained', 'outlined', 'minimal'],
          default: 'contained',
          description: 'Visual style variant of the modal container'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting modal width, height, and padding'
        },
        type: {
          type: 'enum',
          options: ['default', 'confirmation', 'info', 'warning', 'error'],
          default: 'default',
          description: 'Semantic type affecting colors, icons, and actions'
        },
        title: {
          type: 'string',
          description: 'Title text displayed in the modal header'
        },
        children: {
          type: 'ReactNode',
          description: 'Modal content'
        },
        showCloseButton: {
          type: 'boolean',
          default: true,
          description: 'Whether to show the close button in header'
        },
        actions: {
          type: 'ReactNode',
          description: 'Custom action buttons for the modal footer'
        },
        open: {
          type: 'boolean',
          description: 'Controls modal visibility (controlled mode)'
        },
        onClose: {
          type: 'function',
          description: 'Callback fired when modal should close'
        },
        onConfirm: {
          type: 'function',
          description: 'Callback fired when confirm action is triggered'
        },
        onCancel: {
          type: 'function',
          description: 'Callback fired when cancel action is triggered'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-medium', 'font-weight-semibold',
        'font-size-sm', 'font-size-base', 'font-size-lg',
        'radius-lg', 'radius-md', 'radius-button',
        'spacing-2', 'spacing-3', 'spacing-4', 'spacing-5',
        'duration-fast', 'duration-normal',
        'ease-out',
        'shadow-lg', 'shadow-xl', 'shadow-md',
        'color-white',
        'color-border-default', 'color-border-subtle', 'color-border-strong',
        'color-text-primary', 'color-text-secondary',
        'color-gray-50', 'color-gray-100',
        'color-primary-50', 'color-primary-500', 'color-primary-600', 'color-primary-700',
        'color-success-50', 'color-success-200', 'color-success-700',
        'color-warning-50', 'color-warning-200', 'color-warning-700',
        'color-error-50', 'color-error-200', 'color-error-600', 'color-error-700'
      ],

      // Documentation
      documentation: `
# Modal Component

The Modal component has been heavily transformed from Material UI with enhanced visual effects, semantic types, and comprehensive interaction patterns.

## Major Transformations Applied

- **Enhanced Backdrop**: Blur effect with smooth transitions for modern feel
- **Semantic Types**: Info, confirmation, warning, error variants with matching colors and icons
- **Responsive Design**: Adaptive sizing that works across all screen sizes
- **Type-specific Styling**: Headers, colors, and actions change based on modal type
- **Enhanced Actions**: Smart default actions based on modal type
- **Smooth Animations**: Entrance/exit transitions with proper easing
- **Design Token Integration**: All styling uses CSS custom properties

## New Features Beyond MUI

1. **Semantic Types**: Built-in info, confirmation, warning, error types with appropriate styling
2. **Smart Actions**: Automatic action buttons based on modal type (confirm/cancel, ok, close)
3. **Enhanced Backdrop**: Blur effect with smooth fade transitions
4. **Responsive Sizing**: Mobile-friendly sizing that adapts to screen width
5. **Type Icons**: Automatic icons in headers based on modal type
6. **Header Styling**: Type-specific header background colors
7. **Action Button Variants**: Primary, secondary, and danger button styles

## Usage Examples

### Basic Modal
\`\`\`jsx
import Modal from '@/components/ui/Modal';

const [modalOpen, setModalOpen] = useState(false);

<Modal
  open={modalOpen}
  onClose={() => setModalOpen(false)}
  title="Basic Modal"
>
  <p>This is the modal content.</p>
</Modal>
\`\`\`

### Confirmation Modal
\`\`\`jsx
<Modal
  type="confirmation"
  title="Delete Item"
  open={confirmOpen}
  onConfirm={handleDelete}
  onCancel={() => setConfirmOpen(false)}
  onClose={() => setConfirmOpen(false)}
>
  Are you sure you want to delete this item? This action cannot be undone.
</Modal>
\`\`\`

### Information Modal
\`\`\`jsx
<Modal
  type="info"
  size="large"
  title="Feature Information"
  open={infoOpen}
  onClose={() => setInfoOpen(false)}
>
  <div>
    <h3>New Feature Available</h3>
    <p>We've added new functionality to help you work more efficiently.</p>
    <ul>
      <li>Enhanced performance</li>
      <li>New user interface</li>
      <li>Better accessibility</li>
    </ul>
  </div>
</Modal>
\`\`\`

### Warning Modal
\`\`\`jsx
<Modal
  type="warning"
  title="Unsaved Changes"
  open={warningOpen}
  onClose={() => setWarningOpen(false)}
  actions={
    <>
      <Button variant="outlined" onClick={handleDiscard}>
        Discard Changes
      </Button>
      <Button variant="contained" onClick={handleSave}>
        Save Changes
      </Button>
    </>
  }
>
  You have unsaved changes. Do you want to save them before leaving?
</Modal>
\`\`\`

### Error Modal
\`\`\`jsx
<Modal
  type="error"
  title="Upload Failed"
  open={errorOpen}
  onClose={() => setErrorOpen(false)}
>
  <div>
    <p>Failed to upload the file. Please check the following:</p>
    <ul>
      <li>File size should be under 10MB</li>
      <li>Only PDF, DOC, and DOCX files are allowed</li>
      <li>Check your internet connection</li>
    </ul>
  </div>
</Modal>
\`\`\`

### Custom Actions
\`\`\`jsx
<Modal
  variant="outlined"
  size="medium"
  title="Custom Actions"
  open={customOpen}
  onClose={() => setCustomOpen(false)}
  actions={
    <>
      <Button variant="outlined" onClick={handleSecondary}>
        Secondary Action
      </Button>
      <Button variant="contained" color="primary" onClick={handlePrimary}>
        Primary Action
      </Button>
      <Button variant="contained" color="error" onClick={handleDanger}>
        Danger Action
      </Button>
    </>
  }
>
  This modal has custom action buttons in the footer.
</Modal>
\`\`\`

## Modal Types

### Default
Standard modal with neutral styling and basic OK action.

### Confirmation
Used for actions that require user confirmation. Includes Cancel and Confirm buttons with appropriate styling.

### Info
For displaying information to users. Features blue accent colors and info icon.

### Warning
For cautionary messages. Features orange/yellow accent colors and warning icon.

### Error
For error messages and critical alerts. Features red accent colors and error icon.

## Responsive Behavior

- **Desktop**: Fixed widths based on size prop (320px, 480px, 640px)
- **Mobile**: Adapts to 90% viewport width with 5% margins on each side
- **Height**: Maximum 90vh with scrollable content if needed
- **Positioning**: Always centered both horizontally and vertically

## Accessibility Features

- Proper focus management with focus trap
- ESC key closes modal
- Click outside backdrop closes modal
- Screen reader friendly with proper ARIA attributes
- Keyboard navigation support for all interactive elements
- High contrast mode support
- Semantic HTML structure with proper headings

## Performance Optimizations

- Backdrop blur using CSS backdrop-filter for hardware acceleration
- Smooth transitions using CSS animations
- Proper z-index management
- Efficient re-renders with React best practices
- Lazy loading support for modal content
      `
    },
    {
      name: 'Dialog',
      displayName: 'Dialog',
      description: 'Material UI Dialog transformed with enhanced variants, semantic types, and comprehensive action handling',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Dialog',
      component: () => import('../components/ui/Dialog'),
      muiComponent: '@mui/material/Dialog',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Contained',
          props: {
            variant: 'contained',
            type: 'info',
            title: 'System Information',
            open: true,
            showDemo: true
          },
          code: '<Dialog variant="contained" type="info" title="System Information">Your system is up to date.</Dialog>'
        },
        {
          name: 'Outlined',
          props: {
            variant: 'outlined',
            type: 'confirmation',
            title: 'Confirm Action',
            open: true,
            showDemo: true
          },
          code: '<Dialog variant="outlined" type="confirmation" title="Confirm Action">Are you sure you want to proceed?</Dialog>'
        },
        {
          name: 'Minimal',
          props: {
            variant: 'minimal',
            type: 'warning',
            title: 'Warning',
            open: true,
            showDemo: true
          },
          code: '<Dialog variant="minimal" type="warning" title="Warning">This action cannot be undone.</Dialog>'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            type: 'info',
            title: 'Quick Info',
            open: true,
            showDemo: true
          },
          code: '<Dialog size="small" type="info" title="Quick Info">Brief information message.</Dialog>'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            type: 'confirmation',
            title: 'Confirm Delete',
            open: true,
            showDemo: true
          },
          code: '<Dialog size="medium" type="confirmation" title="Confirm Delete">Are you sure you want to delete this item?</Dialog>'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            type: 'error',
            title: 'System Error',
            open: true,
            showDemo: true
          },
          code: '<Dialog size="large" type="error" title="System Error">A critical error occurred. Please contact support.</Dialog>'
        }
      ],

      // State examples
      states: [
        {
          name: 'Information',
          props: {
            type: 'info',
            title: 'Feature Update',
            open: true,
            showDemo: true
          },
          code: '<Dialog type="info" title="Feature Update">New features are now available!</Dialog>'
        },
        {
          name: 'Confirmation',
          props: {
            type: 'confirmation',
            title: 'Delete Account',
            open: true,
            showDemo: true
          },
          code: '<Dialog type="confirmation" title="Delete Account" onConfirm={handleDelete}>This will permanently delete your account.</Dialog>'
        },
        {
          name: 'Warning',
          props: {
            type: 'warning',
            title: 'Unsaved Changes',
            open: true,
            showDemo: true
          },
          code: '<Dialog type="warning" title="Unsaved Changes">You have unsaved changes that will be lost.</Dialog>'
        },
        {
          name: 'Error',
          props: {
            type: 'error',
            title: 'Connection Failed',
            open: true,
            showDemo: true
          },
          code: '<Dialog type="error" title="Connection Failed">Unable to connect to the server.</Dialog>'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['contained', 'outlined', 'minimal'],
          default: 'contained',
          description: 'Visual style variant of the dialog'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting dialog width and height'
        },
        type: {
          type: 'enum',
          options: ['default', 'confirmation', 'info', 'warning', 'error'],
          default: 'default',
          description: 'Semantic type affecting colors and actions'
        },
        title: {
          type: 'string',
          description: 'Title text displayed in the dialog header'
        },
        content: {
          type: 'ReactNode',
          description: 'Dialog content'
        },
        open: {
          type: 'boolean',
          description: 'Controls dialog visibility'
        },
        onClose: {
          type: 'function',
          description: 'Callback fired when dialog should close'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-medium', 'font-weight-semibold',
        'font-size-sm', 'font-size-base', 'font-size-lg',
        'radius-lg', 'radius-md', 'radius-button',
        'spacing-4', 'spacing-5',
        'duration-fast',
        'ease-out',
        'shadow-xl', 'shadow-md'
      ],

      // Documentation
      documentation: `
# Dialog Component

The Dialog component provides modal dialogs with semantic types, enhanced styling, and comprehensive action handling for user interactions.

## Major Transformations Applied

- **Enhanced Visual Design**: Custom dialog styling with design tokens
- **Semantic Types**: Info, confirmation, warning, and error dialog types
- **Variant Options**: Contained, outlined, and minimal styling variants
- **Size Variations**: Small, medium, large with responsive sizing
- **Action Handling**: Built-in support for primary and secondary actions
- **Improved Typography**: Figtree font with proper weight variations
- **Design Token Integration**: All styling uses CSS custom properties
- **Enhanced Backdrop**: Custom backdrop effects with proper focus management

## New Features Beyond MUI

1. **Semantic Types**: Four distinct dialog types (info, confirmation, warning, error)
2. **Visual Variants**: Three styling approaches (contained, outlined, minimal)
3. **Size Options**: Small, medium, large with proper responsive behavior
4. **Action Management**: Built-in primary/secondary action button handling
5. **Enhanced Focus**: Custom focus management and keyboard navigation
6. **Smart Defaults**: Automatic action buttons based on dialog type
7. **Accessibility Enhanced**: Comprehensive ARIA attributes and keyboard support

## Usage Examples

### Basic Information Dialog
\`\`\`jsx
import Dialog from '@/components/ui/Dialog';

<Dialog
  type="info"
  title="Feature Update"
  open={infoOpen}
  onClose={() => setInfoOpen(false)}
>
  New features are now available! Check out the updated dashboard.
</Dialog>
\`\`\`

### Confirmation Dialog
\`\`\`jsx
<Dialog
  type="confirmation"
  title="Delete Item"
  open={confirmOpen}
  onConfirm={handleDelete}
  onCancel={() => setConfirmOpen(false)}
>
  Are you sure you want to delete this item? This action cannot be undone.
</Dialog>
\`\`\`

### Warning Dialog
\`\`\`jsx
<Dialog
  type="warning"
  title="Unsaved Changes"
  open={warningOpen}
  onConfirm={handleSave}
  onCancel={handleDiscard}
  confirmText="Save Changes"
  cancelText="Discard"
>
  You have unsaved changes. Do you want to save them before leaving?
</Dialog>
\`\`\`

### Error Dialog
\`\`\`jsx
<Dialog
  type="error"
  title="Upload Failed"
  open={errorOpen}
  onClose={() => setErrorOpen(false)}
>
  Failed to upload the file. Please check your internet connection and try again.
</Dialog>
\`\`\`

### Different Variants
\`\`\`jsx
{/* Contained variant (default) */}
<Dialog variant="contained" type="info" title="Information">
  Standard information dialog with contained styling.
</Dialog>

{/* Outlined variant */}
<Dialog variant="outlined" type="confirmation" title="Confirm">
  Confirmation dialog with outlined border styling.
</Dialog>

{/* Minimal variant */}
<Dialog variant="minimal" type="warning" title="Warning">
  Warning dialog with minimal styling approach.
</Dialog>
\`\`\`

### Size Variations
\`\`\`jsx
{/* Small for quick messages */}
<Dialog size="small" type="info" title="Quick Info">
  Brief information message.
</Dialog>

{/* Medium for standard dialogs */}
<Dialog size="medium" type="confirmation" title="Confirm Action">
  Standard confirmation dialog content.
</Dialog>

{/* Large for detailed content */}
<Dialog size="large" type="error" title="System Error">
  Detailed error information with troubleshooting steps.
</Dialog>
\`\`\`

### Form Dialog Example
\`\`\`jsx
function EditUserDialog({ user, open, onClose, onSave }) {
  const [formData, setFormData] = useState(user);

  return (
    <Dialog
      variant="outlined"
      size="medium"
      title="Edit User"
      open={open}
      onConfirm={() => onSave(formData)}
      onCancel={onClose}
      confirmText="Save Changes"
      cancelText="Cancel"
    >
      <TextField
        label="Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        fullWidth
      />
      <TextField
        label="Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        fullWidth
      />
    </Dialog>
  );
}
\`\`\`

## Dialog Types

### Info
- **Purpose**: Display information, announcements, or updates
- **Default Action**: "OK" button
- **Color Scheme**: Blue/primary colors

### Confirmation
- **Purpose**: Confirm user actions before proceeding
- **Default Actions**: "Cancel" and "Confirm" buttons
- **Color Scheme**: Primary colors

### Warning
- **Purpose**: Alert users about potential consequences
- **Default Actions**: "Cancel" and "Proceed" buttons
- **Color Scheme**: Orange/warning colors

### Error
- **Purpose**: Display error messages and troubleshooting
- **Default Action**: "OK" button
- **Color Scheme**: Red/error colors

## Accessibility Features

- Proper ARIA attributes for screen readers
- Focus management with focus trap inside dialog
- ESC key support for closing
- Keyboard navigation for all interactive elements
- High contrast support for all variants and types
- Semantic HTML structure with proper headings
- Auto-focus on primary action button
      `
    },
    {
      name: 'Progress',
      displayName: 'Progress',
      description: 'Material UI Progress indicators transformed with enhanced variants, both linear and circular types',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Progress',
      component: () => import('../components/ui/Progress'),
      muiComponent: '@mui/material/LinearProgress',
      transformedDate: TRANSFORMED_DATE,

      // Variant examples
      variants: [
        {
          name: 'Contained',
          props: {
            variant: 'contained',
            type: 'linear',
            value: 65,
            label: 'Download Progress',
            showValue: true
          },
          code: '<Progress variant="contained" type="linear" value={65} label="Download Progress" showValue />'
        },
        {
          name: 'Outlined',
          props: {
            variant: 'outlined',
            type: 'linear',
            value: 80,
            label: 'Upload Progress',
            showValue: true
          },
          code: '<Progress variant="outlined" type="linear" value={80} label="Upload Progress" showValue />'
        },
        {
          name: 'Minimal',
          props: {
            variant: 'minimal',
            type: 'linear',
            value: 45,
            label: 'Processing',
            showValue: true
          },
          code: '<Progress variant="minimal" type="linear" value={45} label="Processing" showValue />'
        },
      ],

      // Size examples
      sizes: [
        {
          name: 'Small',
          props: {
            size: 'small',
            type: 'linear',
            value: 30,
            showValue: true
          },
          code: '<Progress size="small" type="linear" value={30} showValue />'
        },
        {
          name: 'Medium',
          props: {
            size: 'medium',
            type: 'linear',
            value: 60,
            showValue: true
          },
          code: '<Progress size="medium" type="linear" value={60} showValue />'
        },
        {
          name: 'Large',
          props: {
            size: 'large',
            type: 'linear',
            value: 90,
            showValue: true
          },
          code: '<Progress size="large" type="linear" value={90} showValue />'
        }
      ],

      // State examples
      states: [
        {
          name: 'Linear Progress',
          props: {
            type: 'linear',
            value: 75,
            label: 'File Upload',
            showValue: true
          },
          code: '<Progress type="linear" value={75} label="File Upload" showValue />'
        },
        {
          name: 'Circular Progress',
          props: {
            type: 'circular',
            value: 85,
            showValue: true
          },
          code: '<Progress type="circular" value={85} showValue />'
        },
        {
          name: 'Indeterminate Linear',
          props: {
            type: 'linear',
            label: 'Loading...'
          },
          code: '<Progress type="linear" label="Loading..." />'
        },
        {
          name: 'Indeterminate Circular',
          props: {
            type: 'circular'
          },
          code: '<Progress type="circular" />'
        },
        {
          name: 'With Color',
          props: {
            type: 'linear',
            value: 95,
            color: 'success',
            label: 'Complete',
            showValue: true
          },
          code: '<Progress type="linear" value={95} color="success" label="Complete" showValue />'
        }
      ],

      // Props documentation
      props: {
        variant: {
          type: 'enum',
          options: ['contained', 'outlined', 'minimal'],
          default: 'contained',
          description: 'Visual style variant of the progress indicator'
        },
        size: {
          type: 'enum',
          options: ['small', 'medium', 'large'],
          default: 'medium',
          description: 'Size affecting progress dimensions'
        },
        type: {
          type: 'enum',
          options: ['linear', 'circular'],
          default: 'linear',
          description: 'Type of progress indicator'
        },
        value: {
          type: 'number',
          description: 'Progress value (0-100). Omit for indeterminate'
        },
        label: {
          type: 'string',
          description: 'Label text for the progress'
        },
        showValue: {
          type: 'boolean',
          default: false,
          description: 'Whether to show the progress percentage'
        }
      },

      // Design tokens used
      designTokens: [
        'font-family-sans',
        'font-weight-medium',
        'font-size-xs', 'font-size-sm',
        'radius-full',
        'duration-slow',
        'ease-out',
        'color-gray-100', 'color-gray-200',
        'color-primary-500', 'color-primary-600'
      ],

      // Documentation
      documentation: `
# Progress Component

The Progress component displays loading states and progress indicators with both linear and circular variants, enhanced styling, and comprehensive customization options.

## Major Transformations Applied

- **Enhanced Visual Design**: Custom progress styling with design tokens
- **Dual Types**: Both linear and circular progress indicators
- **Variant Options**: Contained, outlined, and minimal styling variants
- **Size Variations**: Small, medium, large with proper scaling
- **Value Display**: Optional percentage display with proper formatting
- **Label Support**: Text labels for better context
- **Color Options**: Support for semantic colors (primary, success, warning, error)
- **Design Token Integration**: All styling uses CSS custom properties
- **Smooth Animations**: Enhanced transitions for value changes and indeterminate states

## New Features Beyond MUI

1. **Dual Display Types**: Linear and circular progress indicators in one component
2. **Visual Variants**: Three styling approaches (contained, outlined, minimal)
3. **Size Options**: Small, medium, large with proper scaling
4. **Value Display**: Optional percentage display with custom formatting
5. **Label Integration**: Built-in label support for better UX
6. **Color Variants**: Semantic color system (primary, success, warning, error)
7. **Enhanced Animations**: Smooth transitions and indeterminate animations

## Usage Examples

### Basic Linear Progress
\`\`\`jsx
import Progress from '@/components/ui/Progress';

<Progress
  type="linear"
  value={75}
  label="Upload Progress"
  showValue
/>
\`\`\`

### Circular Progress
\`\`\`jsx
<Progress
  type="circular"
  value={85}
  showValue
/>
\`\`\`

### Indeterminate Progress
\`\`\`jsx
{/* Linear indeterminate */}
<Progress
  type="linear"
  label="Loading..."
/>

{/* Circular indeterminate */}
<Progress
  type="circular"
/>
\`\`\`

### Different Variants
\`\`\`jsx
{/* Contained variant (default) */}
<Progress variant="contained" type="linear" value={60} showValue />

{/* Outlined variant */}
<Progress variant="outlined" type="linear" value={70} showValue />

{/* Minimal variant */}
<Progress variant="minimal" type="linear" value={80} showValue />
\`\`\`

### Size Variations
\`\`\`jsx
<Progress size="small" type="linear" value={30} showValue />
<Progress size="medium" type="linear" value={60} showValue />
<Progress size="large" type="linear" value={90} showValue />
\`\`\`

### With Semantic Colors
\`\`\`jsx
<Progress type="linear" value={95} color="success" label="Complete" showValue />
<Progress type="linear" value={25} color="warning" label="Low Progress" showValue />
<Progress type="linear" value={10} color="error" label="Failed" showValue />
\`\`\`

### File Upload Example
\`\`\`jsx
function FileUploader({ file, uploadProgress }) {
  return (
    <div className="upload-item">
      <div className="file-info">
        <span className="file-name">{file.name}</span>
        <span className="file-size">{formatFileSize(file.size)}</span>
      </div>

      <Progress
        type="linear"
        value={uploadProgress}
        label="Uploading..."
        showValue
        color={uploadProgress === 100 ? 'success' : 'primary'}
      />

      {uploadProgress === 100 && (
        <div className="upload-complete">
          <CheckIcon /> Upload Complete
        </div>
      )}
    </div>
  );
}
\`\`\`

### Loading States Example
\`\`\`jsx
function DataLoader({ isLoading, progress, error }) {
  if (error) {
    return (
      <div className="error-state">
        <Progress
          type="linear"
          value={0}
          color="error"
          label="Loading Failed"
        />
        <p>Failed to load data. Please try again.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="loading-state">
        {progress !== undefined ? (
          <Progress
            type="linear"
            value={progress}
            label="Loading data..."
            showValue
          />
        ) : (
          <Progress
            type="circular"
            label="Loading..."
          />
        )}
      </div>
    );
  }

  return <DataDisplay />;
}
\`\`\`

### Dashboard Progress Cards
\`\`\`jsx
function DashboardCard({ title, current, total, color = 'primary' }) {
  const percentage = Math.round((current / total) * 100);

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {current} of {total}
        </Typography>

        <Progress
          type="circular"
          value={percentage}
          color={color}
          showValue
          size="large"
        />

        <Progress
          type="linear"
          value={percentage}
          color={color}
          variant="minimal"
        />
      </CardContent>
    </Card>
  );
}
\`\`\`

### Multi-Step Process
\`\`\`jsx
function MultiStepProgress({ currentStep, totalSteps, stepLabels }) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="multi-step-progress">
      <Typography variant="h6" gutterBottom>
        Step {currentStep} of {totalSteps}: {stepLabels[currentStep - 1]}
      </Typography>

      <Progress
        type="linear"
        value={progress}
        label={\`Progress: \${currentStep}/\${totalSteps}\`}
        showValue
        size="large"
      />

      <div className="step-indicators">
        {stepLabels.map((label, index) => (
          <div
            key={index}
            className={\`step-indicator \${index < currentStep ? 'completed' : ''}\`}
          >
            <Progress
              type="circular"
              value={index < currentStep ? 100 : 0}
              size="small"
              color={index < currentStep ? 'success' : 'default'}
            />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
\`\`\`

### System Health Example
\`\`\`jsx
function SystemHealth({ metrics }) {
  return (
    <div className="system-health">
      <h3>System Status</h3>

      {/* CPU Usage */}
      <Progress
        type="linear"
        value={metrics.cpu}
        label="CPU Usage"
        showValue
        color={metrics.cpu > 80 ? 'error' : metrics.cpu > 60 ? 'warning' : 'success'}
        variant="outlined"
      />

      {/* Memory Usage */}
      <Progress
        type="linear"
        value={metrics.memory}
        label="Memory Usage"
        showValue
        color={metrics.memory > 85 ? 'error' : metrics.memory > 70 ? 'warning' : 'success'}
        variant="outlined"
      />

      {/* Disk Usage */}
      <Progress
        type="circular"
        value={metrics.disk}
        label="Disk Usage"
        showValue
        color={metrics.disk > 90 ? 'error' : metrics.disk > 75 ? 'warning' : 'success'}
        size="large"
      />
    </div>
  );
}
\`\`\`

## Progress Types

### Linear
- **Use Case**: File uploads, downloads, step-by-step processes
- **Features**: Horizontal bar, easy to read values
- **Best For**: Showing progress through a sequence

### Circular
- **Use Case**: Loading states, compact spaces, dashboards
- **Features**: Circular indicator, space-efficient
- **Best For**: Status indicators and compact displays

## Accessibility Features

- Proper ARIA attributes for screen readers
- Progress value announced to assistive technologies
- Label text associated with progress indicator
- Color meanings conveyed through more than just color
- High contrast support for all variants
- Semantic HTML structure with proper roles
- Animation preferences respected (reduced motion)
      `
    }
  ],
  [COMPONENT_CATEGORIES.SURFACES]: [],
  [COMPONENT_CATEGORIES.UTILS]: [],
};

// Helper functions
export const getComponentsByCategory = (category) => {
  return COMPONENT_REGISTRY[category] || [];
};

export const getAllComponents = () => {
  return Object.values(COMPONENT_REGISTRY).flat();
};

export const getComponentByName = (name) => {
  return getAllComponents().find((component) => component.name === name);
};

export const updateComponentStatus = (name, status) => {
  const component = getComponentByName(name);
  if (component) {
    component.status = status;
  }
};

export const getComponentsByStatus = (status) => {
  return getAllComponents().filter((component) => component.status === status);
};

export const searchComponents = (query) => {
  const lowerQuery = query.toLowerCase();
  return getAllComponents().filter(
    (component) =>
      component.name.toLowerCase().includes(lowerQuery) ||
      component.description.toLowerCase().includes(lowerQuery),
  );
};

export const getCategoryDisplayName = (category) => {
  const names = {
    [COMPONENT_CATEGORIES.FORMS]: "Forms",
    [COMPONENT_CATEGORIES.NAVIGATION]: "Navigation",
    [COMPONENT_CATEGORIES.DATA_DISPLAY]: "Data Display",
    [COMPONENT_CATEGORIES.FEEDBACK]: "Feedback",
    [COMPONENT_CATEGORIES.SURFACES]: "Surfaces",
    [COMPONENT_CATEGORIES.UTILS]: "Utils",
  };
  return names[category] || category;
};
