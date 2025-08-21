import React, { useState, Suspense } from 'react';
import {
  Box,
  Paper,
  Typography,
  Stack,
  Tabs,
  Tab,
  Chip,
  Divider,
  IconButton,
  Alert,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
  CircularProgress
} from '@mui/material';
import { 
  Code as CodeIcon, 
  Visibility as PreviewIcon,
  ContentCopy as CopyIcon,
  Check as CheckIcon,
  Palette as PaletteIcon
} from '@mui/icons-material';
import ReactMarkdown from 'react-markdown';
import { createCardContent } from '../utils/card-mock-content.jsx';
// Removed prism-react-renderer import as it's not needed for current implementation

interface ComponentViewerProps {
  component: any;
  category: string;
}

export const ComponentViewer: React.FC<ComponentViewerProps> = ({ component, category }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedState, setSelectedState] = useState(-1); // -1 for 'None' option

  // Dynamically import the component
  const DynamicComponent = React.lazy(component.component);

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const renderLiveExample = (variant: any, size: any, state: any) => {
    const props = {
      ...variant?.props,
      ...size?.props,
      ...(state ? state.props : {}), // Only apply state props if state is not null
    };

    // For Switch components, remove checked prop to allow internal state management in playground
    if (component.name === 'Switch') {
      delete props.checked;
    }

    // Handle Card mock content
    if (component.name === 'Card' && props.mockContent) {
      const mockContent = createCardContent[props.mockContent];
      if (mockContent) {
        const { mockContent: _, ...cardProps } = props; // Remove mockContent from props
        return (
          <Suspense fallback={<CircularProgress size={24} />}>
            <DynamicComponent {...cardProps}>
              {mockContent()}
            </DynamicComponent>
          </Suspense>
        );
      }
    }

    // Handle Modal - ensure it shows demo mode (trigger button)
    if (component.name === 'Modal') {
      return (
        <Suspense fallback={<CircularProgress size={24} />}>
          <DynamicComponent {...props} showDemo={true} />
        </Suspense>
      );
    }

    return (
      <Suspense fallback={<CircularProgress size={24} />}>
        <DynamicComponent {...props}>
          {['Table', 'Alert', 'AppBar', 'Snackbar', 'Modal', 'Tabs', 'Dialog', 'Radio', 'Switch', 'Badge', 'Chip', 'Avatar', 'Progress'].includes(component.name)
            ? undefined
            : (props.loading ? 'Loading...' : 'Click Me')
          }
        </DynamicComponent>
      </Suspense>
    );
  };

  return (
    <Box sx={{
      height: '100%',
      overflow: 'auto',
      bgcolor: '#f8f9fa',
      px: { xs: 1, sm: 2, md: 0 }
    }}>
      {/* Header */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, sm: 2.5, md: 3 },
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: 'white'
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              alignItems={{ xs: 'flex-start', sm: 'center' }}
            >
              <Typography
                variant="h4"
                fontWeight={600}
                sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}
              >
                {component.displayName}
              </Typography>
            </Stack>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
              {component.description}
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1}
              sx={{
                mt: 2,
                flexWrap: 'wrap',
                gap: { xs: 1, sm: 1 }
              }}
            >
              <Chip
                label={category}
                size="small"
                variant="outlined"
                sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}
              />
              <Chip
                label={`MUI: ${component.muiComponent}`}
                size="small"
                variant="outlined"
                sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}
              />
              {component.transformedDate && (
                <Chip
                  label={`Transformed: ${new Date(component.transformedDate).toLocaleDateString()}`}
                  size="small"
                  variant="outlined"
                  sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}
                />
              )}
            </Stack>
          </Box>
        </Stack>
      </Paper>

      {/* Tabs */}
      <Paper elevation={0} sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'white' }}>
        <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)}>
          <Tab icon={<PreviewIcon />} label="Preview" iconPosition="start" />
          <Tab icon={<CodeIcon />} label="Code" iconPosition="start" />
          <Tab icon={<PaletteIcon />} label="Design Tokens" iconPosition="start" />
        </Tabs>
      </Paper>

      {/* Content */}
      <Box sx={{ p: 3 }}>
        {activeTab === 0 && (
          <Stack spacing={3}>
            {/* Interactive Playground */}
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Interactive Playground
              </Typography>
              
              <Box
                sx={{
                  display: 'flex',
                  gap: { xs: 2, sm: 2, md: 3 },
                  flexDirection: { xs: 'column', lg: 'row' }
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <Stack spacing={2}>
                    {/* Variant Selector */}
                    {component.variants && (
                      <Box>
                        <Typography variant="subtitle2" gutterBottom>
                          Variant
                        </Typography>
                        <ToggleButtonGroup
                          value={selectedVariant}
                          exclusive
                          onChange={(e, v) => v !== null && setSelectedVariant(v)}
                          size="small"
                          sx={{
                            flexWrap: 'wrap',
                            '& .MuiToggleButton-root': {
                              fontSize: { xs: '0.7rem', sm: '0.75rem' },
                              px: { xs: 1, sm: 1.5 },
                              py: { xs: 0.5, sm: 0.75 }
                            }
                          }}
                        >
                          {component.variants.map((v: any, i: number) => (
                            <ToggleButton key={i} value={i}>
                              {v.name}
                            </ToggleButton>
                          ))}
                        </ToggleButtonGroup>
                      </Box>
                    )}

                    {/* Size Selector */}
                    {component.sizes && (
                      <Box>
                        <Typography variant="subtitle2" gutterBottom>
                          Size
                        </Typography>
                        <ToggleButtonGroup
                          value={selectedSize}
                          exclusive
                          onChange={(e, v) => v !== null && setSelectedSize(v)}
                          size="small"
                          sx={{
                            flexWrap: 'wrap',
                            '& .MuiToggleButton-root': {
                              fontSize: { xs: '0.7rem', sm: '0.75rem' },
                              px: { xs: 1, sm: 1.5 },
                              py: { xs: 0.5, sm: 0.75 }
                            }
                          }}
                        >
                          {component.sizes.map((s: any, i: number) => (
                            <ToggleButton key={i} value={i}>
                              {s.name}
                            </ToggleButton>
                          ))}
                        </ToggleButtonGroup>
                      </Box>
                    )}

                    {/* State Selector */}
                    {component.states && (
                      <Box>
                        <Typography variant="subtitle2" gutterBottom>
                          State
                        </Typography>
                        <ToggleButtonGroup
                          value={selectedState}
                          exclusive
                          onChange={(e, v) => v !== null && setSelectedState(v)}
                          size="small"
                          sx={{
                            flexWrap: 'wrap',
                            '& .MuiToggleButton-root': {
                              fontSize: { xs: '0.7rem', sm: '0.75rem' },
                              px: { xs: 1, sm: 1.5 },
                              py: { xs: 0.5, sm: 0.75 }
                            }
                          }}
                        >
                          <ToggleButton value={-1}>
                            None
                          </ToggleButton>
                          {component.states.map((s: any, i: number) => (
                            <ToggleButton key={i} value={i}>
                              {s.name}
                            </ToggleButton>
                          ))}
                        </ToggleButtonGroup>
                      </Box>
                    )}
                  </Stack>
                </div>

                <div style={{ flex: 1.5, minWidth: 0 }}>
                  <Box
                    sx={{
                      p: { xs: 2, sm: 3, md: 4 },
                      pt: { xs: 3, sm: 4, md: 6 },
                      bgcolor: 'background.default',
                      borderRadius: 2,
                      border: '2px dashed',
                      borderColor: 'divider',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: { xs: 200, sm: 240, md: 280 },
                      width: '100%',
                      overflow: 'hidden'
                    }}
                  >
                    {renderLiveExample(
                      component.variants?.[selectedVariant],
                      component.sizes?.[selectedSize],
                      selectedState >= 0 ? component.states?.[selectedState] : null
                    )}
                  </Box>
                </div>
              </Box>
            </Paper>

            {/* All Variants */}
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                All Variants
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  // Use single column layout for longer components
                  gridTemplateColumns: ['Table', 'Alert', 'AppBar', 'Snackbar', 'Modal', 'Tabs', 'Dialog'].includes(component.name)
                    ? '1fr'
                    : {
                        xs: '1fr',
                        sm: 'repeat(auto-fit, minmax(250px, 1fr))',
                        md: 'repeat(auto-fit, minmax(280px, 1fr))'
                      },
                  gap: { xs: 1.5, sm: 2 }
                }}
              >
                {component.variants?.map((variant: any, index: number) => (
                  <div key={index}>
                    <Box
                      sx={{
                        p: { xs: 2, sm: 2.5, md: 3 },
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1,
                        textAlign: ['Table', 'Alert', 'AppBar', 'Snackbar', 'Tabs', 'Dialog'].includes(component.name) ? 'left' : 'center',
                        minWidth: 0,
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        height: 'fit-content'
                      }}
                    >
                      <Typography variant="caption" color="text.secondary" gutterBottom display="block">
                        {variant.name}
                      </Typography>
                      <Box sx={{
                        my: { xs: 1.5, sm: 2 },
                        minWidth: 0,
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: ['Table', 'AppBar'].includes(component.name) ? 'flex-start' : 'center',
                        justifyContent: ['Table', 'Alert', 'AppBar', 'Snackbar', 'Tabs', 'Dialog'].includes(component.name) ? 'flex-start' : 'center',
                        minHeight: {
                          xs: ['Table', 'Alert', 'AppBar', 'Snackbar', 'Tabs', 'Dialog'].includes(component.name) ? 120 : 60,
                          sm: ['Table', 'Alert', 'AppBar', 'Snackbar', 'Tabs', 'Dialog'].includes(component.name) ? 150 : 80,
                          md: ['Table', 'Alert', 'AppBar', 'Snackbar', 'Tabs', 'Dialog'].includes(component.name) ? 180 : 100
                        },
                        width: '100%'
                      }}>
                        <Suspense fallback={<CircularProgress size={20} />}>
                          {(() => {
                            // Handle Card mock content in All Variants section
                            if (component.name === 'Card' && variant.props.mockContent) {
                              const mockContent = createCardContent[variant.props.mockContent];
                              if (mockContent) {
                                const { mockContent: _, ...cardProps } = variant.props; // Remove mockContent from props
                                return (
                                  <DynamicComponent {...cardProps}>
                                    {mockContent()}
                                  </DynamicComponent>
                                );
                              }
                            }

                            // For longer components, don't pass variant name as children
                            const componentProps = ['Table', 'Alert', 'AppBar', 'Snackbar', 'Modal', 'Tabs', 'Dialog', 'Radio', 'Switch', 'Badge', 'Chip', 'Avatar', 'Progress'].includes(component.name)
                              ? variant.props
                              : { ...variant.props, children: variant.name };

                            return (
                              <DynamicComponent {...componentProps} />
                            );
                          })()}
                        </Suspense>
                      </Box>
                    </Box>
                  </div>
                ))}
              </Box>
            </Paper>

            {/* Props Documentation */}
            {component.props && (
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Props
                </Typography>
                <Box
                  sx={{
                    overflowX: 'auto',
                    '& table': {
                      minWidth: { xs: '500px', md: '100%' }
                    }
                  }}
                >
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
                        <th style={{ padding: '8px 12px', textAlign: 'left', fontSize: '0.875rem' }}>Prop</th>
                        <th style={{ padding: '8px 12px', textAlign: 'left', fontSize: '0.875rem' }}>Type</th>
                        <th style={{ padding: '8px 12px', textAlign: 'left', fontSize: '0.875rem' }}>Default</th>
                        <th style={{ padding: '8px 12px', textAlign: 'left', fontSize: '0.875rem' }}>Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(component.props).map(([propName, propDef]: [string, any]) => (
                        <tr key={propName} style={{ borderBottom: '1px solid #f0f0f0' }}>
                          <td style={{ padding: '8px 12px', fontFamily: 'monospace', fontSize: '0.8rem' }}>{propName}</td>
                          <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: '#666', fontSize: '0.8rem' }}>
                            {propDef.type}
                          </td>
                          <td style={{ padding: '8px 12px', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                            {propDef.default !== undefined ? String(propDef.default) : '-'}
                          </td>
                          <td style={{ padding: '8px 12px', fontFamily: 'monospace', fontSize: '0.75rem', wordBreak: 'break-word' }}>
                            {propDef.options ? propDef.options.join(' | ') : '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Box>
              </Paper>
            )}
          </Stack>
        )}

        {activeTab === 1 && (
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Documentation & Usage
            </Typography>
            {component.documentation && (
              <Box sx={{ 
                '& h1': { fontSize: '1.5rem', fontWeight: 600, mt: 3, mb: 2 },
                '& h2': { fontSize: '1.25rem', fontWeight: 600, mt: 2, mb: 1 },
                '& h3': { fontSize: '1.1rem', fontWeight: 600, mt: 2, mb: 1 },
                '& p': { mb: 2, lineHeight: 1.7 },
                '& ul': { mb: 2 },
                '& li': { mb: 0.5 },
                '& code': { 
                  bgcolor: 'grey.100', 
                  px: 0.5, 
                  py: 0.25, 
                  borderRadius: 0.5,
                  fontFamily: 'monospace',
                  fontSize: '0.9em'
                },
                '& pre': { 
                  bgcolor: 'grey.900', 
                  color: 'white',
                  p: 2, 
                  borderRadius: 1,
                  overflow: 'auto',
                  '& code': {
                    bgcolor: 'transparent',
                    color: 'inherit',
                    p: 0
                  }
                }
              }}>
                <ReactMarkdown>{component.documentation}</ReactMarkdown>
              </Box>
            )}
          </Paper>
        )}

        {activeTab === 2 && (
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Design Tokens Used
            </Typography>
            <Alert severity="info" sx={{ mb: 3 }}>
              These design tokens are applied to transform the Material UI component
            </Alert>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              {component.designTokens?.map((token: string) => (
                <div key={token}>
                  <Box
                    sx={{
                      p: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 1,
                      bgcolor: 'grey.50'
                    }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      CSS Variable
                    </Typography>
                    <Typography variant="body2" fontFamily="monospace">
                      --color-{token}
                    </Typography>
                  </Box>
                </div>
              ))}
            </div>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default ComponentViewer;
