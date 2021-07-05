import React, { useState, useEffect } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import "./Banner.css";

const Banner = (props) => {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  console.log(props);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${
                      props.content?.backdrop_path || props.content?.poster_path
                    }"
                    )`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        {/**Tittle */}
        <h1 className="banner__title">
          {props.content?.title ||
            props.content?.name ||
            props.content?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button play">
            <PlayArrowIcon />
            Play
          </button>
          <button className="banner__button info">
            <InfoOutlinedIcon
              fontSize="small"
              paddingRight={20}
              marginRight={100}
            />
            <div className="space"></div> More Information
          </button>
        </div>
        {/**DIV > 2 BUTTONS */}

        <h1 className="banner__description">
          {truncate(props.content?.overview, 150)}
        </h1>
        {/*Description*/}
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
