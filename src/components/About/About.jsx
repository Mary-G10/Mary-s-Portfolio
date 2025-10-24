import React from "react";
import styles from "./About.module.css";

const About = () => {
  const stats = [
    { number: "10+", label: "Technologies" },
    { number: "6+", label: "Projects" },
    { number: "RN", label: "Licensed Nurse" },
    { number: "∞", label: "Learning" },
  ];

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.subtitle}>
            <strong>From Healthcare to Tech: A Unique Journey</strong>
          
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.imageSection}>
            <img
              src={`${process.env.PUBLIC_URL}/self-img.jpg`}
              alt="Mary's Profile"
              className={styles.aboutImage}
            />
          </div>

          <div className={styles.textSection}>
            <div className={styles.aboutCard}>
              <h3 className={styles.cardTitle}>
                From Registered Nurse to Fullstack Developer
              </h3>
              <p className={styles.text}>
                Before writing code, I spent years in healthcare where missing
                details wasn't an option—it shaped how I approach development
                today. I build applications with the same precision I applied to
                patient care: systematic, detail-oriented, and always thinking
                three steps ahead.
              </p>
              <p className={styles.text}>
                I specialize in React.js, Node.js/Express, and MySQL to create
                fullstack applications that work. My healthcare background gives
                me an edge in understanding user needs and translating complex
                requirements into intuitive interfaces. I don't just write code
                that functions—I write code that solves real problems for real
                people.
              </p>
              <p className={styles.text}>
                Currently focused on building responsive web applications,
                RESTful APIs, and optimized database architectures. I'm
                especially drawn to healthcare tech projects where both sides of
                my experience converge. Whether debugging a race condition or
                architecting a new feature, I bring clarity, precision, and
                user-first thinking to every project.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;