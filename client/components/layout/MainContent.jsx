import React from "react";
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

// Component view screen (when a component is selected)
const ComponentView = ({ component, category }) => {
  // Render component examples
  const renderExamples = () => {
    // If component has examples defined, render them
    if (component.examples && component.examples.length > 0) {
      return (
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {component.examples.map((example, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="mb-2 text-sm font-medium text-gray-700">
                  {example.label}
                </div>
                <div className="p-4 bg-gray-50 rounded flex items-center justify-center min-h-[80px] font-sans">
                  {/* This is where the live component would render */}
                  <div className="text-gray-400 text-sm">
                    {example.code}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Code Examples Section */}
          {component.codeExample && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Code Example</h3>
              <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm font-mono">
                  <code>{component.codeExample}</code>
                </pre>
              </div>
            </div>
          )}
          
          {/* Props Documentation */}
          {component.props && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Props</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Prop
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {Object.entries(component.props).map(([prop, type]) => (
                      <tr key={prop}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                          {prop}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {Array.isArray(type) ? type.join(' | ') : type}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {/* Add descriptions if available */}
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
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Design Tokens</h3>
              <div className="flex flex-wrap gap-2">
                {component.designTokens.map((token) => (
                  <code key={token} className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm font-mono">
                    --color-{token}
                  </code>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }
    
    return (
      <div className="p-6 text-center text-gray-500">
        <p>Examples will be displayed here once the component is implemented.</p>
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
                {component.name}
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
          {renderExamples()}
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
              {component.name}
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
                          key={variant}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm"
                        >
                          {variant}
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
                          key={size}
                          className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm"
                        >
                          {size}
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
