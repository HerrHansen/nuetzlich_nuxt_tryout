import { ReactNode } from "react";
import { nutTheme, nutThemeDark } from "@/app/theme";
import { useUiStore } from "@/stores/uiStore";

export default function UiBox({
  children,
  className = "",
  type = "default",
  style = {},
}: {
  children: ReactNode;
  className?: string;
  type?: "default" | "primary";
  style?: any;
}) {
  const isDarkMode = useUiStore((state) => state.isDarkMode);

  return (
    <div
      className={className + " p-md"}
      style={{
        borderRadius: nutTheme.components.Nut.boxBorderRadius,
        padding: nutTheme.components.Nut.boxPadding,
        background:
          type === "primary"
            ? isDarkMode
              ? nutThemeDark.components.Nut.boxBgPrimary
              : nutTheme.components.Nut.boxBgPrimary
            : isDarkMode
            ? nutThemeDark.components.Nut.boxBgDefault
            : nutTheme.components.Nut.boxBgDefault,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
