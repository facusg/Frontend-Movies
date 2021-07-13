import React, { useState, useEffect } from "react";
import Banner from "../banner/Banner";
import request from "../API/request";
import Row from "../row/Row";

export default function SeriesScreen() {
  const [banner, setBanner] = useState([]);
  const urlBanner = request.base + request.fetchPopularTv;
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
  console.log(banner + "holas");
  return (
    <div className="Series">
      <Banner content={banner} />
      <Row
        title="Trending Now"
        id="TN"
        fetchUrl={request.fetchPopularTv}
        isLargeRow
      />
      <Row title="Action Series" id="AS" fetchUrl={request.fetchActionTv} />
      <Row title="Comedy Series" id="CS" fetchUrl={request.fetchComedyTv} />
      <Row title="Drama Series" id="DS" fetchUrl={request.fetchDramaTv} />

      <Row
        title="Animation Series"
        id="AniS"
        fetchUrl={request.fetchAnimationTv}
      />
      <Row title="Science Fiction" id="SF" fetchUrl={request.fetchSciFiTv} />
      <Row title="Kids Series" id="KS" fetchUrl={request.fetchKidsTv} />
    </div>
  );
}
/*  <Row title="Family Series" id="FM" fetchUrl={request.fetchFamlilyTv} /> */
