import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDesignSystem } from "../../context/DesignSystemContext.jsx";
import {
  COMPONENT_CATEGORIES,
  getCategoryDisplayName,
  TRANSFORMATION_STATUS,
} from "../../utils/component-registry.js";

// Icons (using simple SVGs for now)
const ChevronDownIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);

const ChevronRightIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

const SearchIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);

const StatusBadge = ({ status }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case TRANSFORMATION_STATUS.COMPLETE:
        return "bg-[var(--color-success-500)]";
      case TRANSFORMATION_STATUS.IN_PROGRESS:
        return "bg-[var(--color-warning-500)]";
      case TRANSFORMATION_STATUS.NOT_STARTED:
      default:
        return "bg-[var(--color-gray-500)]";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case TRANSFORMATION_STATUS.COMPLETE:
        return "Complete";
      case TRANSFORMATION_STATUS.IN_PROGRESS:
        return "In Progress";
      case TRANSFORMATION_STATUS.NOT_STARTED:
      default:
        return "Not Started";
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${getStatusColor(status)}`} />
      <span className="text-xs text-sidebar-text-muted">
        {getStatusText(status)}
      </span>
    </div>
  );
};

const ComponentItem = ({ component, category }) => {
  const location = useLocation();
  const { selectComponent } = useDesignSystem();
  const isActive =
    location.pathname ===
    `/components/${category}/${component.name.toLowerCase()}`;

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
        ${isActive ? "bg-sidebar-active text-[var(--color-primary-800)]" : "text-sidebar-text-muted hover:text-[var(--color-primary-700)]"}
      `}
    >
      <span>{component.name}</span>
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
        <span className="text-sm font-medium text-[var(--color-primary-700)]">
          {categoryDisplayName}
        </span>
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

export default function Sidebar() {
  const { searchQuery, setSearchQuery, filteredComponents, isSearchActive } =
    useDesignSystem();

  return (
    <div className="min-h-screen w-sidebar bg-sidebar-bg flex flex-col border-r border-[var(--color-border-default)]">
      {/* Header */}
      <div className="px-4 py-6 border-b border-[var(--color-border-default)]">
        <h1 className="text-xl font-bold text-[var(--color-primary-700)]">
          Design System Hub
        </h1>
        <p className="text-sm text-[var(--color-primary-500)] mt-1">
          Transform Open Source components
        </p>
      </div>

      {/* Search */}
      <div className="px-4 py-4 border-b border-[var(--color-border-default)]">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sidebar-text-muted" />
          <input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[var(--color-bg-secondary)] border border-[var(--color-border-default)] rounded-md text-sidebar-text placeholder-sidebar-text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent"
          />
        </div>
      </div>

      {/* Component Categories */}
      <div className="flex-1 overflow-y-auto py-4">
        <div className="space-y-2">
          {Object.entries(filteredComponents).map(([category, components]) => (
            components.length > 0 && (
              <CategorySection
                key={category}
                category={category}
                components={components}
              />
            )
          ))}
        </div>
      </div>

    </div>
  );
}
