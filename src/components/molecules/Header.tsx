import Image from "next/image";
import { HiBars3, HiXMark } from "react-icons/hi2";

export default function Header() {
  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between px-5 pt-5">
      <div className="rounded-lg bg-white px-3 drop-shadow-lg">
        <Image alt="brand-logo" src="/Sapiens.svg" width={100} height={50} />
      </div>
      <label
        className=" bg-base swap-rotate swap rounded-lg border bg-white p-3"
        style={{ borderColor: "#333", color: "#333" }}
      >
        <input type="checkbox" />
        <HiBars3 className="swap-off h-8 w-8" />
        <HiXMark className="swap-on h-8 w-8" />
      </label>
    </div>
  );
}
