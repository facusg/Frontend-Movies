import React, { useState, useEffect } from "react";
import Banner from "../banner/Banner";
import request from "../API/request";
import Row from "../row/Row";

export default function SeriesScreen() {
  const [banner, setBanner] = useState([]);
  const urlBanner = request.base + request.fetchPopularTv;

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
    <div className="Series">
      <Banner content={banner} />
      <Row
        title="Trending Now"
        id="TN"
        fetchUrl={request.fetchPopularTv}
        isLargeRow
        data={null}
      />
      <Row
        title="Action Series"
        id="AS"
        fetchUrl={request.fetchActionTv}
        data={null}
      />
      <Row
        title="Comedy Series"
        id="CS"
        fetchUrl={request.fetchComedyTv}
        data={null}
      />
      <Row
        title="Drama Series"
        id="DS"
        fetchUrl={request.fetchDramaTv}
        data={null}
      />

      <Row
        title="Animation Series"
        id="AniS"
        fetchUrl={request.fetchAnimationTv}
        data={null}
      />
      <Row
        title="Science Fiction"
        id="SF"
        fetchUrl={request.fetchSciFiTv}
        data={null}
      />
      <Row
        title="Kids Series"
        id="KS"
        fetchUrl={request.fetchKidsTv}
        data={null}
      />
    </div>
  );
}
/*  <Row title="Family Series" id="FM" fetchUrl={request.fetchFamlilyTv} /> */
