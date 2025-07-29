import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  lessons: string[];
  status: 'completed' | 'in-progress' | 'experimental';
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const statusStyles = {
  completed: 'bg-success text-success-foreground',
  'in-progress': 'bg-warning text-warning-foreground',
  experimental: 'bg-accent text-accent-foreground',
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="group"
    >
      <div className="card-interactive bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Quick Actions */}
          <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  {project.demoUrl && (
    <a
      href={project.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
        <Play size={14} />
      </Button>
    </a>
  )}
  {project.githubUrl && (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
        <Github size={14} />
      </Button>
    </a>
  )}
</div>


          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <Badge className={statusStyles[project.status]} variant="secondary">
              {project.status.replace('-', ' ')}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-semibold text-lg text-foreground group-hover:gradient-text transition-all duration-300">
              {project.title}
            </h3>
            
            {(project.demoUrl || project.githubUrl) && (
              <div className="flex space-x-2">
                {project.demoUrl && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ExternalLink size={14} />
                  </Button>
                )}
              </div>
            )}
          </div>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Lessons Learned */}
          {project.lessons.length > 0 && (
            <div className="border-t border-border pt-4">
              <h4 className="text-sm font-medium text-foreground mb-2">
                Key Learnings
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {project.lessons.slice(0, 2).map((lesson, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-1 h-1 bg-accent rounded-full mt-2 mr-2 flex-shrink-0" />
                    {lesson}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}