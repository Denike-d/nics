import Image from "next/image";
import i4logo from "../../../public/images/i4logo.png";

export default function FooterBanner() {
  return (
    <div className="bottom-0 w-full">
      {" "}
      <div className="bg-[#C1D7CB] flex justify-center py-1 items-center">
        <p className="text-black text-sm">Powered by:</p>
        <Image src={i4logo} alt="i4logo" width={30} className="ml-2" />
      </div>
    </div>
  );
}
