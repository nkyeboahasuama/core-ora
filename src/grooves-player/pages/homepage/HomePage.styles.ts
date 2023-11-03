import { BsPlayCircleFill } from "react-icons/bs";
import styled from "styled-components";

export const HomePageWrapper = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: #121212;
  padding: 30px;
`;

export const SongCard = styled.div`
  height: 180px;
  width: 180px;
  background: #333333;
  display: flex;
  justify-content: end;
  align-items: end;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 11px #1a1a1a;
`;

export const SongWrapper = styled.div`
  margin: 20px;
  padding: 15px;
  background-color: #181818;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #282828;
    cursor: pointer;
  }
`;

export const PlayBtn = styled(BsPlayCircleFill)`
  font-size: 0px;
  color: #1db954;
  background-color: black;
  border-radius: 50%;
  border: none;
  margin: 10px;
  transition: font-size 0.3s ease;

  ${SongWrapper}:hover & {
    font-size: 40px;
    z-index: 1;
  }
`;

export const SongDetails = styled.div`
  padding: 5px;
`;
