import { useState, useRef, useEffect } from "react";
import {
  PauseBtn,
  PlayBtn,
  SearchCloseBtn,
  SongCard,
  SongDetails,
  SongTitle,
  SongWrapper,
} from "../songContainer/songContainer.styles";
import { Medium } from "../atoms/Typography.styled";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import {
  setPlaying,
  setPlayingNowTrack,
} from "../../../redux/features/currentTrackSlice";
import { ITrack } from "../../types";

interface ISongContainer {
  song: ITrack;
  searchCard?: boolean;
}
const SongContainer: React.FC<ISongContainer> = ({ song, searchCard }) => {
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const dispatch = useAppDispatch();
  const currentTrack = useAppSelector((state) => state.currentTrack);

  useEffect(() => {
    if (currentTrack && currentTrack.recentlyPlayed) {
      if (currentTrack.playing) {
        audioRef.current && audioRef.current.play();
        console.log(audioRef.current);
      } else {
        audioRef.current && audioRef.current.pause();
      }
    }
  }, [currentTrack]);

  const handlePlaySong = () => {
    dispatch(setPlayingNowTrack(song));
    dispatch(setPlaying(true));
  };

  const handlePauseSong = () => {
    dispatch(setPlaying(false));
  };

  const currentPlayingTrack = () => {
    if (song && currentTrack.recentlyPlayed) {
      return song.id === currentTrack.recentlyPlayed.id && currentTrack.playing;
    } else {
      return false;
    }
  };

  return (
    <>
      {" "}
      <SongWrapper>
        {searchCard && <SearchCloseBtn />}
        <div>
          <SongCard src={song.album.images[0].url} />
          {currentPlayingTrack() ? (
            <PauseBtn onClick={handlePauseSong} />
          ) : (
            <PlayBtn onClick={handlePlaySong} />
          )}
          {currentPlayingTrack() && (
            <audio ref={audioRef}>
              <source src={song.preview_url} />
            </audio>
          )}

          <SongDetails>
            <SongTitle>{song.name}</SongTitle>
            <Medium>{song.artists[0].name}</Medium>
          </SongDetails>
        </div>
      </SongWrapper>
    </>
  );
};

export default SongContainer;

// what am i doing next.
// i just created an array data structure, that accepts five of the most recently played
// i also added a flag, that is a property known as playing which is set to true for any new added song and false for every other song
// i need to figure out a way to play the songs based on the first item of the recent songs array.
// this will help control the song from any part of the application and not only from the songcontainer.
