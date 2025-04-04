import React from "react";
import { Link } from "react-router-dom";

function NavItem({ to, label, isMobile, setIsOpen }) {
  return (
    <Link
      to={to}
      className="block px-3 py-2 rounded-md text-lg hover:bg-yellow-400 hover:text-blue-900 transition"
      onClick={() => isMobile && setIsOpen(false)}
    >
      {label}
    </Link>
  );
}
export default NavItem;
