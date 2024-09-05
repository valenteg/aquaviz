import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

export const ProjectInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Project Information</h1>
        <Button variant="outline" size="sm" onClick={() => navigate('/')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
      </div>
      <Separator />
      <Card>
        <CardHeader>
          <CardTitle>About Aquaviz</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Aquaviz is a prototype interface for an aquaculture management tool, designed to showcase my frontend development and UI/UX design skills while deepening my understanding of the aquaculture industry. The tool provides a dashboard with live monitoring alerts and a variety of visualizations, including charts, tables, and graphs, to display real-time and historical data for an aquafarm. Additionally, it features an interactive map with data layers relevant to monitored aquafarms. This project currently utilizes mock data, with API integrations planned for future updates. It is a work in progress, and the code is available for review on GitHub: <a href="https://github.com/valenteg/aquaviz" className="text-blue-500 underline">Aquaviz Repository</a>.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Features</CardTitle>
          <CardDescription>Exciting new capabilities coming soon to Aquaviz</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Mobile Optimization: Enhance the responsiveness of Aquaviz for seamless use on mobile devices.</li>
            <li>API Integration: Connect with Oceanum Datamesh API endpoints to deliver real-time data on wave hindcasts, depth, and current direction, enhancing both the dashboard and interactive map functionalities.</li>
            <li>Improved Map Interactivity: Enhance the interactive map by adding more data layers and implementing a toggle switch for users to enable/disable specific data layers. Refine the overall UI/UX of the interactive map to improve usability and visualization.</li>
            <li>Enhanced Dashboard Data Presentation: Refine and adjust the relevance and clarity of the data presented across the dashboard. Focus on improving the responsiveness of widgets, charts, and tables, and continue refining the overall UI/UX for a more user-friendly experience.</li>
            <li>Alerts System Architecture Design: Develop a comprehensive architecture for the alerts system to provide users with timely, actionable notifications based on environmental conditions and other critical factors.</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Tech Stack</CardTitle>
          <CardDescription>Technologies used in Aquaviz</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>React with TypeScript</li>
            <li>Tailwind CSS & shadcn/ui</li>
            <li>Supabase</li>
            <li>Mapbox GL JS & Turf.js</li>
            <li>D3.js & Chart.js</li>
            <li>Zustand & React Query</li>
            <li>Vite</li>
            <li>Playwright</li>
            <li>Vercel</li>
            <li>Git/GitHub</li>
            <li>ESLint & Prettier</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};