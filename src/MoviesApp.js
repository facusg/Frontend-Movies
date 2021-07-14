import React, { useState } from "react";
import AppRouter from "./routers/AppRouter";
import { UserContext } from "./UserContext";

export default function MoviesApp() {
  const [searchURL, setSearchURL] = useState("");

  const [user, setUser] = useState("");

  return (
    <UserContext.Provider
      value={{
        searchURL,
        setSearchURL,
        user,
        setUser,
      }}
    >
      <AppRouter className="app" />
    </UserContext.Provider>
  );
}
