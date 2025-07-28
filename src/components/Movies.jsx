import { Movie } from "./Movie";
import { Preloader } from "./Preloader";

function Movies({ movies = [], loading }) {
  if (loading) {
    return <Preloader />;
  }

  if (!movies.length) {
    return <h5 className="center">Nothing found</h5>;
  }

  return (
    <div className="movies">
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
          type={movie.Type}
        />
      ))}
    </div>
  );
}

export { Movies };