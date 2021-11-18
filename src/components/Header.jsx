// import css
import { useState } from "react";
import "../styles/header.css";

export default function Header(props) {
  const [searchMovie, setSearchMovie] = useState("");

  function search() {
    fetch(
      `https://api.themoviedb.org/3/search/movie/?query=${searchMovie}&api_key=d4dfced817985d414b727774821c9678&language=fr`,
      { method: "GET" }
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
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
        onClick={() => search()}
        htmlFor="headerSearch"
        className="header__btn"
      >
        Rechercher
      </button>
    </div>
  );
}
