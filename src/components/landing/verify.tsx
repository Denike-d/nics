import PrimaryButton from "./uikits/PrimaryButton";
import Image from "next/image";
import phone from "../../../public/images/phone.png";

export default function () {
  return (
    <div className="px-12 py-8 bg-[#222222] relative">
      <Image
        src="/images/Ellipse 9.png"
        alt="decorative ellipse"
        width={300}
        height={300}
        className="pointer-events-none select-none absolute top-0 right-0 opacity-70 z-0"
        aria-hidden
      />
      <Image
        src="/images/Ellipse 8.png"
        alt="decorative ellipse"
        width={350}
        height={350}
        className="pointer-events-none select-none absolute bottom-0 left-0 opacity-70 z-0"
        aria-hidden
      />
      <p className="text-center font-semibold md:text-3xl text-white">
        Verify your certificates with ease
      </p>

      <div className="flex justify-between items-center">
        <div className="ml-60">
          <p className="text-xl text-white">
            Ensure the validity of your import clearance <br />
            certificates in just a few clicks
          </p>
          <PrimaryButton title="verify certificate" href="" className="mt-4" />
        </div>
        <Image src={phone} alt="phone" width={350} className="mr-32" />
      </div>
    </div>
  );
}
