import React, { createContext, useContext } from 'react';

// Simple TooltipProvider that doesn't actually do anything but maintains API compatibility
interface TooltipContextType {
  // Empty for now, but could add tooltip config in future
}

const TooltipContext = createContext<TooltipContextType>({});

export const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TooltipContext.Provider value={{}}>
      {children}
    </TooltipContext.Provider>
  );
};

// Simple Tooltip component (if needed in future)
export const Tooltip: React.FC<{
  children: React.ReactNode;
  content: string;
}> = ({ children, content }) => {
  return (
    <div className="relative group inline-block">
      {children}
      <div className="absolute z-10 invisible group-hover:visible bg-gray-800 text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap">
        {content}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
          <div className="border-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export const useTooltip = () => {
  return useContext(TooltipContext);
};