import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../app/config";
import axios from "axios";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PopularSlider({ popularMovies, setPopularMovies }) {
  const sliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    arrow: true,
  };

  const params = {
    api_key: API_KEY,
  };

  const fetchPopularMovies = async (page = 1) => {
    const { data } = await axios.get(`${BASE_URL}/movie/popular`, {
      params,
    });

    setPopularMovies(data.results);
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <>
      <div className="movie-slider">
        <div className="slider-header">
          <h1>Popular</h1>
        </div>

        <Slider {...sliderSettings}>
          {popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Slider>
      </div>

      <div></div>
    </>
  );
}

export default PopularSlider;
