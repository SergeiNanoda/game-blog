import React from "react";
import "./post.css";

export default function Post(props) {
  let { id, title, content, category, image } = props.value;
  return (
    <div
      className="post"
      onClick={() => (window.location.href = `/article/${id}`)} // '/article/:id'
    >
      <img src={image} alt="PostImage" className="postImg" />
      <div className="postInfo">
        <span className="postCat">{category}</span>
        <span className="postTitle">{title}</span>
      </div>
      <p className="postDesc">{content}</p>
    </div>
  );
}
