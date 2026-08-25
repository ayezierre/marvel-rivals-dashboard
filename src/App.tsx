import "./App.css";
import StatCard from "./components/StatCard";
import HeroCard from "./components/HeroCard";
import MatchCard from './components/MatchCard'
import type { Match } from './types/Match'

function App() {
  const matches: Match[] = [
    {
      id: 1,
      hero: "Magneto",
      result: "win",
      kills: 24,
      deaths: 11,
      assists: 8,
    },
    {
      id: 2,
      hero: "Hela",
      result: "loss",
      kills: 18,
      deaths: 16,
      assists: 5,
    },
    {
      id: 3,
      hero: "Magneto",
      result: "win",
      kills: 29,
      deaths: 13,
      assists: 11,
    },
  ];
  // Career Stats
  const totalMatches = matches.length;

  const wins = matches.filter((match) => match.result === "win").length;

  const losses = matches.filter((match) => match.result === "loss").length;

  const totalKills = matches.reduce((total, match) => total + match.kills, 0);

  const totalDeaths = matches.reduce((total, match) => total + match.deaths, 0);

  const winRate = (wins / totalMatches) * 100;

  const kd = totalKills / totalDeaths;

  // Hero Stats
  function getHeroStats(heroName: string) {
    const heroMatches = matches.filter((match) => match.hero === heroName);

    const wins = heroMatches.filter((match) => match.result === "win").length;

    const kills = heroMatches.reduce((total, match) => total + match.kills, 0);

    const deaths = heroMatches.reduce(
      (total, match) => total + match.deaths,
      0,
    );

    const winRate =
      heroMatches.length > 0 ? (wins / heroMatches.length) * 100 : 0;

    const kd = deaths > 0 ? kills / deaths : 0;

    return {
      heroName,
      matches: heroMatches.length,
      wins,
      kills,
      deaths,
      winRate,
      kd,
    };
  }
  const heroNames = [...new Set(matches.map((match) => match.hero))];

  const heroStats = heroNames.map((heroName) => getHeroStats(heroName));

  return (
    <div>
      <h1>Marvel Rivals Dashboard</h1>
      <h2>Career Stats</h2>
      <div className="stats-grid">
        <StatCard label="Matches" value={totalMatches} />
        <StatCard label="Wins" value={wins} />
        <StatCard label="Losses" value={losses} />
        <StatCard label="Win Rate" value={`${winRate.toFixed(1)}%`} />
        <StatCard label="Kills" value={totalKills} />
        <StatCard label="Deaths" value={totalDeaths} />
        <StatCard label="K/D" value={kd.toFixed(2)} />
      </div>

      <h2>Hero Stats</h2>

      <div className="hero-list">
        {heroStats.map((hero) => (
          <HeroCard key={hero.heroName} hero={hero} />
        ))}
      </div>

<h2>Recent Matches</h2>

<div className="match-list">
  {matches.map((match) => (
    <MatchCard
      key={match.id}
      match={match}
    />
  ))}
</div>
</div>
  );
}

export default App;
