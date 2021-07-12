import React, { useState } from "react";
import AppRouter from "./routers/AppRouter";
import { UserContext } from "./UserContext";

export default function MoviesApp() {
  const [searchURL, setSearchURL] = useState("");
  const [serieSearch, setSerieSearch] = useState(null);

  return (
    <UserContext.Provider
      value={{ searchURL, setSearchURL, serieSearch, setSerieSearch }}
    >
      <AppRouter className="app" />
    </UserContext.Provider>
  );
}
