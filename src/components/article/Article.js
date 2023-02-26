import React from "react";
import "./article.css";

const Article = ({ img, p1, head1, p2 }) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-title">
        <img src={img} alt="Img" />
      </div>
      <div className="gpt3__article-content">
        <div>
          <p>{p1}</p>
          <h4>{head1}</h4>
        </div>
        <p>{p2}</p>
      </div>
    </div>
  );
};

export default Article;
