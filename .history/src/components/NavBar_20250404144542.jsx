import { Menu, X } from "lucide-react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return <nav className="bg-blue-900 text-white shadow-lg"></nav>;
}

export default NavBar;
