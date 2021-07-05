import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function FavoritesButtom(props) {
  const id = props.id;
  const AddFavorites = () => {
    console.log(id);
  };
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
