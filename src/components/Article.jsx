import React from "react";
import { Link } from "react-router-dom";

const Article = ({ id, title, url, imgUrl, publish }) => {
  return (
    <>
      <div className="article-container">
        <h1>{title}</h1>
        <img src={imgUrl} alt="article photo" className="article-image" />
        <p className="publish-date">Published date: {publish}</p>
        <Link to={`/article/${id}`}>Read more</Link>
      </div>
    </>
  );
};

export default Article;
