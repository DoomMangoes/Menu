import "./styles.css";
import React, { useState } from "react";
import Category from "./Category";
import menuItems from "./data.js";
import Menu from "./Menu.js";

const allCategories = [
  "all",
  ...new Set(menuItems.map((item) => item.category))
];

export default function App() {
  const [categories, setCategories] = useState(allCategories);
  const [menuList, setMenuList] = useState(menuItems);

  const filter = (category) => {
    if (category === "all") {
      setMenuList(menuItems);
      return;
    }
    const newItems = menuItems.filter((item) => item.category === category);
    setMenuList(newItems);
  };

  return (
    <div className="menu-box">
      <h2>Our Menu</h2>
      <div className="underline" />
      <Category categories={categories} filter={filter} />
      <Menu menuList={menuList} />
    </div>
  );
}
