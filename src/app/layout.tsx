import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, Layout } from "antd";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import de from "antd/locale/de_DE";
import "./globals.css";
import UiMenu from "@/components/ui/UiMenu";

export const metadata: Metadata = {
  title: "Nuetzli.ch",
  description: "Woohooo!",
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>
        <ConfigProvider locale={de}>
          <Layout hasSider style={{minHeight: '100svh'}}>
            <Sider>
                <UiMenu />
            </Sider>
            <Layout>
              <Content>{children}</Content>
              <Footer>© 2024 nuetzli.ch 🫶 All rights reserved.</Footer>
            </Layout>
          </Layout>
        </ConfigProvider>
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
