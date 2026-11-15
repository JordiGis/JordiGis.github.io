import { ArrowDown, ArrowUpRight, Bot, Braces, Database, Mail, Pause, Play, Workflow } from 'lucide-react'
import { GithubIcon } from './lib/icons'
import { useRef, useState } from 'react'
import { motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

const revealTransition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] }

function Reveal({ children, className, delay = 0 }) {
  const reducedMotion = useReducedMotion()
  return <motion.div className={className} initial={reducedMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ ...revealTransition, delay: reducedMotion ? 0 : delay }}>{children}</motion.div>
}

// Keep the scroll target still while its content enters and leaves reversibly.
function ScrollReveal({ children, className }) {
  const target = useRef(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target, offset: ['start 95%', 'end 5%'] })
  const opacity = useTransform(scrollYProgress, [0, 0.28, 0.78, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.28, 0.78, 1], [44, 0, 0, -32])
  return <div ref={target} className="scroll-reveal-slot"><motion.div className={className} style={reducedMotion ? undefined : { opacity, y }}>{children}</motion.div></div>
}

function ScrollProgress() {
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  return reducedMotion ? null : <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
}

function HeroTitle() {
  const reducedMotion = useReducedMotion()
  return <h1 aria-label="Desarrollo web, IA y automatización.">
    {['Desarrollo web,', 'IA y automatización.'].map((line, i) => <span className="title-line" key={line} aria-hidden="true">
      <motion.span initial={reducedMotion ? false : { y: '105%' }} animate={{ y: 0 }} transition={{ ...revealTransition, duration: 0.85, delay: reducedMotion ? 0 : 0.12 + i * 0.13 }}>
        {i === 1 ? <em>{line}</em> : line}
      </motion.span>
    </span>)}
  </h1>
}

function HeroArtwork() {
  const target = useRef(null)
  const [paused, setPaused] = useState(false)
  const visible = useInView(target, { amount: 0.1 })
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target, offset: ['start end', 'end start'] })
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const coreY = useTransform(progress, [0, 1], [16, -26])
  const orbitRotation = useTransform(progress, [0, 1], [-14, 16])
  const nodeY = useTransform(progress, [0, 1], [-12, 22])
  return <div className="hero-art-shell" data-motion={paused || !visible || reducedMotion ? 'paused' : 'playing'}><div ref={target} className="hero-art" aria-hidden="true"><motion.div className="orbit-field" style={{ rotate: reducedMotion ? 0 : orbitRotation }}><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit-tracer"><span/></div></motion.div><motion.div className="core" style={{ y: reducedMotion ? 0 : coreY }}><div className="core-float"><span>JordiGis<span className="brand-dot">.</span></span><small>FULL STACK<br/>DEVELOPER</small></div></motion.div><motion.div className="orbit-node node-a" style={{ y: reducedMotion ? 0 : nodeY }}><Braces/></motion.div><motion.div className="orbit-node node-b" style={{ y: reducedMotion ? 0 : coreY }}><Bot/></motion.div><motion.div className="orbit-node node-c" style={{ y: reducedMotion ? 0 : nodeY }}><Workflow/></motion.div><div className="art-caption">WEB <i/> AGENTES IA <i/> ERP · CRM</div></div>{!reducedMotion && <button className="motion-toggle" type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Reanudar animación' : 'Pausar animación'} aria-pressed={paused}>{paused ? <Play size={12}/> : <Pause size={12}/>}<span>{paused ? 'Reanudar' : 'Pausar'}</span></button>}</div>
}

function ProjectCard({ project: p }) {
  const target = useRef(null)
  const reducedMotion = useReducedMotion()
  // Measure the stationary slot so the card's transform cannot alter its own progress.
  const { scrollYProgress: progress } = useScroll({ target, offset: ['start 95%', 'end 5%'] })
  const direction = p.number === '02' ? 1 : -1
  const opacity = useTransform(progress, [0, 0.28, 0.78, 1], [0, 1, 1, 0])
  const x = useTransform(progress, [0, 0.28, 0.78, 1], [direction * 64, 0, 0, direction * -32])
  const y = useTransform(progress, [0, 0.28, 0.78, 1], [70, 0, 0, -40])
  const scale = useTransform(progress, [0, 0.28, 0.78, 1], [0.94, 1, 1, 0.97])
  const imageY = useTransform(progress, [0, 1], [48, -48])
  const gridY = useTransform(progress, [0, 1], [-28, 28])
  const imageScale = useTransform(progress, [0, 0.5, 1], [0.94, 1.04, 1.12])
  return <div ref={target} className="project-slot"><motion.article className={`project-card ${p.color}`} style={reducedMotion ? undefined : { opacity, x, y, scale }}><a className="project-visual" href={p.url} target="_blank" rel="noreferrer" aria-label={`Visitar ${p.name}`}><motion.div className="visual-grid" style={{ y: reducedMotion ? 0 : gridY }}/><div className="project-art-layer"><motion.img className="project-mark" src={p.image} alt="" style={{ y: reducedMotion ? 0 : imageY, scale: reducedMotion ? 1 : imageScale }}/></div><span className="visual-chip">{p.type}</span><span className="visual-arrow"><ArrowUpRight/></span><div className="visual-foot"><span>JORDI GISBERT FERRIZ</span><span>PROYECTO {p.number}</span></div></a><div className="project-info"><p className="project-number">{p.number} <span>/</span> {p.type}</p><h3>{p.name}</h3><p className="project-description">{p.description}</p><p className="project-detail">{p.detail}</p><p className="project-role"><strong>Mi papel</strong> {p.role}</p><div className="tag-list">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a className="project-link" href={p.url} target="_blank" rel="noreferrer">Visitar proyecto <ArrowUpRight size={16}/></a></div></motion.article></div>
}

