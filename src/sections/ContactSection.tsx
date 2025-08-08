import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('¡Mensaje enviado! Te contactaré pronto.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'tu@email.com',
      link: 'mailto:tu@email.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Teléfono',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Ubicación',
      value: 'Ciudad, País',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com',
      color: 'hover:text-gray-900'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: 'Twitter',
      url: 'https://twitter.com',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-secondary-900 dark:to-secondary-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            Hablemos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-secondary-800 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">Envíame un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-900 dark:text-white mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 outline-none"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-900 dark:text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 outline-none"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-900 dark:text-white mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 outline-none"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-900 dark:text-white mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 outline-none resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <Send size={20} />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="block bg-white dark:bg-secondary-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 dark:text-white">{info.title}</h4>
                      <p className="text-secondary-600 dark:text-secondary-300">{info.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">Sígueme en redes</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-100 dark:bg-secondary-700 rounded-full flex items-center justify-center text-secondary-600 dark:text-secondary-300 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">¿Por qué trabajar conmigo?</h3>
              <ul className="space-y-2 text-white/90">
                <li>✅ Respuesta rápida (24-48 horas)</li>
                <li>✅ Comunicación constante durante el proyecto</li>
                <li>✅ Código limpio y bien documentado</li>
                <li>✅ Soporte post-lanzamiento</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-secondary-600 dark:text-secondary-400">
            © 2024 Tu Nombre. Construido con ❤️ usando React y Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;