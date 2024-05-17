"use client";

import { Layout } from "antd";

import "./globals.css";
import "@/styles/utility.css";
import "@/styles/custom.css";
import { nutTheme } from "./theme";
import UiHeader from "@/components/ui/UiHeader";
import UiFooter from "@/components/ui/UiFooter";

import AntdRegistry from "./AntdRegistry";

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="de">
    <body className="dark">
      <AntdRegistry>
        <Layout style={{ minHeight: "100svh" }}>
          <Layout.Header className="pb-lg">
            <UiHeader />
          </Layout.Header>
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
          <Layout.Footer>
            <UiFooter />
          </Layout.Footer>
        </Layout>
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
