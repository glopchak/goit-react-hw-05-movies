import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export const SharedLayout = () => {
    return (
      <>
        <header>
          <div>
            <Link to="">Home </Link>
            <Link to="movies">Movies</Link>
          </div>
        </header>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </>
    );
  };

