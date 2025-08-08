# Portafolio Full Stack

Un portafolio moderno y responsivo construido con React, TypeScript, Tailwind CSS y Vite.

## 🚀 Características

- ✨ Diseño moderno y elegante
- 🌙 Tema claro/oscuro
- 📱 Completamente responsivo
- ⚡ Optimizado para rendimiento
- 🎨 Animaciones suaves
- 📧 Formulario de contacto funcional

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utilitario
- **Vite** - Herramienta de construcción rápida
- **Lucide React** - Iconos modernos

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/portafolio-fullstack.git
cd portafolio-fullstack
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🚀 Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages:

### Configuración Inicial

1. **Habilita GitHub Pages en tu repositorio:**
   - Ve a Settings → Pages
   - En "Source", selecciona "GitHub Actions"

2. **Haz push de tu código:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

### Despliegue Automático

El workflow de GitHub Actions se ejecutará automáticamente cuando:
- Hagas push a la rama `main`
- Lo ejecutes manualmente desde la pestaña Actions

Tu sitio estará disponible en: `https://tu-usuario.github.io/tu-repositorio-nombre/`
Tu sitio estará disponible en: `https://tu-usuario.github.io/portafolio-fullstack/`

## 📝 Personalización

### Información Personal
Actualiza la siguiente información en los componentes:

- **HeroSection.tsx**: Nombre, descripción, enlaces sociales
- **AboutSection.tsx**: Información personal y experiencia
- **SkillsSection.tsx**: Habilidades técnicas y niveles
- **ProjectsSection.tsx**: Proyectos y enlaces
- **ContactSection.tsx**: Información de contacto

### Colores y Estilos
Los colores están definidos en `tailwind.config.js`:
- `primary`: Azul principal
- `secondary`: Grises para texto y fondos
- `accent`: Amarillo/naranja para acentos

### Imágenes
- Reemplaza las URLs de Pexels con tus propias imágenes
- Agrega tu foto de perfil en la sección Hero

## 📁 Estructura del Proyecto

```
src/
├── components/
│   └── ui/
│       ├── Navbar.tsx
│       └── ThemeToggle.tsx
├── sections/
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   └── ContactSection.tsx
├── contexts/
│   └── ThemeContext.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

Tu Nombre - [tu@email.com](mailto:tu@email.com)

Enlace del Proyecto: [https://github.com/tu-usuario/tu-repositorio-nombre](https://github.com/tu-usuario/tu-repositorio-nombre)
Enlace del Proyecto: [https://github.com/tu-usuario/portafolio-fullstack](https://github.com/tu-usuario/portafolio-fullstack)

---

⭐ ¡No olvides darle una estrella al proyecto si te gustó!