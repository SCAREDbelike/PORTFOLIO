export const SOCIAL = {
  github: 'https://github.com/SCAREDbelike',
  linkedin: 'https://www.linkedin.com/in/guillermo-anderson-pereyra-ramirez-403526343/',
  email: 'gpereyradev@gmail.com',
  certificate: 'https://coursera.org/share/83d39358a87d63d7afdb1151eb1dd3ee',
};

// Basado en las descripciones y contenidos presentes en los repositorios públicos.
export const PROJECTS = [
  {
    id: 'ecolim',
    number: '01',
    category: 'ANDROID / PERSISTENCIA',
    title: 'Ecolim Premium',
    summary: 'Aplicación Android para organizar el registro y seguimiento de residuos con información guardada localmente.',
    details: 'Integra pantallas de acceso, registro de residuos, historial y reportes. El reto consistió en conectar la interfaz con una base de datos SQLite para consultar y administrar los registros de forma consistente.',
    highlights: ['Registro e historial', 'Base de datos SQLite', 'Pantallas de reportes'],
    technologies: ['Java', 'Android SDK', 'SQLite'],
    href: 'https://github.com/SCAREDbelike/TrabajoFinal',
    featured: true,
  },
  {
    id: 'proforma',
    number: '02',
    category: 'ANDROID / OPERACIONES CRUD',
    title: 'App Proforma',
    summary: 'Herramienta móvil para gestionar productos dentro de proformas y calcular importes de manera automática.',
    details: 'Permite registrar, editar y eliminar productos; incorpora validación de códigos, precios y cantidades. Utiliza RecyclerView para mostrar los elementos y recalcula los totales según los datos ingresados.',
    highlights: ['CRUD de productos', 'Cálculo de totales', 'Validación de datos'],
    technologies: ['Java', 'RecyclerView', 'Material Components'],
    href: 'https://github.com/SCAREDbelike/appProforma',
  },
  {
    id: 'mantenimiento',
    number: '03',
    category: 'ANDROID / VALIDACIONES',
    title: 'App Mantenimiento',
    summary: 'Aplicación de registro de empleados con controles para mejorar la consistencia de los datos ingresados.',
    details: 'Valida campos como DNI de ocho dígitos y sueldo numérico positivo. Presenta los registros en un listado y utiliza GitHub Actions para ejecutar comprobaciones de compilación en el repositorio.',
    highlights: ['Registro de empleados', 'Validación de DNI y sueldo', 'GitHub Actions'],
    technologies: ['Java', 'ListView', 'Gradle'],
    href: 'https://github.com/SCAREDbelike/appMantenimiento',
  },
  {
    id: 'app-escuela',
    number: '04',
    category: 'FRONTEND / REACT',
    title: 'Sistema de Matrícula — SENATI',
    summary: 'Directorio de alumnos desarrollado con componentes reutilizables y estados interactivos en React.',
    details: 'Organiza la interfaz en Navbar, AlumnoCard, Contador y Footer. Cada tarjeta alterna el estado de matrícula y el contador usa useState; el proyecto se publica desde GitHub y se despliega en Vercel.',
    highlights: ['Componentes reutilizables', 'Interacción con useState', 'Deploy en Vercel'],
    technologies: ['React', 'Vite', 'JavaScript', 'Bootstrap'],
    href: 'https://github.com/SCAREDbelike/appEscuela',
  },
];

// Temario vigente del programa Google UX Design Professional Certificate en Coursera (edición en inglés, ocho cursos).
// No afirmar que son ocho credenciales individuales: son ocho cursos de un programa.
export const UX_COURSES = [
  { number: '01', name: 'Fundamentos de experiencia de usuario (UX)', detail: 'Diseño centrado en las personas, accesibilidad, pensamiento de diseño y principios de UX.', tag: 'Fundamentos' },
  { number: '02', name: 'Empatizar, definir e idear', detail: 'Investigación de necesidades, personas usuarias, problemas de diseño y generación de ideas.', tag: 'Investigación' },
  { number: '03', name: 'Wireframes y prototipos de baja fidelidad', detail: 'Arquitectura inicial, storyboards, bocetos y prototipado temprano en Figma.', tag: 'Wireframing' },
  { number: '04', name: 'Investigación UX y pruebas de usabilidad', detail: 'Estudios de usabilidad, síntesis de hallazgos y mejoras basadas en evidencia.', tag: 'Usabilidad' },
  { number: '05', name: 'Diseños y prototipos de alta fidelidad en Figma', detail: 'Interfaces detalladas, sistemas visuales, componentes y validación de propuestas.', tag: 'Diseño UI' },
  { number: '06', name: 'Interfaces dinámicas para sitios web', detail: 'Arquitectura de información, sitios responsivos y diseño de experiencias web.', tag: 'Web UI' },
  { number: '07', name: 'UX para el bien social y portafolio profesional', detail: 'Proyectos accesibles, diseños para móvil y web, documentación y presentación de casos.', tag: 'Portafolio UX' },
  { number: '08', name: 'Búsqueda de empleo apoyada en inteligencia artificial', detail: 'Organización de postulaciones, currículum, entrevistas y herramientas de IA.', tag: 'Carrera + IA' },
];


// Seis certificados aportados por el titular en formato PDF.
export const NETACAD_CERTIFICATES = [
  { id: 'python', title: 'Fundamentos de Python 1', category: 'Programación', date: '01 marzo 2025', isoDate: '2025-03-01', issuer: 'Cisco Networking Academy · SENATI', description: 'Fundamentos de programación y resolución de problemas con Python.', pdf: '/certificados/netacad-python.pdf', preview: '/certificados/netacad-python.webp' },
  { id: 'data-science', title: 'Introducción a la Ciencia de Datos', category: 'Datos', date: '10 octubre 2024', isoDate: '2024-10-10', issuer: 'Cisco Networking Academy · SENATI', description: 'Primeros conceptos y aplicaciones de la ciencia de datos.', pdf: '/certificados/netacad-data-science.pdf', preview: '/certificados/netacad-data-science.webp' },
  { id: 'hardware', title: 'Conceptos Básicos de Hardware de Computadora', category: 'Hardware', date: '19 septiembre 2024', isoDate: '2024-09-19', issuer: 'Cisco Networking Academy · SENATI', description: 'Componentes, arquitectura y fundamentos del hardware informático.', pdf: '/certificados/netacad-hardware.pdf', preview: '/certificados/netacad-hardware.webp' },
  { id: 'networking', title: 'Conceptos básicos de redes', category: 'Redes', date: '22 agosto 2024', isoDate: '2024-08-22', issuer: 'Cisco Networking Academy · SENATI', description: 'Fundamentos de las redes informáticas y su funcionamiento.', pdf: '/certificados/netacad-networking.pdf', preview: '/certificados/netacad-networking.webp' },
  { id: 'cybersecurity', title: 'Introducción a Ciberseguridad', category: 'Ciberseguridad', date: '15 agosto 2024', isoDate: '2024-08-15', issuer: 'Cisco Networking Academy · SENATI', description: 'Conceptos iniciales de seguridad digital y protección de sistemas.', pdf: '/certificados/netacad-cybersecurity.pdf', preview: '/certificados/netacad-cybersecurity.webp' },
  { id: 'iot', title: 'Introducción al Internet de las Cosas y Transformación Digital', category: 'IoT', date: '05 agosto 2024', isoDate: '2024-08-05', issuer: 'Cisco Networking Academy · SENATI', description: 'Panorama del Internet de las Cosas y la transformación digital.', pdf: '/certificados/netacad-iot.pdf', preview: '/certificados/netacad-iot.webp' },
];
