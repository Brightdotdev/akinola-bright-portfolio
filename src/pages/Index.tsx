import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Timeline } from '../components/Timeline';
import { ProjectCard } from '../components/ProjectCard';
import codeWorkspace from '../assets/code-workspace.jpg';
import atlasian from '../assets/atlassian.png';
import vehicleTrackingApplication from '../assets/vehicleTrackingApplication.png';
import flutterWaveClone from '../assets/flutterWaveClone.png';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) {
      setDarkMode(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const featuredProjects = [
    {
      id: '1',
      title: 'Multithreading Java Application With Java Fx',
      description: 'A Simple Desktop application Built with java Fx and The oppen source Dictionary ',
      longDescription: 'Built a comprehensive dashboard platform that allows users to create custom widgets, visualize complex data sets, and collaborate in real-time.',
      image: codeWorkspace,
      techStack: ['JAVA-FX', 'JAVA', 'MULTI-THREADING', 'API AND DATABASE LOOK-UP'],
      githubUrl: 'https://github.com/Brightdotdev/MultithreadingJava',
      lessons: [
        'Mastered Javas Thread handliing and optimisation of applications',
        'Learned to optimize real-time data processing for Java-fx applications with a simple yet effective example'
      ],
      status: 'completed' as const,
    },

    {
      id: '2',
      title: 'Altasian Landing Page',
      description: 'This is a simple landing page clone of the Atlassian.com website',
      longDescription: 'This project was built purely with react js and routings handled with react-router',
      image: atlasian,
      techStack: [ 'REACT', 'REACT-ROUTER', 'REACTJS'],
      githubUrl: 'https://github.com/Brightdotdev/AtlassianLandingPage',
    
      demoUrl : "https://atlassianlandingpage.pages.dev",
      lessons: [
        'Explored creative coding and generative art techniques',
        'Gained proficiency in WebGL and shader programming'
      ],
      status: 'completed' as const,
    },


    
    
    {
      id: '3',
      title: 'Vehicle Tracking System',
      description: 'An internal tool for tracking company vehicles and dispatches',
      longDescription: 'This project is designed to monitor vehicle dispatches, calculate safety scores, and manage classified and non-classified transport operations. Built with Spring Boot, React, and PostgreSQL.',
      image: vehicleTrackingApplication, 
      techStack: ['REACT', 'SPRING BOOT', 'POSTGRESQL', 'DOCKER'],
      githubUrl: 'https://github.com/Brightdotdev/VehicleTrackingSystem',
      lessons: [
        'Strengthened skills in full-stack development and system design',
        'Implemented safety score logic and conditional dispatch authorization',
        'Worked with real-time tracking features and complex business rules'
      ],
      status: 'in-progress' as const,
    }
    
,

    {
      id: '4',
      title: 'Flutterwave Clone',
      description: 'This is a simple landing page clone of the Flutterwave.com website',
      longDescription: 'This project was built purely with react js and routings handled with react-router',
      image: flutterWaveClone,
      techStack: [ 'REACT', 'REACT-ROUTER', 'REACTJS'],
      githubUrl: 'https://github.com/Brightdotdev/flutterWaveClone',
      demoUrl : "https://flutterwaveclone.pages.dev",
      lessons: [
        'Explored creative mordern react practices'
      ],
      status: 'experimental' as const,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Hero Section */}
      <Hero />

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of growth, learning, and creative exploration in the world of development.
            </p>
          </motion.div>
          
          <Timeline />
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
           My Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  My journey in tech — the skills I’ve gained, the projects I’ve built, and where I’m headed.
</p>

          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-4">
              Built React and sweat Thank you for your time 🧍‍♂️
            </p>
            <p className="text-sm text-subtle">
              © 2025 Bright Akinola's Portfolio V2 
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
