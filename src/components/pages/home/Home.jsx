import React from "react";
import titleIcon from "../../../assets/moviesIcons/FeaturedTitleImage.png";
import styles from "./Home.module.css";
import MoviesList from "../../moviesList/MoviesList";
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.filmDescription}>
        <h5>MOVIE</h5>
        <img src={titleIcon} width={520} height={140} />
        <span>2021 18+ 1h 48m</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          distinctio ullam! Necessitatibus distinctio exercitationem, et, ea
          maxime voluptatem laboriosam ipsam totam asperiores, voluptas ratione
          a quasi! Aut voluptatem eligendi rem.
        </p>
      </div>
      <div className={styles.movieButtons}>
        <div className={styles.buttonPlayDiv}>
          <span>Play</span>
        </div>
        <div className={styles.buttonMoreDiv}>
          <span>More Info</span>
        </div>
      </div>
      <h3>Trending Now</h3>
      <MoviesList />
    </div>
  );
};

export default Home;
