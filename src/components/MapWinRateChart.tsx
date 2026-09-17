import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import type { MapStats } from '../types/MapStats'

type MapWinRateChartProps = {
    maps: MapStats[]
}

function MapWinRateChart({maps}: MapWinRateChartProps) {
    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={maps}>
                    <XAxis dataKey="mapName" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Bar dataKey="winRate" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default MapWinRateChart