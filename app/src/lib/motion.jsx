// Librería de animaciones compartidas (Framer Motion)
import { motion } from 'framer-motion'

export const easeOut = [0.22, 1, 0.36, 1]
// Transición de muelle (se pasa completa como `transition`, no como `ease`)
export const easeSpring = { type: 'spring', stiffness: 260, damping: 20 }

// Contenedor escalonado: los hijos aparecen en cascada
export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7 } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOut } },
}

// Versión "whileInView" para secciones que animan al entrar por scroll
export const viewFadeUp = {
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, amount: 0.15 },
}

// Wrapper declarativo para revelar secciones al hacer scroll
export function Reveal({ children, as = 'div', variants = fadeUp, className, style, ...rest }) {
  const Comp = motion[as] ?? motion.div
  return (
    <Comp
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      {...rest}
    >
      {children}
    </Comp>
  )
}
