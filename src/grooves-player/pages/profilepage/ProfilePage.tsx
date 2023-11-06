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
import { useEffect, useState } from "react";

interface IUser {
  display_name: string;
}
const mostPlayed = songsGenerator(3);

const ProfilePage = ({ tracks }: { tracks: [] }) => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    async function getProfile() {
      try {
        let accessToken = localStorage.getItem("access_token");

        const response = await fetch("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        });
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setUser(null);
        console.log(err);
      }
    }
    getProfile();
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
