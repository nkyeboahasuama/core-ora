import { useState } from "react";
import { PlayBtn, SongCard, SongDetails, SongWrapper } from "./HomePage.styles";
import { Link } from "react-router-dom";
import {
  HeaderTwo,
  Medium,
} from "../../../ui/shared-components/atoms/typography/Typography.styled";

const SongContainer = ({ song }: { song: any }) => {
  return (
    <>
      {" "}
      <SongWrapper>
        <Link to={`/${song.title}`} style={{ textDecoration: "none" }}>
          <SongCard>
            <PlayBtn />
          </SongCard>
          <SongDetails>
            <HeaderTwo>{song.title}</HeaderTwo>
            <Medium>{song.artiste}</Medium>
          </SongDetails>
        </Link>{" "}
      </SongWrapper>
    </>
  );
};

export default SongContainer;
