import { Bell } from "lucide-react";
import profil from "../../../public/images/profil.png";
import Image from "next/image";
import NotificationDropdown from "./notification";
import { useState, useRef } from "react";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const iconRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <div className="w-full border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            {/* <div>
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div> */}
          </div>
          <div className="flex items-center gap-3">
            {/* <input
              placeholder="Search"
              className="px-3 py-2 border rounded border-green-400"
            /> */}

            {/* <div className="bg-green-100 p-2 rounded-full">
              <button
                ref={iconRef}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <Bell />
              </button>
            </div> */}
            <NotificationDropdown />
            <div className="flex items-center gap-2">
              <Image src={profil} alt="profile" className="w-9" />
              <div className="text-sm text-black">
                <p>Emmanuel Ojo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
