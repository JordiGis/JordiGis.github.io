import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../lib/icons'

const iconos = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail }

export function TimelineItem({ item }) {
  return (
    <article className="tl-item">
      <span className="tl-year">{item.year}</span>
      <h3>
        {item.titulo}
        {item.badge && <span className={`badge ${item.badge.clase}`}>{item.badge.text}</span>}
      </h3>
      <p className="tl-place">{item.lugar}</p>
      {item.bullets && (
        <ul className="bullets">
          {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
      {item.texto && <p className="tl-texto">{item.texto}</p>}
      {item.nota && <p className="nota">{item.nota}</p>}
    </article>
  )
}

export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <TimelineItem key={i} item={item} />
      ))}
    </div>
  )
}

export function ContactCards({ tarjetas }) {
  return (
    <div className="contact-grid">
      {tarjetas.map((c) => {
        const Icon = iconos[c.icon]
        return (
          <a className="card contact-card" href={c.href} key={c.titulo} {...(c.href.startsWith('http') && { target: '_blank', rel: 'noopener' })}>
            <span className="card-icon"><Icon /></span>
            <h3>{c.titulo}</h3>
            <p>{c.texto}</p>
          </a>
        )
      })}
    </div>
  )
}
