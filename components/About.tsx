import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-primary">
      <div className="grid md:grid-cols-5 gap-16 items-center">
        <div className="md:col-span-2 relative">
          <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-full z-0"></div>
          <img
            src="src/pics/pic.jpeg"
            alt="H C Prajwal"
            className="rounded-[2.5rem] aspect-[4/5] object-cover shadow-2xl shadow-accent/20 w-full relative z-10"
          />
        </div>

        <div className="md:col-span-3">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
            About Me
          </h2>

          <p className="text-text-secondary text-lg md:text-xl mb-10 leading-relaxed">
            Hello! I'm an{" "}
            <span className="text-white font-semibold">Ambitious UI Developer</span>{" "}
            passionate about building modern, responsive, and high-performance web interfaces.
            With a strong foundation in React, JavaScript, TypeScript, HTML, and CSS, I focus on
            creating clean, scalable, and user-friendly applications. I enjoy transforming UI/UX
            designs into efficient frontend code and building interactive experiences that deliver
            seamless user experiences across devices. I am constantly learning new frontend
            technologies and striving to create impactful digital products through thoughtful
            interface design and performance optimization.
          </p>

          <h3 className="text-2xl font-display font-semibold mb-6 text-white">
            My Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {SKILLS.map(skill => (
              <span
                key={skill}
                className="bg-secondary text-text-secondary py-2 px-5 rounded-full text-sm font-bold tracking-wide hover:bg-accent hover:text-white transition-all cursor-default shadow-sm border border-glass-border"
              >
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