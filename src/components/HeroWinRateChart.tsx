import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'

import type { HeroStats } from '../types/HeroStats'

type HeroWinRateChartProps = {
    heroes: HeroStats[]
}

function HeroWinRateChart({heroes}: HeroWinRateChartProps) {
    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={heroes}>
                    <XAxis dataKey="heroName" />
                    <YAxis domain={[0, 1]} />
                    <Tooltip />
                    <Bar dataKey="winRate" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default HeroWinRateChart