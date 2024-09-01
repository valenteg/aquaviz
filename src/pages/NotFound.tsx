import { Link } from 'react-router-dom';
import { Button } from "../components/ui/button";

export const NotFound = () => (
  <div className="flex flex-col items-center justify-center h-full space-y-4">
    <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <Button asChild>
      <Link to="/">Go Home</Link>
    </Button>
  </div>
);