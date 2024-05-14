import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import de from "antd/locale/de_DE";
import "./globals.css";
import "@/styles/utility.css";
import "@/styles/custom.css";
import { theme } from "./theme";
import UiHeader from "@/components/ui/UiHeader";
import UiFooter from "@/components/ui/UiFooter";

export const metadata: Metadata = {
  title: "Nuetzli.ch",
  description: "Woohooo!",
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>
        <ConfigProvider locale={de} theme={theme}>
          <Layout style={{ minHeight: "100svh" }}>
            <UiHeader />
            <Content className="p-md">{children}</Content>
            <UiFooter />
          </Layout>
        </ConfigProvider>
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
