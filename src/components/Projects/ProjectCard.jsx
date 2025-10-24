import React, { useState, useEffect, useRef } from "react";
import styles from "./Projects.module.css";

const ProjectCard = ({ project }) => {
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
    <div
      ref={cardRef}
      className={`${styles.projectCard} ${isVisible ? styles.visible : ""}`}
    >
      <div
        className={styles.projectImage}
        // style={{ background: project.gradient }}
        style={{
          background: project.image
            ? `url(${project.image})`
            : project.gradient,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {project.featured && (
          <span className={styles.featuredBadge}>
            <i className="fas fa-star"></i> Featured
          </span>
        )}
        {!project.image && (
          <div className={styles.projectIcon}>
            <i className={project.icon}></i>
          </div>
        )}
      </div>

      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>

        <div className={styles.techBadges}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.projectLinks}>
          <a
            href={project.demoLink}
            className={`${styles.projectBtn} ${styles.btnDemo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt"></i> Live Demo
          </a>
          <a
            href={project.codeLink}
            className={`${styles.projectBtn} ${styles.btnCode}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
