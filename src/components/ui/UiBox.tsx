import { ReactNode } from "react";
import { theme } from "@/app/theme";

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
        borderRadius: theme.components.Nut.boxBorderRadius,
        padding: theme.components.Nut.boxPadding,
        background:
          type === "primary"
            ? theme.components.Nut.boxBgPrimary
            : theme.components.Nut.boxBgDefault,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
