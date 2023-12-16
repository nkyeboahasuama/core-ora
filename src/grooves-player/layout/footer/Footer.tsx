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
import { toogleTrackPlay } from "../../../redux/features/currentTrackSlice";

const Footer = () => {
  const currentTrack = useAppSelector((state) => state.currentTrack);
  const currentUser = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();

  const handlePlaySong = () => {
    if (currentUser) {
      dispatch(toogleTrackPlay("play"));
    } else {
      console.log("Login to play");
    }
  };

  const handlePauseSong = () => {
    if (currentUser) {
      dispatch(toogleTrackPlay("pause"));
    } else {
      console.log("Login to pause");
    }
  };

  return (
    <FooterWrapper>
      <SongDetailsWrapper>
        <div style={{ backgroundColor: "gray", height: "60px", width: "60px" }}>
          <img
            width={"60px"}
            src={currentTrack?.track?.album.images[0].url}
            alt="d"
          />
        </div>
        <div>
          <HeaderTwo>{currentTrack?.track?.name}</HeaderTwo>
          <Medium>{currentTrack?.track?.artists[0].name}</Medium>
        </div>
        {/* )} */}
      </SongDetailsWrapper>
      <SongTrackBtns>
        <SongBackBtn />
        {currentTrack.isPlaying ? (
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
    </FooterWrapper>
  );
};

export default Footer;
