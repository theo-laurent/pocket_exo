import "./styles/App.css";
// import components
import Header from "./components/Header";
import MovieDetails from "./components/MovieDetails";
import MoviePopular from "./components/MoviePopular";
import { useState } from "react";

function App() {
  const [movieId, setMovieId] = useState("522402");

  return (
    <div className="App">
      <Header />
      <MovieDetails movieId={movieId} />
      <MoviePopular setMovieId={setMovieId} />
    </div>
  );
}

export default App;
