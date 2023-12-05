import React, { useEffect } from "react";
import "./posts.css";
import Post from "../post/Post";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../features/postSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Posts() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);

  useEffect(() => {
    dispatch(fetchPosts({ categoryId }));
  }, [categoryId]);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post value={post} />
      ))}
    </div>
  );
}
