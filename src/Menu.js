import React from "react";

export default function Menu({ menuList }) {
  return (
    <div className="menu-list-box">
      {menuList.map((menuItem) => {
        const { menuItems } = menuItem;

        return (
          <div className="item-card" key={menuItem.id}>
            <img src={menuItem.img} alt={menuItem.title} />

            <div className="item-info">
              <header>
                <h3>{menuItem.title}</h3>
                <h4>${menuItem.price}</h4>
              </header>

              <p>{menuItem.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
