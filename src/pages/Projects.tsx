import { AnimatePresence, motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import codeWorkspace from '../assets/code-workspace.jpg';
import atlasian from '../assets/atlassian.png';
import vehicleTrackingApplication from '../assets/vehicleTrackingApplication.png';
import flutterWaveClone from '../assets/flutterWaveClone.png';
import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';


const projects = [
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

export default function Projects() {
  
  const [showContacts, setShowContacts] = useState(false);
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Projects & <span className="gradient-text">Experiments</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of creative solutions, technical experiments, and meaningful work
            that showcases my journey as a developer.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-subtle p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaborating?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on innovative projects and explore new challenges.
            </p>
            <button 
            
        onClick={() => setShowContacts(!showContacts)}
            className="bg-gradient-primary text-white px-6 py-3 rounded-lg hover:shadow-glow transition-all duration-normal">
              Get In Touch
            </button>

              {/* AnimatePresence handles enter/exit animations */}
      <AnimatePresence>
        {showContacts && (
          <motion.div
            key="contacts"
            initial={{ opacity: 0, y: 20 }}         // Start faded and pushed down
            animate={{ opacity: 1, y: 0 }}          // Animate in
            exit={{ opacity: 0, y: 20 }}            // Animate out
            transition={{ duration: 0.5 }}
            className="mt-8 flex justify-center gap-6"
          >
            {/* Contact Item - LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/brightdotdev/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-card px-4 py-2 rounded-md shadow hover:shadow-elevated transition"
            >
              <Linkedin className="text-primary" size={20} />
              <span className="text-sm font-medium text-muted-foreground">LinkedIn</span>
            </motion.a>

            {/* Contact Item - GitHub */}
            <motion.a
              href="https://github.com/Brightdotdev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-card px-4 py-2 rounded-md shadow hover:shadow-elevated transition"
            >
              <Github className="text-primary" size={20} />
              <span className="text-sm font-medium text-muted-foreground">GitHub</span>
            </motion.a>

            {/* Contact Item - Email */}
            <motion.a
              href="mailto:iamtherealbright@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-card px-4 py-2 rounded-md shadow hover:shadow-elevated transition"
            >
              <Mail className="text-primary" size={20} />
              <span className="text-sm font-medium text-muted-foreground">Email</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}