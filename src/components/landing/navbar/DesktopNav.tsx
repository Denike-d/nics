import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/logo.png";
import nesrea from "../../../../public/images/nesrea.png";
import PrimaryButton from "../uikits/PrimaryButton";

export default function DesktopNavbar() {
  return (
    <div className="flex justify-between mx-26 max-h-screen py-4 relative z-50">
      <Link href="/">
        <Image
          src={nesrea}
          className="w-[63px] h-[43px] mr-14 mt-2"
          alt="logo"
        />
      </Link>
      <nav className="hidden md:flex space-x-8 items-center text-black">
        <ul className="flex gap-6 mx-28">
          <li>
            <Link href="/landing/home" className="">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-[#10793F] text-sm">
              About
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-[#10793F] text-sm">
              Documents
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-[#10793F] text-sm">
              Clearance
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-[#10793F] text-sm">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <PrimaryButton
        title="Verify Certificate"
        href="/verify-certificate"
        className="text-white"
      />
    </div>
  );
}
