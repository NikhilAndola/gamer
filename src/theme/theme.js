import { createTheme } from "@mui/material";

export const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      btnNew: {
        primary: {
            main: '#1E1E1E',
            darker: '#1E1E1E',
        }
      },
      neutral: {
        main: '#1E1E1E',
        contrastText: '#fff',
      },
    },
  });