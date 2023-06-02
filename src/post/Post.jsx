import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        src={"\\img\\oblivion-elder-scrolls-online-blackwood.jpg"}
        alt="PostImage"
        className="postImg"
      />
      <div className="postInfo">
        <span className="postCat">Test</span>
        <span className="postTitle">Super Test</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}
