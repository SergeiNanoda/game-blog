import React, { useEffect } from "react";
import "./posts.css";
import Post from "../post/Post";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../features/postSlice";
import { useSelector } from "react-redux";

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post value={post} />
      ))}
    </div>
  );
}
