import React from 'react';
import { styled } from '@mui/material/styles';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Chip as MuiChip,
  Stack
} from '@mui/material';
import { 
  CheckCircle as CompleteIcon,
  Schedule as ProgressIcon,
  RadioButtonUnchecked as NotStartedIcon
} from '@mui/icons-material';
import { COMPONENT_REGISTRY, COMPONENT_CATEGORIES, TRANSFORMATION_STATUS } from '../utils/component-registry';

const StyledCard = styled(Card)(({ theme }) => ({
  fontFamily: 'var(--font-family-sans)',
  transition: 'all var(--duration-fast) var(--ease-out)',
  border: '1px solid var(--color-border-default)',
  borderRadius: 'var(--radius-lg)',
  backgroundColor: 'var(--color-bg-elevated)',
  
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-lg)',
    borderColor: 'var(--color-primary-300)',
  },
}));

const StyledStatusChip = styled(MuiChip)<{ statustype: string }>(({ statustype }) => ({
  fontFamily: 'var(--font-family-sans)',
  fontWeight: 'var(--font-weight-medium)',
  fontSize: 'var(--font-size-xs)',
  
  ...(statustype === 'complete' && {
    backgroundColor: 'var(--color-success-100)',
    color: 'var(--color-success-700)',
    borderColor: 'var(--color-success-300)',
  }),
  
  ...(statustype === 'in-progress' && {
    backgroundColor: 'var(--color-warning-100)',
    color: 'var(--color-warning-700)',
    borderColor: 'var(--color-warning-300)',
  }),
  
  ...(statustype === 'not-started' && {
    backgroundColor: 'var(--color-gray-100)',
    color: 'var(--color-gray-700)',
    borderColor: 'var(--color-gray-300)',
  }),
}));

const CategoryHeader = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--font-family-sans)',
  fontWeight: 'var(--font-weight-bold)',
  fontSize: 'var(--font-size-lg)',
  color: 'var(--color-text-primary)',
  marginBottom: 'var(--spacing-3)',
  textTransform: 'capitalize',
}));

const ComponentName = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--font-family-sans)',
  fontWeight: 'var(--font-weight-semibold)',
  fontSize: 'var(--font-size-base)',
  color: 'var(--color-text-primary)',
  marginBottom: 'var(--spacing-1)',
}));

const ComponentDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--font-family-sans)',
  fontSize: 'var(--font-size-sm)',
  color: 'var(--color-text-secondary)',
  lineHeight: 1.5,
}));

const StatsCard = styled(Card)(({ theme }) => ({
  fontFamily: 'var(--font-family-sans)',
  backgroundColor: 'var(--color-primary-50)',
  borderColor: 'var(--color-primary-200)',
  marginBottom: 'var(--spacing-6)',
}));

const getStatusIcon = (status: string) => {
  switch (status) {
    case TRANSFORMATION_STATUS.COMPLETE:
      return <CompleteIcon fontSize="small" />;
    case TRANSFORMATION_STATUS.IN_PROGRESS:
      return <ProgressIcon fontSize="small" />;
    default:
      return <NotStartedIcon fontSize="small" />;
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case TRANSFORMATION_STATUS.COMPLETE:
      return 'Complete';
    case TRANSFORMATION_STATUS.IN_PROGRESS:
      return 'In Progress';
    default:
      return 'Not Started';
  }
};

