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
  const [selectedState, setSelectedState] = useState(0);

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
      ...state?.props,
    };

    return (
      <Suspense fallback={<CircularProgress size={24} />}>
        <DynamicComponent {...props}>
          {props.loading ? 'Loading...' : 'Click Me'}
        </DynamicComponent>
      </Suspense>
    );
  };

  return (
    <Box sx={{ height: '100%', overflow: 'auto', bgcolor: '#f8f9fa' }}>
      {/* Header */}
      <Paper 
        elevation={0}
        sx={{ 
          p: 3, 
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: 'white'
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h4" fontWeight={600}>
                {component.displayName}
              </Typography>
              <Chip 
                label="Transformed" 
                color="success" 
                size="small"
                icon={<CheckIcon />}
              />
            </Stack>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
              {component.description}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <Chip label={category} size="small" variant="outlined" />
              <Chip label={`MUI: ${component.muiComponent}`} size="small" variant="outlined" />
              {component.transformedDate && (
                <Chip 
                  label={`Transformed: ${new Date(component.transformedDate).toLocaleDateString()}`} 
                  size="small" 
                  variant="outlined" 
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
              
              <div style={{ display: 'flex', gap: '24px', flexDirection: window.innerWidth < 768 ? 'column' : 'row' }}>
                <div style={{ flex: 1 }}>
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
                        >
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

                <div style={{ flex: 1 }}>
                  <Box 
                    sx={{ 
                      p: 4, 
                      bgcolor: 'background.default',
                      borderRadius: 2,
                      border: '2px dashed',
                      borderColor: 'divider',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: 200
                    }}
                  >
                    {renderLiveExample(
                      component.variants?.[selectedVariant],
                      component.sizes?.[selectedSize],
                      component.states?.[selectedState]
                    )}
                  </Box>
                </div>
              </div>
            </Paper>

            {/* All Variants */}
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                All Variants
              </Typography>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                {component.variants?.map((variant: any, index: number) => (
                  <div key={index}>
                    <Box
                      sx={{
                        p: 3,
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1,
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="caption" color="text.secondary" gutterBottom display="block">
                        {variant.name}
                      </Typography>
                      <Box sx={{ my: 2 }}>
                        <Suspense fallback={<CircularProgress size={20} />}>
                          <DynamicComponent {...variant.props}>
                            {variant.name}
                          </DynamicComponent>
                        </Suspense>
                      </Box>
                      <Box sx={{ position: 'relative', mt: 2 }}>
                        <Typography
                          variant="caption"
                          component="pre"
                          sx={{
                            bgcolor: 'grey.100',
                            p: 1,
                            borderRadius: 1,
                            overflow: 'auto',
                            fontSize: '0.7rem',
                          }}
                        >
                          {variant.code}
                        </Typography>
                        <IconButton
                          size="small"
                          sx={{ position: 'absolute', top: 4, right: 4 }}
                          onClick={() => handleCopyCode(variant.code, `variant-${index}`)}
                        >
                          {copiedCode === `variant-${index}` ? <CheckIcon fontSize="small" /> : <CopyIcon fontSize="small" />}
                        </IconButton>
                      </Box>
                    </Box>
                  </div>
                ))}
              </div>
            </Paper>

            {/* Props Documentation */}
            {component.props && (
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Props
                </Typography>
                <Box sx={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
                        <th style={{ padding: '12px', textAlign: 'left' }}>Prop</th>
                        <th style={{ padding: '12px', textAlign: 'left' }}>Type</th>
                        <th style={{ padding: '12px', textAlign: 'left' }}>Default</th>
                        <th style={{ padding: '12px', textAlign: 'left' }}>Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(component.props).map(([propName, propDef]: [string, any]) => (
                        <tr key={propName} style={{ borderBottom: '1px solid #f0f0f0' }}>
                          <td style={{ padding: '12px', fontFamily: 'monospace' }}>{propName}</td>
                          <td style={{ padding: '12px', fontFamily: 'monospace', color: '#666' }}>
                            {propDef.type}
                          </td>
                          <td style={{ padding: '12px', fontFamily: 'monospace' }}>
                            {propDef.default !== undefined ? String(propDef.default) : '-'}
                          </td>
                          <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '0.85rem' }}>
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
