import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col gap-5 px-5">
      <div
        className="font-bold"
        style={{ fontSize: "3.5rem", lineHeight: 1.1, color: "#333" }}
      >
        <p>una</p>
        <p>agencia</p>
        <p>de web y</p>
        <p>marketing</p>
      </div>
      <Image
        alt="brand-logo"
        className="self-center"
        src="/Sapiens.svg"
        width={250}
        height={50}
      />
      <div className="flex flex-wrap leading-6" style={{ color: "#333" }}>
        <div className="w-1/5"></div>
        <p className="mb-5 w-4/5 text-right">
          somos una agencia de marketing digital, branding y diseño web ,
          <mark className="px-1 text-white" style={{ background: "#ff4606" }}>
            apasionados por ayudar a las marcas a destacarse
          </mark>
        </p>
        <div className="w-1/5"></div>
        <p className="w-4/5 text-right">
          ¡contáctanos hoy y lleva tu marca al siguiente nivel!
        </p>
      </div>
    </div>
  );
}
