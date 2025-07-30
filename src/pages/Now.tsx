// Imports necessary components and icons
import { motion } from 'framer-motion';
import { Calendar, BookOpen, Code, Target, Music, Coffee, BrainCircuit, LayoutDashboard } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Navigation } from '../components/Navigation';
import { useState, useEffect } from 'react';

// Main focus categories
const currentFocus = [
  {
    category: 'Building',
    icon: Code,
    items: [
      'Vehicle Tracking System (school project)',
      'Custom timeline-based portfolio',
      'Productivity app prototype (guilt-tripper)',
    ],
  },
  {
    category: 'Learning',
    icon: BookOpen,
    items: [
      'Neural networks from scratch (NumPy, no libraries)',
      'Machine learning: loss functions & backpropagation',
      'System design for freelancing stealth apps',
    ],
  },
  {
    category: 'Exploring',
    icon: Target,
    items: [
      'Deploying to Cloudflare Pages using Wrangler',
      'UK top-up program finances + stealth freelancing',
      'Fluid design tokens & Apple-inspired design systems',
    ],
  },
];

// Books you're reading
const currentlyReading = [
  {
    title: 'Deep Learning from Scratch',
    author: 'Seth Weidman',
    progress: 40,
  },
  {
    title: 'Make Time',
    author: 'Jake Knapp & John Zeratsky',
    progress: 55,
  },
];

// Your active tech stack
const recentTechStack = [
  'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'PostgreSQL',
  'Supabase', 'Node.js', 'React', 'ImageKit', 'Docker', 'Cloudflare Pages',
];

export default function Now() {
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">

        {/* Animated header block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm font-medium">Currently Active</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What I'm Up To <span className="gradient-text">Right Now</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Live snapshot of my dev work, learning journey, and personal experiments.
          </p>
        </motion.div>

        {/* Sections: Building / Learning / Exploring */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {currentFocus.map((section, index) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-normal"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <section.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{section.category}</h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Books section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card rounded-xl p-6 shadow-soft mb-12"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-accent/10 rounded-lg">
              <BookOpen size={20} className="text-accent" />
            </div>
            <h3 className="font-semibold text-lg">Currently Reading</h3>
          </div>

          <div className="space-y-4">
            {currentlyReading.map((book, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">{book.title}</h4>
                    <p className="text-sm text-muted-foreground">by {book.author}</p>
                  </div>
                  <span className="text-sm font-medium text-primary">{book.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    className="bg-primary h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${book.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-card rounded-xl p-6 shadow-soft mb-12"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-warning/10 rounded-lg">
              <Code size={20} className="text-warning" />
            </div>
            <h3 className="font-semibold text-lg">Current Tech Stack</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {recentTechStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
              >
                <Badge variant="outline" className="text-sm">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lifestyle Updates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-subtle rounded-xl p-6"
        >
          <h3 className="font-semibold text-lg mb-4">Beyond Code</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Coffee size={16} className="text-muted-foreground" />
              <span className="text-sm">Testing Figma UI flow for “GuiltTrip” productivity app</span>
            </div>
            <div className="flex items-center space-x-3">
              <Music size={16} className="text-muted-foreground" />
              <span className="text-sm">Using lo-fi beats & streak gamification to focus</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar size={16} className="text-muted-foreground" />
              <span className="text-sm">Budgeting for personal and finacial Lifestylre</span>
            </div>
            <div className="flex items-center space-x-3">
              <Target size={16} className="text-muted-foreground" />
              <span className="text-sm">Optimizing async workflows for stealth freelancing</span>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
