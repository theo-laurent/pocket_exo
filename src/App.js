import "./styles/App.css";
// import components
import Header from "./components/Header";
import MovieDetails from "./components/MovieDetails";
import MoviePopular from "./components/MoviePopular";

function App() {
  return (
    <div className="App">
      <Header />
      <MovieDetails />
      <MoviePopular />
    </div>
  );
}

export default App;
