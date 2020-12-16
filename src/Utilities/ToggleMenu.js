import React from "react";
import { AiOutlineWindows } from "react-icons/ai";

const ToggleMenu = () => {
  const openMenu = () => {
    console.log("click");
    const menu = document.querySelector("#menu");
    const sidebar = document.querySelector("#sidebar");
    ["sidebar-container", "sidebar-container-animate"].map((cls) =>
      sidebar.classList.toggle(cls)
    );
    ["menu", "menu-animate"].map((cls) => menu.classList.toggle(cls));
  };
  return (
    <div>
      <AiOutlineWindows id="menu" className="menu" onClick={openMenu} />
    </div>
  );
};

export default ToggleMenu;
