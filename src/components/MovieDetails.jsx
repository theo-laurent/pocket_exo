// import css
import "../styles/movieDetails.css";
// import methodes react
import { useEffect, useState } from "react";
// import diagramme circulaire
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function MovieDetails(props) {
  const [movieSolo, setMovieSolo] = useState();

  useEffect(
    function () {
      fetch(
        `https://api.themoviedb.org/3/movie/${props.movieId}?language=fr&api_key=d4dfced817985d414b727774821c9678`,
        { method: "GET" }
      )
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          setMovieSolo(data);
        })
        .catch(function (error) {
          return error;
        });
    },
    [props.movieId]
  );

  if (movieSolo != null) {
    // variables pour faciliter la lecture provenant de l'API
    let img = "https://image.tmdb.org/t/p/w500/" + movieSolo.poster_path;
    let titre = movieSolo.title;
    let année = ` (${new Date(movieSolo.release_date).getFullYear()})`;
    let dateFr = new Date(movieSolo.release_date).toLocaleDateString();
    let genres = movieSolo.genres.map((element) => {
      return element.name + ", ";
    });
    let heure = Math.floor(movieSolo.runtime / 60);
    let minutes = movieSolo.runtime % 60;
    let durée = heure + "h " + minutes + "m";
    let overview = movieSolo.overview;
    let note = movieSolo.vote_average * 10;

    return (
      <div className="containerMovieDetails">
        <h1>Description</h1>
        <div
          className="containerMovieDetails__background"
          style={{
            background: `url(${img})`,
          }}
        ></div>

        <div className="containerMovieDetails__infos">
          <img src={img} alt="" />
          <div className="containerMovieDetails__infos__txt">
            <div className="containerMovieDetails__infos__title">
              <h1>{titre}</h1>
              <p>{année}</p>
            </div>

            <ul>
              <li className="liNone">{dateFr}</li>
              <li>{genres}</li>
              <li>{durée}</li>
            </ul>

            <div className="divGraphique">
              <div style={{ width: 70 }}>
                <CircularProgressbar
                  value={note}
                  text={note + "%"}
                  styles={buildStyles({
                    pathColor: "#18D07A",
                    textColor: "white",
                    textSize: "24px",
                  })}
                />
                <h3>Note des utilisateurs</h3>
              </div>
            </div>

            <h2>Synopsis</h2>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
}
