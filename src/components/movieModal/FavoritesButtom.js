import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function FavoritesButtom({ data }) {
  const id = data.id;
  const path = data.backdrop_path;
  const title = data.title;
  const overview = data.overview;
  const vote = data.vote_average;

  const trailerUrl = data.trailerUrl;

  /*  const AddFavorites = () => {
    console.log(favorite);
  }; */

  async function AddFavorites() {
    const favorite = { id, path, title, overview, vote };
    console.log("-----------------------------------");
    console.log(favorite);
    console.log("-----------------------------------");
    console.log(trailerUrl);
    console.log("-----------------------------------");

    const url = "http://localhost:8000/favorites";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(favorite),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const data = await response.json();
    if (response.status === 200) {
      alert(data.message);
    } else {
      alert(data.message);
    }
  }
  return (
    <>
      <IconButton
        aria-label="add to favorites"
        className="modal__favorite"
        onClick={AddFavorites}
      >
        <FavoriteIcon />
      </IconButton>
    </>
  );
}
