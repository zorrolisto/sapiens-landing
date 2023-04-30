import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

type Plan = {
  name: string;
  priceBefore: string;
  priceNow: string;
  features: string[];
};

const featuresPerPlan: Plan[] = [
  {
    name: "Básico",
    priceBefore: "799",
    priceNow: "599",
    features: [
      "branding basico (2 logos)",
      "diseño UI/UX",
      "landing page básica",
      "diseño responsive",
      "hosting y dominio",
      "seguridad SSL",
      "calendario cliente",
    ],
  },
  {
    name: "Hobby",
    priceBefore: "1299",
    priceNow: "999",
    features: [
      "branding",
      "post ig (15)",
      "diseño UI/UX",
      "landing page (5 secciones)",
      "diseño responsive",
      "hosting y dominio",
      "seguridad SSL",
      "soporte técnico",
      "calendario cliente",
    ],
  },
  {
    name: "Empresarial",
    priceBefore: "1899",
    priceNow: "1599",
    features: [
      "branding",
      "post ig (15)",
      "diseño UI/UX",
      "community manager",
      "web completa (5 secciones)",
      "diseño responsive",
      "hosting y dominio",
      "seguridad SSL",
      "soporte técnico",
      "calendario cliente",
      "capacitacion",
    ],
  },
];

const PlanCard = (props: {
  name: string;
  priceBefore: string;
  priceNow: string;
  setSelectedPlan: () => void;
}) => {
  return (
    <div
      className="w-full rounded-2xl bg-white p-2 drop-shadow-lg"
      style={{ color: "#333", borderColor: "#ddd" }}
    >
      <h3 className="mb-2 text-center text-2xl font-bold capitalize">
        {props.name}
      </h3>
      <div className="flex justify-center">
        <i className="text-xs line-through">S/.{props.priceBefore}</i>
      </div>
      <div className="mb-1 mt-[-0.75rem]">
        <p className="flex items-baseline justify-center gap-1">
          <span className="" style={{ fontSize: "2.5rem" }}>
            S/.{props.priceNow}
          </span>
        </p>
      </div>
      <div className="flex justify-center gap-2">
        <label
          htmlFor="features-modal"
          className="btn-outline btn lowercase"
          onClick={props.setSelectedPlan}
        >
          <AiOutlineEye className="h-6 w-6" style={{ color: "#333" }} />
        </label>
        <a href="https://wa.me/+51981148272">
          <button className="btn-outline btn flex w-max gap-2 border border-green-600 px-2 lowercase text-green-600">
            Cotizar
            <BsWhatsapp className="h-6 w-6" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(featuresPerPlan[0] as Plan);
  return (
    <div className="mt-16 px-5">
      <div
        className="mb-8 font-bold"
        style={{ fontSize: "3.5rem", lineHeight: 1.1, color: "#333" }}
      >
        <p>nuestros planes</p>
        <p></p>
      </div>
      <div className="mb-2 flex flex-col items-center gap-3">
        <PlanCard
          name={featuresPerPlan[0]?.name as string}
          priceBefore={featuresPerPlan[0]?.priceBefore as string}
          priceNow={featuresPerPlan[0]?.priceNow as string}
          setSelectedPlan={() => {
            console.log("");
          }}
        ></PlanCard>
        <PlanCard
          name={featuresPerPlan[1]?.name as string}
          priceBefore={featuresPerPlan[1]?.priceBefore as string}
          priceNow={featuresPerPlan[1]?.priceNow as string}
          setSelectedPlan={() => {
            console.log("");
          }}
        ></PlanCard>
        <PlanCard
          name={featuresPerPlan[2]?.name as string}
          priceBefore={featuresPerPlan[2]?.priceBefore as string}
          priceNow={featuresPerPlan[2]?.priceNow as string}
          setSelectedPlan={() => {
            console.log("");
          }}
        ></PlanCard>
        <PlanCard
          name="Corporativo"
          priceBefore={featuresPerPlan[2]?.priceBefore as string}
          priceNow={featuresPerPlan[2]?.priceNow as string}
          setSelectedPlan={() => {
            console.log("");
          }}
        ></PlanCard>
      </div>

      <input type="checkbox" id="features-modal" className="modal-toggle" />
      <label
        htmlFor="features-modal"
        className="modal modal-bottom cursor-pointer sm:modal-middle"
        style={{ color: "#333" }}
      >
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-2xl font-bold">{selectedPlan.name}</h3>
          <ul className="list-disc px-8 py-2">
            {selectedPlan.features.map((f, idx) => (
              <li key={idx}>
                <i className="text-sm">{f}</i>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-end gap-1">
            <a href="https://wa.me/+51981148272">
              <button className="btn flex gap-2 border border-green-500 bg-green-500 lowercase active:bg-green-600">
                Cotizar
                <BsWhatsapp className="h-6 w-6 text-white" />
              </button>
            </a>
            <label htmlFor="features-modal" className="btn lowercase">
              <HiXMark className="h-6 w-6 text-white" />
            </label>
          </div>
        </label>
      </label>
    </div>
  );
}
