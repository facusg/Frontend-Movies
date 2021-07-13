import React, { useState, useEffect } from "react";
import Banner from "../banner/Banner";
import request from "../API/request";
import Row from "../row/Row";

export default function MoviesScreen() {
  const [banner, setBanner] = useState([]);
  const urlBanner = request.base + request.fetchPopularMovies;

  useEffect(() => {
    async function fetchBannerSerie() {
      const request = await fetch(urlBanner);
      const data = await request.json();

      setBanner(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
      return data;
    }
    fetchBannerSerie();
  }, [urlBanner]);

  return (
    <div className="Movies">
      <Banner content={banner} />
      <Row
        title="Trending Now"
        id="TN"
        fetchUrl={request.fetchPopularMovies}
        isLargeRow
      />
      <Row title="Action Movies" id="AM" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" id="CM" fetchUrl={request.fetchComedyMovies} />
      <Row title="Drama Movies" id="DrM" fetchUrl={request.fetchDramaMovies} />
      <Row
        title="Adventure Movies"
        id="AdM"
        fetchUrl={request.fetchAdventureMovies}
      />

      <Row title="Horror Movies" id="HM" fetchUrl={request.fetchHorrorMovies} />
      <Row
        title="Romance  Movies"
        id="RM"
        fetchUrl={request.fetchRomanceMovies}
      />
      <Row
        title="Documentaries"
        id="DM"
        fetchUrl={request.fetchDocumentaries}
      />
    </div>
  );
}
