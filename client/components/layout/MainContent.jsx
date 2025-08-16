import React, { useState, useEffect, Suspense } from "react";
import { useDesignSystem } from "../../context/DesignSystemContext.jsx";

// Welcome screen component
const WelcomeScreen = () => {
  const { getTransformationProgress } = useDesignSystem();
  const progress = getTransformationProgress();

  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Design System Hub
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transform Material UI components into your custom-styled components
            using design tokens and specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" />

        <div />
      </div>
    </div>
  );
};

// Live component renderer
const LiveComponentRenderer = ({ component, componentName, props, label }) => {
  const [Component, setComponent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (component && component.component) {
      component.component()
        .then((module) => {
          setComponent(() => module.default || module[componentName]);
          setError(null);
        })
        .catch((err) => {
          console.error(`Failed to load component ${componentName}:`, err);
          setError(err.message);
        });
    }
  }, [component, componentName]);

  if (error) {
    return (
      <div className="text-red-500 text-sm p-4 border border-red-200 rounded">
        Error loading component: {error}
      </div>
    );
  }

  if (!Component) {
    return (
      <div className="text-gray-400 text-sm p-4">
        Loading {componentName}...
      </div>
    );
  }

  try {
    return <Component {...props}>{label}</Component>;
  } catch (renderError) {
    return (
      <div className="text-red-500 text-sm p-2 border border-red-200 rounded">
        Render Error: {renderError.message}
      </div>
    );
  }
};

