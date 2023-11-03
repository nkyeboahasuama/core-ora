import {
  HomePageWrapper,
  SongCard,
  SongDetails,
  SongWrapper,
} from "./HomePage.styles";
import { songsGenerator } from "../../helpers/songGenerator";
import {
  HeaderTwo,
  Medium,
} from "../../../ui/shared-components/atoms/typography/Typography.styled";
import { Link } from "react-router-dom";
import SongContainer from "./SongContainer";

const songs = songsGenerator(20);
const HomePage = () => {
  return (
    <HomePageWrapper>
      {songs.map((song, idx) => (
        <SongContainer song={song} key={idx} />
      ))}
    </HomePageWrapper>
  );
};

export default HomePage;
