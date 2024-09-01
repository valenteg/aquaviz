import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-background border-t py-4 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground mb-2 md:mb-0">
            © 2024 Aquaviz. All rights reserved.
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;