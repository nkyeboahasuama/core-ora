import { BiPlayCircle } from "react-icons/bi";
import styled from "styled-components";

export const HomePageWrapper = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SongCard = styled.div`
  height: 250px;
  width: 250px;
  background: azure;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlayBtnWrapper = styled.div`
  height: 250px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: black;
    opacity: 50%;
  }
`;

export const PlayBtn = styled(BiPlayCircle)`
  font-size: 50px;
  color: white;
  display: ${({ show }: { show: boolean }) => (show ? "block" : "none")};
`;

export const SongWrapper = styled.div`
  margin: 20px;
`;

export const SongDetails = styled.div`
  padding: 5px;
  background-color: saddlebrown;
`;