const ComponentIndex: React.FC = () => {
  // Calculate stats
  const allComponents = Object.values(COMPONENT_REGISTRY).flat();
  const completeCount = allComponents.filter(c => c.status === TRANSFORMATION_STATUS.COMPLETE).length;
  const totalCount = allComponents.length;
  const completionPercent = Math.round((completeCount / totalCount) * 100);

  return (
    <Box sx={{ p: 4, maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h3" 
          sx={{ 
            fontFamily: 'var(--font-family-sans)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-text-primary)',
            mb: 2 
          }}
        >
          Design System Components
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            fontFamily: 'var(--font-family-sans)',
            color: 'var(--color-text-secondary)',
            maxWidth: '600px' 
          }}
        >
          A comprehensive Material UI design system with custom variants, design tokens, and enhanced animations. 
          Each component is transformed with our design language while maintaining MUI's accessibility and functionality.
        </Typography>
      </Box>

      {/* Stats Card */}
      <StatsCard>
        <CardContent>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontFamily: 'var(--font-family-sans)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-primary-600)' 
                  }}
                >
                  {totalCount}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontFamily: 'var(--font-family-sans)',
                    color: 'var(--color-text-secondary)' 
                  }}
                >
                  Total Components
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontFamily: 'var(--font-family-sans)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-success-600)' 
                  }}
                >
                  {completeCount}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontFamily: 'var(--font-family-sans)',
                    color: 'var(--color-text-secondary)' 
                  }}
                >
                  Complete
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontFamily: 'var(--font-family-sans)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-primary-600)' 
                  }}
                >
                  {completionPercent}%
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontFamily: 'var(--font-family-sans)',
                    color: 'var(--color-text-secondary)' 
                  }}
                >
                  Completion
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontFamily: 'var(--font-family-sans)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-primary-600)' 
                  }}
                >
                  {Object.keys(COMPONENT_CATEGORIES).length}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontFamily: 'var(--font-family-sans)',
                    color: 'var(--color-text-secondary)' 
                  }}
                >
                  Categories
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </StatsCard>

      {/* Components by Category */}
      {Object.entries(COMPONENT_REGISTRY).map(([category, components]) => (
        <Box key={category} sx={{ mb: 6 }}>
          <CategoryHeader variant="h4">
            {category.replace('-', ' ')}
          </CategoryHeader>
          
          <Grid container spacing={3}>
            {components.map((component) => (
              <Grid item xs={12} sm={6} md={4} key={component.name}>
                <StyledCard>
                  <CardContent>
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={2}>
                      <ComponentName>
                        {component.displayName}
                      </ComponentName>
                      <StyledStatusChip
                        icon={getStatusIcon(component.status)}
                        label={getStatusLabel(component.status)}
                        size="small"
                        variant="outlined"
                        statustype={component.status}
                      />
                    </Stack>
                    
                    <ComponentDescription>
                      {component.description}
                    </ComponentDescription>
                    
                    <Box mt={2}>
                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                        {component.variants && (
                          <MuiChip 
                            label={`${component.variants.length} variants`}
                            size="small"
                            sx={{ 
                              fontSize: 'var(--font-size-xs)',
                              fontFamily: 'var(--font-family-sans)',
                              backgroundColor: 'var(--color-primary-100)',
                              color: 'var(--color-primary-700)'
                            }}
                          />
                        )}
                        {component.sizes && (
                          <MuiChip 
                            label={`${component.sizes.length} sizes`}
                            size="small"
                            sx={{ 
                              fontSize: 'var(--font-size-xs)',
                              fontFamily: 'var(--font-family-sans)',
                              backgroundColor: 'var(--color-secondary-100)',
                              color: 'var(--color-secondary-700)'
                            }}
                          />
                        )}
                        {component.states && (
                          <MuiChip 
                            label={`${component.states.length} states`}
                            size="small"
                            sx={{ 
                              fontSize: 'var(--font-size-xs)',
                              fontFamily: 'var(--font-family-sans)',
                              backgroundColor: 'var(--color-success-100)',
                              color: 'var(--color-success-700)'
                            }}
                          />
                        )}
                      </Stack>
                    </Box>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}

      {/* Footer Note */}
      <Box 
        sx={{ 
          mt: 6, 
          p: 3, 
          backgroundColor: 'var(--color-gray-50)', 
          borderRadius: 'var(--radius-lg)',
          borderLeft: '4px solid var(--color-primary-500)'
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            fontFamily: 'var(--font-family-sans)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-text-primary)',
            mb: 1 
          }}
        >
          MUI Integration Guidelines
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            fontFamily: 'var(--font-family-sans)',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6 
          }}
        >
          This design system is built on top of Material UI. Use our transformed components for visual elements 
          (buttons, forms, cards, navigation). For layout components (Box, Stack, Grid), icons, and utilities, 
          use MUI directly. Each component maintains MUI's accessibility features while adding our design language.
        </Typography>
      </Box>
    </Box>
  );
};

export default ComponentIndex;
