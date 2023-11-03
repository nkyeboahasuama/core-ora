import { Wrapper } from "../../shared/atoms/Wrapper";
import {
  ProfileDetails,
  ProfileImage,
  ProfileWrapper,
} from "./ProfilePage.styles";
import {
  HeaderOne,
  HeaderThree,
  HeaderTwo,
  Normal,
} from "../../../ui/shared-components/atoms/typography/Typography.styled";
import { BodyContainer } from "../../../ui/shared-components/atoms/container/Container.styled";
import { songsGenerator } from "../../helpers/songGenerator";
import {
  SongCard,
  SongDetails,
  SongWrapper,
} from "../homepage/HomePage.styles";
import PlayBtnContainer from "../homepage/PlayBtnContainer";

const mostPlayed = songsGenerator(3);
const ProfilePage = () => {
  return (
    <BodyContainer dir="column" p="20px" gap="50px">
      <ProfileWrapper>
        <BodyContainer
          width="100%"
          p="2px"
          style={{
            borderTop: "2px solid white",
            borderBottom: "2px solid white",
          }}
        >
          <HeaderOne>MY PROFILE</HeaderOne>
        </BodyContainer>
        <BodyContainer gap="30px">
          <ProfileImage />
          <ProfileDetails>
            <HeaderOne>NANA KWAME YEBOAH-ASUAMA</HeaderOne>
            <HeaderThree weight={300}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              voluptatibus animi aut tempore facere commodi id necessitatibus
              itaque quas eius hic sit, voluptatum minus!
            </HeaderThree>
          </ProfileDetails>
        </BodyContainer>
      </ProfileWrapper>

      <BodyContainer dir="column" width="100%">
        <BodyContainer>
          <HeaderTwo>Most Played</HeaderTwo>
        </BodyContainer>
        <BodyContainer width="100%" justifyContent="space-around">
          {mostPlayed.map((song, idx) => (
            <SongWrapper key={idx}>
              <SongCard>
                <PlayBtnContainer />
              </SongCard>
              <SongDetails>
                <HeaderTwo>{song.title}</HeaderTwo>
                <Normal>{song.artiste}</Normal>
              </SongDetails>
            </SongWrapper>
          ))}
        </BodyContainer>
      </BodyContainer>
    </BodyContainer>
  );
};

export default ProfilePage;
