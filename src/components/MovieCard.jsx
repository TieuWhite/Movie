function MovieCard({ movie }) {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <div className="movie-card">
        {movie.poster_path ? (
          <img
            className="movie-cover"
            src={`${IMAGE_PATH}${movie.poster_path}`}
            alt="movie-poster"
          />
        ) : null}
        <div>{movie.title}</div>
      </div>
    </>
  );
}

export default MovieCard;
