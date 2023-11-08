import {
  PlayBtn,
  SearchCloseBtn,
  SongCard,
  SongDetails,
  SongWrapper,
} from "../songContainer/songContainer.styles";
import { Link } from "react-router-dom";
import { HeaderTwo, Medium } from "../atoms/Typography.styled";

interface ISong {
  title: string;
  artiste: string;
}
interface ISongContainer {
  song: ISong;
  searchCard?: boolean;
}
const SongContainer: React.FC<ISongContainer> = ({ song, searchCard }) => {
  const handleRemoveSong = () => {
    console.log("remove");
  };

  return (
    <>
      {" "}
      <SongWrapper>
        {searchCard && <SearchCloseBtn onClick={handleRemoveSong} />}
        <Link to={`/${song.title}`} style={{ textDecoration: "none" }}>
          <SongCard>
            <PlayBtn />
          </SongCard>
          <SongDetails>
            <HeaderTwo>{song.title}</HeaderTwo>
            <Medium>{song.artiste}</Medium>
          </SongDetails>
        </Link>{" "}
      </SongWrapper>
    </>
  );
};

export default SongContainer;
