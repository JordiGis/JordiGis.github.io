// Mapa de iconos por nombre, para poder referenciarlos desde los datos del CV
import {
  Award, Briefcase, CalendarCheck, Car, Clock, Code, Database, Folder, GraduationCap,
  Languages, Laptop, Layers, Mail, MapPin, Monitor, Search, Server, Settings, Sparkles,
  User, Workflow, Wrench,
} from 'lucide-react'

export const iconos = {
  award: Award,
  briefcase: Briefcase,
  'calendar-check': CalendarCheck,
  car: Car,
  clock: Clock,
  code: Code,
  database: Database,
  folder: Folder,
  'graduation-cap': GraduationCap,
  languages: Languages,
  laptop: Laptop,
  layers: Layers,
  mail: Mail,
  'map-pin': MapPin,
  monitor: Monitor,
  search: Search,
  server: Server,
  settings: Settings,
  sparkles: Sparkles,
  user: User,
  workflow: Workflow,
  wrench: Wrench,
}

// Lucide ya no incluye iconos de marca, así que van como SVG inline
export function GithubIcon({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.17-.51-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.03 0 0 .97-.31 3.2 1.19a11.1 11.1 0 0 1 5.8 0c2.22-1.5 3.19-1.19 3.19-1.19.63 1.58.23 2.74.11 3.03.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.27 5.68.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  )
}

export function LinkedinIcon({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  )
}

export function Icono({ name, size = 20, className }) {
  const Cmp = iconos[name] ?? Sparkles
  return <Cmp size={size} className={className} aria-hidden="true" />
}
