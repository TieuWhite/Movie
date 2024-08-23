import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, BASE_URL, IMAGE_PATH } from "../app/config";
import axios from "axios";
import { colors } from "@mui/material";

function DetailPage() {
  const [detailData, setDetailData] = useState([]);
  const { movieID } = useParams();

  const fetchDetailData = async () => {
    const params = {
      api_key: API_KEY,
    };
    const { data } = await axios.get(`${BASE_URL}/movie/${movieID}`, {
      params,
    });
    setDetailData(data);
  };

  useEffect(() => {
    fetchDetailData();
  }, []);

  console.log(detailData);

  return (
    <>
      <div
        className="detail-container"
        style={{ height: "calc(100vh - 64px ) ", width: "100%" }}
      >
        <h1>{detailData.title}</h1>
        <div>
          <img
            style={{ width: "250px" }}
            className="detail-image"
            src={`${IMAGE_PATH}${detailData.poster_path}`}
          ></img>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h4>Genres:</h4>
            <div style={{ display: "flex", gap: "15px" }}>
              {detailData.genres?.map((genre) => (
                <div key={genre.key}> {genre.name}</div>
              ))}
            </div>
            <h4>Release Date:</h4>
            <div>{detailData.release_date}</div>
            <h2 style={{ color: "lightblue" }}>
              Popularity: {detailData.popularity}
            </h2>
            <h1 style={{ color: "green" }}>Revenue: ${detailData.revenue}$$</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
