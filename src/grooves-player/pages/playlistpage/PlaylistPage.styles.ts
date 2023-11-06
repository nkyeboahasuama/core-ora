import styled from "styled-components";
import { ProfileWrapper } from "../profilepage/ProfilePage.styles";

export const PlaylistPageWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const PlaylistHeaderWrapper = styled(ProfileWrapper)``;
export const PlaylistImage = styled.img`
  border-radius: 20px;
  width: 20%;
`;
