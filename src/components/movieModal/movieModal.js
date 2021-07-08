import React, { useEffect, useState } from "react";
import "./movieModal.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import CancelIcon from "@material-ui/icons/Cancel";
import Rating from "@material-ui/lab/Rating";
import FavoritesButtom from "./FavoritesButtom";

const MovieModal = ({
  id,
  backdrop_path,
  title,
  overview,
  name,
  vote_average,
  setModalVisibility,
}) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  useEffect(() => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(title || name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const data = {
    id,
    backdrop_path,
    title,
    overview,
    name,
    vote_average,
    trailerUrl,
  };

  return (
    <div className="presentation" role="presentation">
      <div className="wrapper-modal">
        <div className="modal">
          <span
            onClick={() => setModalVisibility(false)}
            className="modal-close"
          >
            <CancelIcon />
          </span>
          {trailerUrl ? (
            <Youtube videoId={trailerUrl} opts={opts} />
          ) : (
            <img
              className="modal__poster-img"
              src={`${base_url}${backdrop_path}`}
            />
          )}
          <div className="modal__buttons">
            <Rating
              name="half-rating-read"
              defaultValue={vote_average / 2}
              precision={0.1}
              readOnly
            />
            <FavoritesButtom data={data} />
          </div>
          <div className="modal__content">
            <h2 className="modal__title">{title ? title : name}</h2>
            <p className="modal__overview">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;

/* {truncate(props.content?.overview, 150)} */
