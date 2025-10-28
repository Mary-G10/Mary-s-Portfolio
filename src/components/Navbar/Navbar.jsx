import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "education",
        "skills",
        "projects",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <a
            href="#home"
            className={styles.logo}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <div className={styles.logoCircle}>MG</div>
            <span className={styles.logoText}>MARY'S PORTFOLIO</span>
          </a>

          <button
            className={`${styles.menuToggle} ${isOpen ? styles.active : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
            {[
              "home",
              "about",
              "education",
              "skills",
              "projects",
              "contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`${styles.navLink} ${
                    activeSection === item ? styles.activeLink : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState, useEffect } from 'react';
// import styles from './Navbar.module.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);

//       const sections = ['home', 'about', 'skills', 'projects', 'contact'];
//       const currentSection = sections.find(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
//       if (currentSection) {
//         setActiveSection(currentSection);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.offsetTop - offset;
//       window.scrollTo({
//         top: elementPosition,
//         behavior: 'smooth'
//       });
//     }
//     setIsOpen(false);
//   };

//   return (
//     <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
//       <div className={styles.container}>
//         <div className={styles.navContent}>
//           <a href="#home" className={styles.logo} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
//             <div className={styles.logoCircle}>MG</div>
//             <span className={styles.logoText}>MARY'S PORTFOLIO</span>
//           </a>

//           <button
//             className={`${styles.menuToggle} ${isOpen ? styles.active : ''}`}
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>

//           <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
//             {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
//               <li key={item}>
//                 <a
//                   href={`#${item}`}
//                   className={`${styles.navLink} ${activeSection === item ? styles.activeLink : ''}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     scrollToSection(item);
//                   }}
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
