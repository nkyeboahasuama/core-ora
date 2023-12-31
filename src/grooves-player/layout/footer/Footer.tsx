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
import { useEffect, useRef, useState } from "react";
import { ITrack } from "../../types";

const Footer = () => {
  const currentPlayingSong = useAppSelector((state) => state.currentTrack);
  const currentUser = useAppSelector((state) => state.currentUser);
  const tracks: ITrack[] = useAppSelector(
    (state) => state.currentDisplayedTracks
  );
  const dispatch = useAppDispatch();

  const audioRef = useRef<null | HTMLAudioElement>(null);

  useEffect(() => {
    if (currentPlayingSong && currentPlayingSong.recentlyPlayed) {
      if (audioRef.current) {
        audioRef.current.src = currentPlayingSong.recentlyPlayed.preview_url;
        audioRef.current.load();
      }
      if (currentPlayingSong.playing) {
        audioRef.current && audioRef.current.play();
        console.log(audioRef.current);
      } else {
        audioRef.current && audioRef.current.pause();
      }
    }
  }, [currentPlayingSong]);

  console.log(currentPlayingSong);

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
          </SongDetailsWrapper>
          <SongTrackBtns>
            <SongBackBtn onClick={handlePlayPreviousSong} />
            {currentPlayingSong && currentPlayingSong.playing ? (
              <SongPauseBtn onClick={handlePauseSong} />
            ) : (
              <SongPlayBtn onClick={handlePlaySong} />
            )}
            <SongForwardBtn onClick={handlePlayNextSong} />

            {currentPlayingSong && currentPlayingSong.recentlyPlayed && (
              <audio ref={audioRef}>
                <source src={currentPlayingSong.recentlyPlayed.preview_url} />
              </audio>
            )}
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
