import React, { useState, useEffect, useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { UserContext } from "../../UserContext";

export default function FavoritesButtom({ data, active, setModalVisibility }) {
  const { user } = useContext(UserContext);
  const [favoriteActive, setFavoriteActive] = useState("default");

  const idMovie = data.id;
  const backdrop_path = data.backdrop_path;
  const name = data.title ? data.title : data.name;
  const overview = data.overview;
  const trailerUrl = data.trailerUrl;
  const vote_average = data.vote_average;

  useEffect(() => {
    if (active) {
      setFavoriteActive("secondary");
    }
  });

  async function AddFavorites() {
    const idUser = user.id;
    const favorite = {
      idMovie,
      idUser,
      backdrop_path,
      name,
      overview,
      trailerUrl,
      vote_average,
    };

    if (favoriteActive === "secondary") {
      const url1 = `http://localhost:8000/favorites/${idUser}/${idMovie}`;
      const response = await fetch(url1, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await response.json();
      if (response.status === 200) {
        setFavoriteActive("default");
      }
    } else {
      const url = "http://localhost:8000/favorites";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(favorite),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await response.json();
      if (response.status === 200) {
        setFavoriteActive("secondary");
      } else {
        setFavoriteActive("default");
      }
    }
  }
  return (
    <>
      {user ? (
        <IconButton
          color={`${favoriteActive}`}
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
