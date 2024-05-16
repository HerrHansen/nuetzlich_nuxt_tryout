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

const themeFigmaDark = {
  token: {
    colorText: "rgba(255, 255, 255, 0.92)",
    colorTextSecondary: "rgba(255,255, 255, 0.7)",
    colorTextTertiary: "rgba(255, 255, 255, 0.5)",
    colorBgLayout: "#000000",
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
    Popover: {
      colorText: "rgba(255,255,255, 0.7)",
    },
    Nut: {
      boxBorderRadius: 16,
      boxPadding: 20,
      boxBgDefault: "rgba(255,255,255, 0.06)",
      boxBgPrimary: "#9254de",
      nutLayoutMaxWidth: 480,
      nutLayoutPaddingX: 24,
    },
  },
};

themeFigma.token.fontFamily = `"${themeFigma.token.fontFamily}"`;
themeFigma.token.nutFontFamilyDisplay = `"${themeFigma.token.nutFontFamilyDisplay}"`;

themeFigmaDark.token.fontFamily = `"${themeFigmaDark.token.fontFamily}"`;
themeFigmaDark.token.nutFontFamilyDisplay = `"${themeFigmaDark.token.nutFontFamilyDisplay}"`;

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
