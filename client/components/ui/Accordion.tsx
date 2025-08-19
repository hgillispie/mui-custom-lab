import React from 'react';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiTypography from '@mui/material/Typography';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';
import { 
  ExpandMore as ExpandMoreIcon,
  KeyboardArrowDown as ArrowDownIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material';

export interface AccordionItemData {
  id: string | number;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
  defaultExpanded?: boolean;
  icon?: React.ReactElement;
}

export interface AccordionProps extends Omit<MuiAccordionProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  items?: AccordionItemData[];
  allowMultiple?: boolean;
  expandIcon?: 'arrow' | 'plus' | 'chevron';
  showDemo?: boolean;
}

// HEAVILY TRANSFORMED Accordion with design tokens
const StyledAccordion = styled(MuiAccordion, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<AccordionProps>(({ theme, variant = 'contained', size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  marginBottom: 'var(--spacing-1)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  '&:before': {
    display: 'none',
  },
  
  // Variant styling
  ...(variant === 'contained' && {
    backgroundColor: 'var(--color-bg-elevated)',
    border: '1px solid var(--color-border-default)',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    
    '&:not(:last-child)': {
      marginBottom: 'var(--spacing-2)',
    },
    
    '&.Mui-expanded': {
      margin: '0 0 var(--spacing-2) 0',
      boxShadow: 'var(--shadow-md)',
    },
  }),
  
  ...(variant === 'outlined' && {
    backgroundColor: 'transparent',
    border: '1px solid var(--color-border-default)',
    borderRadius: 'var(--radius-lg)',
    
    '&:not(:last-child)': {
      marginBottom: 'var(--spacing-2)',
    },
    
    '&.Mui-expanded': {
      margin: '0 0 var(--spacing-2) 0',
      borderColor: 'var(--color-primary-300)',
      boxShadow: 'var(--shadow-sm)',
    },
  }),
  
  ...(variant === 'minimal' && {
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--color-border-subtle)',
    borderRadius: 0,
    
    '&:last-child': {
      borderBottom: 'none',
    },
    
    '&.Mui-expanded': {
      margin: 0,
      borderBottomColor: 'var(--color-primary-200)',
    },
  }),
  
  '&.Mui-disabled': {
    backgroundColor: 'var(--color-gray-50)',
    opacity: 0.6,
    cursor: 'not-allowed',
  },
}));

const StyledAccordionSummary = styled(MuiAccordionSummary, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<{ variant?: string; size?: string }>(({ theme, variant = 'contained', size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  
  // Size variations
  ...(size === 'small' && {
    minHeight: '40px',
    padding: '0 var(--spacing-2)',
    
    '& .MuiAccordionSummary-content': {
      margin: 'var(--spacing-1) 0',
    },
  }),
  
  ...(size === 'medium' && {
    minHeight: '48px',
    padding: '0 var(--spacing-3)',
    
    '& .MuiAccordionSummary-content': {
      margin: 'var(--spacing-2) 0',
    },
  }),
  
  ...(size === 'large' && {
    minHeight: '56px',
    padding: '0 var(--spacing-4)',
    
    '& .MuiAccordionSummary-content': {
      margin: 'var(--spacing-3) 0',
    },
  }),
  
  '&:hover': {
    backgroundColor: 'var(--color-primary-25)',
  },
  
  '&.Mui-expanded': {
    backgroundColor: 'var(--color-primary-50)',
    borderBottom: variant !== 'minimal' ? '1px solid var(--color-border-subtle)' : 'none',
  },
  
  '& .MuiAccordionSummary-content': {
    alignItems: 'center',
    gap: 'var(--spacing-2)',
  },
  
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: 'var(--color-text-secondary)',
    transition: 'all var(--duration-fast) var(--ease-out)',
    
    '&.Mui-expanded': {
      color: 'var(--color-primary-600)',
      transform: variant === 'minimal' ? 'rotate(90deg)' : 'rotate(180deg)',
    },
  },
}));

const StyledAccordionDetails = styled(MuiAccordionDetails, {
  shouldForwardProp: (prop) => !['size'].includes(prop),
})<{ size?: string }>(({ theme, size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  backgroundColor: 'var(--color-gray-25)',
  borderTop: '1px solid var(--color-border-subtle)',
  
  // Size variations
  ...(size === 'small' && {
    padding: 'var(--spacing-2)',
  }),
  
  ...(size === 'medium' && {
    padding: 'var(--spacing-3)',
  }),
  
  ...(size === 'large' && {
    padding: 'var(--spacing-4)',
  }),
}));

const AccordionTitle = styled(MuiTypography, {
  shouldForwardProp: (prop) => !['size'].includes(prop),
})<{ size?: string }>(({ theme, size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  fontWeight: 'var(--font-weight-semibold)',
  color: 'var(--color-text-primary)',
  
  // Size variations
  ...(size === 'small' && {
    fontSize: 'var(--font-size-sm)',
  }),
  
  ...(size === 'medium' && {
    fontSize: 'var(--font-size-base)',
  }),
  
  ...(size === 'large' && {
    fontSize: 'var(--font-size-lg)',
  }),
}));

