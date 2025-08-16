import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  TextField,
  Card,
  CardContent,
  CardActions,
  Alert,
  Chip,
  Switch,
  FormControlLabel,
  Divider,
  Button
} from '@mui/material';
import { Save as SaveIcon, Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';

export const MuiDemo: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
        Material UI Components with Design Tokens
      </Typography>
      
      <Stack spacing={4}>
        {/* Buttons Section */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Buttons
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Customized through theme with Figtree font and design tokens
          </Typography>
          
          <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 2 }}>
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="outlined" color="primary">
              Outlined
            </Button>
            <Button variant="text" color="primary">
              Text
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
          </Stack>
          
          <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 2 }}>
            <Button variant="contained" size="small">
              Small
            </Button>
            <Button variant="contained" size="medium">
              Medium
            </Button>
            <Button variant="contained" size="large">
              Large
            </Button>
          </Stack>
          
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Button variant="contained" startIcon={<SaveIcon />}>
              Save
            </Button>
            <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
              Delete
            </Button>
            <Button
              variant="contained"
              onClick={handleLoadingClick}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Click to Load'}
            </Button>
            <Button variant="contained" disabled>
              Disabled
            </Button>
          </Stack>
        </Paper>

        {/* Form Components Section */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Form Components
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Text fields and form controls with custom styling
          </Typography>
          
          <Stack spacing={3}>
            <TextField
              label="Email Address"
              variant="outlined"
              placeholder="Enter your email"
              fullWidth
            />
            
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              helperText="Must be at least 8 characters"
              fullWidth
            />
            
            <TextField
              label="Description"
              multiline
              rows={3}
              variant="outlined"
              placeholder="Tell us about yourself..."
              fullWidth
            />
            
            <FormControlLabel
              control={
                <Switch 
                  checked={checked} 
                  onChange={(e) => setChecked(e.target.checked)}
                />
              }
              label="Enable notifications"
            />
          </Stack>
        </Paper>

        {/* Cards Section */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Cards
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Card components with custom shadows and border radius
          </Typography>
          
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Standard Card
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This card uses our design tokens for shadows and border radius.
                  Hover to see the elevation change.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
                <Button size="small" variant="text">Share</Button>
              </CardActions>
            </Card>
            
            <Card 
              sx={{ 
                flex: 1,
                background: 'linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-primary-100) 100%)',
                border: '2px solid var(--color-primary-200)',
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Custom Styled Card
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This card has custom gradient background using our color tokens.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="primary">
                  Action
                </Button>
              </CardActions>
            </Card>
          </Stack>
        </Paper>

        {/* Feedback Components */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Feedback Components
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Alerts and chips with custom colors
          </Typography>
          
          <Stack spacing={2}>
            <Alert severity="success">
              This is a success alert using our color tokens!
            </Alert>
            <Alert severity="info">
              This is an info alert with custom styling.
            </Alert>
            <Alert severity="warning">
              This is a warning alert with Figtree font.
            </Alert>
            <Alert severity="error">
              This is an error alert with proper border radius.
            </Alert>
            
            <Divider sx={{ my: 2 }} />
            
            <Stack direction="row" spacing={1}>
              <Chip label="Primary" color="primary" />
              <Chip label="Secondary" color="secondary" />
              <Chip label="Success" color="success" />
              <Chip label="Error" color="error" />
              <Chip label="Clickable" onClick={() => {}} />
              <Chip label="Deletable" onDelete={() => {}} />
            </Stack>
          </Stack>
        </Paper>

        {/* Typography Section */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Typography
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            All typography uses Figtree font family
          </Typography>
          
          <Stack spacing={2}>
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="h5">Heading 5</Typography>
            <Typography variant="h6">Heading 6</Typography>
            <Typography variant="body1">
              Body 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography variant="body2">
              Body 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography variant="caption">
              Caption: This is caption text
            </Typography>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
};

export default MuiDemo;
