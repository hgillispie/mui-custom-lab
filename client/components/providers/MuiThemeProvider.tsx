import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createCustomTheme } from '../../theme/mui-theme';

interface MuiThemeProviderProps {
  children: React.ReactNode;
}

export const MuiThemeProvider: React.FC<MuiThemeProviderProps> = ({ children }) => {
  const theme = React.useMemo(() => createCustomTheme(), []);
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;