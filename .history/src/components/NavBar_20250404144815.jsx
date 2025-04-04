import { Menu, X } from "lucide-react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to={"/"} className="">
            <img src="" alt="" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
