import { HomePageBodyWrapper, HomePageWrapper } from "./HomePage.styles";
import SongContainer from "../../shared/songContainer/SongContainer";
import Header from "../../layout/header/Header";
import { useEffect, useState } from "react";
import { getTokenFromUri } from "../../helpers/getTokenFromUri";
import { HeaderOne, HeaderTwo } from "../../shared/atoms/Typography.styled";
import { BodyContainer } from "../../shared/atoms/Container.styled";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks/hooks";
import { spotifyApiService } from "../../../services/spotifyApiServices";
import { setCurrentUser } from "../../../redux/features/currentUserSlice";
import { ITrack } from "../../types";
import { redirect } from "react-router-dom";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const [trackNow, setTrackNow] = useState<any>();
  const tracks: ITrack[] = useAppSelector((state) => state.tracks);
  const currentTrack = useAppSelector((state) => state.currentTrack);
  const currentUser = useAppSelector((state) => state.currentUser);

  useEffect(() => {
    const token = getTokenFromUri(window.location.hash);
    if (token) {
      localStorage.setItem("accessToken", token);
      dispatch(setCurrentUser(token));
      spotifyApiService.getUserTopTracks(dispatch);
      window.history.replaceState({}, document.title, window.location.pathname);
    } else {
      if (!currentUser) {
        redirect("/");
        alert("Please login");
      }
    }
  }, []);

  const play = (song: any) => {
    setTrackNow(song);
  };

  const getCurrentSongFromArray =
    tracks &&
    tracks.map((track) => {
      if (track.name === currentTrack.track?.name) {
        return { isPlaying: false, track: { ...track } };
      }
      return track;
    });

  return (
    <HomePageWrapper>
      <Header />
      <HomePageBodyWrapper>
        <HeaderOne style={{ margin: "30px 0px" }}>
          MY TOP LISTENS {"\u{1F525}"}
        </HeaderOne>
        {/* {loading && (
          <HeaderTwo style={{ color: "white" }}>Loading...</HeaderTwo>
        )} */}

        <BodyContainer style={{ justifyContent: "space-evenly" }}>
          {tracks &&
            getCurrentSongFromArray.map((song: any, idx: number) => (
              <SongContainer play={play} song={song} key={song.id} />
            ))}
        </BodyContainer>
      </HomePageBodyWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;
