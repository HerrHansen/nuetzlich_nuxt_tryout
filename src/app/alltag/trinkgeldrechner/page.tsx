import { Metadata } from "next";
import TipCalculator from "@/components/widget/TipCalculator";
import { Typography } from "antd/lib";
import Title from "antd/lib/typography/Title";

export const metadata: Metadata = {
  title: "Nuetzli.ch - Trinkgeldrechner",
  description: "Du bist sooo praktisch.",
};

export default function Page() {
  return (
    <div>
      <Title level={2}>Trinkgeldrechner</Title>
      <div>
        Berechne mit unserem Trinkgeldrechner schnell und einfach den Endbetrag
        deiner Rechnung!
      </div>

      <TipCalculator />
    </div>
  );
}
