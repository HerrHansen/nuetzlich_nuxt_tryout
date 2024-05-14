import { Typography } from "antd";

const themeFigma = {
  token: {
    colorText: "rgba(0, 0, 0, 0.92)",
    colorTextSecondary: "rgba(0, 0, 0, 0.7)",
    colorTextTertiary: "rgba(0, 0, 0, 0.5)",
    colorBgLayout: "#f7f6eb",
    colorPrimary: "#9254de",
    fontFamily: "'Source Sans 3'",
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
      boxBgDefault: "rgba(0, 0, 0, 0.25)",
      boxBgPrimary: "#9254de",
    },
  },
};

export const theme = {
  cssVar: true,
  hashed: false,
  ...themeFigma,
};
