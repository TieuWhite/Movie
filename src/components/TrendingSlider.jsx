import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../app/config";
import axios from "axios";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TrendingSlider({ trendingMovies, setTrendingMovies }) {
  const sliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    arrow: true,
    responsive: [
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
        },
      },
    ],
  };

  const fetchTrendingMovies = async (page = 1) => {
    const params = {
      api_key: API_KEY,
    };
    const { data } = await axios.get(`${BASE_URL}/trending/movie/day`, {
      params,
    });
    setTrendingMovies(data.results);
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <div className="movie-slider">
        <div className="slider-header">
          <h1>Trending</h1>
        </div>

        <Slider {...sliderSettings}>
          {trendingMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Slider>
      </div>

      <div></div>
    </>
  );
}

export default TrendingSlider;
