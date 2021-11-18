// import uuidv4 pour générer des clés uniques
import { v4 as uuidv4 } from "uuid";

export default function MovieSearch(props) {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div>
      {props.movieSearch ? (
        <div className="containerMoviePopular">
          <h1>Recherche</h1>
          <div className="moviePopular">
            {props.movieSearch.map((movie) => (
              <div
                className="moviePopular__card"
                key={uuidv4()}
                onClick={function () {
                  window.scrollTo(1000, 0);
                  props.setMovieId(movie.id);
                }}
              >
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                  alt=""
                />
                <h3>{movie.title}</h3>
                <p>
                  {new Date(movie.release_date).toLocaleDateString(
                    "fr-FR",
                    options
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
