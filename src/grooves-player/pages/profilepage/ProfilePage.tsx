import {
  ProfileDetails,
  ProfileImage,
  ProfileWrapper,
} from "./ProfilePage.styles";
import { HeaderOne, HeaderThree } from "../../shared/atoms/Typography.styled";
import { BodyContainer } from "../../shared/atoms/Container.styled";
import SongContainer from "../../shared/songContainer/SongContainer";
import { BsPerson } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { spotifyApiService } from "../../../services/spotifyApiServices";

interface IUser {
  display_name: string;
}

const ProfilePage = () => {
  const [user, setUser] = useState<IUser | null>();
  const tracks = useAppSelector((state) => state.tracks);

  useEffect(() => {
    try {
      const results = spotifyApiService.getProfile();
      results.then((data) => {
        setUser(data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <BodyContainer style={{ flexDirection: "column", gap: "50px" }}>
      <ProfileWrapper>
        <ProfileImage>
          <BsPerson />
        </ProfileImage>
        <ProfileDetails>
          <HeaderThree>Profile</HeaderThree>
          <HeaderOne style={{ fontSize: "50px" }}>
            {user ? `${user.display_name}` : "No User"}
          </HeaderOne>
          <HeaderThree>Public playlists</HeaderThree>
        </ProfileDetails>
      </ProfileWrapper>

      <BodyContainer style={{ flexDirection: "column" }} width="100%">
        <BodyContainer>
          <HeaderOne>Most Played</HeaderOne>
        </BodyContainer>
        <BodyContainer
          style={{
            justifyContent: "space-around",
          }}
          width="100%"
        >
          {tracks &&
            tracks
              .slice(0, 4)
              .map((song, idx) => <SongContainer song={song} key={idx} />)}
        </BodyContainer>
      </BodyContainer>
    </BodyContainer>
  );
};

export default ProfilePage;
