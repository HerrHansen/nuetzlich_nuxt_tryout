"use client";

import { Button, Popover } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import UiMenu from "./UiMenu";

export default function UiHeader() {
  function handleMenuToggle() {
    console.log("handleMenuToggle");
  }

  const [menuOpen, setMenuOpen] = useState(false);

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
        <Popover
          content={UiMenu}
          trigger="click"
          open={menuOpen}
          onOpenChange={() => setMenuOpen(!menuOpen)}
          placement="bottomRight"
        >
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => handleMenuToggle()}
          />
        </Popover>
      </div>
    </div>
  );
}
