// src/styles/theme.ts

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green color for primary theme
    },
    secondary: {
      main: '#388E3C', // Dark green color for secondary theme
    },
    background: {
      default: '#f0f0f0', // Light gray background color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
