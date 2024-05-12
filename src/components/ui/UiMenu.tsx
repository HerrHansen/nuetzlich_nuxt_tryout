"use client";

import { Menu, MenuProps } from "antd/lib";
import { useState } from "react";

enum UrlKeys {
  alltag = 'alltag',
  trinkgeldrechner = 'trinkgeldrechner',
  dreisatzrechner = 'dreisatzrechner',
  mengen = 'mengen',
  backen = 'backen',
  kws = 'kws',
}

const items = [
  { key: "home", label: "Home", href: "/" },
  {
    key: "alltag",
    label: "Alltag",
    href: `/${UrlKeys.alltag}`,
    children: [
      {
        key: "trinkgeldrechner",
        label: (
          <a href={`/${UrlKeys.alltag}/${UrlKeys.trinkgeldrechner}`}>
            Trinkgeld Rechner
          </a>
        ),
      },
      {
        key: "dreisatz",
        label: (
          <a href={`/${UrlKeys.alltag}/${UrlKeys.dreisatzrechner}`}>
            Dreisatz Rechner
          </a>
        ),
      },
    ],
  },
  { key: "mengen", label: "Mengen", href: `/${UrlKeys.mengen}` },
  { key: "backen", label: "Backen", href: `/${UrlKeys.backen}` },
  { key: "kws", label: "KWs", href: `/${UrlKeys.kws}` },
];

export default function UiMenu() {
  const [current, setCurrent] = useState("");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      theme="dark"
      items={items}
      style={{ flex: 1, minWidth: 0 }}
    />
  );
}
