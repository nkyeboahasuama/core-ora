import Header from "../../layout/header/Header";
import { SearchPageWrapper } from "./SearchPage.styles";
import { songsGenerator } from "../../helpers/songGenerator";
import SongContainer from "../../shared/songContainer/SongContainer";

const songs = songsGenerator(3);
const SearchPage = ({ tracks }: { tracks: [] }) => {
  return (
    <SearchPageWrapper>
      <Header />
      {tracks &&
        tracks
          .slice(5, 8)
          .map((song, idx) => (
            <SongContainer searchCard song={song} key={idx} />
          ))}
    </SearchPageWrapper>
  );
};

export default SearchPage;