const projects = [
  {
    number: '01', name: 'Drades', type: 'GESTIÓN DE PARTIDAS DE ROL', url: 'https://drades.com', image: '/projects/drades-icon.png',
    description: 'Aplicación para preparar y dirigir partidas de rol. Permite organizar campañas, gestionar personajes y controlar combates desde un panel con herramientas para el director de juego.',
    detail: 'Combate con turnos e iniciativa, estado de partida persistente y sincronización en tiempo real.',
    role: 'Producto y desarrollo full stack',
    tags: ['Next.js', 'React', 'MongoDB', 'Tiempo real'], mark: 'D', color: 'violet',
  },
  {
    number: '02', name: 'Drades 3D', type: 'GESTIÓN DE IMPRESIÓN 3D', url: 'https://drades.com/drades-3d', image: '/projects/drades3d-product.webp',
    description: 'Plataforma para solicitar y gestionar trabajos de impresión 3D. El cliente adjunta sus archivos y consulta el progreso; el impresor organiza pedidos, prepara presupuestos y se comunica con el cliente.',
    detail: 'Flujo de pedidos por estados, chat entre cliente e impresor, archivos adjuntos y panel vendedor con Kanban y facturación.',
    role: 'Producto y desarrollo full stack',
    tags: ['Next.js', 'React', 'MongoDB', 'AWS S3'], mark: '3D', color: 'blue',
  },
  {
    number: '03', name: 'moodtwo', type: 'PLANES EN PAREJA CON IA', url: 'https://moodtwo.com', image: '/projects/moodtwo-icon.png',
    description: 'Aplicación que propone ideas de cita a partir de los gustos y el estado de ánimo de cada persona. Permite vincular dos cuentas, registrar cómo os sentís y guardar planes, tanto en pareja como de forma individual.',
    detail: 'Datos personales cifrados con AES-256-GCM y claves por usuario. Generación de ideas con modelos de lenguaje (LLM) orquestada desde el backend.',
    role: 'Producto, arquitectura y desarrollo full stack',
    tags: ['Laravel', 'React', 'PostgreSQL', 'IA'], mark: 'm', color: 'rose',
  },
]

const capabilities = [
  { icon: Braces, title: 'Desarrollo web', text: 'Interfaces, APIs, bases de datos y despliegues. Trabajo con React, Next.js, Python y PHP.' },
  { icon: Bot, title: 'IA y agentes', text: 'Asistentes conectados a Odoo, consultas sobre datos empresariales y agentes de voz.' },
  { icon: Workflow, title: 'Automatización', text: 'Integración de servicios y automatización de tareas, notificaciones y operaciones internas.' },
  { icon: Database, title: 'ERP y CRM', text: 'Desarrollo de funcionalidades de gestión y experiencia con procesos empresariales en Odoo.' },
]

