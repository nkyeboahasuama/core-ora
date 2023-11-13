import Header from "../../layout/header/Header";
import { SearchPageWrapper } from "./SearchPage.styles";
import SongContainer from "../../shared/songContainer/SongContainer";
import { useAppSelector } from "../../../redux/hooks/hooks";

const SearchPage = () => {
  const tracks = useAppSelector((state) => state.tracks);
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
