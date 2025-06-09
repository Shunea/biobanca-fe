import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Montserrat } from "@next/font/google";
import NextLink from "next/link";
import { forwardRef } from "react";

export const monstserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const LinkBehaviour = forwardRef(function LinkBehaviour(
  props: any,
  ref: any
) {
  return <NextLink ref={ref} {...props} />;
});

let theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#66FFF6",
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
    },
    action: {
      active: "#343D70",
    },
    info: {
      main: "#076AC9",
    },
  },
  typography: {
    fontFamily: monstserrat.style.fontFamily,
    allVariants: {
      fontWeight: 400,
    },
    body1: {
      fontSize: "16px",
    },
    subtitle1: {
      fontSize: "10px",
      fontWeight: 300,
    },
    subtitle2: {
      fontSize: "13px",
      fontWeight: 300,
      lineHeight: "16px",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
