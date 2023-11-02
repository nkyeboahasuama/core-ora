import React, { useState } from "react";
import {
  HomePageWrapper,
  PlayBtn,
  SongCard,
  SongDetails,
  SongWrapper,
} from "./HomePage.styles";
import { songsGenerator } from "../../helpers/songGenerator";
import {
  HeaderTwo,
  Medium,
} from "../../../ui/shared-components/atoms/typography/Typography.styled";
import { Link } from "react-router-dom";
import { BiPlayCircle } from "react-icons/bi";
import PlayBtnContainer from "./PlayBtnContainer";

const songs = songsGenerator(10);
const HomePage = () => {
  console.log("tuiw");
  return (
    <HomePageWrapper>
      {songs.map((song, idx) => (
        <SongWrapper key={idx}>
          <Link to={`/${song.title + idx}`}>
            <SongCard>
              <PlayBtnContainer />
            </SongCard>
          </Link>
          <SongDetails>
            <HeaderTwo>{song.title}</HeaderTwo>
            <Medium>{song.artiste}</Medium>
          </SongDetails>
        </SongWrapper>
      ))}
    </HomePageWrapper>
  );
};

export default HomePage;
