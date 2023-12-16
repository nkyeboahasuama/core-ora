import { BsPauseCircleFill, BsPlayCircleFill } from "react-icons/bs";
import { IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: calc(100vw - 20px);
  height: 80px;
  background-color: #121212;
  border-radius: 10px;
  color: white;
  border: 2px solid #222;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SongDetailsWrapper = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  /* background-color: blue; */
`;

export const SongTrackingTimer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: green; */
`;

export const SongTrackBtns = styled.div`
  width: 30%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SongForwardBtn = styled(IoPlaySkipForward)`
  font-size: 25px;
  color: gray;

  &:hover {
    color: white;
  }
`;
export const SongBackBtn = styled(IoPlaySkipBackSharp)`
  font-size: 25px;
  color: gray;

  &:hover {
    color: white;
  }
`;

export const SongPlayBtn = styled(BsPlayCircleFill)`
  font-size: 35px;
  color: white;

  &:hover {
    transform: scale(1.1);
  }
`;

export const SongPauseBtn = styled(BsPauseCircleFill)`
  font-size: 35px;
  color: white;

  &:hover {
    transform: scale(1.1);
  }
`;
