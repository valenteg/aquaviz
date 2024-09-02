import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { AlertItem } from './AlertItem';
import { Alert, mockAlerts } from '@/data/mockData';

export const AlertsPanel: React.FC = () => {
  const [alerts, setAlerts] = useState<Alert[]>(mockAlerts);
  const [filter, setFilter] = useState<string>('all');

  const handleClearAll = () => {
    setAlerts([]);
  };

  const handleMarkAsRead = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const filteredAlerts = filter === 'all' 
    ? alerts 
    : alerts.filter(alert => alert.type === filter);

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Alerts and Notifications</CardTitle>
        <div className="flex space-x-2">
          <Select onValueChange={setFilter} defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter alerts" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Alerts</SelectItem>
              <SelectItem value="temperature">Temperature</SelectItem>
              <SelectItem value="salinity">Salinity</SelectItem>
              <SelectItem value="currentSpeed">Current Speed</SelectItem>
              <SelectItem value="pH">pH</SelectItem>
              <SelectItem value="nutrient">Nutrient</SelectItem>
              <SelectItem value="disease">Disease</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleClearAll} variant="outline">Clear All</Button>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-200px)] pr-4">
          {filteredAlerts.length > 0 ? (
            filteredAlerts.map(alert => (
              <AlertItem
                key={alert.id}
                alert={alert}
                onMarkAsRead={() => handleMarkAsRead(alert.id)}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 mt-4">No alerts to display.</p>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};