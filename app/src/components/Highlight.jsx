import SpotlightCard from './SpotlightCard'

export default function Highlight({ icon, titulo, texto }) {
  return (
    <div className="section highlight">
      <SpotlightCard className="highlight-card">
        <span className="highlight-icon">{icon}</span>
        <div>
          <h3>{titulo}</h3>
          <p>{texto}</p>
        </div>
      </SpotlightCard>
    </div>
  )
}
