import { Button } from "../components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Welcome to Aquaviz</h1>
      <p className="text-lg text-muted-foreground">Your comprehensive aquaculture management solution.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Interactive Map</CardTitle>
            <CardDescription>View and analyze farm locations with real-time data</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Access detailed environmental data layers and farm-specific information.</p>
            <Button onClick={() => navigate('/map')}>Explore Map</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Farm Dashboard</CardTitle>
            <CardDescription>Monitor performance metrics and environmental conditions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Get insights into water quality, growth rates, and production forecasts.</p>
            <Button onClick={() => navigate('/dashboard')} variant="outline">View Dashboard</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};