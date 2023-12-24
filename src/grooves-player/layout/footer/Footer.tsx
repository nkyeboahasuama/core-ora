import {
  FooterWrapper,
  SongBackBtn,
  SongDetailsWrapper,
  SongForwardBtn,
  SongPauseBtn,
  SongPlayBtn,
  SongTrackBtns,
  SongTrackingTimer,
} from "./Footer.styles";
import {
  HeaderTwo,
  Medium,
  Normal,
} from "../../shared/atoms/Typography.styled";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { setPlaying } from "../../../redux/features/currentTrackSlice";
// import { toogleTrackPlay } from "../../../redux/features/currentTrackSlice";

const Footer = () => {
  const currentTrack = useAppSelector(
    (state) => state.currentTrack.recentlyPlayed
  );
  const currentPlayingSong = useAppSelector(
    (state) => state.currentTrack.playing
  );
  const currentUser = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();

  const handlePlaySong = () => {
    if (currentUser) {
      dispatch(setPlaying(true));
    } else {
      console.log("Login to play");
    }
  };

  const handlePauseSong = () => {
    if (currentUser) {
      dispatch(setPlaying(false));
    } else {
      console.log("Login to pause");
    }
  };

  return (
    <FooterWrapper>
      {currentTrack.length > 0 ? (
        <>
          <SongDetailsWrapper>
            <div
              style={{ backgroundColor: "gray", height: "60px", width: "60px" }}
            >
              <img
                width={"60px"}
                src={currentTrack[0].album.images[0].url}
                alt="d"
              />
            </div>
            <div>
              <HeaderTwo>{currentTrack[0].name}</HeaderTwo>
              <Medium>{currentTrack[0].artists[0].name}</Medium>
            </div>
            {/* )} */}
          </SongDetailsWrapper>
          <SongTrackBtns>
            <SongBackBtn />
            {currentTrack[0] && currentPlayingSong ? (
              <SongPauseBtn onClick={handlePauseSong} />
            ) : (
              <SongPlayBtn onClick={handlePlaySong} />
            )}
            <SongForwardBtn />
          </SongTrackBtns>
          <SongTrackingTimer>
            0:00
            <div
              style={{
                width: "70%",
                height: "5px",
                backgroundColor: "gray",
                margin: "0px 5px",
              }}
            ></div>
            4:16
          </SongTrackingTimer>
        </>
      ) : (
        <>
          <h1>No way</h1>
        </>
      )}
    </FooterWrapper>
  );
};

export default Footer;
