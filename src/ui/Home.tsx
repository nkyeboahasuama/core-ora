import Header from "./boards/main-board/header-board/Header";
import Sidebar from "./boards/side-board/Sidebar";
import { BodyContainer } from "./shared-components/atoms/container/Container.styled";
import { HomeStyled } from "./Home.styled";
import Contentboard from "./boards/main-board/content-board/Contentboard";

const Home = () => {
  return (
    <HomeStyled>
      <Sidebar />

      <BodyContainer dir="column">
        <Header />
        <Contentboard />
      </BodyContainer>
    </HomeStyled>
  );
};

export default Home;
