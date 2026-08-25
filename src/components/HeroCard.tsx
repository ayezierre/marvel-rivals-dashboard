import StatCard from './StatCard'
import type { HeroStats } from '../types/HeroStats'

type HeroCardProps = {
  hero: HeroStats
}

function HeroCard({ hero }: HeroCardProps) {
  return (
    <div className="hero-card">
      <div className="hero-card-header">
        <h3>{hero.heroName}</h3>
        <p>
          {hero.matches} matches · {hero.winRate.toFixed(1)}% win rate
        </p>
      </div>

      <div className="stats-grid">
        <StatCard label="Wins" value={hero.wins} />
        <StatCard label="Kills" value={hero.kills} />
        <StatCard label="Deaths" value={hero.deaths} />
        <StatCard label="K/D" value={hero.kd.toFixed(2)} />
      </div>
    </div>
  )
}

export default HeroCard