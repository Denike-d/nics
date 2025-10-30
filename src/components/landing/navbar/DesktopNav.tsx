import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/logo.png";
import nesrea from "../../../../public/images/nesrea.png";
import PrimaryButton from "../uikits/PrimaryButton";

export default function DesktopNavbar() {
  return (
    <div className="flex justify-center mx-auto max-h-screen py-4">
      <nav className="hidden md:flex space-x-8 items-center text-black relative z-50">
        <Link href="/">
          <Image
            src={nesrea}
            className="w-[60px] h-[43px] mr-12 mt-2"
            alt="logo"
          />
        </Link>
        <ul className="flex gap-6">
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
        <PrimaryButton
          title="Verify Certificate"
          href="/verify-certificate"
          className="text-white"
        />
      </nav>
    </div>
  );
}
