import NavBar from "./components/NavBar";
import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import BrowsePage from "./page/BrowsePage";
import DetailPage from "./page/DetailPage";
import NotFound from "./page/NotFound";

function App() {
  const BASE_URL = `https://api.themoviedb.org/3`;

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage BASE_URL={BASE_URL} />}></Route>
        <Route path="/browse" element={<BrowsePage />}></Route>
        <Route path="/:movieID" element={<DetailPage />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
