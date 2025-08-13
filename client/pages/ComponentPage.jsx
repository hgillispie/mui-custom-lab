import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDesignSystem } from "../context/DesignSystemContext.jsx";
import { ComponentView } from "../components/layout/MainContent.jsx";
import {
  getComponentsByCategory,
  getCategoryDisplayName,
} from "../utils/component-registry.js";

export default function ComponentPage() {
  const { category, name } = useParams();
  const { selectComponent, selectedComponent, selectedCategory } =
    useDesignSystem();

  useEffect(() => {
    if (category && name) {
      const components = getComponentsByCategory(category);
      const component = components.find(
        (comp) => comp.name.toLowerCase() === name.toLowerCase(),
      );

      if (component) {
        selectComponent(component, category);
      }
    }
  }, [category, name, selectComponent]);

  if (!selectedComponent || !selectedCategory) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Component Not Found
          </h2>
          <p className="text-gray-500">
            The component "{name}" was not found in category "
            {getCategoryDisplayName(category)}".
          </p>
        </div>
      </div>
    );
  }

  return (
    <ComponentView component={selectedComponent} category={selectedCategory} />
  );
}
