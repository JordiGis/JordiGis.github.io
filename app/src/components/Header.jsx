import { motion } from 'framer-motion'
import { navLinks } from '../data/cv'
import { easeSpring } from '../lib/motion'

export default function Header() {
  return (
    <motion.header
      className="site-header"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={easeSpring}
    >
      <nav>
        <a className="nav-logo" href="/">JG<span>.</span>dev</a>
        <ul>
          {navLinks.map((l) => (
            <li key={l.to}>
              <a href={l.to}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
