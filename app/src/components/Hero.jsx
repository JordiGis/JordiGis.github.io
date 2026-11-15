import { motion } from 'framer-motion'
import { ArrowDownRight, Send } from 'lucide-react'
import { staggerContainer, fadeUp, easeSpring } from '../lib/motion'
import { perfil, stackLine, stats } from '../data/cv'
import { GithubIcon } from '../lib/icons'
import Aurora from './Aurora'
import CountUp from './CountUp'

export default function Hero() {
  return (
    <section className="hero">
      <Aurora />
      <motion.div
        className="hero-card"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={fadeUp} className="hero-tag">
          {perfil.rol}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={easeSpring}
        >
          {perfil.nombre}
        </motion.h1>
        <motion.p variants={fadeUp} className="hero-type">{stackLine}</motion.p>
        <motion.p variants={fadeUp} className="hero-sub">
          Construyo aplicaciones web de principio a fin: interfaz, API, base de datos
          y despliegue. Trabajo con pymes y clientes freelance desde 2025, con foco en
          producto claro, rendimiento y código mantenible.
        </motion.p>
        <motion.div variants={fadeUp} className="hero-actions">
          <a className="btn btn-solid" href="#proyectos">Ver proyectos <ArrowDownRight size={16} /></a>
          <a className="btn btn-ghost" href="#contacto">Contactar <Send size={16} /></a>
          <a className="btn btn-ghost" href={perfil.github} target="_blank" rel="noopener noreferrer">
            GitHub <GithubIcon size={16} />
          </a>
        </motion.div>
        <motion.div variants={fadeUp} className="hero-stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <CountUp to={s.value} suffix={s.suffix} />
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <a className="scroll-hint" href="#sobre-mi" aria-label="Bajar a Sobre mí"><span /></a>
    </section>
  )
}
