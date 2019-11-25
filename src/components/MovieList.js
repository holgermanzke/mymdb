import React from "react";
import { searchMovies } from "../api/movies";

export default function MovieList({ searchValue }) {
  const [movies, setMovies] = React.useState([]);

  async function refreshMovies() {
    const discoveredMovies = await searchMovies(searchValue);
    setMovies(discoveredMovies);
    return movies;
  }
  React.useEffect(() => {
    refreshMovies();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </div>
  );
}
