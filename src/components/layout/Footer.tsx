import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-background border-t py-4 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground mb-2 md:mb-0">
            © {new Date().getFullYear()} Aquaviz. All rights reserved.
          </div>
          <nav>
            <ul className="flex space-x-4">
              {['privacy', 'terms', 'contact'].map((page) => (
                <li key={page}>
                  <Link 
                    to={`/${page}`} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};