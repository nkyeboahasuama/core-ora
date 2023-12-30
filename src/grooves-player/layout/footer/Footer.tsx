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
import { HeaderTwo, Medium } from "../../shared/atoms/Typography.styled";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import {
  setPlaying,
  setPlayingNowTrack,
} from "../../../redux/features/currentTrackSlice";
import { useState } from "react";
import { ITrack } from "../../types";

const Footer = () => {
  // const [trackNumber, setTrackNumber] = useState(1);

  const recentTracksArray = useAppSelector(
    (state) => state.currentTrack.recentlyPlayed
  );
  const currentPlayingSong = useAppSelector((state) => state.currentTrack);
  const currentUser = useAppSelector((state) => state.currentUser);
  const tracks: ITrack[] = useAppSelector((state) => state.tracks);
  const dispatch = useAppDispatch();

  const handlePlaySong = () => {
    if (
      currentUser &&
      currentPlayingSong.recentlyPlayed &&
      currentPlayingSong.playing === false
    ) {
      dispatch(setPlaying(true));
    } else {
      console.log("Login to play");
      return;
    }
  };

  const handlePauseSong = () => {
    if (
      currentUser &&
      currentPlayingSong.recentlyPlayed &&
      currentPlayingSong.playing
    ) {
      dispatch(setPlaying(false));
    } else {
      console.log("Login to pause");
      return;
    }
  };

  const handlePlayNextSong = () => {
    if (currentPlayingSong.recentlyPlayed) {
      const currentPlayingSongIndex = tracks.findIndex(
        (track) => track.id === currentPlayingSong.recentlyPlayed?.id
      );
      if (currentPlayingSongIndex < tracks.length) {
        const nextTrack = tracks[currentPlayingSongIndex + 1];
        dispatch(setPlayingNowTrack(nextTrack));
      } else {
        console.log("This is the end of the list");
        return;
      }
    } else {
      console.log("Current song is null");
    }
  };

  const handlePlayPreviousSong = () => {
    if (currentPlayingSong.recentlyPlayed) {
      const currentPlayingSongIndex = tracks.findIndex(
        (track) => track.id === currentPlayingSong.recentlyPlayed?.id
      );

      if (
        tracks.length > currentPlayingSongIndex &&
        currentPlayingSongIndex > 0
      ) {
        const previousTrack = tracks[currentPlayingSongIndex - 1];
        dispatch(setPlayingNowTrack(previousTrack));
      } else {
        console.log("This is the first track in the list");
        return;
      }
    } else {
      console.log("Current song is null");
    }
  };
  return (
    <FooterWrapper>
      {currentPlayingSong.recentlyPlayed ? (
        <>
          <SongDetailsWrapper>
            <div
              style={{ backgroundColor: "gray", height: "60px", width: "60px" }}
            >
              <img
                width={"60px"}
                src={currentPlayingSong.recentlyPlayed.album.images[0].url}
                alt="d"
              />
            </div>
            <div>
              <HeaderTwo>{currentPlayingSong.recentlyPlayed.name}</HeaderTwo>
              <Medium>
                {currentPlayingSong.recentlyPlayed.artists[0].name}
              </Medium>
            </div>
            {/* )} */}
          </SongDetailsWrapper>
          <SongTrackBtns>
            <SongBackBtn onClick={handlePlayPreviousSong} />
            {currentPlayingSong && currentPlayingSong.playing ? (
              <SongPauseBtn onClick={handlePauseSong} />
            ) : (
              <SongPlayBtn onClick={handlePlaySong} />
            )}
            <SongForwardBtn onClick={handlePlayNextSong} />
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
