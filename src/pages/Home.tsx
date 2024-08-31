import { Button } from "../components/ui/button"
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Welcome to Aquaviz</h1>
      <p className="text-lg">Explore our interactive map and farm dashboard.</p>
      <div className="space-x-4">
        <Button onClick={() => navigate('/map')}>View Map</Button>
        <Button onClick={() => navigate('/dashboard')} variant="outline">Open Dashboard</Button>
      </div>
    </div>
  )
}

export default Home