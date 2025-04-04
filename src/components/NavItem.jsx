import React from "react";
import { motion } from "framer-motion";

function NavItem({ onClick, label, isMobile, setIsOpen }) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
        isMobile && setIsOpen && setIsOpen(false);
      }}
      className="block cursor-pointer px-3 py-2 rounded-md text-lg hover:bg-yellow-400 hover:text-blue-900 transition duration-200 text-left w-full"
    >
      <motion.span
        whileHover={{
          scale: 1.05,
          textShadow: "0px 0px 8px rgba(255,255,255,0.5)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        {label}
      </motion.span>
    </button>
  );
}

export default NavItem;
