import React from "react";
import SkillCard from "./SkillCard";
import { skillsData, tools } from "../../data/skillsData";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Skills</h2>
          <p className={styles.subtitle}>Technologies and tools I work with</p>
        </div>

        <div className={styles.skillsGrid}>
          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Frontend Development</h3>
            <div className={styles.cardsGrid}>
              {skillsData.frontend.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>

          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Backend Development</h3>
            <div className={styles.cardsGrid}>
              {skillsData.backend.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>

          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Other Skills</h3>
            <div className={styles.cardsGrid}>
              {skillsData.other.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.toolsSection}>
          <h3 className={styles.toolsTitle}>
            Development Tools & Technologies
          </h3>
          <div className={styles.toolsGrid}>
            {tools.map((tool, index) => (
              <span key={index} className={styles.toolBadge}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
