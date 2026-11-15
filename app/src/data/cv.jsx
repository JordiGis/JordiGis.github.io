// Datos del CV centralizados
export const perfil = {
  nombre: 'Jordi Gisbert Ferriz',
  rol: 'Desarrollador Full-Stack',
  email: 'jota.gvg@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jordigisberferriz',
  github: 'https://github.com/JordiGis',
}

// Línea de stack fija del hero (sustituye al texto rotatorio)
export const stackLine = 'React · TypeScript · Java · Node.js · PostgreSQL'

export const stats = [
  { value: 12, suffix: '+', label: 'Proyectos entregados' },
  { value: 5, suffix: '', label: 'Clientes freelance' },
  { value: 30, suffix: ' h/sem', label: 'Ahorradas a clientes' },
]

export const navLinks = [
  { to: '/#sobre-mi', label: 'Sobre mí' },
  { to: '/#experiencia', label: 'Experiencia' },
  { to: '/#proyectos', label: 'Proyectos' },
  { to: '/#skills', label: 'Skills' },
  { to: '/#formacion', label: 'Formación' },
  { to: '/#contacto', label: 'Contacto' },
]

// Ficha rápida: lo que un reclutador quiere saber en 5 segundos
export const ficha = [
  { icon: 'briefcase', label: 'Rol', value: 'Desarrollador Full-Stack' },
  { icon: 'map-pin', label: 'Ubicación', value: 'Alcoy (Alicante)' },
  { icon: 'laptop', label: 'Modalidad', value: 'Presencial, híbrido o remoto' },
  { icon: 'clock', label: 'Disponibilidad', value: 'Inmediata · jornada completa' },
  { icon: 'graduation-cap', label: 'Formación', value: 'DAW (8.1) · SMR' },
  { icon: 'languages', label: 'Idiomas', value: 'Castellano nativo · Valenciano B1 · Inglés B2' },
  { icon: 'car', label: 'Movilidad', value: 'Coche y moto propios (B1 + A1)' },
  { icon: 'code', label: 'Stack principal', value: 'React · TypeScript · Java · PostgreSQL' },
]

export const sobreMi = {
  intro: 'Desarrollo aplicaciones web de principio a fin: interfaz, API, base de datos y despliegue. Trabajo con clientes reales desde 2025 y he entregado más de una docena de proyectos. Mi prioridad es el producto claro: que se entienda, que vaya rápido y que se pueda mantener.',
  puntos: [
    { icon: 'monitor', titulo: 'Front-end', texto: 'Interfaces con React y TypeScript: limpias, responsive y cuidadas al detalle.' },
    { icon: 'server', titulo: 'Back-end', texto: 'APIs REST con Node.js, Django, FastAPI y Java (Spring Boot).' },
    { icon: 'database', titulo: 'Datos', texto: 'Modelado y consultas en PostgreSQL, MySQL y MongoDB.' },
    { icon: 'workflow', titulo: 'Automatización', texto: 'Procesos de negocio que dejan de hacerse a mano.' },
  ],
}

export const experiencia = [
  {
    year: '2025 — Actualidad',
    titulo: 'Desarrollador Web & Automatizaciones · Freelance',
    lugar: 'Alcoy y remoto',
    bullets: [
      <>He entregado <strong>5 webs y apps internas</strong> para pymes de la zona: Django, Node.js y PostgreSQL.</>,
      <>Automatización de facturación, gestión de pedidos y atención al cliente: <strong>~30 h/semana ahorradas</strong> al cliente.</>,
      <>Paneles de administración a medida para que cada cliente gestione su negocio sin depender de un técnico.</>,
    ],
  },
  {
    year: 'Ene — Jun 2025',
    titulo: 'Desarrollador Full-Stack · Prácticas FCT',
    lugar: 'Nexa Software, Alcoy',
    bullets: [
      <>Mantuve el panel interno de gestión con <strong>Java (Spring Boot)</strong> y <strong>React + TypeScript</strong>.</>,
      <>Añadí un módulo de búsqueda sobre la documentación interna que redujo el tiempo de consulta del equipo un <strong>40%</strong>.</>,
      <>Ese módulo me valió la selección para <strong>FP Skills</strong> en Desarrollo Web.</>,
    ],
  },
  {
    year: '2023 — 2025',
    titulo: 'Proyectos de ciclo y TFG',
    lugar: 'CIP FP Batoi, Alcoy',
    bullets: [
      <>TFG <strong>mejor valorado del ciclo</strong>: aplicación web completa con backend, base de datos y despliegue.</>,
      <>Despliegue y control de versiones aplicados desde el primer proyecto: <strong>Docker, Git y CI con GitHub Actions</strong>.</>,
    ],
  },
]

export const logro = {
  titulo: 'Seleccionado para FP Skills · Desarrollo Web',
  texto: 'Elegido entre los alumnos de mi centro para competir a nivel autonómico y nacional. La selección se basó en el trabajo que desarrollé durante las prácticas en Nexa Software.',
}

