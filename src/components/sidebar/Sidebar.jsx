import React from "react";
import styles from "./Sidebar.module.css";
import home from "../../assets/sidebarIcons/Group 46.png";
import icon2 from "../../assets/sidebarIcons/Group 47.png";
import icon3 from "../../assets/sidebarIcons/Group 53.png";
import icon4 from "../../assets/sidebarIcons/Group 54.png";
import icon5 from "../../assets/sidebarIcons/Group 56.png";
import search from "../../assets/sidebarIcons/ICON - Search.png";

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <img src={search} />
      <div className={styles.selectedIcon}>
        <img src={home} />
      </div>
      <img src={icon5} />
      <img src={icon4} />
      <img src={icon3} />
      <img src={icon2} />
    </div>
  );
};

export default Sidebar;
