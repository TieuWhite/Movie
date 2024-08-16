import { useEffect, useState } from "react";
import { API_KEY } from "../app/config";
import axios from "axios";
import MovieCard from "./MovieCard";
import Slider from "react-slick";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const BASE_URL = `https://api.themoviedb.org/3`;

  const params = {
    api_key: API_KEY,
    page: 1,
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fetchData = async () => {
    const { data } = await axios.get(`${BASE_URL}/movie/popular`, { params });
    setMovies(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(movies);
  return (
    <>
      <div className="movie-slider">
        <Slider {...sliderSettings}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Slider>
      </div>

      {/* <div className="movie-container">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div> */}
    </>
  );
}

export default MovieList;
