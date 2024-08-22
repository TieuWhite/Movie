import { useEffect } from "react";
import { API_KEY, BASE_URL } from "../../app/config";
import axios from "axios";
import MovieCard from "../../components/MovieCard";
import { useNavigate, useSearchParams } from "react-router-dom";

function BrowseSection({ selectedGenre, setBrowseMovie, browseMovie }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const valueSearch = searchParams.get("query");
  const type = valueSearch ? `/search/movie` : `/discover/movie`;
  const navigate = useNavigate();

  const fetchBrowseMovie = async () => {
    const params = {
      api_key: API_KEY,
      language: "en-US",
      with_genres: selectedGenre,
      query: valueSearch,
    };

    const { data } = await axios.get(`${BASE_URL}${type}`, {
      params,
    });
    setBrowseMovie(data.results);
  };

  useEffect(() => {
    fetchBrowseMovie();
  }, [selectedGenre, valueSearch]);

  useEffect(() => {
    if (valueSearch) {
      navigate(`/browse?query=${valueSearch}`);
    }
  }, [valueSearch, navigate]);
  return (
    <>
      <div className="browse-container">
        <div className="browse-content">
          {browseMovie.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export default BrowseSection;
