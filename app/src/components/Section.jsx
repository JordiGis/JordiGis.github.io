import { motion } from 'framer-motion'
import { Icono } from '../lib/icons'

// Sección con revelado al hacer scroll
export default function Section({ id, titulo, icon, intro, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`section ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {titulo && (
        <h2 className="sec-title">
          {icon && <Icono name={icon} className="sec-ico" />}
          {titulo}
        </h2>
      )}
      {intro && <p className="section-intro">{intro}</p>}
      {children}
    </motion.section>
  )
}
