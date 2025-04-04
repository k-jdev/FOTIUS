import React from "react";
import { useState } from "react";
import NavItem from "./NavItem";

import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../images/white_logo_fot.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#003D74] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to={"/"} className="">
            <img className="w-12" src={logo} alt="" />
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavItem to="#" label="Головна" />
            <NavItem to="#" label="Підрозділи" />
            <NavItem to="#" label="Навчання" />
            <NavItem to="#" label="Самоврядування" />
            <NavItem to="#" label="Наука" />
            <NavItem to="#" label="Абітурієнту" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
