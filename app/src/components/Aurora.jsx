import { motion } from 'framer-motion'

// Fondo con gradiente animado tipo "aurora" para el hero
export default function Aurora() {

  return (
    <div className="aurora" aria-hidden="true">
      <motion.div
        className="aurora-blob b1"
        animate={{ x: [0, 60, -40, 0], y: [0, -40, 30, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="aurora-blob b2"
        animate={{ x: [0, -50, 40, 0], y: [0, 35, -25, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
