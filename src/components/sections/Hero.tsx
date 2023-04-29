import Image from "next/image";

export default function Hero() {
  return (
    <div
      style={{ height: "85svh" }}
      className="mt-10 flex flex-col items-center justify-center gap-5"
    >
      <div className="relative">
        <div
          className="circlelanding rounded-full"
          style={{ width: "80vw", height: "80vw" }}
        ></div>
        <Image
          className="absolute bottom-0 left-0 right-0 top-0 m-auto"
          alt="brand-logo"
          src="/logo.svg"
          width={220}
          height={110}
        />
      </div>
      <div className="flex gap-4 text-sm" style={{ color: "#333" }}>
        <p>Web-design</p>
        <p>Branding</p>
        <p>Marketing</p>
      </div>
    </div>
  );
}
