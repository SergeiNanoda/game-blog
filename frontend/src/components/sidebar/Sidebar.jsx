import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import fetchRequest from "../../utils/utils";

export default function Sidebar() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await fetchRequest(`/categories`);
        setCategories(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT BLOG</span>
        <img
          src="\img\5064df111803929.Y3JvcCw4MjAsNjQxLDAsODk.jpg"
          alt="image"
          className="sidebarImg"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {categories.map((category) => (
            <li
              className="sidebarListItem"
              onClick={() => navigate(`/category/${category.id}`)}
            >
              {category.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
