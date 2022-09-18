import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navigation, LinkStyled } from "./SharedLayout.styled";


export const SharedLayout = () => {
    return (
      <>
        <header>
          <Navigation>
            <LinkStyled to="">Home </LinkStyled>
            <LinkStyled to="movies">Movies</LinkStyled>
          </Navigation>
        </header>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </>
    );
  };

