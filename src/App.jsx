import { useState } from "react";
import NavBar from "./components/NavBar";
import FacultyInfo from "./components/FacultyInfo";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />
      <NavBar />
      <FacultyInfo />
      <Footer />
    </>
  );
}

export default App;
