import Image from "next/image";
import nesrea from "../../../public/images/nesrea.png";
import Message from "../../../public/icons/Message.svg";
import Call from "../../../public/icons/Call.svg";
import i4logogreen from "../../../public/images/i4logogreen.png";
import GradientLayout from "./uikits/GradientLayout";
import FooterBanner from "./footer-banner";
export default function () {
  return (
    <div>
      <div className="bg-green-50 py-8 px-18 flex justify-between items-center">
        <div className="flex flex-col items-center text-center">
          <a href="/">
            <Image src={nesrea} className="w-[105px] h-[73px]" alt="logo" />
          </a>
          <p className="text-[10px] mt-2 text-center">
            Be sure to take a look <br /> at our Terms of Use <br /> and Privacy
            Policy
          </p>
        </div>

        <div className="flex justify-between gap-18">
          <div>
            <p className="font-bold mb-4">More Info</p>
            <p>FAQ</p>
            <p>Staff Portal</p>
          </div>
          <div>
            <p className="font-bold mb-4">Address</p>
            <p>
              No. 56 Lome Crescent, <br />
              Wuse Zone 7, Abuja, <br />
              Nigeria
            </p>
          </div>
          <div>
            <p className="font-bold mb-4">Contact Address</p>
            <div className="flex gap-2 mb-2">
              <Image src={Message} alt="message icon" />
              <p>dg@nesrea.gov.ng</p>
            </div>
            <div className="flex gap-2 mb-2">
              <Image src={Message} alt="message icon" />
              <p>info@nesrea.gov.ng</p>
            </div>
            <div className="flex gap-2 mb-2">
              <Image src={Call} alt="message icon" />
              <p>+2349153993191</p>
            </div>
          </div>
        </div>
        <div className="text-center font-bold">
          <p className="text-black text-sm">Powered by:</p>
          <a href="/">
            <Image
              src={i4logogreen}
              alt="i4logo"
              width={110}
              className="mt-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
