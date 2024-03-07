import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const r = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${id}`
      );
      const data = await r.json();
      setArticle(data);
    };
    fetchArticle();
  }, [id]);

  if (!article) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="article-container">
        <h1>{article.title}</h1>
        <img
          src={article.imageUrl}
          alt="article photo"
          className="article-image"
        />
        <p>{article.summary}</p>
        <p className="publish-date">Published date: {article.publishedAt}</p>
        <a href={article.url}>Go to page</a>
      </div>
      <Link to={"/"}>Back</Link>
    </div>
  );
};

export default ArticleDetails;
