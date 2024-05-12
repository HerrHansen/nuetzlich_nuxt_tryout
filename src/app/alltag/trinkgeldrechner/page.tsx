import { Card } from "antd/lib";
import Meta from "antd/lib/card/Meta";

export default function Page() {
  return (
    <Card hoverable style={{ width: 240 }}>
      <Meta title="Trinkgeldrechner" description="Kann los gehen?" />
    </Card>
  );
}
