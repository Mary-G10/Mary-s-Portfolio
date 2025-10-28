import React from "react";
import styles from "./Education.module.css";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Registered Nurse (RN)",
      institution: "Normandale College",
      description:
        "Licensed healthcare professional with expertise in patient care, medical protocols, and healthcare systems. Strong foundation in critical thinking, communication, and evidence-based practice.",
      icon: "🏥",
    },
    {
      id: 2,
      degree: "Accounting",
      institution: "Unity University",
      description:
        "Strong foundation in financial analysis, bookkeeping, and business operations. Expertise in data accuracy, financial reporting, and analytical problem-solving.",
      icon: "💼",
    },
  ];

  return (
    <section className={styles.education} id="education">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Education & Credentials</h2>
          <p className={styles.subtitle}>
            My academic background and professional qualifications
          </p>
        </div>

        <div className={styles.educationGrid}>
          {educationData.map((edu) => (
            <div key={edu.id} className={styles.educationCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{edu.icon}</span>
              </div>
              <div className={styles.content}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.institution}>{edu.institution}</p>
                <p className={styles.description}>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
