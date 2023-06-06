import { Roboto, Noto_Sans_KR } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const notoSansKr = Noto_Sans_KR({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["roboto", "Helvetica", "Arial", "sans-serif"],
});

const fontWeight = {
  Black: 900,
  ExtraBold: 800,
  Bold: 700,
  SemiBold: 600,
  Medium: 500,
  Regular: 400,
  Light: 300,
  ExtraLight: 200,
  Thin: 100,
};

const systemFont = [
  "--rubik-font",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    // fontFamily: roboto.style.fontFamily,
    fontFamily: [
      notoSansKr.style.fontFamily,
      roboto.style.fontFamily,
      ...systemFont,
    ].join(","),
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          "& .MuiInputBase-inputMultiline::placeholder": {
            fontSize: "1rem",
          },
          "& .MuiOutlinedInput-root": {
            "& .MuiInputBase-input": {},
            "& fieldset": { borderRadius: 8 },
            "&.Mui-focused fieldset": {
              borderWidth: 1,
            },
          },
          "& .MuiFilledInput-root": {
            borderRadius: 12,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none",
          },
          "&:active": {
            boxShadow: "none",
          },
          boxShadow: "none",
          "&.MuiButton-sizeLarge": {
            borderRadius: 12,
            padding: "12px 16px",
            height: 56,
            fontSize: "1rem",
            fontWeight: fontWeight.Bold,
          },
          "&.MuiButton-sizeMedium": {
            borderRadius: 8,
            fontWeight: fontWeight.SemiBold,
          },
          "&.MuiButton-sizeSmall": {
            borderRadius: 4,
            fontWeight: fontWeight.SemiBold,
          },
        },
      },
    },
  },
});

export default theme;
