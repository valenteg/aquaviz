import React from 'react';
import { Alert } from '@/data/mockData';
import { Button } from "../ui/button";
import { AlertCircle, Thermometer, Droplet, Wind, Activity, Leaf, Fish } from 'lucide-react';

interface AlertItemProps {
  alert: Alert;
  onMarkAsRead: () => void;
}

export const AlertItem: React.FC<AlertItemProps> = ({ alert, onMarkAsRead }) => {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'temperature': return <Thermometer className="h-5 w-5" />;
      case 'salinity': return <Droplet className="h-5 w-5" />;
      case 'currentSpeed': return <Wind className="h-5 w-5" />;
      case 'pH': return <Activity className="h-5 w-5" />;
      case 'nutrient': return <Leaf className="h-5 w-5" />;
      case 'disease': return <Fish className="h-5 w-5" />;
      default: return <AlertCircle className="h-5 w-5" />;
    }
  };

  const getSeverityStyle = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 border-red-300 text-red-800';
      case 'medium': return 'bg-yellow-100 border-yellow-300 text-yellow-800';
      case 'low': return 'bg-green-100 border-green-300 text-green-800';
      default: return 'bg-gray-100 border-gray-300 text-gray-800';
    }
  };

  return (
    <div className={`flex items-center justify-between p-3 mb-2 rounded-lg border ${getSeverityStyle(alert.severity)}`}>
      <div className="flex items-center space-x-3">
        <div className="p-2 rounded-full bg-white">
          {getAlertIcon(alert.type)}
        </div>
        <div>
          <p className="font-medium">{alert.message}</p>
          <p className="text-sm opacity-75">{new Date(alert.timestamp).toLocaleString()}</p>
        </div>
      </div>
      <Button onClick={onMarkAsRead} variant="outline" size="sm" className="hover:bg-white/50">
        Dismiss
      </Button>
    </div>
  );
};