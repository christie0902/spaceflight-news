import React, { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import ArticleDetails from "./ArticleDetails";
import { Routes, Route } from "react-router-dom";

const Homepage = () => {
  // const [articles, setArticles] = useState([]);
  // const [page, setPage] = useState(1); // Define page state
  // const limit = 6;

  // const loadArticles = async (page, limit) => {
  //   const start = (page - 1) * limit;
  //   const r = await fetch(
  //     `https://api.spaceflightnewsapi.net/v3/articles?_start=${start}&_limit=${limit}`
  //   );
  //   const data = await r.json();
  //   setArticles(data);
  // };

  // useEffect(() => {
  //   loadArticles(page, limit);
  // }, [page]);

  return (
    <>
      {/* <div className="button-container">
        <button onClick={() => setPage(Math.max(1, page - 1))}>Previous</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div> */}

      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
      </Routes>
    </>
  );
};

export default Homepage;
