import {
  ProfileDetails,
  ProfileImage,
  ProfileWrapper,
} from "./ProfilePage.styles";
import { HeaderOne, HeaderThree } from "../../shared/atoms/Typography.styled";
import { BodyContainer } from "../../shared/atoms/Container.styled";
import { songsGenerator } from "../../helpers/songGenerator";
import SongContainer from "../../shared/songContainer/SongContainer";
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
