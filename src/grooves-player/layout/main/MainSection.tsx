import Header from "../header/Header";
import Navigation from "../header/Navigation";
import { MainSectionContain } from "./MainSection.styles";

const MainSection = ({ children }: { children: any }) => {
  console.log(children);
  return (
    <MainSectionContain>
      <Header />
      {children}
    </MainSectionContain>
  );
};

export default MainSection;
