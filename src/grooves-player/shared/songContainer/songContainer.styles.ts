import styled, { keyframes } from "styled-components";
import { CloseBtn } from "../../shared/atoms/CloseBtn";
import {
  BsPauseBtnFill,
  BsPauseCircle,
  BsPlayCircleFill,
} from "react-icons/bs";
import { HeaderOne, HeaderTwo } from "../atoms/Typography.styled";

export const SongCard = styled.img`
  height: 180px;
  width: 180px;
  /* background: #333333; */
  display: flex;
  justify-content: end;
  align-items: end;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 11px #1a1a1a;
  z-index: 0;
`;

export const SongWrapper = styled.div`
  position: relative;
  margin: 20px;
  padding: 15px;
  background-color: #181818;
  border-radius: 10px;
  z-index: 1;
  transition: background-color 0.3s ease;

  &:hover {
    /* background-color: #282828; */
    background-color: red;
    cursor: pointer;
  }
`;

export const SearchCloseBtn = styled(CloseBtn)`
  display: none;
  position: absolute;
  top: 4%;
  right: 4%;
  color: white;
  border-radius: 50%;

  ${SongWrapper}:hover & {
    display: block;
  }
`;

export const PlayBtn = styled(BsPlayCircleFill)`
  position: absolute;
  bottom: 20%;
  right: 0%;
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
export const PauseBtn = styled(BsPauseCircle)`
  position: absolute;
  bottom: 20%;
  right: 0%;
  font-size: 40px;
  color: black;
  background-color: #1db954;
  border-radius: 50%;
  border: none;
  margin: 10px;
  transition: font-size 0.3s ease;
  z-index: 1;
`;

export const SongDetails = styled.div`
  text-align: start;
  padding: 5px;
  height: 40px;
  position: relative;
  overflow: hidden;
`;

export const SongTitle = styled(HeaderTwo)`
  width: 140px;
  white-space: nowrap;
`;
