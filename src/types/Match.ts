export type Match = {
  id: number
  hero: string
  role: 'Vanguard' | 'Duelist' | 'Strategist'
  map: string
  result: 'win' | 'loss'
  kills: number
  deaths: number
  assists: number
  damage: number
  healing: number
  date: string
}