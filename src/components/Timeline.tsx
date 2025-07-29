import { motion } from 'framer-motion';
import { Calendar, Award, Code, Lightbulb, GraduationCap } from 'lucide-react';
import { Badge } from '../components/ui/badge';

interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'project' | 'skill' | 'experiment' | 'milestone' | 'education';
  tags: string[];
  highlighted?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    id: '1',
    date: '2023',
    title: 'Access Program',
    description: 'Joined a program that gave me access to an internship the following year.',
    type: 'milestone',
    tags: ['Program', 'Pre-Internship'],
  },
  {
    id: '2',
    date: '2024',
    title: 'Internship & Certificate',
    description: 'Started internship through the program and earned a certificate mid-2024.',
    type: 'milestone',
    tags: ['Internship', 'Certificate'],
  },
  {
    id: '3',
    date: '2024',
    title: 'Started NIIT',
    description: 'Began NIIT training while doing the internship.',
    type: 'education',
    tags: ['NIIT', 'Learning'],
  },
  {
    id: '4',
    date: '2025',
    title: 'Ongoing Development',
    description: 'Still building and learning — this journey isn’t done.',
    type: 'milestone',
    tags: ['Progress'],
  },
];

const typeIcons = {
  education : GraduationCap ,
  project: Code,
  skill: Award,
  experiment: Lightbulb,
  milestone: Calendar,
};

const typeColors = {
  project: 'bg-primary text-primary-foreground',
  education: 'bg-primary text-primary-foreground',
  skill: 'bg-accent text-accent-foreground',
  experiment: 'bg-warning text-warning-foreground',
  milestone: 'bg-success text-success-foreground',
};

export function Timeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent opacity-30" />

      <div className="space-y-8">
        {timelineData.map((item, index) => {
          const Icon = typeIcons[item.type];
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative flex items-start space-x-6"
            >
              {/* Icon */}
              <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full ${typeColors[item.type]} shadow-soft`}>
                <Icon size={18} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <motion.div
                  className={`card-interactive p-6 rounded-xl ${
                    item.highlighted ? 'ring-2 ring-primary/20 bg-primary-subtle' : 'bg-card'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-subtle font-mono">{item.date}</p>
                    </div>
                    
                    {item.highlighted && (
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-2 h-2 bg-primary rounded-full"
                      />
                    )}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs font-medium"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Progress indicator */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-primary to-accent origin-top"
        style={{ height: '60%' }}
      />
    </div>
  );
}