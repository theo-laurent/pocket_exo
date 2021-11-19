// import css
import "./styles/App.css";
// import components
import Header from "./components/Header";
import MovieDetails from "./components/MovieDetails";
import MovieSearch from "./components/MovieSearch";
import MoviePopular from "./components/MoviePopular";
// import methodes react
import { useState } from "react";

function App() {
  // state pour détailler le film cliqué au sein de MovieDetails
  const [movieId, setMovieId] = useState(55555);
  // state pour faire apparaitre la section recherche avec le mot tapé en barre de recherche
  const [movieSearch, setMovieSearch] = useState("");
  console.log(movieSearch);

  return (
    <div className="App">
      <Header setMovieSearch={setMovieSearch} />
      <MovieDetails movieId={movieId} setMovieId={setMovieId}/>
      <MovieSearch movieSearch={movieSearch} setMovieId={setMovieId} setMovieSearch={setMovieSearch}/>
      <MoviePopular setMovieId={setMovieId} />
    </div>
  );
}

export default App;
