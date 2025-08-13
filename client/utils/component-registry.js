// Component Registry - Tracks all available Material UI components and their transformation status

export const COMPONENT_CATEGORIES = {
  FORMS: 'forms',
  NAVIGATION: 'navigation',
  DATA_DISPLAY: 'data-display',
  FEEDBACK: 'feedback',
  SURFACES: 'surfaces',
  UTILS: 'utils'
};

export const TRANSFORMATION_STATUS = {
  NOT_STARTED: 'not-started',
  IN_PROGRESS: 'in-progress',
  COMPLETE: 'complete'
};

export const COMPONENT_REGISTRY = {
  [COMPONENT_CATEGORIES.FORMS]: [
    {
      name: 'Button',
      muiComponent: '@mui/material/Button',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Interactive button component with multiple variants',
      variants: ['text', 'contained', 'outlined'],
      sizes: ['small', 'medium', 'large'],
      documentation: null
    },
    {
      name: 'TextField',
      muiComponent: '@mui/material/TextField',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Text input field with validation and helper text',
      variants: ['outlined', 'filled', 'standard'],
      sizes: ['small', 'medium'],
      documentation: null
    },
    {
      name: 'Select',
      muiComponent: '@mui/material/Select',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Dropdown selection component',
      variants: ['outlined', 'filled', 'standard'],
      sizes: ['small', 'medium'],
      documentation: null
    },
    {
      name: 'Checkbox',
      muiComponent: '@mui/material/Checkbox',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Boolean input checkbox',
      variants: ['default'],
      sizes: ['small', 'medium'],
      documentation: null
    },
    {
      name: 'Radio',
      muiComponent: '@mui/material/Radio',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Radio button for single selection',
      variants: ['default'],
      sizes: ['small', 'medium'],
      documentation: null
    },
    {
      name: 'Switch',
      muiComponent: '@mui/material/Switch',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Toggle switch component',
      variants: ['default'],
      sizes: ['small', 'medium'],
      documentation: null
    },
    {
      name: 'Slider',
      muiComponent: '@mui/material/Slider',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Range slider input',
      variants: ['continuous', 'discrete'],
      sizes: ['small', 'medium'],
      documentation: null
    }
  ],
  [COMPONENT_CATEGORIES.NAVIGATION]: [
    {
      name: 'Tabs',
      muiComponent: '@mui/material/Tabs',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Tab navigation component',
      variants: ['standard', 'scrollable', 'fullWidth'],
      sizes: ['medium'],
      documentation: null
    },
    {
      name: 'Breadcrumbs',
      muiComponent: '@mui/material/Breadcrumbs',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Hierarchical navigation breadcrumbs',
      variants: ['default'],
      sizes: ['medium'],
      documentation: null
    },
    {
      name: 'Menu',
      muiComponent: '@mui/material/Menu',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Dropdown menu component',
      variants: ['default'],
      sizes: ['medium'],
      documentation: null
    },
    {
      name: 'BottomNavigation',
      muiComponent: '@mui/material/BottomNavigation',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Bottom navigation bar',
      variants: ['default'],
      sizes: ['medium'],
      documentation: null
    },
    {
      name: 'Stepper',
      muiComponent: '@mui/material/Stepper',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Step-by-step navigation',
      variants: ['horizontal', 'vertical'],
      sizes: ['medium'],
      documentation: null
    }
  ],
  [COMPONENT_CATEGORIES.DATA_DISPLAY]: [
    {
      name: 'Table',
      muiComponent: '@mui/material/Table',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Data table with sorting and pagination',
      variants: ['default', 'dense'],
      sizes: ['small', 'medium'],
      documentation: null
    },
    {
      name: 'List',
      muiComponent: '@mui/material/List',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Vertical list of items',
      variants: ['default', 'dense'],
      sizes: ['medium'],
      documentation: null
    },
    {
      name: 'Card',
      muiComponent: '@mui/material/Card',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Content container card',
      variants: ['elevation', 'outlined'],
      sizes: ['medium'],
      documentation: null
    },
    {
      name: 'Tooltip',
      muiComponent: '@mui/material/Tooltip',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Contextual tooltip overlay',
      variants: ['default'],
      sizes: ['medium'],
      documentation: null
    },
    {
      name: 'Typography',
      muiComponent: '@mui/material/Typography',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Text display with semantic variants',
      variants: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption'],
      sizes: ['medium'],
      documentation: null
    }
  ],
  [COMPONENT_CATEGORIES.FEEDBACK]: [
    {
      name: 'Alert',
      muiComponent: '@mui/material/Alert',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Alert messages with severity levels',
      variants: ['filled', 'outlined', 'standard'],
      sizes: ['medium'],
      documentation: null
    },
    {
      name: 'Dialog',
      muiComponent: '@mui/material/Dialog',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Modal dialog overlay',
      variants: ['default', 'fullScreen'],
      sizes: ['small', 'medium', 'large'],
      documentation: null
    },
    {
      name: 'Snackbar',
      muiComponent: '@mui/material/Snackbar',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Toast notification component',
      variants: ['default'],
      sizes: ['medium'],
      documentation: null
    },
    {
      name: 'Progress',
      muiComponent: '@mui/material/CircularProgress',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Loading progress indicators',
      variants: ['circular', 'linear'],
      sizes: ['small', 'medium', 'large'],
      documentation: null
    },
    {
      name: 'Skeleton',
      muiComponent: '@mui/material/Skeleton',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Loading placeholder skeleton',
      variants: ['text', 'rectangular', 'circular'],
      sizes: ['medium'],
      documentation: null
    }
  ],
  [COMPONENT_CATEGORIES.SURFACES]: [
    {
      name: 'Paper',
      muiComponent: '@mui/material/Paper',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Surface container with elevation',
      variants: ['elevation', 'outlined'],
      sizes: ['medium'],
      documentation: null
    },
    {
      name: 'Accordion',
      muiComponent: '@mui/material/Accordion',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Expandable content panels',
      variants: ['default'],
      sizes: ['medium'],
      documentation: null
    },
    {
      name: 'AppBar',
      muiComponent: '@mui/material/AppBar',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Application header bar',
      variants: ['default', 'dense'],
      sizes: ['medium'],
      documentation: null
    },
    {
      name: 'Container',
      muiComponent: '@mui/material/Container',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Layout container with max width',
      variants: ['fluid', 'fixed'],
      sizes: ['small', 'medium', 'large', 'xl'],
      documentation: null
    }
  ],
  [COMPONENT_CATEGORIES.UTILS]: [
    {
      name: 'Avatar',
      muiComponent: '@mui/material/Avatar',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'User avatar image or initials',
      variants: ['circular', 'rounded', 'square'],
      sizes: ['small', 'medium', 'large'],
      documentation: null
    },
    {
      name: 'Badge',
      muiComponent: '@mui/material/Badge',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Notification badge overlay',
      variants: ['standard', 'dot'],
      sizes: ['small', 'medium'],
      documentation: null
    },
    {
      name: 'Chip',
      muiComponent: '@mui/material/Chip',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Compact element for tags or filters',
      variants: ['filled', 'outlined'],
      sizes: ['small', 'medium'],
      documentation: null
    },
    {
      name: 'Divider',
      muiComponent: '@mui/material/Divider',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Visual content separator',
      variants: ['fullWidth', 'inset', 'middle'],
      sizes: ['medium'],
      documentation: null
    },
    {
      name: 'Icon',
      muiComponent: '@mui/material/Icon',
      status: TRANSFORMATION_STATUS.NOT_STARTED,
      description: 'Icon display component',
      variants: ['default'],
      sizes: ['small', 'medium', 'large'],
      documentation: null
    }
  ]
};

