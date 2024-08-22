import { useState } from "react";
import MovieHero from "../components/MovieHero";
import PopularSlider from "../components/PopularSlider";
import TrendingSlider from "../components/TrendingSlider";

function HomePage({ query, input, setInput, searchParams, setSearchParams }) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  return (
    <>
      <div className="home-page">
        <MovieHero
          trendingMovies={trendingMovies}
          input={input}
          setInput={setInput}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <TrendingSlider
          query={query}
          trendingMovies={trendingMovies}
          setTrendingMovies={setTrendingMovies}
        />
        <PopularSlider
          popularMovies={popularMovies}
          setPopularMovies={setPopularMovies}
        />
      </div>
    </>
  );
}

export default HomePage;
