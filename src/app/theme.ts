import { theme } from "antd";

const themeFigma = {
  token: {
    colorText: "rgba(0, 0, 0, 0.92)",
    colorTextSecondary: "rgba(0, 0, 0, 0.7)",
    colorTextTertiary: "rgba(0, 0, 0, 0.5)",
    colorBgLayout: "#f7f6eb",
    colorPrimary: "#9254de",
    fontFamily: "Source Sans 3",
    fontSize: 16,
    fontSizeLG: 18,
    fontSizeSM: 14,
    fontSizeHeading1: 40,
    fontSizeHeading2: 32,
    nutFontFamilyDisplay: "Syne",
    borderRadiusXL: 16,
  },
  components: {
    Layout: {
      headerHeight: "auto",
      headerBg: "transparent",
      footerBg: "transparent",
      headerPadding: "0",
    },
    Popover: {
      colorText: "rgba(0, 0, 0, 0.7)",
    },
    Nut: {
      boxBorderRadius: 16,
      boxPadding: 20,
      boxBgDefault: "rgba(0, 0, 0, 0.06)",
      boxBgPrimary: "#9254de",
      nutLayoutMaxWidth: 480,
      nutLayoutPaddingX: 24,
    },
  },
};

themeFigma.token.fontFamily = `"${themeFigma.token.fontFamily}"`;
themeFigma.token.nutFontFamilyDisplay = `"${themeFigma.token.nutFontFamilyDisplay}"`;

const themeFigmaDark = JSON.parse(JSON.stringify(themeFigma));

themeFigmaDark.token.colorText = "rgba(255, 255, 255, 0.65)";
themeFigmaDark.token.colorTextSecondary = "rgba(255,255, 255, 0.7)";
themeFigmaDark.token.colorTextTertiary = "rgba(255, 255, 255, 0.5)";
themeFigmaDark.token.colorBgLayout = "#000000";
themeFigmaDark.token.colorBgContainer = "#141414";
themeFigmaDark.token.colorBgElevated = "#141414";
themeFigmaDark.token.colorPrimary = "#9254de";

themeFigmaDark.components.Popover.colorText = "rgba(255,255,255, 0.7)";
themeFigmaDark.components.Nut.boxBgDefault = "rgba(255,255,255, 0.1)";
themeFigmaDark.components.Nut.boxBgPrimary = "#9254de";

export const nutTheme = {
  cssVar: true,
  hashed: false,
  devUseWarning: false,
  ...themeFigma,
};

export const nutThemeDark = {
  cssVar: true,
  hashed: false,
  devUseWarning: false,
  ...themeFigmaDark,
};
