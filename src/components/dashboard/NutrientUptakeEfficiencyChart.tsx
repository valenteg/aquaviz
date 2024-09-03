import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';

interface NutrientUptakeEfficiencyChartProps {
  data: {
    date: string;
    nitrogenUptake: number;
    phosphorusUptake: number;
    carbonSequestration: number;
  }[];
}

export const NutrientUptakeEfficiencyChart: React.FC<NutrientUptakeEfficiencyChartProps> = ({ data }) => {
  const latestData = data[data.length - 1];
  const chartData = [
    { name: 'Nitrogen Uptake', value: latestData.nitrogenUptake },
    { name: 'Phosphorus Uptake', value: latestData.phosphorusUptake },
    { name: 'Carbon Sequestration', value: latestData.carbonSequestration },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar name="Nutrient Uptake" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  );
};