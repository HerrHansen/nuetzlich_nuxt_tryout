"use client";

import UiBox from "@/components/ui/UiBox";
import { Typography } from "antd/lib";

export default function Home() {
  return (
    <main>
      <h1 className="nut-heading-1">Heading 1</h1>
      <h2 className="nut-heading-2">Heading 2</h2>
      <h3 className="nut-heading-3">Heading 3</h3>
      <h4 className="nut-heading-4">Heading 4</h4>
      <h5 className="nut-heading-5">Heading 5</h5>

      <Typography.Text code>Ant Design (code)</Typography.Text>

      <UiBox className="mb">Box Children</UiBox>

      <UiBox type={"primary"}>Box Children</UiBox>
    </main>
  );
}
