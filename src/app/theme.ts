const themeFigma: any = {
  token: {
    colorText: "rgba(0, 0, 0, 0.92)",
    colorLink: "rgba(0, 0, 50, 0.92)",
    colorTextSecondary: "rgba(0, 0, 0, 0.7)",
    // colorBgContainer: "#ffffff",
    colorBgLayout: "#f7f6eb",
    // colorBgElevated: "#E8E7DD",
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
    Nut: {
      boxBorderRadius: 16,
      boxPadding: 20,
      boxBgDefault: "#E8E7DD",
      boxBgPrimary: "#9254de",
      nutLayoutMaxWidth: 480,
      nutLayoutPaddingX: 24,
    },
    Button: {
      colorText: "rgba(0, 0, 0, 0.92)",
    }
  },
};

themeFigma.token.fontFamily = `"${themeFigma.token.fontFamily}"`;
themeFigma.token.nutFontFamilyDisplay = `"${themeFigma.token.nutFontFamilyDisplay}"`;

export const nutTheme = {
  cssVar: true,
  ...themeFigma,
};

const _nutThemeDark = JSON.parse(JSON.stringify(nutTheme));

_nutThemeDark.token.colorBgLayout = "#000000";
_nutThemeDark.token.colorText = "rgba(255, 255, 255, 0.92)";
_nutThemeDark.components.Button.colorText = "rgba(255, 255, 255, 0.92)";
_nutThemeDark.token.colorTextSecondary = "rgba(255, 255, 255, 0.7)";
_nutThemeDark.components.Nut.boxBgDefault = "rgba(255, 255, 255, 0.12)";

export const nutThemeDark = _nutThemeDark;
