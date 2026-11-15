// Efecto máquina de escribir para el hero
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const PHRASES = [
  'AI Engineer',
  'Full-Stack Developer',
  'Agente docs IA',
  'RAG en producción',
  'LLMs en local',
  'Automatización',
]

export default function Typewriter() {
  const [text, setText] = useState('')
  const state = useRef({ i: 0, j: 0, deleting: false })

  useEffect(() => {
    let timer

    function tick() {
      const { i, j, deleting } = state.current
      const phrase = PHRASES[i]

      if (!deleting) {
        setText(phrase.slice(0, j + 1))
        state.current.j = j + 1
        if (j + 1 === phrase.length) {
          state.current.deleting = true
          timer = setTimeout(tick, 1800) // pausa al completar
          return
        }
        timer = setTimeout(tick, 65)
      } else {
        setText(phrase.slice(0, j - 1))
        state.current.j = j - 1
        if (j - 1 === 0) {
          state.current.deleting = false
          state.current.i = (i + 1) % PHRASES.length
          timer = setTimeout(tick, 350)
          return
        }
        timer = setTimeout(tick, 35)
      }
    }

    timer = setTimeout(tick, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.p
      className="hero-type"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {'const '}
      <span className="code-violet">rol</span>
      {' = '}
      <span className="code-green">"{text}</span>
      <span className="cursor-blink">▊</span>
      <span className="code-green">"</span>
      {';'}
    </motion.p>
  )
}
