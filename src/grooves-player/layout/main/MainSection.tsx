import { MainSectionContain } from "./MainSection.styles";

const MainSection = ({ children }: { children: any }) => {
  console.log(children);
  return <MainSectionContain>{children}</MainSectionContain>;
};

export default MainSection;