export const proyectos = [
  {
    titulo: 'Recepcionista para clínica dental',
    badge: 'Producto · API',
    icon: 'calendar-check',
    desc: 'Agente que gestiona las citas por WhatsApp: consulta la agenda, propone huecos, confirma y reprograma, con escalado a una persona cuando no hay confianza.',
    bullets: [
      <>Gestiona el <strong>78%</strong> de las citas sin intervención humana.</>,
      <>La clínica pasó de perder ~10 llamadas al día a atender <strong>24/7</strong>.</>,
      <>Coste de servicio <strong>{'< 15 €/mes'}</strong> con caché de contexto y modelo pequeño.</>,
    ],
    stack: 'Node.js · OpenAI API · Supabase · WhatsApp Business API',
  },
  {
    titulo: 'Asistente académico con citas',
    badge: 'Producto · Datos',
    icon: 'search',
    desc: 'Asistente que responde sobre apuntes y normativa del ciclo citando siempre la fuente. Índice de documentos y búsqueda semántica sobre datos propios.',
    bullets: [
      <><strong>1.400+ consultas</strong> de alumnos durante el curso.</>,
      <><strong>92% de respuestas correctas</strong>, validadas a mano sobre 200 preguntas.</>,
      <>Latencia media de <strong>1,8 s</strong> en hardware de consumo.</>,
    ],
    stack: 'Python · FastAPI · ChromaDB · React',
  },
  {
    titulo: 'Automatización del mantenimiento de sistemas',
    badge: 'Infra · Automatización',
    icon: 'wrench',
    desc: 'Herramientas que vigilan un homelab: revisan logs, reinician servicios caídos, abren issues y resumen el estado del sistema cada mañana.',
    bullets: [
      <>De ~4 h/semana de mantenimiento a <strong>prácticamente cero</strong>.</>,
      <>13 herramientas integradas con permisos por nivel de riesgo.</>,
      <>Open source: <strong>47 estrellas</strong> en GitHub y 3 contribuidores externos.</>,
    ],
    stack: 'Python · Docker · Proxmox · MCP',
  },
]

export const porfolios = [
  {
    href: 'https://jordigis.dev/porfolios/python/python.html',
    icon: '/img/python.png',
    alt: 'Python',
    titulo: 'Porfolio Python',
    desc: 'Proyectos y prácticas del ciclo, de scripts a aplicaciones.',
  },
  {
    href: 'https://jordigis.dev/porfolios/java/java.html',
    icon: '/img/java.png',
    alt: 'Java',
    titulo: 'Porfolio Java',
    desc: 'Aplicaciones, patrones de diseño y ejercicios estructurales.',
  },
]

// La IA queda como una competencia más, al final de la lista
export const skills = [
  {
    icon: 'monitor',
    titulo: 'Front-end',
    chips: ['React', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Tailwind', 'Diseño responsive', 'Accesibilidad'],
  },
  {
    icon: 'server',
    titulo: 'Back-end & APIs',
    chips: ['Node.js', 'Java · Spring Boot', 'Python', 'Django', 'FastAPI', 'REST APIs', 'Autenticación'],
  },
  {
    icon: 'database',
    titulo: 'Datos',
    chips: ['PostgreSQL', 'MySQL', 'MongoDB', 'Modelado y SQL', 'Migraciones'],
  },
  {
    icon: 'settings',
    titulo: 'Infra & herramientas',
    chips: ['Docker', 'Linux', 'Git / GitHub', 'CI con GitHub Actions', 'Bash', 'VBA · macros'],
  },
  {
    icon: 'sparkles',
    titulo: 'IA aplicada',
    chips: ['Agentes & tool-calling', 'RAG sobre datos propios', 'Automatización de documentos', 'Modelos en local', 'Evals'],
  },
]

export const formacion = [
  {
    year: '2023 — 2025',
    titulo: 'Desarrollo de Aplicaciones Web (DAW)',
    badge: { text: 'Completado', clase: 'done' },
    lugar: 'CIP FP Batoi, Alcoy',
    nota: 'Nota media: 8.1 · Premio al TFG mejor valorado del ciclo',
  },
  {
    year: '2025',
    titulo: 'Grado en Inteligencia Artificial · UPV',
    badge: { text: '1.er curso', clase: 'partial' },
    lugar: 'Universitat Politècnica de València',
    texto: 'Cursé el primer año y continué por la vía de proyectos reales, aplicando lo aprendido a clientes y productos propios.',
  },
  {
    year: '2021 — 2023',
    titulo: 'Sistemas Microinformáticos y Redes (SMR)',
    lugar: 'IES Hermanos Amorós, Villena',
    nota: 'Nota media: 7.4',
  },
]

export const contacto = {
  intro: 'Busco un puesto de desarrollador full-stack donde seguir construyendo producto. Disponibilidad inmediata, presencial en Alicante o remoto.',
  tarjetas: [
    { icon: 'mail', titulo: 'Email', texto: 'jota.gvg@gmail.com', href: 'mailto:jota.gvg@gmail.com' },
    { icon: 'linkedin', titulo: 'LinkedIn', texto: 'jordigisbertferriz', href: 'https://www.linkedin.com/in/jordigisberferriz' },
    { icon: 'github', titulo: 'GitHub', texto: 'JordiGis', href: 'https://github.com/JordiGis' },
  ],
}
