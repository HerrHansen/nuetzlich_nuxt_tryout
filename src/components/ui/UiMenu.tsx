"use client";

import { Divider } from "antd";
import { Button } from "antd/lib";
import { useUiStore } from "@/stores/uiStore";

enum UrlKeys {
  rechner = "rechner",
  trinkgeldrechner = "trinkgeldrechner",
  dreisatzrechner = "dreisatzrechner",
}

const items: any[] = [
  { key: "home", label: "Was das hier?", href: "/" },
  {
    key: UrlKeys.trinkgeldrechner,
    label: "Trinkgeld Rechner",
    href: `/${UrlKeys.rechner}/${UrlKeys.trinkgeldrechner}`,
  },
  {
    key: UrlKeys.dreisatzrechner,
    label: "Dreisatz Rechner",
    href: `/${UrlKeys.rechner}/${UrlKeys.dreisatzrechner}`,
  },
];

export default function UiMenu() {
  const { isDarkMode, toggleDarkMode } = useUiStore((state) => ({
    isDarkMode: state.isDarkMode,
    toggleDarkMode: state.toggleDarkMode,
  }));

  return (
    <div>
      {items.map((item: any) => (
        <div key={item.key}>
          {
            <Button block className="text-left" type={"text"} href={item.href}>
              {item.label}
            </Button>
          }
        </div>
      ))}
      <Divider style={{ marginTop: 0, marginBottom: 0 }} />
      {isDarkMode ? (
        <Button
          block
          className="text-left"
          type={"text"}
          onClick={toggleDarkMode}
        >
          Light Mode
        </Button>
      ) : (
        <Button
          block
          className="text-left"
          type={"text"}
          onClick={toggleDarkMode}
        >
          Dark Mode
        </Button>
      )}
    </div>
  );
}
