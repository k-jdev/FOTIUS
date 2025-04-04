import React, { useState, useEffect } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import { useRef } from "react";
import main_img from "../images/main_img.jpg";
import comp_class from "../images/comp_class.jpg";
import educate_process from "../images/educate_proccess.jpg";
import facult_development from "../images/fakult_education.jpg";
import {
  headerVariants,
  cardVariants,
  textBlockVariants,
  imageBlockVariants,
} from "../utils/animationVariants";
import TiltCard from "./TiltCard";

function FacultyInfo() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });
  const isInView3 = useInView(ref3, { once: true, amount: 0.3 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-50 overflow-hidden">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <section
        id="about"
        ref={ref1}
        className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial="hidden"
          animate={isInView1 ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#003D74] mb-4">
            Факультет обчислювальної техніки і інформатики
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Навчальними планами cпеціальностей передбачена фундаментальна
            математична підготовка та широкий спектр дисциплін
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <motion.div
              className="p-8 flex items-center"
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
              variants={textBlockVariants}
            >
              <div>
                <h2 className="text-3xl font-bold text-[#003D74] mb-6">
                  Про факультет
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Навчальними планами cпеціальностей передбачена фундаментальна
                  математична підготовка та широкий спектр дисциплін, пов'язаних
                  з обчислювальною технікою та програмуванням. Значне місце у
                  підготовці майбутніх фахівців займає практична робота на
                  комп'ютерах, яка забезпечується наявністю на факультеті 6
                  комп'ютерних класів, обладнаних сучасною обчислювальною
                  технікою, які під'єднані до загальноуніверситетської локальної
                  мережі та до мережі Internet.
                </p>
                <motion.button
                  className="bg-[#003D74] hover:bg-[#00305e] text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Дізнатися більше
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              className="bg-gray-100"
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
              variants={imageBlockVariants}
            >
              <img
                src={main_img}
                alt="Факультет"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="advantages"
        ref={ref2}
        className="bg-[#003D74] py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
            variants={headerVariants}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Наші переваги
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Все що потрібно для ефективного навчання та розвитку
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: comp_class,
                alt: "Комп'ютерні класи",
                title: "Різноманітні мови програмування",
                text: "Крім того, за час навчання студенти вчаться працювати в декількох операційних системах і вивчають, як мінімум, чотири мови програмування.",
              },
              {
                img: educate_process,
                alt: "Навчальний процес",
                title: "Гуманітарні дисципліни",
                text: "Також всі студенти вивчають англійську мову і цикл загальноосвітніх гуманітарних дисциплін.",
              },
              {
                img: facult_development,
                alt: "Розвиток факультету",
                title: "Постійний розвиток",
                text: "Наш факультет, як і комп'ютерні технології, і сьогодні продовжує бурхливо розвиватися.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate={isInView2 ? "visible" : "hidden"}
                variants={cardVariants}
                className="h-full"
              >
                <TiltCard className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                  <div className="h-64 overflow-hidden">
                    <motion.img
                      src={card.img}
                      alt={card.alt}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#003D74] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-700">{card.text}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="join"
        ref={ref3}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-[#003D74] to-[#0055a4] rounded-xl shadow-xl overflow-hidden p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: -30 }}
              animate={
                isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
              }
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Приєднуйтесь до факультету
            </motion.h2>
            <motion.p
              className="text-gray-200 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView3 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Отримайте якісну освіту та станьте професіоналом у сфері IT. Ми
              надаємо всі необхідні умови для вашого успішного навчання та
              розвитку.
            </motion.p>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.button
                className="bg-white text-[#003D74] font-bold py-3 px-8 rounded-lg mx-2"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgba(255,255,255,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Подати заявку
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg mx-2 mt-3 md:mt-0"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgba(255,255,255,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Дізнатися більше
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default FacultyInfo;
