import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
    return (
        <Section id="experience" className="bg-background">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">My Experience</h2>
                <div className="space-y-12">
                    {EXPERIENCE.map((exp) => (
                        <div key={exp.id} className="relative pl-8 border-l-2 border-accent/30 group">
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent group-hover:scale-125 transition-transform shadow-lg shadow-accent/50"></div>

                            <div className="glass-card p-8 rounded-2xl hover:border-accent/50 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                                        <p className="text-accent font-medium">{exp.company}</p>
                                    </div>
                                    <span className="text-sm font-semibold bg-secondary px-4 py-1 rounded-full text-text-secondary">
                                        {exp.period}
                                    </span>
                                </div>
                                <ul className="space-y-3">
                                    {exp.description.map((item, index) => (
                                        <li key={index} className="text-text-secondary flex gap-3">
                                            <span className="text-accent mt-1.5">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
