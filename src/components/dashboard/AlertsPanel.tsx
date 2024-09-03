import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertItem } from './AlertItem';
import { Alert, mockAlerts } from '@/data/mockData';
import { Bell, Filter } from 'lucide-react';

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
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bell className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold">Alerts and Notifications</h2>
        </div>
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
          <Button onClick={handleClearAll} variant="outline" size="sm">
            Clear All
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        {filteredAlerts.length > 0 ? (
          filteredAlerts.map(alert => (
            <AlertItem
              key={alert.id}
              alert={alert}
              onMarkAsRead={() => handleMarkAsRead(alert.id)}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-64 text-center text-gray-500">
            <Filter className="h-12 w-12 mb-2" />
            <p className="text-lg font-medium">No alerts to display</p>
            <p className="text-sm">All clear! There are no active alerts at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};