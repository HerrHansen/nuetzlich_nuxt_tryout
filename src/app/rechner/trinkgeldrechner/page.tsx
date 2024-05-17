import { Metadata } from "next";
import TipCalculator from "@/components/widget/TipCalculator/TipCalculator";

export const metadata: Metadata = {
  title: "Nuetzli.ch - Trinkgeldrechner",
  description: "Du bist sooo praktisch.",
};

export default function Page() {
  return (
    <div>
      <h1 className="nut-heading-2 mb-xs">Trinkgeldrechner</h1>
      <div className="mb-lg nut-text-copy">
        Berechne mit unserem Trinkgeldrechner schnell und einfach den Endbetrag
        deiner Rechnung!
      </div>

      <TipCalculator />
    </div>
  );
}
