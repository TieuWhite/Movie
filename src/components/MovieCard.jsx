import { Link, useParams } from "react-router-dom";
import { IMAGE_PATH } from "../app/config";

function MovieCard({ movie }) {
  return (
    <>
      <div className="movie-card">
        {movie.poster_path ? (
          <Link to={`/${movie.id}`}>
            <img
              className="movie-cover"
              src={`${IMAGE_PATH}${movie.poster_path}`}
              alt="movie-poster"
            />
          </Link>
        ) : null}
        <div className="movie-title">{movie.title}</div>
        <div className="movie-date">{movie.release_date}</div>
      </div>
    </>
  );
}

export default MovieCard;
