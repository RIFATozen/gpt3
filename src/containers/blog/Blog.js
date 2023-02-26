import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const imgSrcData = [blog02, blog03, blog04, blog05];

const articleData = {
  p1: "Sep 26, 2021",
  head1: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  p2: "Read Full Article",
};

const Blog = () => {
  return (
    <div className="gpt3__blog section__margin" id="blog">
      <div className="gpt3__blog-title">
        <h2 className="gradient__text">
          <span>A lot is happening,</span>
          <span>We are blogging about it.</span>
        </h2>
      </div>
      <div className="gpt3__blog-content">
        <div className="gpt3__blog-content-major">
          <Article
            img={blog01}
            p1={articleData.p1}
            head1={articleData.head1}
            p2={articleData.p2}
          />
        </div>
        <div className="gpt3__blog-content-minor">
          {imgSrcData.map((item,index) => (
            <Article
              img={item}
              p1={articleData.p1}
              head1={articleData.head1}
              p2={articleData.p2}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
