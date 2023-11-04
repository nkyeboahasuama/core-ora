import React from "react";
import { PlaylistPageWrapper } from "./PlaylistPage.styles";
import Header from "../../layout/header/Header";
import { HeaderOne } from "../../shared/atoms/Typography.styled";
import { songsGenerator } from "../../helpers/songGenerator";
import SongContainer from "../../shared/songContainer/SongContainer";
import { BodyContainer } from "../../shared/atoms/Container.styled";

const songs = songsGenerator(5);
const PlaylistPage = () => {
  return (
    <PlaylistPageWrapper>
      <Header />
      {songs.map((song, idx) => (
        <SongContainer song={song} key={idx} />
      ))}
    </PlaylistPageWrapper>
  );
};

export default PlaylistPage;
