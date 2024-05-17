"use client";

import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import de from "antd/locale/de_DE";
import { ConfigProvider } from "antd";
import { useServerInsertedHTML } from "next/navigation";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import type Entity from "@ant-design/cssinjs/es/Cache";
import { useUiStore } from "@/stores/uiStore";
import { nutTheme, nutThemeDark } from "./theme";

interface StyledRegistryProps {
  children: React.ReactNode;
}

const Registry = ({ children }: StyledRegistryProps) => {
  const cache = React.useMemo<Entity>(() => createCache(), []);
  const isDarkMode = useUiStore((state) => state.isDarkMode);

  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ));
  return (
    <AntdRegistry>
      <ConfigProvider
        locale={de}
        theme={{
          ...(isDarkMode ? nutThemeDark : nutTheme),
        }}
      >
        <div>{isDarkMode}</div>
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
};

export default Registry;
