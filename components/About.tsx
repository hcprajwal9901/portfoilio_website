
import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-primary">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
          <img
            src="src/pics/pic.jpeg"
            alt="H C Prajwal"
            className="rounded-2xl aspect-[3/4] object-fit shadow-2xl  shadow-accent/20 w-100 "
          />
        </div>
        <div className="md:col-span-3">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-text-secondary text-lg mb-8">
            Hello! I'm a  Ambitious entry-level professional in Machine Learning, Data Science, and DevOps engineer with practical experience in Python, 
            TensorFlow, and React. Demonstrated capability in enhancing web applications through efficient API deployment and database 
            solutions during a recent internship. Equipped with strong skills in data preprocessing, model training, and visualization to 
            effectively contribute in ML Engineering, Data Science, or Web Development roles. Eager to drive impactful, data-driven outcomes.
          </p>
          <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map(skill => (
              <span key={skill} className="bg-secondary text-text-secondary py-2 px-4 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
