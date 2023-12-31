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
  const dispatch = useAppDispatch();
  const currentTrack = useAppSelector((state) => state.currentTrack);

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
