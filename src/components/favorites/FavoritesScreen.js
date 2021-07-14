import React, { useState, useEffect, useContext } from "react";
import Row from "../row/Row";
import { UserContext } from "../../UserContext";

export default function FavoritesScreen() {
  const { user } = useContext(UserContext);

  const [url, setUrl] = useState(null);

  useEffect(() => {
    //const id = user.id;
    setUrl(`http://localhost:8000/favorites/${user.id}`);
  }, [setUrl]);

  return (
    <>
      {url ? (
        <div style={{ marginTop: 90 }}>
          <Row title="Mi List" id="FAV" fetchUrl={url} />;
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

//
