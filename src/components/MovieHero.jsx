import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function MovieHero({ trendingMovies }) {
  const [searchParams, setSearchParams] = useSearchParams("");
  const [input, setInput] = useState("");
  const [randomBackdrop, setRandomBackdrop] = useState(null);

  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const navigate = useNavigate();

  useEffect(() => {
    setRandomBackdrop(
      trendingMovies[Math.floor(Math.random() * trendingMovies?.length)]
    );
  }, [trendingMovies]);

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: input });
    navigate(`/browse?query=${input}`);
  };

  return (
    <>
      <div
        className="hero-container"
        style={{
          backgroundImage: `url(${IMAGE_PATH}${randomBackdrop?.backdrop_path})`,
          backgroundSize: `cover`,
        }}
      >
        <div className="hero-header">
          <h1>Welcome.</h1>
          <h1>
            Millions of movies, TV shows and people to discover. Explore now.
          </h1>
        </div>
        <div className="hero-search">
          <form onSubmit={onSubmit}>
            <input
              onChange={(e) => setInput(e.target.value)}
              className="hero-input"
              type="text"
              placeholder="Search..."
            />
            {input}
          </form>
        </div>
      </div>
    </>
  );
}

export default MovieHero;
