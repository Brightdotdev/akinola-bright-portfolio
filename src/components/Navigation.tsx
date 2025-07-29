import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Clock, BookOpen, FolderOpen, Sun, Moon } from 'lucide-react';
import { Button } from '../components/ui/button';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Now', path: '/now', icon: Clock },
  { name: 'Projects', path: '/projects', icon: FolderOpen },
];

export function Navigation({ darkMode, toggleDarkMode }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-normal ${
        isScrolled ? 'glass shadow-primary' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <NavLink to="/" className="font-mono font-bold text-lg gradient-text">
              dev.portfolio
            </NavLink>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-normal ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-glow'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`
                  }
                >
                  <item.icon size={16} />
                  <span className="text-sm font-medium">{item.name}</span>
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Theme Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="rounded-lg"
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={16} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={16} />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden px-6 pb-4">
        <div className="flex items-center justify-around">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-normal ${
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`
              }
            >
              <item.icon size={18} />
              <span className="text-xs font-medium">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}