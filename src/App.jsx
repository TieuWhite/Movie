import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="main">
        <MovieList />
      </div>
    </>
  );
}

export default App;
