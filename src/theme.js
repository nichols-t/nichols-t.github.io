import { createMuiTheme } from '@material-ui/core/styles';
// import { amber, pink } from '@material-ui/core/colors';

const headerFonts = ['Open Sans',
  'Roboto',
  'Arial',
  'sans-serif',
].join(',');

const bodyFonts = ['Raleway',
  'Roboto',
  'Arial',
  'sans-serif',
].join(',');

/**
 * Object to customize the themes of Material UI.
 */
const theme = createMuiTheme({
  typography: {
    fontFamily: headerFonts,
    body1: {
      fontFamily: bodyFonts,
      marginBottom: '0.5rem',
    },
    body2: {
      fontFamily: bodyFonts,
    },
    h1: {
      fontSize: '4rem',
      marginBottom: '0.5rem',
    },
    h2: {
      fontSize: '2rem',
      marginBottom: '0.5rem',
    },
    h3: {
      fontSize: '1.5rem',
      marginBottom: '0.5rem',
      marginTop: '0.5rem',
    },
    h4: {
      fontSize: '1.2rem',
      marginBottom: '0.5rem',
      marginTop: '0.5rem',
    },
    subtitle1: {
      marginBottom: '0.5rem',
    },
    subtitle2: {
      marginBottom: '0.5rem',
    },
    button: {
      fontFamily: bodyFonts,
    },
  },
  palette: {
    primary: {
      main: '#4fc3f7',
    },
    secondary: {
      main: '#ffa000',
    },
  },
});


export default theme;
