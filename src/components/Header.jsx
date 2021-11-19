// import css
import { useEffect, useState } from "react";
import "../styles/header.css";

export default function Header(props) {
  const [searchMovie, setSearchMovie] = useState("");

  useEffect(function () {
    // si l'input renvoie une string égale à 0 on renvoie null pour le component App puis MovieSearch
    if (searchMovie.length === 0) {
      props.setMovieSearch(null);
    }
  });

  // on fetch sur les caractères indiqués dans l'input
  function search() {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=d4dfced817985d414b727774821c9678&query=${searchMovie}&language=fr`,
      { method: "GET" }
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        // on transmet les données en props pour le component App puis MovieSearch
        props.setMovieSearch(data.results);
      })
      .catch(function (error) {
        return error;
      });
  }

  return (
    <div className="header">
      <input
        type="text"
        className="header__input"
        placeholder="Rechercher un film"
        name="headerSearch"
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => search()}
        htmlFor="headerSearch"
        className="header__btn"
      >
        Rechercher
      </button>
    </div>
  );
}
