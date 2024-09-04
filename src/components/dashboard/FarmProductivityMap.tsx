import React from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Legend } from 'recharts';

interface FarmProductivityMapProps {
  data: {
    x: number;
    y: number;
    productivity: number;
  }[];
}

export const FarmProductivityMap: React.FC<FarmProductivityMapProps> = ({ data }) => {
  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <XAxis type="number" dataKey="x" name="X" unit="m" />
          <YAxis type="number" dataKey="y" name="Y" unit="m" />
          <ZAxis type="number" dataKey="productivity" range={[0, 500]} name="Productivity" unit="kg/m²" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="Productivity" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};