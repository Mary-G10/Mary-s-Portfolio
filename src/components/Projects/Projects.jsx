import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../data/projectsData";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Projects</h2>
          <p className={styles.subtitle}>
            A showcase of my best work and achievements
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className={styles.cta}>
          <h3 className={styles.ctaTitle}>Want to see more?</h3>
          <p className={styles.ctaText}>
            Check out my GitHub for more projects and contributions
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <i className="fab fa-github"></i> Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
