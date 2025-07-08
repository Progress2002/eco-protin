import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  colors: {
    primary: {},
    secondary: {},
    success: {},
    error: {},
  },
});

export default customTheme;
