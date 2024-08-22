function MovieHero({ trendingMovies }) {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const randomBackdrop =
    trendingMovies[Math.floor(Math.random() * trendingMovies?.length)];

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
          <input className="hero-input" type="text" placeholder="Search..." />
        </div>
      </div>
    </>
  );
}

export default MovieHero;
