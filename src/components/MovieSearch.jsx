// import css
import "../styles/moviePopular.css";
// import methodes react
import { useEffect, useState } from "react";
// import uuidv4 pour générer des clés uniques
import { v4 as uuidv4 } from "uuid";

export default function MovieSearch(props) {
  // state pour gérer le changement de className css
  const [classSpecial, setClassSpecial] = useState(0);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  useEffect(
    function () {
      // on change la className CSS pour le 1er film de la liste de recherche

      if (props.movieSearch) {
        setClassSpecial(props.movieSearch[0].id);
      }
    },
    [props.movieSearch]
  );

  return (
    <div>
      {props.movieSearch ? (
        <div className="containerMoviePopular">
          <h1>Recherche</h1>
          <div className="moviePopular">
            {props.movieSearch.map((movie) => (
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
      ) : null}
    </div>
  );
}
