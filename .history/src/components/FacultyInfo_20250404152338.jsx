import React, { useState, useEffect } from "react";
import main_img from "../images/main_img.jpg";
import comp_class from "../images/comp_class.jpg";
import educate_process from "../images/educate_proccess.jpg";
import facult_development from "../images/fakult_education.jpg";

function FacultyInfo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div
        className={`transition-all duration-1000 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold text-[#003D74] mb-8 text-center">
          Про факультет
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className={`transition-all duration-1000 delay-300 ease-in-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <img
                src={main_img}
                alt="Факультет"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ease-in-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <p className="text-gray-700 mb-4 leading-relaxed">
              Навчальними планами cпеціальностей передбачена фундаментальна
              математична підготовка та широкий спектр дисциплін, пов'язаних з
              обчислювальною технікою та програмуванням. Значне місце у
              підготовці майбутніх фахівців займає практична робота на
              комп'ютерах, яка забезпечується наявністю на факультеті 6
              комп'ютерних класів, обладнаних сучасною обчислювальною технікою,
              які під'єднані до загальноуніверситетської локальної мережі та до
              мережі Internet.
            </p>
          </div>
        </div>

        <div
          className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-700 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-gray-200 rounded h-40 mb-4 flex items-center justify-center">
              <img
                src={comp_class}
                alt="Комп'ютерні класи"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-700">
              Крім того, за час навчання студенти вчаться працювати в декількох
              операційних системах і вивчають, як мінімум, чотири мови
              програмування.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-gray-200 rounded h-40 mb-4 flex items-center justify-center">
              <img
                src={educate_process}
                alt="Навчальний процес"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-700">
              Також всі студенти вивчають англійську мову і цикл
              загальноосвітніх гуманітарних дисциплін.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-gray-200 rounded h-40 mb-4 flex items-center justify-center">
              <img
                src={facult_development}
                alt="Розвиток факультету"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-700">
              Наш факультет, як і комп'ютерні технології, і сьогодні продовжує
              бурхливо розвиватися.
            </p>
            <p className="text-gray-700">
              <iframe
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQihfBMjHCuV5_5QSFtGvbnMqpUcXW8vR7wvkaNjkMKk/pubhtml?widget=true&headers=false"
                width="100%"
                height="600"
              ></iframe>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FacultyInfo;