const AccordionContent = styled(MuiBox, {
  shouldForwardProp: (prop) => !['size'].includes(prop),
})<{ size?: string }>(({ theme, size = 'medium' }) => ({
  fontFamily: 'var(--font-family-sans)',
  color: 'var(--color-text-secondary)',
  lineHeight: 1.6,
  
  // Size variations
  ...(size === 'small' && {
    fontSize: 'var(--font-size-sm)',
  }),
  
  ...(size === 'medium' && {
    fontSize: 'var(--font-size-base)',
  }),
  
  ...(size === 'large' && {
    fontSize: 'var(--font-size-lg)',
  }),
}));

const Accordion: React.FC<AccordionProps> = ({
  variant = 'contained',
  size = 'medium',
  items,
  allowMultiple = false,
  expandIcon = 'arrow',
  showDemo = false,
  children,
  ...props
}) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [multipleExpanded, setMultipleExpanded] = React.useState<Set<string | number>>(new Set());

  // Demo data
  const demoItems: AccordionItemData[] = [
    {
      id: 1,
      title: 'What is this design system?',
      content: (
        <div>
          <p>This is a comprehensive Material UI design system with custom variants, design tokens, and enhanced animations. It provides 25+ transformed components with consistent styling and enhanced functionality.</p>
          <ul>
            <li>Custom design tokens using CSS custom properties</li>
            <li>Enhanced animations and micro-interactions</li>
            <li>Comprehensive TypeScript support</li>
            <li>Accessibility compliant components</li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      title: 'How do I get started?',
      content: (
        <div>
          <p>Getting started is easy! Follow these steps:</p>
          <ol>
            <li>Install the required dependencies</li>
            <li>Import the design tokens CSS file</li>
            <li>Configure the MUI theme provider</li>
            <li>Start using the components in your application</li>
          </ol>
          <p>Check the documentation for detailed installation instructions.</p>
        </div>
      ),
    },
    {
      id: 3,
      title: 'What components are available?',
      content: (
        <div>
          <p>The design system includes components across multiple categories:</p>
          <ul>
            <li><strong>Forms:</strong> Button, TextField, Select, Checkbox, Radio, Switch, Slider</li>
            <li><strong>Navigation:</strong> AppBar, Menu, Drawer, Tabs, Breadcrumbs, Pagination</li>
            <li><strong>Data Display:</strong> Card, Table, List, Avatar, Badge, Chip</li>
            <li><strong>Feedback:</strong> Alert, Dialog, Progress, Snackbar, Tooltip</li>
          </ul>
        </div>
      ),
      defaultExpanded: true,
    },
    {
      id: 4,
      title: 'Can I customize the components?',
      content: (
        <div>
          <p>Absolutely! The design system is built with customization in mind:</p>
          <ul>
            <li>All components use CSS custom properties for easy theming</li>
            <li>Multiple variants available for each component</li>
            <li>Size variations (small, medium, large)</li>
            <li>Semantic color variants (success, warning, error)</li>
            <li>Full TypeScript support for props and customization</li>
          </ul>
        </div>
      ),
    },
  ];

  const accordionItems = items || demoItems;

  const getExpandIcon = () => {
    switch (expandIcon) {
      case 'plus':
        return <AddIcon />;
      case 'chevron':
        return <ChevronRightIcon />;
      case 'arrow':
      default:
        return <ExpandMoreIcon />;
    }
  };

  const handleChange = (panel: string | number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    if (allowMultiple) {
      const newExpanded = new Set(multipleExpanded);
      if (isExpanded) {
        newExpanded.add(panel);
      } else {
        newExpanded.delete(panel);
      }
      setMultipleExpanded(newExpanded);
    } else {
      setExpanded(isExpanded ? panel.toString() : false);
    }
  };

  if (showDemo || items) {
    return (
      <MuiBox sx={{ width: '100%' }}>
        {accordionItems.map((item) => {
          const isExpanded = allowMultiple 
            ? multipleExpanded.has(item.id)
            : expanded === item.id.toString() || item.defaultExpanded;

          return (
            <StyledAccordion
              key={item.id}
              variant={variant}
              size={size}
              expanded={isExpanded}
              onChange={handleChange(item.id)}
              disabled={item.disabled}
              {...props}
            >
              <StyledAccordionSummary
                variant={variant}
                size={size}
                expandIcon={getExpandIcon()}
                aria-controls={`panel${item.id}-content`}
                id={`panel${item.id}-header`}
              >
                {item.icon && (
                  <MuiBox sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                    {item.icon}
                  </MuiBox>
                )}
                <AccordionTitle size={size}>
                  {item.title}
                </AccordionTitle>
              </StyledAccordionSummary>
              <StyledAccordionDetails size={size}>
                <AccordionContent size={size}>
                  {item.content}
                </AccordionContent>
              </StyledAccordionDetails>
            </StyledAccordion>
          );
        })}
      </MuiBox>
    );
  }

  return (
    <MuiBox sx={{ width: '100%' }}>
      {children}
    </MuiBox>
  );
};

export default Accordion;
