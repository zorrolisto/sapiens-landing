import Image from "next/image";
import { HiBars3, HiXMark } from "react-icons/hi2";

export default function Header() {
  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between px-5 pt-5">
      <div
        className="rounded border px-3 shadow-lg"
        style={{ background: "#171717" }}
      >
        <Image alt="brand-logo" src="/logo.svg" width={100} height={50} />
      </div>
      <label
        className="swap-rotate bg-base swap rounded border border-white p-3"
        style={{ background: "#171717" }}
      >
        <input type="checkbox" />
        <HiBars3 className="swap-off h-8 w-8" />
        <HiXMark className="swap-on h-8 w-8" />
      </label>
    </div>
  );
}
