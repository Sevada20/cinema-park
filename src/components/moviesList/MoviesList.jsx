import React from "react";
import dataMovies from "../../assets/data/data.json";
import Flickity from "react-flickity-component";
import styles from "./MoviesList.module.css";

const flickityOptions = {
  initialIndex: 2,
};

const MoviesList = () => {
  const [movies, setMovies] = React.useState(dataMovies.TendingNow);
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const [recentlyViewed, setRecentlyViewed] = React.useState([]);

  React.useEffect(() => {
    const viewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    setRecentlyViewed(viewed);
    setMovies([...viewed, ...movies]);
  }, []);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    const viewed = [...recentlyViewed];
    const idx = viewed.findIndex((item) => item.Id === movie.Id);
    idx !== -1 && viewed.splice(idx, 1);
    viewed.unshift(movie);
    viewed.length > 8 && viewed.pop();
    setRecentlyViewed(viewed);
    localStorage.setItem("recentlyViewed", JSON.stringify(viewed));
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };
  const sortMovieToTop = (index) => {
    const updateMovies = [...movies];
    const selected = updateMovies.splice(index, 1)[0];
    updateMovies.unshift(selected);
    setMovies(updateMovies);
  };
  return (
    <div style={{ marginTop: "10px" }} className={styles.moviesContainer}>
      <Flickity
        className="Slider"
        elementType="div"
        disableImagesLoaded={false}
        options={flickityOptions}
        reloadOnUpdate
        static
      >
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            onClick={() => {
              sortMovieToTop(index);
              openModal(movie);
            }}
          >
            <img src={movie.CoverImage} width={150} height={200} />
          </div>
        ))}
      </Flickity>
      {selectedMovie && (
        <div className={styles.Modal}>
          <div className={styles.ModalContent}>
            <h2>{selectedMovie.Title}</h2>
            <p>{selectedMovie.Description}</p>
            <video controls width={400} height={300}>
              <source src={selectedMovie.VideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesList;