// Helper functions
export const getComponentsByCategory = (category) => {
  return COMPONENT_REGISTRY[category] || [];
};

export const getAllComponents = () => {
  return Object.values(COMPONENT_REGISTRY).flat();
};

export const getComponentByName = (name) => {
  return getAllComponents().find(component => component.name === name);
};

export const updateComponentStatus = (name, status) => {
  const component = getComponentByName(name);
  if (component) {
    component.status = status;
  }
};

export const getComponentsByStatus = (status) => {
  return getAllComponents().filter(component => component.status === status);
};

export const searchComponents = (query) => {
  const lowerQuery = query.toLowerCase();
  return getAllComponents().filter(component => 
    component.name.toLowerCase().includes(lowerQuery) ||
    component.description.toLowerCase().includes(lowerQuery)
  );
};

export const getCategoryDisplayName = (category) => {
  const names = {
    [COMPONENT_CATEGORIES.FORMS]: 'Forms',
    [COMPONENT_CATEGORIES.NAVIGATION]: 'Navigation',
    [COMPONENT_CATEGORIES.DATA_DISPLAY]: 'Data Display',
    [COMPONENT_CATEGORIES.FEEDBACK]: 'Feedback',
    [COMPONENT_CATEGORIES.SURFACES]: 'Surfaces',
    [COMPONENT_CATEGORIES.UTILS]: 'Utils'
  };
  return names[category] || category;
};
