import SideNav from "./BrowsingPage/SideNav";
import BrowseSection from "./BrowsingPage/BrowseSection";
import { useState } from "react";
import { Pagination } from "@mui/material";

function BrowsePage() {
  const [selectedGenre, setSelectedGenre] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  return (
    <>
      <div className="browse-page">
        <SideNav setSelectedGenre={setSelectedGenre} />
        <BrowseSection
          selectedGenre={selectedGenre}
          page={page}
          setTotalPages={setTotalPages}
        />
      </div>
      <div className="pagination">
        <Pagination
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "0px",
          }}
          count={totalPages}
          color="primary"
          onChange={(event, value) => setPage(value)}
        />
      </div>
    </>
  );
}

export default BrowsePage;
