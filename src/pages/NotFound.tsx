import { Button } from "../components/ui/button";
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">Page not found</p>
      <Button onClick={() => navigate('/')}>Go Home</Button>
    </div>
  );
}

export default NotFound;