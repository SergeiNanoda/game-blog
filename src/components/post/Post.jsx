import React from "react";
import "./post.css";
import { useNavigate } from "react-router-dom";

export default function Post(props) {
  const navigate = useNavigate();
  let { id, title, content, category, image } = props.value;
  return (
    <div
      className="post"
      onClick={() => navigate(`/article/${id}`)} // '/article/:id'
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
