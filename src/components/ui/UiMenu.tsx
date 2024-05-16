"use client";

import { Divider } from "antd";
import { Button } from "antd/lib";
import { useState } from "react";

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
  {
    type: "divider",
  },
  {
    key: "darkMode",
    label: "Dark Mode",
  },
];

export default function UiMenu() {
  return (
    <>
      {items.map((item: any) => (
        <div key={item.key}>
          {item.type === "divider" ? (
            <Divider />
          ) : (
            <Button key={item.key} block className="text-left" type={"text"} href={item.href}>
              {item.label}
            </Button>
          )}
        </div>
      ))}
    </>
  );
}
