import React from 'react';
import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { EnvironmentalData } from '@/data/mockData';

interface Props {
  data: EnvironmentalData[];
}

export const EnvironmentalConditionsChart: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Line yAxisId="left" type="monotone" dataKey="temperature" stroke="var(--chart-1)" name="Temperature (°C)" />
        <Line yAxisId="left" type="monotone" dataKey="salinity" stroke="var(--chart-2)" name="Salinity (ppt)" />
        <Line yAxisId="right" type="monotone" dataKey="currentSpeed" stroke="var(--chart-3)" name="Current Speed (m/s)" />
      </LineChart>
    </ResponsiveContainer>
  );
};