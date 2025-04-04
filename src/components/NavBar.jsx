import React from "react";
import { useState, useEffect } from "react";
import NavItem from "./NavItem";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../images/white_logo_fot.png";
import {
  logoVariants,
  mobileMenuVariants,
  navItemVariants,
  scrollToSection,
} from "../utils/animationVariants";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (id) => {
    scrollToSection(id);
    if (isOpen) setIsOpen(false);
  };

  return (
    <motion.nav
      className={`sticky top-0 z-50 ${
        scrolled ? "bg-[#003D74]/95 shadow-lg backdrop-blur-sm" : "bg-[#003D74]"
      } text-white transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to={"/"} className="">
            <motion.img
              className="w-12"
              src={logo}
              alt="Логотип"
              variants={logoVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            />
          </Link>

          {/* Desktop navigation */}
          <motion.div
            className="hidden md:flex space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, staggerChildren: 0.1 }}
          >
            {[
              { id: "about", label: "Про факультет" },
              { id: "advantages", label: "Наші переваги" },
              { id: "join", label: "Приєднатись" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <NavItem
                  onClick={() => handleScrollToSection(item.id)}
                  label={item.label}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile menu button */}
          <motion.div className="md:hidden" whileTap={{ scale: 0.9 }}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-yellow-400 hover:text-[#003D74] transition duration-200"
            >
              {isOpen ? (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-[#003D74] border-t border-blue-800">
          {[
            { id: "about", label: "Про факультет" },
            { id: "advantages", label: "Наші переваги" },
            { id: "join", label: "Приєднатись" },
          ].map((item, index) => (
            <motion.div key={index} variants={navItemVariants} className="py-1">
              <NavItem
                onClick={() => handleScrollToSection(item.id)}
                label={item.label}
                isMobile={true}
                setIsOpen={setIsOpen}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default NavBar;
