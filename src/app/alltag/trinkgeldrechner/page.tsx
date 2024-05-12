import { Card } from "antd/lib";
import Meta from "antd/lib/card/Meta";
import UiTemplateWidget from "@/components/ui/UiTemplateWidget";

export default function Page() {
  const Widget = () => (
    <Card hoverable style={{ width: 240 }}>
      <Meta title="Trinkgeldrechner" description="Kann los gehen?" />
    </Card>
  );

  const Body = () => (
    <>
      <div>
        <h1>Trinkgeldrechner</h1>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti
        molestias unde eaque! Cum voluptate, facilis porro eaque adipisci beatae
        culpa ipsum ullam iusto a magnam mollitia, facere nihil commodi.
      </div>
    </>
  );

  return <UiTemplateWidget slotWidget={Widget} slotBody={Body} />;
}
