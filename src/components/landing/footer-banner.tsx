import Image from "next/image";
import i4logogreen from "../../../public/images/i4logogreen.png";

export default function FooterBanner() {
  return (
    <div className="bottom-0 w-full">
      {" "}
      <div className="flex justify-center py-1 items-center">
        <p className="text-black text-sm">Powered by:</p>
        <Image src={i4logogreen} alt="i4logo" width={70} className="" />
      </div>
    </div>
  );
}
