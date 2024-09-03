import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { chartConfig } from '@/components/charts/chartConfig';
import { MarketPriceData } from '@/data/mockData';

interface MarketPriceTrackerProps {
  data: MarketPriceData;
}

export const MarketPriceTracker: React.FC<MarketPriceTrackerProps> = ({ data }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl text-primary">Market Price Tracker</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-lg font-medium">Current Market Prices</p>
            <div className="max-h-[300px] overflow-y-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Species/Product</TableHead>
                    <TableHead className="font-semibold">Price ($/kg)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.currentPrices.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.species}</TableCell>
                      <TableCell className="font-medium">${item.price.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg font-medium">Price Trends and Forecast</p>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={data.priceHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="price" name="Actual Price" fill={chartConfig.growthRate.color} />
                  <Line type="monotone" dataKey="forecast" name="Forecast" stroke={chartConfig.temperature.color} strokeWidth={2} />
                </ComposedChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};