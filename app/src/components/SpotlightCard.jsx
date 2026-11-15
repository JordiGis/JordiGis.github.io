// Tarjeta con "spotlight": halo que sigue el cursor
import { useRef } from 'react'

export default function SpotlightCard({ className = '', children, as: Tag = 'div', ...rest }) {
  const ref = useRef(null)

  function onMove(e) {
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    ref.current.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <Tag ref={ref} onMouseMove={onMove} className={`spotlight ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
