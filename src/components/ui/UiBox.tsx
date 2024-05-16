import { ReactNode } from "react";
import { nutTheme } from "@/app/theme";

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
  return (
    <div
      className={className + " p-md"}
      style={{
        borderRadius: nutTheme.components.Nut.boxBorderRadius,
        padding: nutTheme.components.Nut.boxPadding,
        background:
          type === "primary"
            ? nutTheme.components.Nut.boxBgPrimary
            : nutTheme.components.Nut.boxBgDefault,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
