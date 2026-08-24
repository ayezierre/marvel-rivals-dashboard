import './App.css'

function App() {
  const matches = [
    {
      id: 1,
      hero: 'Magneto',
      result: 'win',
      kills: 24,
      deaths: 11,
      assists: 8,
    },
    {
      id: 2,
      hero: 'Hela',
      result: 'loss',
      kills: 18,
      deaths: 16,
      assists: 5,
    },
    {
      id: 3,
      hero: 'Magneto',
      result: 'win',
      kills: 29,
      deaths: 13,
      assists: 11,
    },
  ]

  const totalMatches = matches.length

  const wins = matches.filter((match) => match.result === 'win').length

  const losses = matches.filter((match) => match.result === 'loss').length

  const totalKills = matches.reduce(
    (total, match) => total + match.kills,
    0
  )

  const totalDeaths = matches.reduce(
    (total, match) => total + match.deaths,
    0
  )

  const winRate = (wins / totalMatches) * 100

  const kd = totalKills / totalDeaths

  return (
    <div>
      <h1>Marvel Rivals Dashboard</h1>

      <h2>Career Stats</h2>

      <p>Matches: {totalMatches}</p>
      <p>Wins: {wins}</p>
      <p>Losses: {losses}</p>
      <p>Win Rate: {winRate.toFixed(1)}%</p>
      <p>Kills: {totalKills}</p>
      <p>Deaths: {totalDeaths}</p>
      <p>K/D: {kd.toFixed(2)}</p>

      <h2>Recent Matches</h2>

      {matches.map((match) => (
        <div key={match.id}>
          <p>
            {match.result} - {match.hero}
          </p>

          <p>
            {match.kills} / {match.deaths} / {match.assists}
          </p>
        </div>
      ))}
    </div>
  )
}

export default App