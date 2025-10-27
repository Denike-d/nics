import Link from "next/link";

interface MobileNavbarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function MobileNavbar({
  isOpen,
  toggleMenu,
}: MobileNavbarProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-md flex flex-col space-y-3 px-6 py-4">
      <Link href="#home" className="hover:text-blue-600" onClick={toggleMenu}>
        Home
      </Link>
      <Link href="#about" className="hover:text-blue-600" onClick={toggleMenu}>
        About
      </Link>
      <Link
        href="#services"
        className="hover:text-blue-600"
        onClick={toggleMenu}
      >
        Services
      </Link>
      <Link
        href="#contact"
        className="hover:text-blue-600"
        onClick={toggleMenu}
      >
        Contact
      </Link>
    </div>
  );
}
