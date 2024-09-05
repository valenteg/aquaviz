import { Button } from "../components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowRight, Map, BarChart2, Info } from 'lucide-react';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to Aquaviz</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Your comprehensive aquaculture management solution.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Map className="h-6 w-6" />
              <span>Interactive Map</span>
            </CardTitle>
            <CardDescription>View and analyze farm locations with real-time data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">Access detailed environmental data layers and farm-specific information.</p>
            <Button onClick={() => navigate('/map')} className="w-full group">
              Explore Map
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardContent>
        </Card>
        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart2 className="h-6 w-6" />
              <span>Farm Dashboard</span>
            </CardTitle>
            <CardDescription>Monitor performance metrics and environmental conditions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">Get insights into water quality, growth rates, and production forecasts.</p>
            <Button onClick={() => navigate('/dashboard')} variant="outline" className="w-full group">
              View Dashboard
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardContent>
        </Card>
        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Info className="h-6 w-6" />
              <span>Project Info</span>
            </CardTitle>
            <CardDescription>Learn about Aquaviz and upcoming features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">Discover our project roadmap and exciting new features in development.</p>
            <Button onClick={() => navigate('/project-info')} variant="secondary" className="w-full group">
              View Project Info
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};