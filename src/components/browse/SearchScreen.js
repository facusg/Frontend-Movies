import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import Row from "../row/Row";

export default function SearchScreen() {
  const { searchURL } = useContext(UserContext);

  console.log(searchURL);

  return (
    <div id="searchScreen" style={{ marginTop: 80 }}>
      {searchURL !== "" ? (
        <Row title="" id="SEARCH" fetchUrl={searchURL} isLargeRow />
      ) : (
        <h1 style={{ margintop: 10000 }}>NO HAY NADA PARA MOSTRAR</h1>
      )}
    </div>
  );
}

/* searchURL!null */
