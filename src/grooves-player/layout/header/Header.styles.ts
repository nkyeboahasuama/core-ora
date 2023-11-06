import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProfileImage } from "../../pages/profilepage/ProfilePage.styles";

export const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  height: 40px;
  width: 40px;
  font-size: 25px;

  border-radius: 50%;
  background-color: white;
  padding: 1px;
  cursor: pointer;

  transition: box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease;

  &:hover {
    box-shadow: 1px 1px 11px black;
    background-color: #282828;
    color: white;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #1db954;
  padding: 0 20px;
  box-sizing: border-box;
`;
