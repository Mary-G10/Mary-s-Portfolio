import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/images/heroimg.jpg";

const Hero = () => {
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
  };

  return (
    <section
      className={styles.hero}
      id="home"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              <span className={styles.animatedName}>
                I'm Mary Geremew-Fullstack Developer
              </span>
              <br />
              {/* Fullstack Developer */}
            </h1>
            {/* <p className={styles.subtitle}>Building Amazing Web Experiences</p> */}
            <p className={styles.description}>
              I create responsive, user-friendly websites and applications using
              modern technologies. From frontend design to backend development,
              I bring ideas to life.
            </p>
            <div className={styles.buttons}>
              <button
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </button>
              <button
                className={`${styles.btn} ${styles.btnOutline}`}
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </button>
            </div>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:your.email@example.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
