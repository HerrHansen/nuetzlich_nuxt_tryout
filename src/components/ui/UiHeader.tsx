"use client";

import { Button, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useUiStore } from "@/stores/uiStore";
import Link from "next/link";

export default function UiHeader() {
  const { isDarkMode, toggleDarkMode } = useUiStore((state) => ({
    isDarkMode: state.isDarkMode,
    toggleDarkMode: state.toggleDarkMode,
  }));

  enum UrlKeys {
    rechner = "rechner",
    trinkgeldrechner = "trinkgeldrechner",
    dreisatzrechner = "dreisatzrechner",
  }

  const items: any[] = [
    {
      key: "home",
      label: (
        <Link href={`/`}>
          Übersicht
        </Link>
      ),
    },
    {
      key: UrlKeys.trinkgeldrechner,
      label: (
        <Link href={`/${UrlKeys.rechner}/${UrlKeys.trinkgeldrechner}`}>
          Trinkgeld Rechner
        </Link>
      ),
    },
    {
      key: UrlKeys.dreisatzrechner,
      label: (
        <Link href={`/${UrlKeys.rechner}/${UrlKeys.dreisatzrechner}`}>
          Dreisatz Rechner
        </Link>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "toggle",
      label: (
        <div onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </div>
      ),
    },
  ];

  return (
    <div className="p-md flex-justify-between">
      <div>
        <h1 className="inline-block nut-heading-2">nuetzli.ch</h1>
      </div>
      <div className="flex-align-items-center">
        <Dropdown menu={{ items }} placement="bottomRight">
          <Button type="text" icon={<MenuOutlined />} />
        </Dropdown>
      </div>
    </div>
  );
}
