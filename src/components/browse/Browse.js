import React, { useState, useEffect } from "react";
import Banner from "../banner/Banner";
import request from "../API/request";
import Row from "../row/Row";

export default function Browse() {
  const [banner, setBanner] = useState([]);
  const urlBanner = request.base + request.fetchTrending;

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
        title="TRENDING NOW"
        id="TrN"
        fetchUrl={request.fetchTrending}
        isLargeRow
      />
      <Row
        title="POPULAR MOVIES"
        id="PM"
        fetchUrl={request.fetchPopularMovies}
        isLargeRow
      />
      <Row
        title="POPULAR TV SERIES"
        id="PTv"
        fetchUrl={request.fetchPopularTv}
        isLargeRow
      />
      <Row
        title="TOP REATED MOVIES"
        id="TRM"
        fetchUrl={request.fetchTopReatedMovies}
        isLargeRow
      />
      <Row
        title="TOP REATED TV SERIES"
        id="TRTv"
        fetchUrl={request.fetchTopReatedTv}
        isLargeRow
      />
    </>
  );
}
