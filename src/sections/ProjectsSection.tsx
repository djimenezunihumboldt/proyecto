import React from 'react';
import { Github, ExternalLink, Calendar, Code } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      date: '2024',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con funcionalidades avanzadas como colaboración en tiempo real y notificaciones.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      date: '2024',
      category: 'Frontend'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico interactivo con mapas, gráficos y predicciones detalladas usando APIs externas.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      date: '2023',
      category: 'Frontend'
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'API RESTful robusta para una red social con autenticación, posts, comentarios y sistema de seguimiento.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Node.js', 'Express', 'JWT', 'Redis'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      date: '2023',
      category: 'Backend'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Sitio web de portafolio personal con diseño moderno, animaciones suaves y optimización SEO.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Tailwind', 'Framer Motion', 'Vite'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      date: '2024',
      category: 'Frontend'
    },
    {
      id: 6,
      title: 'Data Analytics Tool',
      description: 'Herramienta de análisis de datos con visualizaciones interactivas y reportes automatizados.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'React', 'D3.js', 'FastAPI'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      date: '2023',
      category: 'Full Stack'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-secondary-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            Mis <span className="text-primary-600 dark:text-primary-400">Proyectos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Una colección de proyectos que demuestran mis habilidades y experiencia en desarrollo web
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white dark:bg-secondary-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Links overlay */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-secondary-600 dark:text-secondary-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-secondary-600 dark:text-secondary-300 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-100 dark:bg-secondary-700 hover:bg-gray-200 dark:hover:bg-secondary-600 text-secondary-900 dark:text-white px-4 py-2 rounded-lg font-medium text-center transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Code size={16} />
                    <span>Código</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
              ¿Te gustaría ver más proyectos?
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              Estos son solo algunos de mis proyectos. Visita mi GitHub para ver mi trabajo completo.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <Github size={20} />
              <span>Ver GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;