// Component view screen (when a component is selected)
const ComponentView = ({ component, category }) => {
  // Render component variants, sizes, and states
  const renderLiveExamples = () => {
    if (component.status !== 'complete') {
      return (
        <div className="p-6 text-center text-gray-500">
          <p>Live examples will be displayed here once the component is implemented.</p>
        </div>
      );
    }

    return (
      <div className="p-6">
        {/* Variants Section */}
        {component.variants && component.variants.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {component.variants.map((variant, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="mb-3 text-sm font-medium text-gray-700">
                    {variant.name}
                  </div>
                  <div className="p-4 bg-gray-50 rounded flex items-center justify-center min-h-[80px]">
                    <Suspense fallback={<div className="text-gray-400">Loading...</div>}>
                      <LiveComponentRenderer
                        component={component}
                        componentName={component.name}
                        props={variant.props}
                        label={variant.name}
                      />
                    </Suspense>
                  </div>
                  <div className="mt-2 p-2 bg-gray-100 rounded text-xs font-mono text-gray-600">
                    {variant.code}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sizes Section */}
        {component.sizes && component.sizes.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sizes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {component.sizes.map((size, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="mb-3 text-sm font-medium text-gray-700">
                    {size.name}
                  </div>
                  <div className="p-4 bg-gray-50 rounded flex items-center justify-center min-h-[80px]">
                    <Suspense fallback={<div className="text-gray-400">Loading...</div>}>
                      <LiveComponentRenderer
                        component={component}
                        componentName={component.name}
                        props={size.props}
                        label={size.name}
                      />
                    </Suspense>
                  </div>
                  <div className="mt-2 p-2 bg-gray-100 rounded text-xs font-mono text-gray-600">
                    {size.code}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* States Section */}
        {component.states && component.states.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">States</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {component.states.map((state, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="mb-3 text-sm font-medium text-gray-700">
                    {state.name}
                  </div>
                  <div className="p-4 bg-gray-50 rounded flex items-center justify-center min-h-[80px]">
                    <Suspense fallback={<div className="text-gray-400">Loading...</div>}>
                      <LiveComponentRenderer
                        component={component}
                        componentName={component.name}
                        props={state.props}
                        label={state.name}
                      />
                    </Suspense>
                  </div>
                  <div className="mt-2 p-2 bg-gray-100 rounded text-xs font-mono text-gray-600">
                    {state.code}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Props Documentation */}
        {component.props && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Props</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prop
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Options
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Default
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Object.entries(component.props).map(([prop, propData]) => (
                    <tr key={prop}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                        {prop}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {propData.type || 'string'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {propData.options ? propData.options.join(' | ') : '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {propData.default !== undefined ? String(propData.default) : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Design Tokens Used */}
        {component.designTokens && component.designTokens.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Design Tokens Used</h3>
            <div className="flex flex-wrap gap-2">
              {component.designTokens.map((token) => (
                <code key={token} className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm font-mono">
                  --color-{token}
                </code>
              ))}
            </div>
          </div>
        )}

        {/* Documentation */}
        {component.documentation && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Documentation</h3>
            <div className="prose prose-sm max-w-none bg-gray-50 rounded-lg p-4">
              <pre className="whitespace-pre-wrap text-gray-700">{component.documentation}</pre>
            </div>
          </div>
        )}
      </div>
    );
  };

  if (component.status === 'complete') {
    return (
      <div className="h-full overflow-y-auto">
        <div className="border-b border-gray-200 bg-white px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {component.displayName || component.name}
              </h1>
              <p className="text-gray-600 mt-1">{component.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                {category}
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Complete
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white">
          {renderLiveExamples()}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {component.displayName || component.name}
            </h1>
            <p className="text-gray-600 mt-1">{component.description}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
              {category}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                component.status === "complete"
                  ? "bg-green-100 text-green-800"
                  : component.status === "in-progress"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-800"
              }`}
            >
              {component.status === "not-started"
                ? "Not Started"
                : component.status === "in-progress"
                  ? "In Progress"
                  : "Complete"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6">
        <div className="max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Component Info */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Component Information
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    Material UI Component
                  </h3>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    {component.muiComponent}
                  </code>
                </div>

                {component.variants && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                      Available Variants
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {component.variants.map((variant) => (
                        <span
                          key={variant.name}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm"
                        >
                          {variant.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {component.sizes && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                      Available Sizes
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {component.sizes.map((size) => (
                        <span
                          key={size.name}
                          className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm"
                        >
                          {size.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Transformation Area */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Transformation
              </h2>

              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-gray-500 mb-4">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-4.5B6.75 8.25 4.5 10.5 4.5 13.875v2.625m15 0a3.375 3.375 0 01-3.375 3.375h-9.75a3.375 3.375 0 01-3.375-3.375m15 0v.375c0 .621-.504 1.125-1.125 1.125h-.375M4.5 17.25v.375c0 .621.504 1.125 1.125 1.125h.375"
                    />
                  </svg>
                  <p className="text-gray-600">
                    Component transformation ready
                  </p>
                </div>

                <button className="bg-[var(--color-primary-500)] text-white px-6 py-2 rounded-md hover:bg-[var(--color-primary-600)] transition-colors">
                  Start Transformation
                </button>

                <p className="text-xs text-gray-500 mt-3">
                  Will read design tokens from .builder directory
                </p>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-blue-900 mb-3">
              Transformation Workflow
            </h3>
            <div className="space-y-2 text-sm text-blue-800">
              <p>
                • Design tokens will be read from .builder directory
                specifications
              </p>
              <p>• Material UI component will be wrapped with custom styling</p>
              <p>• All original functionality and props will be preserved</p>
              <p>• Documentation and usage examples will be generated</p>
              <p>• Component will be added to the transformed library</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Placeholder screen for unimplemented routes
const PlaceholderScreen = ({ title, description }) => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center">
        <div className="text-gray-400 mb-4">
          <svg
            className="w-16 h-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">{title}</h2>
        <p className="text-gray-500 mb-4">{description}</p>
        <p className="text-sm text-gray-400">
          Continue prompting to fill in this page content
        </p>
      </div>
    </div>
  );
};

export default function MainContent({ children }) {
  const { selectedComponent, selectedCategory } = useDesignSystem();

  // If children are provided (from router), render them
  if (children) {
    return <div className="flex-1 overflow-hidden">{children}</div>;
  }

  // If a component is selected, show component view
  if (selectedComponent && selectedCategory) {
    return (
      <div className="flex-1 overflow-hidden">
        <ComponentView
          component={selectedComponent}
          category={selectedCategory}
        />
      </div>
    );
  }

  // Default to welcome screen
  return (
    <div className="flex-1 overflow-hidden bg-gray-50">
      <WelcomeScreen />
    </div>
  );
}

// Export additional components for routing
export { WelcomeScreen, ComponentView, PlaceholderScreen };
