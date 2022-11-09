import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  warn: true,
  hash: true,
  theme: {
    colors: {
      // Shades
      "gray-10": "#F4F4F4",
      "gray-20": "#E2E2E2",
      "gray-30": "#C7C7C7",
      "gray-40": "#757575",
      "gray-50": "#555555",
      "gray-60": "#353535",
      "gray-70": "#ECECEC",
      "creme-10": "#F8F5F1",
      "creme-20": "#F4EBD9",
      "creme-30": "#EDE2CD",
      "creme-40": "#E1D1B1",
      // Neutrals
      white: "#FFFFFF",
      black: "#121212",
      "black-translucid": "#1212121a",
      // Complementary
      blue: "#009AFF",
      "blue-20": "#009aff",
      "green-10": "#25D366",
      "green-20": "#1EBB59",
      "green-subscription": "#208778",
      "green-kitchen": "#475B35",
      "orange-kitchen": "#E28759",
      // Attention
      "red-10": "#FC4F63",
      "red-20": "#C33E46",
    },
    fontFamily: {
      display: ["futura-pt", "sans-serif"],
      body: ["Roboto", "sans-serif"],
    },
    fontSize: {
      xxl: "30px",
      "xxl-mo": "24px",
      xl: "20px",
      lg: "16px",
      md: "14px",
      rg: "13px",
      sm: "12px",
      xs: "11px",
      xxs: "10px",
    },
    fontWeight: {
      bold: "700",
      semibold: "650",
      medium: "500",
      normal: "400",
      light: "350",
    },
    letterSpacing: {
      light: "-0.02rem",
      normal: "0.05rem",
      wide: "0.123rem",
    },
    lineHeight: {
      xl: "36px",
      lg: "26px",
      md: "24px",
      sm: "22px",
      xs: "20px",
    },
    screens: {
      phone: "320px",
      "phone-md": "375px",
      tablet: "768px",
      "tablet-lg": "1024px",
      notebook: "1280px",
      desktop: "1440px",
      "desktop-lg": "1920px",
    },
  }
} as Options;
