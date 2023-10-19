import { BodyContainer } from "../../../shared-components/atoms/container/Container.styled";
import { HeaderOne } from "../../../shared-components/atoms/typography/Typography.styled";
import {
  CardsRow,
  LargeCard,
  MediumCard,
  ShortCard,
} from "../../../shared-components/card/Card.styled";
import { ContentboardStyled } from "./Contentboard.styled";
import ProjectsCard from "./components-content/projects/ProjectsCard";

const Contentboard = () => {
  return (
    <ContentboardStyled>
      <BodyContainer padding="20px 0px" width="100%">
        <HeaderOne color="black">Administrators console</HeaderOne>
      </BodyContainer>
      <BodyContainer width="90%" flexDir="column" gap="20px" padding="20px 0px">
        <CardsRow>
          <BodyContainer width="70%">
            <LargeCard></LargeCard>
          </BodyContainer>
          <BodyContainer width="30%" height="400px" flexDir="column" gap="20px">
            <ShortCard></ShortCard>
            <ShortCard></ShortCard>
            <ShortCard></ShortCard>
          </BodyContainer>
        </CardsRow>

        <CardsRow>
          {/* <MediumCard> */}
          <ProjectsCard />
          {/* </MediumCard> */}
          <MediumCard> Saa</MediumCard>
          {/* <MediumCard></MediumCard> */}
        </CardsRow>

        <CardsRow>
          <MediumCard></MediumCard>
          <MediumCard></MediumCard>
          <MediumCard></MediumCard>
        </CardsRow>
      </BodyContainer>
    </ContentboardStyled>
  );
};

export default Contentboard;
