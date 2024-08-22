import NavBar from "./components/NavBar";
import "./App.css";
import { useState } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import HomePage from "./page/HomePage";
import BrowsePage from "./page/BrowsePage";
import DetailPage from "./page/DetailPage";
import NotFound from "./page/NotFound";

function App() {
  const [searchParams, setSearchParams] = useSearchParams("");
  const [input, setInput] = useState("");

  return (
    <>
      <NavBar
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        input={input}
        setInput={setInput}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              input={input}
              setInput={setInput}
            />
          }
        ></Route>
        <Route path="/browse" element={<BrowsePage />}></Route>
        <Route path="/:movieID" element={<DetailPage />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
