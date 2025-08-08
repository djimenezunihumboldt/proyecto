import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'TypeScript', level: 85, icon: '🟦' },
        { name: 'Tailwind CSS', level: 88, icon: '🎨' },
        { name: 'Next.js', level: 82, icon: '▲' },
        { name: 'HTML/CSS', level: 95, icon: '🌐' },
        { name: 'JavaScript', level: 92, icon: '💛' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 87, icon: '🟢' },
        { name: 'Express.js', level: 85, icon: '🚂' },
        { name: 'PostgreSQL', level: 80, icon: '🐘' },
        { name: 'MongoDB', level: 78, icon: '🍃' },
        { name: 'REST APIs', level: 90, icon: '🔌' },
        { name: 'GraphQL', level: 75, icon: '📊' }
      ]
    },
    {
      title: 'Herramientas',
      skills: [
        { name: 'Git', level: 90, icon: '📚' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'AWS', level: 70, icon: '☁️' },
        { name: 'Vite', level: 85, icon: '⚡' },
        { name: 'Jest', level: 80, icon: '🧪' },
        { name: 'Figma', level: 75, icon: '🎨' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-secondary-900 dark:to-secondary-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            Mis <span className="text-primary-600 dark:text-primary-400">Habilidades</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones completas y escalables
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-secondary-900 dark:text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm text-secondary-600 dark:text-secondary-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-secondary-700 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="h-2.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000 ease-out transform origin-left"
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `skillBar 1.5s ease-out ${skillIndex * 0.1}s both`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
              Siempre Aprendiendo
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
              La tecnología evoluciona constantemente, y yo también. Actualmente estoy explorando 
              nuevas tecnologías como Web3, AI/ML, y arquitecturas serverless para mantenerme 
              a la vanguardia del desarrollo moderno.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes skillBar {
          from { width: 0%; }
          to { width: var(--target-width); }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;