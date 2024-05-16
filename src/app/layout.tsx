"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, Layout } from "antd";
import de from "antd/locale/de_DE";
import "./globals.css";
import "@/styles/utility.css";
import "@/styles/custom.css";
import { nutTheme, nutThemeDark } from "./theme";
import UiHeader from "@/components/ui/UiHeader";
import UiFooter from "@/components/ui/UiFooter";
import StyledComponentsRegistry from "./AntdRegistry";

const darkMode: boolean = false;

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <StyledComponentsRegistry>
    <ConfigProvider
      locale={de}
      theme={{
        ...(darkMode ? nutThemeDark : nutTheme),
      }}
    >
      <html lang="en">
        <body className="dark">
          <AntdRegistry>
            <Layout style={{ minHeight: "100svh" }}>
              <UiHeader />
              <Layout.Content
                style={{
                  paddingLeft: nutTheme.components.Nut.nutLayoutPaddingX,
                  paddingRight: nutTheme.components.Nut.nutLayoutPaddingX,
                  maxWidth: nutTheme.components.Nut.nutLayoutMaxWidth,
                  margin: "0 auto",
                }}
              >
                {children}
              </Layout.Content>
              <UiFooter />
            </Layout>
          </AntdRegistry>
        </body>
      </html>
    </ConfigProvider>
  </StyledComponentsRegistry>
);

export default RootLayout;
