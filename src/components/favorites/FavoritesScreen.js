import React, { useState, useEffect, useContext } from "react";
import Row from "../row/Row";
import { UserContext } from "../../UserContext";

export default function FavoritesScreen() {
  const { user } = useContext(UserContext);
  const url = `http://localhost:8000/favorites/${user.id}`;

  return (
    <div style={{ marginTop: 90 }}>
      <Row title="Mi List" id="FAV" fetchUrl={url} />;
    </div>
  );
}

//
