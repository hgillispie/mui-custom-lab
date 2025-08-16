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

export const COMPONENT_REGISTRY = {
  [COMPONENT_CATEGORIES.FORMS]: [
    // 🎨 BUTTON COMPONENT - TRANSFORMED BY FUSION
    {
      name: 'Button',
      displayName: 'Button',
      description: 'Material UI Button transformed with enhanced animations and custom variants',
      status: TRANSFORMATION_STATUS.COMPLETE,
      path: '/components/ui/Button',
      component: () => import('../components/ui/Button'),
      muiComponent: '@mui/material/Button',
      transformedDate: new Date().toISOString(),
      variants: [
        { name: 'Contained', props: { variant: 'contained' }, code: '<Button variant="contained">Click Me</Button>' },
        { name: 'Outlined', props: { variant: 'outlined' }, code: '<Button variant="outlined">Click Me</Button>' },
        { name: 'Text', props: { variant: 'text' }, code: '<Button variant="text">Click Me</Button>' },
        { name: 'Gradient', props: { variant: 'gradient' }, code: '<Button variant="gradient">Gradient</Button>' },
        { name: 'Glow', props: { variant: 'glow' }, code: '<Button variant="glow">Glow Effect</Button>' }
      ],
      sizes: [
        { name: 'Small', props: { size: 'small' }, code: '<Button size="small">Small</Button>' },
        { name: 'Medium', props: { size: 'medium' }, code: '<Button size="medium">Medium</Button>' },
        { name: 'Large', props: { size: 'large' }, code: '<Button size="large">Large</Button>' }
      ],
      states: [
        { name: 'Loading', props: { loading: true }, code: '<Button loading>Loading...</Button>' },
        { name: 'Disabled', props: { disabled: true }, code: '<Button disabled>Disabled</Button>' },
        { name: 'With Icon', props: { startIcon: '📦' }, code: '<Button startIcon={<SaveIcon />}>Save</Button>' }
      ],
      props: {
        variant: { type: 'enum', options: ['contained', 'outlined', 'text', 'gradient', 'glow'], default: 'contained' },
        size: { type: 'enum', options: ['small', 'medium', 'large'], default: 'medium' },
        color: { type: 'enum', options: ['primary', 'secondary', 'error'], default: 'primary' },
        disabled: { type: 'boolean', default: false },
        loading: { type: 'boolean', default: false },
        fullWidth: { type: 'boolean', default: false },
        startIcon: { type: 'ReactNode' },
        endIcon: { type: 'ReactNode' }
      },
      designTokens: ['primary-500', 'primary-600', 'spacing-2', 'spacing-4', 'radius-md', 'shadow-md'],
      documentation: `
# Button Component

The Button component has been transformed from Material UI to match our design system with significant visual enhancements.

## Transformations Applied
- **Figtree font** applied for brand consistency
- **Enhanced animations** on hover and click
- **Custom border radius** from design tokens
- **New variants**: Gradient and Glow effects
- **Loading state** with integrated spinner
- **Smooth transitions** using cubic-bezier easing

## Usage

\`\`\`jsx
import Button from '@/components/ui/Button';

// Basic usage
<Button variant="contained" color="primary">
  Click Me
</Button>

// With loading state
<Button loading>
  Processing...
</Button>

// Gradient variant
<Button variant="gradient">
  Premium Action
</Button>

// Glow effect
<Button variant="glow">
  Magical Button
</Button>
\`\`\`

## Design Tokens Used
- Colors: \`primary-500\`, \`primary-600\`
- Spacing: \`spacing-2\`, \`spacing-4\`
- Radius: \`radius-md\`, \`radius-lg\`
- Shadows: \`shadow-md\`, \`shadow-lg\`
      `
    },
    // Example: Button component transformed by Fusion
    // {
    //   name: 'Button',
    //   displayName: 'Button',
    //   description: 'Material UI Button customized with our design system',
    //   status: TRANSFORMATION_STATUS.COMPLETE,
    //   path: '/components/ui/Button',
    //   component: () => import('../components/ui/Button'),
    //   muiComponent: '@mui/material/Button',
    //   variants: [
    //     { name: 'Contained', props: { variant: 'contained' }, code: '<Button variant="contained">Click Me</Button>' },
    //     { name: 'Outlined', props: { variant: 'outlined' }, code: '<Button variant="outlined">Click Me</Button>' },
    //     { name: 'Text', props: { variant: 'text' }, code: '<Button variant="text">Click Me</Button>' },
    //     { name: 'Gradient', props: { variant: 'gradient' }, code: '<Button variant="gradient">Gradient</Button>' }
    //   ],
    //   sizes: [
    //     { name: 'Small', props: { size: 'small' }, code: '<Button size="small">Small</Button>' },
    //     { name: 'Medium', props: { size: 'medium' }, code: '<Button size="medium">Medium</Button>' },
    //     { name: 'Large', props: { size: 'large' }, code: '<Button size="large">Large</Button>' }
    //   ],
    //   states: [
    //     { name: 'Loading', props: { loading: true }, code: '<Button loading>Loading</Button>' },
    //     { name: 'Disabled', props: { disabled: true }, code: '<Button disabled>Disabled</Button>' }
    //   ],
    //   props: {
    //     variant: { type: 'enum', options: ['contained', 'outlined', 'text', 'gradient'], default: 'contained' },
    //     size: { type: 'enum', options: ['small', 'medium', 'large'], default: 'medium' },
    //     color: { type: 'enum', options: ['primary', 'secondary', 'error'], default: 'primary' },
    //     disabled: { type: 'boolean', default: false },
    //     loading: { type: 'boolean', default: false },
    //     fullWidth: { type: 'boolean', default: false },
    //     startIcon: { type: 'ReactNode' },
    //     endIcon: { type: 'ReactNode' }
    //   },
    //   designTokens: ['primary-500', 'primary-600', 'spacing-2', 'spacing-4', 'radius-md', 'shadow-md'],
    //   documentation: `
    //     The Button component is a customized Material UI Button that uses our design system tokens.
    //     It includes additional features like loading states and a gradient variant.
    //   `
    // }
  ],
  [COMPONENT_CATEGORIES.NAVIGATION]: [],
  [COMPONENT_CATEGORIES.DATA_DISPLAY]: [],
  [COMPONENT_CATEGORIES.FEEDBACK]: [],
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
