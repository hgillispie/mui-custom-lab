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
    // Components will be added here when created
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
