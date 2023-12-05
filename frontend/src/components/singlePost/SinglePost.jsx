import React, { useEffect, useState } from "react";
import "./singlePost.css";
import { useParams } from "react-router-dom";
import fetchRequest from "../../utils/utils";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  let { title, content, image } = post;
  useEffect(() => {
    console.log("useEffect");
    const fetchPost = async () => {
      try {
        const result = await fetchRequest(`/posts/${id}`);
        setPost(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, []);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={image} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          {title}
          <div className="singlePostEdit">
            <i
              className="singlePostIcon fa-solid fa-pen-to-square"
              style={{ color: "#000000" }}
            ></i>
            <i
              className="singlePostIcon fa-solid fa-trash-can"
              style={{ color: "#000000" }}
            ></i>
          </div>
        </h1>
        <p className="singlePostContent">{content}</p>
      </div>
    </div>
  );
}
