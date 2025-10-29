import Image from "next/image";
import nesrea from "../../../public/images/nesrea.png";
import Message from "../../../public/icons/Message.svg";
import Call from "../../../public/icons/Call.svg";
import i4logo from "../../../public/images/i4logo.png";
import GradientLayout from "./uikits/GradientLayout";
import FooterBanner from "./footer-banner";
export default function () {
  return (
    <div>
      <div className="bg-green-50 py-8 px-18 flex justify-between">
        <Image src={nesrea} className="w-[95px] h-[63px] mr-12" alt="logo" />
        <div className="flex justify-between gap-24">
          <div>
            <p className="font-bold mb-4">More Info</p>
            <p>FAQ</p>
            <p>Staff Portal</p>
          </div>
          <div>
            <p className="font-bold mb-4">Address</p>
            <p>No. 56 Lome Crescent, Wuse Zone 7, Abuja, Nigeria</p>
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
      </div>

      <FooterBanner />
    </div>
  );
}
