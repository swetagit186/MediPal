const lightColors = {
    // primary: {
    //   main: '#036C5F',
    // },
    // // secondary: {
    // //   1: '#EEA676',
    // //   2: '#F9EDE6',
    // //   3: '#144741',
    // //   4: '#DEEEEC',
    // // },
    // secondary: {
    //   main: '#E0C2FF',
    //   light: '#F5EBFF',
    //      // dark: will be calculated from palette.secondary.main,
    //   contrastText: '#47008F',
    // },
    // neutral: {
    //   800: '#042622',
    //   700: '#304F4B',
    //   600: '#5D7471',
    //   500: '#90A19F',
    //   400: '#B6BFBE',
    //   300: '#E1E9E8',
    //   200: '#FBF7F3',
    //   100: '#FFFFFF',
    // },
    primary: {  
      main: '#3E8CFF',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#07306E',
      light: '#F9EDE6',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#47008F',
    },
  };

  const typography = {
    h1: {
      fontFamily: 'Arial',
      fontSize: '68px',
      lineHeight: '1.059em',
      fontWeight: 500,
    },
    h2: {
      fontFamily: 'Arial',
      fontSize: '38px',
      lineHeight: '1.158em',
      fontWeight: 500,
    },
    h3: {
      fontFamily: 'Arial',
      fontSize: '26px',
      lineHeight: '1.154em',
      fontWeight: 500,
    },
    h4: {
      fontFamily: 'Arial',
      fontSize: '22px',
      lineHeight: '1.273em',
      fontWeight: 500,
    },
    h5: {
      fontFamily: 'Arial',
      fontSize: '18px',
      lineHeight: '1.333em',
      fontWeight: 500,
    },
    h6: {
      fontFamily: 'Arial',
      fontSize: '16px',
      lineHeight: '1.375em',
      fontWeight: 500,
    },
  };

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // primary: {
    //   main: lightColors.primary.main,
    // },
    // secondary: {
    //   main: lightColors.secondary.main, // Set secondary color 1 as the secondary color
    // },
    // text: {
    //   primary: lightColors.neutral[800], // Set neutral 800 as the primary text color
    // },
    ...lightColors
  },
  typography: {
    h1: typography.h1,
    h2: typography.h2,
    h3: typography.h3,
    h4: typography.h4,
    h5: typography.h5,
    h6: typography.h6,
  },
});

export default theme;
