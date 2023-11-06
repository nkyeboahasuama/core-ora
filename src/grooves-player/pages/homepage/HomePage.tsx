import { HomePageBodyWrapper, HomePageWrapper } from "./HomePage.styles";
import { songsGenerator } from "../../helpers/songGenerator";
import SongContainer from "../../shared/songContainer/SongContainer";
import Header from "../../layout/header/Header";
import { useEffect, useState } from "react";
import { getTokenFromUri } from "../../helpers/getTokenFromUri";
import { useNavigate } from "react-router-dom";
import { HeaderOne } from "../../shared/atoms/Typography.styled";
import { BodyContainer } from "../../shared/atoms/Container.styled";

// const songs = songsGenerator(20);

interface IHomepageProps {
  tracks: [];
  loading?: boolean;
}

const HomePage: React.FC<IHomepageProps> = ({ tracks, loading }) => {
  useEffect(() => {
    const hash = window.location.hash;
    const token = getTokenFromUri(hash);

    if (token) {
      localStorage.setItem("access_token", token);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  console.log(tracks);
  return (
    <HomePageWrapper>
      <Header />
      <HomePageBodyWrapper>
        <HeaderOne style={{ margin: "30px 0px" }}>
          MY TOP LISTENS {"\u{1F525}"}
        </HeaderOne>
        {loading && <div>Loading...</div>}

        <BodyContainer style={{ justifyContent: "space-evenly" }}>
          {tracks &&
            tracks.map((song: any, idx: number) => (
              <SongContainer song={song} key={idx} />
            ))}
        </BodyContainer>
      </HomePageBodyWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;
