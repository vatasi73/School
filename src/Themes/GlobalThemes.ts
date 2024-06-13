import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"M PLUS Rounded 1c", sans-serif',
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: '"M PLUS Rounded 1c", sans-serif',
        },
      },
    },
  },
});

export default theme;
