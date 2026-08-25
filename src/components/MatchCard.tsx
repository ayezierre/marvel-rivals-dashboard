import type { Match } from '../types/Match'

type MatchCardProps = {
  match: Match
}

function MatchCard({ match }: MatchCardProps) {
  const kd =
    match.deaths > 0
      ? match.kills / match.deaths
      : match.kills

  return (
    <div className={`match-card ${match.result}`}>
      <div>
        <h3>{match.hero}</h3>
        <p className="match-result">
          {match.result.toUpperCase()}
        </p>
      </div>

      <div className="match-stats">
        <span>
          {match.kills} / {match.deaths} / {match.assists}
        </span>

        <span>
          K/D {kd.toFixed(2)}
        </span>
      </div>
    </div>
  )
}

export default MatchCard