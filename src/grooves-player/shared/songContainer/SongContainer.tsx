import {
  PlayBtn,
  SearchCloseBtn,
  SongCard,
  SongDetails,
  SongTitle,
  SongWrapper,
} from "../songContainer/songContainer.styles";
import { Link } from "react-router-dom";
import { HeaderTwo, Medium } from "../atoms/Typography.styled";

interface ISongContainer {
  song: any;
  searchCard?: boolean;
}
const SongContainer: React.FC<ISongContainer> = ({ song, searchCard }) => {
  const handleRemoveSong = () => {
    console.log("remove");
  };

  const handlePlaySong = (event: React.MouseEvent<SVGAElement>) => {
    event.preventDefault();
  };

  return (
    <>
      {" "}
      <SongWrapper>
        {searchCard && <SearchCloseBtn onClick={handleRemoveSong} />}
        <Link to={`/${song.name}`} style={{ textDecoration: "none" }}>
          <SongCard src={song.album.images[0].url} />
          <PlayBtn onClick={handlePlaySong} />
          <SongDetails>
            <SongTitle>{song.name}</SongTitle>
            <Medium>{song.artists[0].name}</Medium>
          </SongDetails>
        </Link>{" "}
      </SongWrapper>
    </>
  );
};

export default SongContainer;
