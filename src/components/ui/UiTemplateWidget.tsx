import { Col, Row } from "antd";
import { Flex } from "antd/lib";

export default function UiTemplateWidget({
  slotWidget,
  slotBody,
}: {
  slotWidget: () => React.ReactNode;
  slotBody: () => React.ReactNode;
}) {
  return (
    <div className="pa-2">
      <Flex gap="middle" vertical>
        <div>{slotWidget()}</div>
        <div>{slotBody()}</div>
      </Flex>
    </div>
  );
}
