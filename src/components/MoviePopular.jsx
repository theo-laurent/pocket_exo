// import css
import "../styles/moviePopular.css";
// import methodes react
import { useEffect, useState } from "react";
// import uuidv4 pour générer des clés uniques
import { v4 as uuidv4 } from "uuid";

export default function MoviePopular(props) {
  const [movies, setMovies] = useState([]);
  // state pour gérer le changement de className css
  const [classSpecial, setClassSpecial] = useState(0);

  // destructure props et garde dans const pour éviter erreur de dépendances useEffect
  const propTest = props.setMovieId;

  // on fetch sur une Api pour recupérer les films les plus populaires
  useEffect(
    function () {
      fetch(
        "https://api.themoviedb.org/3/movie/popular/?api_key=d4dfced817985d414b727774821c9678&language=frd .",
        { method: "GET" }
      )
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          // on transmet le premier de ces films en props pour le mettre en détail
          propTest(data.results[0].id);
          // on enregistre les données de ces films dans notre variable movies
          setMovies(data.results);
          // on change la className CSS pour le 1er film de la liste
          setClassSpecial(data.results[0].id);
        })
        .catch(function (error) {
          return error;
        });
    },
    [propTest]
  );

  // on ne garde que les 5 premiers films de notre array movies
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
            className={
              movie.id === classSpecial
                ? "moviePopular__card"
                : "moviePopular__card moviePopular__card-unfocus"
            }
            key={uuidv4()}
            onClick={function () {
              // on remonte l'écran
              window.scrollTo(1000, 0);
              // on remonte en props l'id du film selectionné
              props.setMovieId(movie.id);
              // on change la className CSS pour le film selectionné
              setClassSpecial(movie.id);
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
