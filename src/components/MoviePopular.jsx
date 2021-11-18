// import css
import "../styles/moviePopular.css";
// import methodes react
import { useEffect, useState } from "react";
// import uuidv4 pour générer des clés uniques
import { v4 as uuidv4 } from "uuid";

export default function MoviePopular(props) {
  const [movies, setMovies] = useState([]);

  useEffect(function () {
    fetch(
      "https://api.themoviedb.org/3/movie/popular/?api_key=d4dfced817985d414b727774821c9678&language=frd .",
      { method: "GET" }
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        props.setMovieId(data.results[0].id);
        setMovies(data.results);
      })
      .catch(function (error) {
        return error;
      });
  }, []);

  movies.splice(5, 15);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div className="containerMoviePopular">
      <h1>Films populaires</h1>
      <div className="moviePopular">
        {movies.map((movie) => (
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
  );
}
