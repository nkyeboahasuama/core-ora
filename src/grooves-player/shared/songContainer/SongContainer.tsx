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
import { Link } from "react-router-dom";
import { HeaderTwo, Medium } from "../atoms/Typography.styled";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import {
  setCurrentTrack,
  toogleTrackPlay,
} from "../../../redux/features/currentTrackSlice";
import { ITrack } from "../../types";

interface ISongContainer {
  song: ITrack;
  searchCard?: boolean;
  play?: (song: any) => void;
}
const SongContainer: React.FC<ISongContainer> = ({
  song,
  searchCard,
  play,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const dispatch = useAppDispatch();
  const currentPlayingSong = useAppSelector((state) => state.currentTrack);

  const handlePlaySong = () => {
    setIsPlaying(true);
    dispatch(setCurrentTrack(song));
    play && play(song);
    dispatch(toogleTrackPlay("play"));

    audioRef.current && audioRef.current.play();
  };

  const handlePauseSong = () => {
    setIsPlaying(false);
    dispatch(toogleTrackPlay("pause"));
    audioRef.current && audioRef.current.pause();
  };

  console.log("d");

  // useEffect(() => {
  //   song.
  // }, []);
  return (
    <>
      {" "}
      <SongWrapper>
        {searchCard && <SearchCloseBtn />}
        <div>
          <SongCard src={song.album.images[0].url} />
          {play && <button onClick={() => play(song)}>Play</button>}
          {isPlaying ? (
            <PauseBtn onClick={handlePauseSong} />
          ) : (
            <PlayBtn onClick={handlePlaySong} />
          )}
          <audio src={song.preview_url} ref={audioRef}></audio>
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
