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
      <div className={styles.iconContainer}>
        <img src={search} />
        <span>Search</span>
      </div>
      <div className={styles.iconContainer}>
        <img src={home} />
        <span>Home</span>
      </div>
      <div className={styles.iconContainer}>
        <img src={icon5} />
        <span>TV Shows</span>
      </div>
      <div className={styles.iconContainer}>
        <img src={icon4} />
        <span>Movies</span>
      </div>
      <div className={styles.iconContainer}>
        <img src={icon3} />
        <span>Henres</span>
      </div>
      <div className={styles.iconContainer}>
        <img src={icon2} />
        <span>Watch Later</span>
      </div>
      <div className={styles.bottomTextContainer}>
        <span>LANGUAGE</span>
        <span>GET HELP</span>
        <span>EXIT</span>
      </div>
    </div>
  );
};

export default Sidebar;
