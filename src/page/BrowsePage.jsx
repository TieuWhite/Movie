import SideNav from "./BrowsingPage/SideNav";
import BrowseSection from "./BrowsingPage/BrowseSection";
import { useState } from "react";

function BrowsePage() {
  const [browseMovie, setBrowseMovie] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState();

  return (
    <>
      <div className="browse-page">
        <SideNav setSelectedGenre={setSelectedGenre} />
        <BrowseSection
          setBrowseMovie={setBrowseMovie}
          selectedGenre={selectedGenre}
          browseMovie={browseMovie}
        />
      </div>
      <button></button>
    </>
  );
}

export default BrowsePage;
