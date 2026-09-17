import "./App.css";
import StatCard from "./components/StatCard";
import HeroCard from "./components/HeroCard";
import MatchCard from './components/MatchCard'
import type { Match } from './types/Match'
import HeroWinRateChart from './components/HeroWinRateChart'
import MapWinRateChart from './components/MapWinRateChart'

function App() {
  const matches: Match[] = [
  {
    id: 1,
    hero: 'Magneto',
    role: 'Vanguard',
    map: 'Yggsgard',
    result: 'win',
    kills: 24,
    deaths: 11,
    assists: 8,
    damage: 18450,
    healing: 0,
    date: '2026-09-01',
  },
  {
    id: 2,
    hero: 'Hela',
    role: 'Duelist',
    map: 'Tokyo 2099',
    result: 'loss',
    kills: 18,
    deaths: 16,
    assists: 5,
    damage: 22100,
    healing: 0,
    date: '2026-09-02',
  },
  {
    id: 3,
    hero: 'Magneto',
    role: 'Vanguard',
    map: 'Yggsgard',
    result: 'win',
    kills: 29,
    deaths: 13,
    assists: 11,
    damage: 20750,
    healing: 0,
    date: '2026-09-03',
  },
  {
    id: 4,
    hero: 'Luna Snow',
    role: 'Strategist',
    map: 'Klyntar',
    result: 'win',
    kills: 12,
    deaths: 7,
    assists: 24,
    damage: 9800,
    healing: 17600,
    date: '2026-09-04',
  },
  {
    id: 5,
    hero: 'Hela',
    role: 'Duelist',
    map: 'Hall of Djalia',
    result: 'win',
    kills: 31,
    deaths: 12,
    assists: 7,
    damage: 28600,
    healing: 0,
    date: '2026-09-05',
  },
  {
    id: 6,
    hero: 'Magneto',
    role: 'Vanguard',
    map: 'Tokyo 2099',
    result: 'loss',
    kills: 17,
    deaths: 15,
    assists: 10,
    damage: 16300,
    healing: 0,
    date: '2026-09-06',
  },
  {
    id: 7,
    hero: 'Luna Snow',
    role: 'Strategist',
    map: 'Yggsgard',
    result: 'loss',
    kills: 9,
    deaths: 10,
    assists: 19,
    damage: 8100,
    healing: 14200,
    date: '2026-09-07',
  },
  {
    id: 8,
    hero: 'Hela',
    role: 'Duelist',
    map: 'Klyntar',
    result: 'win',
    kills: 27,
    deaths: 9,
    assists: 6,
    damage: 25400,
    healing: 0,
    date: '2026-09-08',
  },
  {
    id: 9,
    hero: 'Magneto',
    role: 'Vanguard',
    map: 'Hall of Djalia',
    result: 'win',
    kills: 22,
    deaths: 10,
    assists: 13,
    damage: 19100,
    healing: 0,
    date: '2026-09-09',
  },
  {
    id: 10,
    hero: 'Luna Snow',
    role: 'Strategist',
    map: 'Tokyo 2099',
    result: 'win',
    kills: 14,
    deaths: 6,
    assists: 28,
    damage: 10500,
    healing: 19400,
    date: '2026-09-10',
  },
]
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
  function getMapStats(mapName: string) {
    const mapMatches = matches.filter((match) => match.map === mapName);
    
    const wins = mapMatches.filter((match) => match.result === 'win').length;
    
    const losses = mapMatches.filter((match) => match.result === 'loss').length;

    const winRate = mapMatches.length > 0 ? (wins / mapMatches.length) * 100 : 0;

    return {
      mapName,
      matches: mapMatches.length,
      wins,
      losses,
      winRate,
    };
  }

  const heroNames = [...new Set(matches.map((match) => match.hero))];

  const heroStats = heroNames.map((heroName) => getHeroStats(heroName));

  const mapNames = [...new Set(matches.map((match) => match.map))]

  const mapStats= mapNames.map((mapName) => getMapStats(mapName))
  
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

{/* Hero Win Visualizations */}
<h2>Hero Win Rate Chart</h2>
      <HeroWinRateChart heroes={heroStats} />

{/* Map Win Visualizations */}

<h2>Map Win Rate Chart</h2>
      <MapWinRateChart maps={mapStats} />


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