export default function App() {
  return <>
    <ScrollProgress/>
    <header className="topbar"><a href="#inicio" className="wordmark" aria-label="JordiGis, inicio">JordiGis<span>.</span></a><nav aria-label="Navegación principal"><a href="#trabajo">Proyectos</a><a href="#experiencia">Experiencia</a><a href="#perfil">Perfil</a><a href="#contacto" className="nav-cta">Contacto <ArrowUpRight size={15}/></a></nav></header>
    <main id="inicio">
      <section className="hero wrap">
        <Reveal className="hero-copy"><div className="eyebrow"><span className="status-dot"/> JORDI GISBERT FERRIZ <span className="eyebrow-line"/> ALCOY · ALICANTE</div>
          <HeroTitle/>
          <p className="hero-lede">Soy desarrollador full stack en ActivLink. Trabajo con Odoo, integraciones de IA y automatización de procesos empresariales. También desarrollo Drades, Drades 3D y moodtwo: proyectos propios de gestión de partidas, impresión 3D y planes en pareja.</p>
          <div className="hero-actions"><a className="button button-dark" href="#trabajo">Ver proyectos <ArrowDown size={16}/></a><a className="text-link" href="https://www.linkedin.com/in/jordigis" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15}/></a></div><p className="availability">Abierto a oportunidades remotas, híbridas o con posibilidad de reubicación.</p>
        </Reveal>
        <HeroArtwork/>
        <div className="hero-index"><span>01 / 04</span><span>PRODUCTO · TECNOLOGÍA · PERSONAS</span></div>
      </section>

      <section id="trabajo" className="work-section"><div className="wrap"><Reveal className="section-heading"><div><p className="kicker">PROYECTOS PROPIOS</p><h2>Software que<br/><em>he desarrollado.</em></h2></div><p className="section-aside">Tres aplicaciones con necesidades distintas: coordinación en tiempo real, gestión de pedidos y generación de planes con IA.</p></Reveal>
        <div className="project-list">{projects.map(p=><ProjectCard project={p} key={p.name}/>)}</div>
      </div></section>

      <section id="perfil" className="profile-section wrap"><ScrollReveal className="profile-intro"><p className="kicker">PERFIL PROFESIONAL</p><h2>Desarrollo de software<br/>para empresas y<br/><em>proyectos propios.</em></h2><p>Soy técnico informático y desarrollador de software. En ActivLink desarrollo funcionalidades para ERP y CRM, integro asistentes de IA y automatizo tareas internas. También participo en la evaluación de herramientas y en la formación de compañeros.</p><a className="text-link" href="https://www.linkedin.com/in/jordigis" target="_blank" rel="noreferrer">Ver trayectoria en LinkedIn <ArrowUpRight size={15}/></a></ScrollReveal><div className="capability-list">{capabilities.map((c,i)=><ScrollReveal className="capability" key={c.title}><span className="cap-index">0{i+1}</span><span className="cap-icon"><c.icon size={19}/></span><div><h3>{c.title}</h3><p>{c.text}</p></div><ArrowUpRight className="cap-arrow" size={17}/></ScrollReveal>)}</div></section>

      <section id="experiencia" className="experience-band"><Reveal className="wrap experience-inner"><div><p className="kicker">EXPERIENCIA · JUNIO DE 2025 — ACTUALIDAD</p><h2>Desarrollador full stack<br/><em>en ActivLink.</em></h2></div><div className="experience-copy"><p>Desarrollo funcionalidades para soluciones CRM y ERP, con atención a la modularidad y el mantenimiento. Integro asistentes de IA, agentes de voz y herramientas de consulta y análisis de datos para procesos internos y asesoramiento contable.</p><div className="stack-line">ODOO <i/> PYTHON <i/> PHP <i/> JAVASCRIPT / TYPESCRIPT <i/> REACT <i/> POSTGRESQL</div></div></Reveal></section>
      <section className="education-section wrap"><p className="kicker">FORMACIÓN</p><Reveal className="education-row"><span>2023 — 2025</span><h3>Técnico Superior en Desarrollo de Aplicaciones Web</h3><p>CIP FP Batoi</p></Reveal><Reveal className="education-row"><span>2021 — 2023</span><h3>Sistemas Microinformáticos y Redes</h3><p>IES Hermanos Amorós</p></Reveal></section>

      <footer id="contacto" className="footer"><div className="wrap contact-shell"><Reveal className="contact-heading"><p className="kicker">CONTACTO</p><span className="contact-symbol" aria-hidden="true"><ArrowUpRight/></span></Reveal><Reveal className="contact-body"><h2>Hablemos de<br/><em>tu proyecto.</em></h2><p className="footer-copy">Puedes escribirme para hablar de desarrollo de software, integraciones de IA o una oportunidad profesional.</p></Reveal><Reveal className="contact-action"><a className="email-link" href="mailto:jota.gvg@gmail.com"><Mail/> <span>jota.gvg@gmail.com</span> <ArrowUpRight/></a></Reveal><div className="footer-bottom"><div className="social-links"><a href="https://www.linkedin.com/in/jordigis" target="_blank" rel="noreferrer" aria-label="LinkedIn"><span className="linkedin-mark">in</span></a><a href="https://github.com/JordiGis" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={17}/></a></div><span className="copyright">© 2026 JORDI GISBERT FERRIZ</span></div></div></footer>
    </main>
  </>
}
