import { Metadata } from "next";
import { Card } from "antd";

export const metadata: Metadata = {
  title: "Nuetzli.ch - Dreisatzrechner",
  description: "Du bist sooo praktisch.",
};

export default function Page() {
  
  const Body = () => (
    <Card>
      <h1>Dreisatzrechner</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti
        molestias unde eaque! Cum voluptate, facilis porro eaque adipisci beatae
        culpa ipsum ullam iusto a magnam mollitia, facere nihil commodi.
      </div>
    </Card>
  );

  return <Body />;
}
