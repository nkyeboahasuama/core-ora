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
import SongContainer from "../homepage/SongContainer";
import { BsPerson } from "react-icons/bs";

const mostPlayed = songsGenerator(3);
const ProfilePage = () => {
  return (
    <BodyContainer dir="column" gap="50px">
      <ProfileWrapper>
        <ProfileImage>
          <BsPerson />
        </ProfileImage>
        <ProfileDetails>
          <HeaderThree>Profile</HeaderThree>
          <HeaderOne style={{ fontSize: "50px" }}>Nana Kwame</HeaderOne>
          <HeaderThree>3 Public playlists</HeaderThree>
        </ProfileDetails>
      </ProfileWrapper>

      <BodyContainer dir="column" width="100%">
        <BodyContainer>
          <HeaderOne>Most Played</HeaderOne>
        </BodyContainer>
        <BodyContainer width="100%" justifyContent="space-around">
          {mostPlayed.map((song, idx) => (
            <SongContainer song={song} key={idx} />
          ))}
        </BodyContainer>
      </BodyContainer>
    </BodyContainer>
  );
};

export default ProfilePage;
