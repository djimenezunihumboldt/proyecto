import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50 dark:from-secondary-900 dark:to-secondary-800 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-1 animate-bounce-slow">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-secondary-700 flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-secondary-900 dark:text-white mb-6">
            Hola, soy{' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Tu Nombre
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Desarrollador Full Stack apasionado por crear experiencias digitales 
            increíbles. Especializado en React, Node.js y tecnologías modernas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Ver Proyectos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Contactar
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:tu@email.com"
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;