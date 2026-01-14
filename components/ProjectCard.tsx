
import React from 'react';
import type { Project } from '../types';
import { ICONS } from '../constants';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="glass-card rounded-3xl overflow-hidden group hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {project.category}
        </div>
      </div>

      <div className="p-8 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-text-secondary text-sm mb-6 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="bg-secondary/50 text-text-secondary py-1 px-3 rounded-lg text-[11px] font-bold uppercase tracking-wider group-hover:bg-accent/10 group-hover:text-accent transition-colors">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-accent hover:text-white transition-colors"
            >
              <span className="w-5 h-5">{ICONS.externalLink}</span>
              Live Demo
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-text-secondary hover:text-white transition-colors"
            >
              <span className="w-5 h-5">{ICONS.github}</span>
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
