import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { UserContext } from "../../UserContext";

export default function FavoritesButtom({ data }) {
  const { user } = useContext(UserContext);
  const id = data.id;
  const backdrop_path = data.backdrop_path;
  const name = data.name;
  const title = data.title;
  const overview = data.overview;
  const trailerUrl = data.trailerUrl;
  const vote_average = data.vote_average;

  async function AddFavorites() {
    const favorite = {
      id,
      backdrop_path,
      name,
      title,
      overview,
      trailerUrl,
      vote_average,
    };

    /*  const url = "http://localhost:8000/favorites";
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
    } */
  }
  return (
    <>
      {user ? (
        <IconButton
          color="secondary"
          aria-label="add to favorites"
          className="modal__favorite"
          onClick={AddFavorites}
        >
          <FavoriteIcon />
        </IconButton>
      ) : (
        <></>
      )}
    </>
  );
}
