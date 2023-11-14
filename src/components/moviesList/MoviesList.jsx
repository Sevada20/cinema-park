import React from "react";
import dataMovies from "../../assets/data/data.json";
import Flickity from "react-flickity-component";
import styles from "./MoviesList.module.css";

const flickityOptions = {
  initialIndex: 2,
};

const MoviesList = () => {
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const openModal = (movie) => {
    setSelectedMovie(movie);
  };
  const closeModal = () => {
    setSelectedMovie(null);
  };
  return (
    <div style={{ marginTop: "10px" }}>
      <Flickity
        className="Slider"
        elementType="div"
        disableImagesLoaded={false}
        options={flickityOptions}
        reloadOnUpdate
        static
      >
        {dataMovies.TendingNow.map((movie) => (
          <div key={movie.id} onClick={() => openModal(movie)}>
            <img src={movie.CoverImage} width={150} height={200} />
          </div>
        ))}
      </Flickity>
      {selectedMovie && (
        <div className={styles.Modal}>
          <div className={styles.ModalContent}>
            <h2>{selectedMovie.Title}</h2>
            <p>{selectedMovie.Description}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesList;
