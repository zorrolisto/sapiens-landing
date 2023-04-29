import { useState } from "react";
import { HiXMark } from "react-icons/hi2";

type Plan = {
  name: string;
  features: string[];
};

const featuresPerPlan: Plan[] = [
  {
    name: "Básico",
    features: [
      "branding basico (2 logos)",
      "diseño UI/UX",
      "landing page básica",
      "diseño responsive",
      "hosting y dominio",
      "seguridad ssl",
      "calendario cliente",
    ],
  },
  {
    name: "Hobby",
    features: [
      "branding",
      "post ig (15)",
      "diseño UI/UX",
      "landing page (5 secciones)",
      "diseño responsive",
      "hosting y dominio",
      "seguridad ssl",
      "soporte técnico",
      "calendario cliente",
    ],
  },
  {
    name: "Empresarial",
    features: [
      "branding",
      "post ig (15)",
      "diseño UI/UX",
      "community manager",
      "web completa (5 secciones)",
      "diseño responsive",
      "hosting y dominio",
      "seguridad ssl",
      "soporte técnico",
      "calendario cliente",
      "capacitacion",
    ],
  },
];

const PlanCard = (name: string, setSelectedPlan: () => void) => {
  return <div></div>;
};

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(featuresPerPlan[0] as Plan);
  return (
    <>
      <label htmlFor="features-modal" className="btn">
        open modal
      </label>
      <input type="checkbox" id="features-modal" className="modal-toggle" />
      <label
        htmlFor="features-modal"
        className="modal modal-bottom cursor-pointer sm:modal-middle"
      >
        <label className="modal-box relative" htmlFor="">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">{selectedPlan.name}</h3>
            <label
              htmlFor="features-modal"
              className="btn rounded border border-white"
            >
              <HiXMark className="h-6 w-6 text-white" />
            </label>
          </div>
          <ul className="list-disc px-8 py-2">
            {selectedPlan.features.map((f, idx) => (
              <li key={idx}>
                <i className="text-sm">{f}</i>
              </li>
            ))}
          </ul>
        </label>
      </label>
    </>
  );
}
