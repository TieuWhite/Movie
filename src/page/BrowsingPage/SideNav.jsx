import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../app/config";

function SideNav({ setSelectedGenre }) {
  const [genreData, setGenreData] = useState([]);

  const fetchGenreData = async () => {
    const params = {
      api_key: API_KEY,
      language: "en",
    };

    const { data } = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params,
    });

    setGenreData(data.genres);
  };

  useEffect(() => {
    fetchGenreData();
  }, []);

  return (
    <>
      <div className="side-navbar">
        {genreData.map((genre) => (
          <div
            className="side-navbar-content"
            key={genre.id}
            onClick={() => setSelectedGenre(genre.id)}
          >
            {genre.name}
          </div>
        ))}
      </div>
    </>
  );
}

export default SideNav;
