
import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS, ICONS } from '../constants';
import Section from './Section';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-secondary/10 blur-[120px] rounded-full"></div>

      <div className="animate-fade-in-up relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black tracking-tighter mb-4 leading-none">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">{PERSONAL_INFO.name}</span>.
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
          {PERSONAL_INFO.title}
        </h2>
        <p className="max-w-2xl text-lg md:text-xl text-text-secondary mb-12 leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <button
            onClick={scrollToProjects}
            className="group bg-accent text-white font-bold py-4 px-10 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-xl shadow-accent/20 flex items-center gap-2"
          >
            View My Work
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
          </button>
          <a
            href={SOCIAL_LINKS.resume}
            download="H_C_Prajwal_Resume.pdf"
            className="group glass-card border-white/10 text-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
          >
            Download Resume
            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          </a>
          <div className="flex items-center gap-6">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors p-2 hover:bg-secondary rounded-full">{ICONS.github}</a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors p-2 hover:bg-secondary rounded-full">{ICONS.linkedin}</a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
