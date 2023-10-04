import { useContext } from "react";
import MovieCard from "../components/MovieCard";
import { ContextMovie } from "../components/ContextMovie";
import "./LandingPages.css";
import NavBar from "../components/NavBar";

const LandingPages = () => {
  const { user, peliculas } = useContext(ContextMovie);

  return (
    <>
      <NavBar />
      <div className="container">
        {peliculas.map((pelicula) => {
          return <MovieCard user={user} {...pelicula} key={pelicula.id} />;
        })}
      </div>
    </>
  );
};

export default LandingPages;
