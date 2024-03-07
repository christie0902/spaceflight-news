import React, { useState, useEffect } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const loadBlogs = async () => {
    const r = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");
    const data = await r.json();
    setBlogs(data);
  };
  useEffect(() => {
    loadBlogs();
  }, []);
  return (
    <div>
      {blogs ? (
        <div className="blogs-container">
          {blogs.map((blog) => (
            <div className="blog">
              <h1>{blog.title}</h1>
              <p>{blog.summary}</p>
              <a href={blog.url}>See more</a>
            </div>
          ))}
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Blogs;
