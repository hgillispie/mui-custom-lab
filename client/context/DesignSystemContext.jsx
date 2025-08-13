import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { COMPONENT_REGISTRY, TRANSFORMATION_STATUS, searchComponents } from '../utils/component-registry.js';

// Action types
const ActionTypes = {
  SET_SELECTED_COMPONENT: 'SET_SELECTED_COMPONENT',
  UPDATE_COMPONENT_STATUS: 'UPDATE_COMPONENT_STATUS',
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
  SET_FILTERED_COMPONENTS: 'SET_FILTERED_COMPONENTS',
  TOGGLE_CATEGORY: 'TOGGLE_CATEGORY',
  SET_THEME: 'SET_THEME',
  SET_SIDEBAR_COLLAPSED: 'SET_SIDEBAR_COLLAPSED',
  LOAD_COMPONENT_REGISTRY: 'LOAD_COMPONENT_REGISTRY'
};

// Initial state
const initialState = {
  // Component management
  componentRegistry: COMPONENT_REGISTRY,
  selectedComponent: null,
  selectedCategory: null,
  
  // UI state
  searchQuery: '',
  filteredComponents: {},
  collapsedCategories: new Set(),
  sidebarCollapsed: false,
  theme: 'light',
  
  // Transformation tracking
  transformationStatus: {},
  
  // Search and filter
  isSearchActive: false
};

// Reducer function
function designSystemReducer(state, action) {
  switch (action.type) {
    case ActionTypes.SET_SELECTED_COMPONENT:
      return {
        ...state,
        selectedComponent: action.payload.component,
        selectedCategory: action.payload.category
      };

    case ActionTypes.UPDATE_COMPONENT_STATUS:
      const updatedRegistry = { ...state.componentRegistry };
      const category = action.payload.category;
      const componentName = action.payload.componentName;
      const newStatus = action.payload.status;
      
      const componentIndex = updatedRegistry[category].findIndex(
        comp => comp.name === componentName
      );
      
      if (componentIndex !== -1) {
        updatedRegistry[category][componentIndex].status = newStatus;
      }
      
      return {
        ...state,
        componentRegistry: updatedRegistry,
        transformationStatus: {
          ...state.transformationStatus,
          [componentName]: newStatus
        }
      };

    case ActionTypes.SET_SEARCH_QUERY:
      const query = action.payload;
      let filtered = {};
      let isSearchActive = query.trim().length > 0;
      
      if (isSearchActive) {
        // Search across all categories
        Object.keys(state.componentRegistry).forEach(category => {
          const categoryComponents = state.componentRegistry[category];
          const matchingComponents = categoryComponents.filter(component =>
            component.name.toLowerCase().includes(query.toLowerCase()) ||
            component.description.toLowerCase().includes(query.toLowerCase())
          );
          
          if (matchingComponents.length > 0) {
            filtered[category] = matchingComponents;
          }
        });
      } else {
        filtered = state.componentRegistry;
      }
      
      return {
        ...state,
        searchQuery: query,
        filteredComponents: filtered,
        isSearchActive
      };

    case ActionTypes.SET_FILTERED_COMPONENTS:
      return {
        ...state,
        filteredComponents: action.payload
      };

    case ActionTypes.TOGGLE_CATEGORY:
      const newCollapsed = new Set(state.collapsedCategories);
      if (newCollapsed.has(action.payload)) {
        newCollapsed.delete(action.payload);
      } else {
        newCollapsed.add(action.payload);
      }
      
      return {
        ...state,
        collapsedCategories: newCollapsed
      };

    case ActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload
      };

    case ActionTypes.SET_SIDEBAR_COLLAPSED:
      return {
        ...state,
        sidebarCollapsed: action.payload
      };

    case ActionTypes.LOAD_COMPONENT_REGISTRY:
      return {
        ...state,
        componentRegistry: action.payload,
        filteredComponents: state.isSearchActive ? state.filteredComponents : action.payload
      };

    default:
      return state;
  }
}

// Context
const DesignSystemContext = createContext(null);

// Provider component
export function DesignSystemProvider({ children }) {
  const [state, dispatch] = useReducer(designSystemReducer, {
    ...initialState,
    filteredComponents: COMPONENT_REGISTRY
  });

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('design-system-theme');
    if (savedTheme) {
      dispatch({ type: ActionTypes.SET_THEME, payload: savedTheme });
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('design-system-theme', state.theme);
    document.documentElement.classList.toggle('dark', state.theme === 'dark');
  }, [state.theme]);

  // Action creators
  const actions = {
    selectComponent: (component, category) => {
      dispatch({
        type: ActionTypes.SET_SELECTED_COMPONENT,
        payload: { component, category }
      });
    },

    updateComponentStatus: (category, componentName, status) => {
      dispatch({
        type: ActionTypes.UPDATE_COMPONENT_STATUS,
        payload: { category, componentName, status }
      });
    },

    setSearchQuery: (query) => {
      dispatch({
        type: ActionTypes.SET_SEARCH_QUERY,
        payload: query
      });
    },

    toggleCategory: (category) => {
      dispatch({
        type: ActionTypes.TOGGLE_CATEGORY,
        payload: category
      });
    },

    setTheme: (theme) => {
      dispatch({
        type: ActionTypes.SET_THEME,
        payload: theme
      });
    },

    toggleSidebar: () => {
      dispatch({
        type: ActionTypes.SET_SIDEBAR_COLLAPSED,
        payload: !state.sidebarCollapsed
      });
    },

    loadComponentRegistry: (registry) => {
      dispatch({
        type: ActionTypes.LOAD_COMPONENT_REGISTRY,
        payload: registry
      });
    },

    // Helper methods
    getComponentsByStatus: (status) => {
      const components = [];
      Object.values(state.componentRegistry).forEach(categoryComponents => {
        components.push(...categoryComponents.filter(comp => comp.status === status));
      });
      return components;
    },

    getTransformationProgress: () => {
      const allComponents = Object.values(state.componentRegistry).flat();
      const total = allComponents.length;
      const completed = allComponents.filter(comp => comp.status === TRANSFORMATION_STATUS.COMPLETE).length;
      const inProgress = allComponents.filter(comp => comp.status === TRANSFORMATION_STATUS.IN_PROGRESS).length;
      
      return {
        total,
        completed,
        inProgress,
        notStarted: total - completed - inProgress,
        percentage: total > 0 ? Math.round((completed / total) * 100) : 0
      };
    }
  };

  const value = {
    ...state,
    ...actions
  };

  return (
    <DesignSystemContext.Provider value={value}>
      {children}
    </DesignSystemContext.Provider>
  );
}

// Custom hook to use the design system context
export function useDesignSystem() {
  const context = useContext(DesignSystemContext);
  if (!context) {
    throw new Error('useDesignSystem must be used within a DesignSystemProvider');
  }
  return context;
}

// Component status constants for easy import
export { TRANSFORMATION_STATUS, ActionTypes };
