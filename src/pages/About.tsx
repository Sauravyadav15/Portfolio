import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="page-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="section-title">About Me</h1>
        <p className="section-subtitle">
          Get to know me better - my background, interests, and what drives me in the world of technology.
        </p>
      </motion.div>

      <div className="grid grid-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card"
        >
          <h2>Personal Information</h2>
          <div className="info-list">
            <div className="info-item">
              <User size={20} />
              <span>Saurav Kumar</span>
            </div>
            <div className="info-item">
              <MapPin size={20} />
              <span>Kingston, ON, Canada</span>
            </div>
            <div className="info-item">
              <Calendar size={20} />
              <span>Engineering Student at Queen's University</span>
            </div>
            <div className="info-item">
              <Mail size={20} />
              <span>23lp5@queensu.ca</span>
            </div>
            <div className="info-item">
              <Phone size={20} />
              <span>+1 437-830-9047</span>
            </div>
            <div className="info-item">
              <Phone size={20} />
              <span>+91 8368788002</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="card"
        >
          <h2>Background</h2>
          <p>
            I'm a passionate Engineering student at Queen's University, deeply fascinated by the ever-evolving world of technology.
            My journey began with web development, where I discovered my love for creating digital experiences
            that bridge the gap between users and technology, and it has since grown into a broader interest in
            applied machine learning and computer vision.
          </p>
          <p>
            As a Machine Learning Research Assistant, I build applied computer vision pipelines end-to-end,
            from dataset collection and augmentation to training PyTorch and TensorFlow models with YOLO and
            XGBoost. As a Software Developer on Queen's EngSoc team, I designed a cookie-based OAuth2
            authentication system with role-based access control, backed by Dockerized services and
            GitHub Actions CI/CD pipelines. Alongside these roles, I'm building full-stack applications at
            Bellurbis Technologies using the MERN stack with Redis caching for performance.
          </p>
          <p>
            Outside of work, I build my own projects end-to-end, from a receipt-splitting app with OCR and
            debt-simplification logic to an AI concierge platform for local businesses, and I'm actively
            involved in the Queen's Racing Formula SAE Team, working on automotive software and embedded
            systems. My interests span full-stack development, applied ML/computer vision, and backend
            security, and I'm excited to keep growing across all of them while contributing to meaningful,
            real-world projects.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="card"
      >
        <h2>Interests & Hobbies</h2>
        <div className="interests-grid">
          <div className="interest-item">
            <h3>Machine Learning & Computer Vision</h3>
            <p>Building applied CV pipelines with PyTorch, TensorFlow/Keras, YOLO, and XGBoost, validated against real-world imagery</p>
          </div>
          <div className="interest-item">
            <h3>Full-Stack Web Development</h3>
            <p>Building end-to-end applications with React, Node.js/Express, and FastAPI, from the MERN stack to Python backends</p>
          </div>
          <div className="interest-item">
            <h3>Backend Security & DevOps</h3>
            <p>Designing OAuth2/RBAC authentication systems, Dockerized services, and GitHub Actions CI/CD pipelines</p>
          </div>
          <div className="interest-item">
            <h3>Embedded Systems</h3>
            <p>Working with Arduino, C++ for automotive software, and embedded systems development for Formula SAE racing</p>
          </div>
          <div className="interest-item">
            <h3>Social Impact Projects</h3>
            <p>Leading socio-economic assessments and health evaluations for community development initiatives</p>
          </div>
          <div className="interest-item">
            <h3>Performance Optimization</h3>
            <p>Implementing caching strategies, API optimization, and real-time systems for enhanced user experience</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="card"
      >
        <h2>Career Goals</h2>
        <div className="goals-list">
          <div className="goal-item">
            <h3>Short Term</h3>
            <p>Deliver strong results on my current computer vision research project and the EngSoc authentication platform, while continuing to build full-stack projects at Bellurbis Technologies.</p>
          </div>
          <div className="goal-item">
            <h3>Medium Term</h3>
            <p>Build scalable, production-grade applications and ML systems, deepen my expertise in applied computer vision, and practice DSA consistently.</p>
          </div>
          <div className="goal-item">
            <h3>Long Term</h3>
            <p>Specialize further in AI and machine learning while mastering core computer science fundamentals (Networking, Databases, Algorithms, Operating Systems) to build reliable, real-world intelligent systems.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About; 