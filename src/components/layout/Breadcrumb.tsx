import { ChevronRightIcon, HomeIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            <HomeIcon className="h-4 w-4" />
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={name} className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-muted-foreground" />
              {isLast ? (
                <span className="ml-2 font-medium">{name}</span>
              ) : (
                <Link to={routeTo} className="ml-2 text-muted-foreground hover:text-foreground">
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;