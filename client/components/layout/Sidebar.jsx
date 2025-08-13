import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDesignSystem } from '../../context/DesignSystemContext.jsx';
import { 
  COMPONENT_CATEGORIES, 
  getCategoryDisplayName, 
  TRANSFORMATION_STATUS 
} from '../../utils/component-registry.js';

// Icons (using simple SVGs for now)
const ChevronDownIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const ChevronRightIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

const SearchIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

const StatusBadge = ({ status }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case TRANSFORMATION_STATUS.COMPLETE:
        return 'bg-green-500';
      case TRANSFORMATION_STATUS.IN_PROGRESS:
        return 'bg-yellow-500';
      case TRANSFORMATION_STATUS.NOT_STARTED:
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case TRANSFORMATION_STATUS.COMPLETE:
        return 'Complete';
      case TRANSFORMATION_STATUS.IN_PROGRESS:
        return 'In Progress';
      case TRANSFORMATION_STATUS.NOT_STARTED:
      default:
        return 'Not Started';
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${getStatusColor(status)}`} />
      <span className="text-xs text-sidebar-text-muted">{getStatusText(status)}</span>
    </div>
  );
};

const ComponentItem = ({ component, category }) => {
  const location = useLocation();
  const { selectComponent } = useDesignSystem();
  const isActive = location.pathname === `/components/${category}/${component.name.toLowerCase()}`;

  const handleClick = () => {
    selectComponent(component, category);
  };

  return (
    <Link
      to={`/components/${category}/${component.name.toLowerCase()}`}
      onClick={handleClick}
      className={`
        block px-4 py-2 ml-6 rounded-md text-sm transition-colors duration-fast
        hover:bg-sidebar-hover
        ${isActive ? 'bg-sidebar-active text-white' : 'text-sidebar-text-muted hover:text-white'}
      `}
    >
      <div className="flex items-center justify-between">
        <span>{component.name}</span>
        <StatusBadge status={component.status} />
      </div>
    </Link>
  );
};

const CategorySection = ({ category, components }) => {
  const { collapsedCategories, toggleCategory } = useDesignSystem();
  const isCollapsed = collapsedCategories.has(category);
  const categoryDisplayName = getCategoryDisplayName(category);

  return (
    <div className="mb-2">
      <button
        onClick={() => toggleCategory(category)}
        className="w-full px-4 py-2 flex items-center justify-between text-left hover:bg-sidebar-hover rounded-md transition-colors duration-fast"
      >
        <span className="text-sm font-medium text-sidebar-text">{categoryDisplayName}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-sidebar-text-muted">
            {components.length}
          </span>
          {isCollapsed ? (
            <ChevronRightIcon className="w-4 h-4 text-sidebar-text-muted" />
          ) : (
            <ChevronDownIcon className="w-4 h-4 text-sidebar-text-muted" />
          )}
        </div>
      </button>
      
      {!isCollapsed && (
        <div className="mt-1 space-y-1">
          {components.map((component) => (
            <ComponentItem
              key={component.name}
              component={component}
              category={category}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProgressSummary = () => {
  const { getTransformationProgress } = useDesignSystem();
  const progress = getTransformationProgress();

  return (
    <div className="px-4 py-3 border-t border-gray-700">
      <div className="text-xs text-sidebar-text-muted mb-2">
        Transformation Progress
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-sidebar-text">{progress.percentage}% Complete</span>
          <span className="text-xs text-sidebar-text-muted">
            {progress.completed}/{progress.total}
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-primary-500 h-2 rounded-full transition-all duration-slow"
            style={{ width: `${progress.percentage}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-sidebar-text-muted">
          <span>{progress.notStarted} Not Started</span>
          <span>{progress.inProgress} In Progress</span>
        </div>
      </div>
    </div>
  );
};

export default function Sidebar() {
  const { 
    searchQuery, 
    setSearchQuery, 
    filteredComponents, 
    isSearchActive 
  } = useDesignSystem();

  return (
    <div className="h-screen w-sidebar bg-sidebar-bg flex flex-col">
      {/* Header */}
      <div className="px-4 py-6 border-b border-gray-700">
        <h1 className="text-xl font-bold text-sidebar-text">
          Design System Hub
        </h1>
        <p className="text-sm text-sidebar-text-muted mt-1">
          Transform Material UI components
        </p>
      </div>

      {/* Search */}
      <div className="px-4 py-4 border-b border-gray-700">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sidebar-text-muted" />
          <input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-sidebar-text placeholder-sidebar-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Component Categories */}
      <div className="flex-1 overflow-y-auto py-4">
        <div className="space-y-2">
          {Object.entries(filteredComponents).map(([category, components]) => (
            <div key={category} className="mb-2">
              <div className="mt-1 space-y-1" />
            </div>
          ))}
        </div>
      </div>

      {/* Progress Summary */}
      <ProgressSummary />
    </div>
  );
}
