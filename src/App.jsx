import { useState, useEffect, useRef } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Services from "./components/Services/Services";
import CalorieCalculator from "./components/CaloriesCalculator/CaloriesCalculator";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Footer from "./components/Footer/Footer";

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null);
  const menuToggleRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        menuToggleRef.current &&
        !menuToggleRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.container}>
      <Header
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        dropdownRef={dropdownRef}
        menuToggleRef={menuToggleRef}
      />
      <Sidebar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        sidebarRef={sidebarRef}
      />
      <div className={`${styles.content} ${menuOpen ? styles.blurred : ""}`}>
        <Hero />
        <AboutMe />
        <Services />
        <CalorieCalculator />
        <SocialLinks />
        <Footer />
      </div>
    </div>
  );
}

export default App;
