import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import type { MapStats } from "../types/MapStats";

type MapWinRateChartProps = {
  maps: MapStats[];
};

function MapWinRateChart({ maps }: MapWinRateChartProps) {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={maps}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <XAxis
            dataKey="mapName"
            tick={{ fill: "#d1d5db", fontSize: 12 }}
            interval={0}
          />{" "}
          <YAxis domain={[0, 100]} />
          <Tooltip
            formatter={(value) => `${Number(value).toFixed(0)}%`}
            cursor={false}
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "1px solid #374151",
              borderRadius: "8px",
              color: "#ffffff",
            }}
            labelStyle={{
              color: "#ffffff",
            }}
            itemStyle={{
              color: "#a5b4fc",
            }}
          />
          <Bar
            dataKey="winRate"
            name="Win Rate"
            fill="#6366f1"
            radius={[6, 6, 0, 0]}
          />{" "}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MapWinRateChart;
