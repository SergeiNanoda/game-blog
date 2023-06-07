import React from "react";
import "./post.css";

export default function Post(props) {
  let { title, content, category, image } = props.value;
  return (
    <div className="post">
      <img src={image} alt="PostImage" className="postImg" />
      <div className="postInfo">
        <span className="postCat">{category}</span>
        <span className="postTitle">{title}</span>
      </div>
      <p className="postDesc">{content}</p>
    </div>
  );
}
