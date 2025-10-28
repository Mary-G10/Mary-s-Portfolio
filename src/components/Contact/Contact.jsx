import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Project Inquiry',
    message: ''
  });

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'merongeremew@yahoo.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Phone',
      content: '+1 (763)443-0382',
      link: 'tel:+1234567890'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      content: 'Texas',
      link: null
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com', label: 'Instagram' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Project Inquiry',
      message: ''
    });
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>Let's work together on your next project</p>
        </div>

        <div className={styles.contactInfo}>
          {contactInfo.map((info, index) => (
            <div key={index} className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <i className={info.icon}></i>
              </div>
              <h4 className={styles.infoTitle}>{info.title}</h4>
              {info.link ? (
                <a href={info.link} className={styles.infoText}>
                  {info.content}
                </a>
              ) : (
                <p className={styles.infoText}>{info.content}</p>
              )}
            </div>
          ))}
        </div>

        <div className={styles.formContainer}>
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Send Me a Message</h3>
            <div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="John Doe"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option>Project Inquiry</option>
                    <option>Job Opportunity</option>
                    <option>Collaboration</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows="6"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button onClick={handleSubmit} className={styles.submitBtn}>
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </div>
          </div>
        </div>

        <div className={styles.socialConnect}>
          <h3 className={styles.socialTitle}>Connect With Me</h3>
          <p className={styles.socialText}>Follow me on social media and let's stay connected</p>
          <div className={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              
               <a key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;