import { HomePageWrapper } from "./HomePage.styles";
import { songsGenerator } from "../../helpers/songGenerator";
import SongContainer from "../../shared/songContainer/SongContainer";
import Header from "../../layout/header/Header";

const songs = songsGenerator(20);
const HomePage = () => {
  return (
    <HomePageWrapper>
      <Header />

      {songs.map((song, idx) => (
        <SongContainer song={song} key={idx} />
      ))}
    </HomePageWrapper>
  );
};

export default HomePage;
