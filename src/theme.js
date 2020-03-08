import { createMuiTheme } from '@material-ui/core/styles';

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
    },
    body2: {
      fontFamily: bodyFonts,
    },
    h1: {
      fontSize: '4rem',
    },
    h2: {
      fontSize: '2rem',
    },
    button: {
      fontFamily: bodyFonts,
    },
  },
});


export default theme;
