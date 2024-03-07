import React from "react";
import Article from "./Article";
import { useState, useEffect } from "react";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1); // Define page state
  const limit = 6;

  const loadArticles = async (page, limit) => {
    const start = (page - 1) * limit;
    const r = await fetch(
      `https://api.spaceflightnewsapi.net/v3/articles?_start=${start}&_limit=${limit}`
    );
    const data = await r.json();
    setArticles(data);
  };

  useEffect(() => {
    loadArticles(page, limit);
  }, [page]);

  return (
    <div className="article-list-container">
      <div className="button-container">
        <button onClick={() => setPage(Math.max(1, page - 1))}>Previous</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
      {articles ? (
        <div className="article-list-container">
          {articles.map((article) => (
            <Article
              key={article.id}
              id={article.id}
              title={article.title}
              url={article.url}
              imgUrl={article.imageUrl}
              publish={article.publishedAt}
            />
          ))}
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default ArticleList;
