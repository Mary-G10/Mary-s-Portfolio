import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {currentYear} Mary Geremew. Built with{" "}
          <i className="fab fa-react" style={{ color: "#61DAFB" }}></i> React,{" "}
          <i className="fab fa-node-js" style={{ color: "#339933" }}></i>{" "}
          Node.js &{" "}
          <i className="fab fa-bootstrap" style={{ color: "#7952B3" }}></i>{" "}
          Bootstrap
        </p>
        <p className={styles.subtext}>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
