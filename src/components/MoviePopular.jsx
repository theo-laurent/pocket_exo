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
      "https://api.themoviedb.org/3/movie/popular/?language=fr&api_key=d4dfced817985d414b727774821c9678",
      { method: "GET" }
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setMovies(data.results);
      })
      .catch(function (error) {
        return error;
      });
  }, []);

  movies.splice(5, 15);
  
  /* options date
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }*/

  return (
    <div className="containerMoviePopular">
      <h1>Films populaires</h1>
      <div className="moviePopular">
        {movies.map((movie) => (
          <div className="moviePopular__card" key={uuidv4()} onClick={()=> props.setMovieId(movie.id)}>
            <img
              src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
              alt=""
            />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
