import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="page-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Saurav Kumar</span>
        </h1>
        <h2 className="hero-subtitle">
          Computer Engineering Student, Building Full-Stack & ML Systems
        </h2>
        <p className="hero-description">
          I'm a Computer Engineering student at Queen's University who likes building things end-to-end from backend architecture to the model that powers a feature.
        </p>
        
        <div className="hero-buttons">
          <Link to="/projects" className="btn">
            View My Work
          </Link>
          {/* <a 
            href="/Saurav_s_Resume_Jun.pdf" 
            download 
            className="btn btn-secondary"
          >
            <Download size={20} />
            Download Resume
          </a> */}
        </div>

        <div className="social-links">
          <a href="https://github.com/Sauravyadav15" target="_blank" rel="noopener noreferrer">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/saurav-kumar-20b19b243/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=skyjnv124@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail size={24} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hero-stats"
      >
        <div className="stat-card">
          <h3>2+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat-card">
          <h3>7</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-card">
          <h3>43+</h3>
          <p>Technologies</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Home; 