import React, { useState } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Machine Learning' | 'Web Development'>('All');

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === filter);

  const categories = ['All', 'Machine Learning', 'Web Development'] as const;

  return (
    <Section id="projects" className="bg-primary">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured Projects</h2>
          <p className="text-text-secondary max-w-xl">A selection of my best work in Machine Learning, DevOps, and Web Development.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === cat
                ? 'bg-accent text-white shadow-lg shadow-accent/20'
                : 'bg-secondary text-text-secondary hover:bg-secondary/80'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
