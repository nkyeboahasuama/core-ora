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
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const tracks: ITrack[] = useAppSelector(
    (state) => state.currentDisplayedTracks
  );
  const currentTrack = useAppSelector((state) => state.currentTrack);
  const currentUser = useAppSelector((state) => state.currentUser);

  useEffect(() => {
    const fetchSongs = async () => {
      const token = getTokenFromUri(window.location.hash);
      if (token) {
        localStorage.setItem("accessToken", token);
        dispatch(setCurrentUser(token));
        await spotifyApiService.getUserTopTracks(dispatch);
        setLoading(false);
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      } else {
        const existingUserToken = localStorage.getItem("accessToken");
        if (existingUserToken) {
          console.log("User already exists");

          dispatch(setCurrentUser(existingUserToken));
          await spotifyApiService.getUserTopTracks(dispatch);
          setLoading(false);
        } else if (!currentUser) {
          redirect("/");
          alert("Please login");
        }
      }
    };
    fetchSongs();
  }, []);

  console.log(currentTrack);
  return (
    <HomePageWrapper>
      <Header />
      <HomePageBodyWrapper>
        <HeaderOne style={{ margin: "30px 0px" }}>
          MY TOP LISTENS {"\u{1F525}"}
        </HeaderOne>
        {loading ? (
          <HeaderTwo style={{ color: "white" }}>Loading...</HeaderTwo>
        ) : (
          <BodyContainer style={{ justifyContent: "space-evenly" }}>
            {tracks &&
              tracks.map((song: ITrack) => (
                <SongContainer song={song} key={song.id} />
              ))}
          </BodyContainer>
        )}
      </HomePageBodyWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;
