import styled from "styled-components";
import { BodyContainer } from "../../../shared-components/atoms/container/Container.styled";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiMessage, BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export const HeaderStyled = styled(BodyContainer)`
  background-color: black;
  width: calc(100vw - 300px);
  height: 80px;
  color: white;
  padding: 0px 20px;
  @media (max-width: 700px) {
    width: 100vw;
  }
`;

export const HeaderLeft = styled(HeaderStyled)`
  width: 50%;
  justify-content: start;
  padding-left: 0px;
`;

export const HeaderRight = styled(HeaderStyled)`
  gap: 20px;
  width: 50%;
  justify-content: end;
  padding-right: 0px;
`;

export const UserProfile = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-color: gray;
  cursor: pointer;
`;

export const MessageIcon = styled(BiMessage)`
  font-size: 30px;
  cursor: pointer;
`;

export const NotificationIcon = styled(IoNotificationsOutline)`
  font-size: 30px;
  cursor: pointer;
`;
export const HamburgerIcon = styled(GiHamburgerMenu)`
  font-size: 30px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled(BiSearch)`
  font-size: 30px;
  cursor: pointer;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const CloseIcon = styled(AiOutlineClose)`
  font-size: 30px;
  cursor: pointer;
`;
