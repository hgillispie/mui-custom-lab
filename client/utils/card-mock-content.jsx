import React from 'react';
import { Typography, Button } from '@mui/material';
import { CardHeader, CardContent, CardActions } from '../components/ui/Card';

// Factory functions that return JSX content for Card variants
export const createCardContent = {
  default: () => (
    <>
      <CardHeader title="Project Update" subheader="March 15, 2024" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          The quarterly review meeting has been scheduled for next week. All team members are expected to present their progress reports.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <Button size="small">Share</Button>
      </CardActions>
    </>
  ),

  outlined: () => (
    <>
      <CardHeader title="Feature Request" subheader="High Priority" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Users have requested dark mode support. This enhancement will improve accessibility and user experience.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">Approve</Button>
        <Button size="small">Review</Button>
      </CardActions>
    </>
  ),

  elevated: () => (
    <>
      <CardHeader title="Analytics Report" subheader="Weekly Summary" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Traffic increased by 25% this week with 1,234 new users. The conversion rate improved to 3.2%.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Details</Button>
        <Button size="small">Export</Button>
      </CardActions>
    </>
  ),

  gradient: () => (
    <>
      <CardHeader title="Premium Feature" subheader="Upgrade Required" />
      <CardContent>
        <Typography variant="body2" style={{ color: 'inherit' }}>
          Unlock advanced analytics, custom themes, and priority support with our premium plan.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>Upgrade</Button>
        <Button size="small" style={{ color: 'inherit' }}>Learn More</Button>
      </CardActions>
    </>
  ),

  glass: () => (
    <>
      <CardHeader title="Modern Design" subheader="Glassmorphism Effect" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Experience the latest in design trends with our beautiful glass morphism effects and backdrop blur.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Explore</Button>
        <Button size="small">Download</Button>
      </CardActions>
    </>
  ),

  success: () => (
    <>
      <CardHeader title="Deployment Successful" subheader="Version 2.1.0" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Your application has been successfully deployed to production. All systems are running smoothly.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="success">View Live</Button>
        <Button size="small">Rollback</Button>
      </CardActions>
    </>
  ),

  warning: () => (
    <>
      <CardHeader title="Server Maintenance" subheader="Scheduled Downtime" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Planned maintenance will occur tonight from 2:00 AM to 4:00 AM. Services may be temporarily unavailable.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="warning">Schedule</Button>
        <Button size="small">Postpone</Button>
      </CardActions>
    </>
  ),

  error: () => (
    <>
      <CardHeader title="Database Error" subheader="Connection Failed" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Unable to establish connection to the database. Please check your network settings and try again.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="error">Retry</Button>
        <Button size="small">Contact Support</Button>
      </CardActions>
    </>
  ),

  // Size variants
  small: () => (
    <>
      <CardHeader title="Quick Note" subheader="Brief update" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Short message or notification content.
        </Typography>
      </CardContent>
    </>
  ),

  medium: () => (
    <>
      <CardHeader title="Standard Card" subheader="Regular content" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This is the default card size with moderate content and standard spacing for most use cases.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Action</Button>
      </CardActions>
    </>
  ),

  large: () => (
    <>
      <CardHeader title="Detailed Information" subheader="Extended content area" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Large cards provide ample space for detailed content, multiple paragraphs, or complex layouts. They work well for feature showcases, detailed descriptions, or comprehensive data displays.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Primary Action</Button>
        <Button size="small">Secondary</Button>
      </CardActions>
    </>
  ),

  // Interactive variant
  interactive: () => (
    <>
      <CardHeader title="Clickable Card" subheader="Interactive experience" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This card responds to clicks with smooth animations. Try hovering and clicking to see the interactive effects.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Click Me!</Button>
      </CardActions>
    </>
  )
};
