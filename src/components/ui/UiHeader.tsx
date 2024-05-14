"use client";

import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export default function UiHeader() {
  function handleMenuToggle() {
    console.log("handleMenuToggle");
  }

  return (
    <div className="p-md flex-justify-between">
      <div>
        <div
          style={{
            display: "inline-block",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            border: "4px solid #000",
          }}
        ></div>
        <h1 className="inline-block">nuetzli.ch</h1>
      </div>
      <div className="flex-align-items-center">
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => handleMenuToggle()}
        />
      </div>
    </div>
  );
}
