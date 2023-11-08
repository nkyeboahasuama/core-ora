import { HomePageBodyWrapper, HomePageWrapper } from "./HomePage.styles";
import SongContainer from "../../shared/songContainer/SongContainer";
import Header from "../../layout/header/Header";
import { useEffect, useState } from "react";
import { getTokenFromUri } from "../../helpers/getTokenFromUri";
import { HeaderOne, HeaderTwo } from "../../shared/atoms/Typography.styled";
import { BodyContainer } from "../../shared/atoms/Container.styled";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks/hooks";
import { spotifyApiService } from "../../../services/spotifyApiServices";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const tracks = useAppSelector((state) => state.tracks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const hash = window.location.hash;
    const token = getTokenFromUri(hash);
    if (token) {
      localStorage.setItem("access_token", token);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
    setLoading(true);
    tracks.length < 1 && spotifyApiService.getUserTopTracks(dispatch);
    setLoading(false);
  }, []);

  return (
    <HomePageWrapper>
      <Header />
      <HomePageBodyWrapper>
        <HeaderOne style={{ margin: "30px 0px" }}>
          MY TOP LISTENS {"\u{1F525}"}
        </HeaderOne>
        {loading && <HeaderTwo>Loading...</HeaderTwo>}

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
