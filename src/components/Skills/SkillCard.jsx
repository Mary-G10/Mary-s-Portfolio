import React, { useState, useEffect, useRef } from "react";
import styles from "./Skills.module.css";

const SkillCard = ({ skill }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const currentCard = cardRef.current; // Store ref value

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className={styles.skillCard}>
      <div className={styles.skillIcon}>
        <i className={skill.icon}></i>
      </div>
      <h4 className={styles.skillName}>{skill.name}</h4>
      <div className={styles.skillLevel}>
        <div
          className={styles.skillProgress}
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
            transition: "width 1.5s ease",
          }}
        ></div>
      </div>
      <p className={styles.skillPercentage}>
        {skill.level >= 90
          ? "Advanced"
          : skill.level >= 75
          ? "Intermediate"
          : "Learning"}
      </p>
    </div>
  );
};

export default SkillCard;
