import React from 'react';
import { Code2, Lightbulb, Target, Heart } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      title: 'Desarrollo',
      description: 'Crear soluciones elegantes y funcionales con las últimas tecnologías.'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-accent-500" />,
      title: 'Innovación',
      description: 'Siempre buscando nuevas formas de resolver problemas complejos.'
    },
    {
      icon: <Target className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      title: 'Objetivos',
      description: 'Enfocado en entregar resultados que superen las expectativas.'
    },
    {
      icon: <Heart className="w-8 h-8 text-accent-500" />,
      title: 'Pasión',
      description: 'Amo lo que hago y se refleja en cada línea de código.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-secondary-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            Acerca de <span className="text-primary-600 dark:text-primary-400">Mí</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-gray-200 dark:bg-secondary-700 rounded-xl flex items-center justify-center">
                <span className="text-8xl">🚀</span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 dark:bg-primary-800/30 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-200 dark:bg-accent-800/30 rounded-full"></div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
              Soy un desarrollador full-stack con más de 3 años de experiencia creando 
              aplicaciones web modernas y escalables. Mi pasión por la tecnología me impulsa 
              a estar siempre aprendiendo y explorando nuevas herramientas.
            </p>
            
            <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
              Especializado en React, Node.js, TypeScript y tecnologías cloud. Me encanta 
              trabajar en equipo y crear soluciones que realmente marquen la diferencia 
              para los usuarios finales.
            </p>

            <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
              Cuando no estoy programando, disfruto contribuir a proyectos open source, 
              escribir artículos técnicos y explorar las últimas tendencias en desarrollo web.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-secondary-700 transition-colors duration-300">
                  <div className="flex justify-center mb-2">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-secondary-900 dark:text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;