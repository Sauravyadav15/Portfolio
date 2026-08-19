import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Palette, Smartphone, Globe, Brain, Settings } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: [
        { name: 'Java', level: 70 },
        { name: 'Python', level: 60 },
        { name: 'C', level: 60 },
        { name: 'JavaScript', level: 65 },
        { name: 'HTML/CSS', level: 90 },
      ]
    },
    {
      title: 'Frontend Development',
      icon: <Palette size={24} />,
      skills: [
        { name: 'React', level: 70 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'Tailwind CSS', level: 45 },
        { name: 'JavaScript', level: 75 },
        { name: 'Vite', level: 65 },
        { name: 'Responsive Design', level: 70 },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database size={24} />,
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 65 },
        { name: 'FastAPI', level: 60 },
        { name: 'REST API', level: 70 },
        { name: 'OAuth2', level: 60 },
        { name: 'JWT Auth', level: 65 },
        { name: 'RBAC', level: 55 },
        { name: 'MongoDB', level: 55 },
        { name: 'PostgreSQL', level: 55 },
        { name: 'Redis', level: 40 },
      ]
    },
    {
      title: 'Machine Learning & Computer Vision',
      icon: <Brain size={24} />,
      skills: [
        { name: 'PyTorch', level: 60 },
        { name: 'TensorFlow/Keras', level: 65 },
        { name: 'YOLO (Ultralytics)', level: 65 },
        { name: 'XGBoost', level: 60 },
        { name: 'scikit-learn', level: 55 },
        { name: 'Roboflow', level: 60 },
        { name: 'OCR', level: 55 },
      ]
    },
    {
      title: 'DevOps & Testing',
      icon: <Settings size={24} />,
      skills: [
        { name: 'Docker', level: 55 },
        { name: 'GitHub Actions (CI/CD)', level: 55 },
        { name: 'Jest', level: 60 },
        { name: 'Supertest', level: 55 },
        { name: 'Vercel', level: 65 },
      ]
    },
    {
      title: 'Embedded Systems',
      icon: <Smartphone size={24} />,
      skills: [
        { name: 'Arduino', level: 70 },
        { name: 'C++', level: 65 },
        { name: 'Embedded C', level: 60 },
        { name: 'Serial Communication', level: 65 },
        { name: 'OpenCV', level: 55 },
      ]
    },
    {
      title: 'Databases & Tools',
      icon: <Cloud size={24} />,
      skills: [
        { name: 'MongoDB', level: 65 },
        { name: 'MySQL', level: 60 },
        { name: 'Redis', level: 40 },
        { name: 'Git', level: 60 },
        { name: 'GitHub', level: 70 },
      ]
    },
    {
      title: 'Development Tools',
      icon: <Globe size={24} />,
      skills: [
        { name: 'VS Code', level: 80 },
        { name: 'Arduino IDE', level: 70 },
        { name: 'Git', level: 75 },
        { name: 'GitHub', level: 70 },
        { name: 'Postman', level: 65 },
        { name: 'Figma', level: 70 },
      ]
    }
  ];

  return (
    <div className="page-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="section-title">Skills & Technologies</h1>
        <p className="section-subtitle">
          Here are the technologies and tools I work with. I'm constantly learning and adding new skills to my repertoire.
        </p>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="skill-category"
          >
            <div className="category-header">
              {category.icon}
              <h2>{category.title}</h2>
            </div>
            <div className="skills-list">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="card"
      >
        <h2>Learning Currently</h2>
        <div className="learning-grid">
          <div className="learning-item">
            <h3>Advanced Embedded Systems</h3>
            <p>Deepening expertise in automotive software, bit shifting concepts, and real-time embedded systems for Formula SAE</p>
          </div>
          <div className="learning-item">
            <h3>Performance Optimization</h3>
            <p>Mastering Redis caching, API optimization, and advanced MERN stack techniques for high-performance applications</p>
          </div>
          <div className="learning-item">
            <h3>Computer Vision & AI</h3>
            <p>Building applied computer vision systems end-to-end, from data collection and augmentation to training YOLO detectors, CNN classifiers, and XGBoost models, and validating them against real hardware-captured imagery</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills; 