import React, { useState, useEffect } from "react";
import Banner from "../banner/Banner";
import request from "../API/request";
import Row from "../row/Row";

export default function Browse() {
  const [banner, setBanner] = useState([]);
  const urlBanner = request.base + request.fetchTrending;
  console.log(urlBanner);

  useEffect(() => {
    async function fetchBannerMovie() {
      const request = await fetch(urlBanner);
      const data = await request.json();

      setBanner(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
      return data;
    }
    fetchBannerMovie();
  }, [urlBanner]);

  return (
    <>
      <Banner content={banner} />
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
        data={null}
      />
      <Row
        title="ACTION"
        id="ACTION"
        fetchUrl={request.fetchActionMovies}
        isLargeRow
        data={null}
      />
    </>
  );
}
