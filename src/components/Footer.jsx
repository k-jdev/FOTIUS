import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../images/white_logo_fot.png";
import chnu_logo from "../images/chnu_logo.png";
import {
  containerVariants,
  itemVariants,
  scrollToSection,
} from "../utils/animationVariants";
import GoogleMapLocation from "./GoogleMapLocation";

function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  return (
    <footer ref={footerRef} className="bg-[#003D74] text-white">
      <motion.div
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="w-full  py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center mb-8"
            ></motion.div>

            <GoogleMapLocation />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Логотип" className="w-10 h-10 mr-3" />
              <span className="text-xl font-bold">ФОТіУС</span>
            </div>
            <p className="text-gray-300 mb-4">
              Факультет обчислювальної техніки і інформатики - передовий
              освітній центр із підготовки ІТ-спеціалістів.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#4267B2" }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#E1306C" }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 border-b border-blue-700 pb-2">
              Швидкі посилання
            </h3>
            <ul className="space-y-2">
              {[
                { id: "about", label: "Про факультет" },
                { id: "advantages", label: "Наші переваги" },
                { id: "join", label: "Приєднатись" },
              ].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 cursor-pointer hover:text-yellow-400 transition-colors block py-1 text-left w-full"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 border-b border-blue-700 pb-2">
              Контакти
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail
                  size={18}
                  className="mt-1 mr-3 flex-shrink-0 text-gray-300"
                />
                <span className="text-gray-300">fotius@vu.cdu.edu.ua</span>
              </li>
              <li className="flex items-start">
                <Phone
                  size={18}
                  className="mt-1 mr-3 flex-shrink-0 text-gray-300"
                />
                <span className="text-gray-300">+380 (47) 233-07-59</span>
              </li>
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mt-1 mr-3 flex-shrink-0 text-gray-300"
                />
                <span className="text-gray-300">
                  18000, м. Черкаси, бульвар Шевченка, 79, корпус № 3, ауд. 273
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 border-b border-blue-700 pb-2">
              Години роботи
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300">Понеділок - П'ятниця:</span>
                <span className="text-gray-300">8:30 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Субота:</span>
                <span className="text-gray-300">8:30 - 13:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Неділя:</span>
                <span className="text-gray-300">Вихідний</span>
              </li>
            </ul>
            <motion.button
              className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-[#003D74] font-bold py-2 px-4 rounded transition-colors w-full"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Зв'язатися з нами
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-blue-700 text-center"
        >
          <motion.div
            className="flex justify-center items-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="https://cdu.edu.ua/">
              <img
                src={chnu_logo}
                alt="Герб Черкаського національного університету"
                className="h-24 md:h-32"
              />
            </a>
          </motion.div>
          <p className="text-gray-300 mb-2">
            Черкаський національний університет імені Богдана Хмельницького
          </p>
          <p className="text-gray-300">
            © {new Date().getFullYear()} Факультет обчислювальної техніки і
            інформатики. Всі права захищено.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
