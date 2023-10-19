import styled from "styled-components";
import { BodyContainer } from "../../../shared-components/atoms/container/Container.styled";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiMessage, BiSearch } from "react-icons/bi";

export const HeaderStyled = styled(BodyContainer)`
  background-color: black;
  width: calc(100vw - 300px);
  /* width: 100%; */
  /* max-width: 100vw; */
  height: 80px;
  color: white;
`;

export const HeaderLeft = styled(HeaderStyled)`
  width: 50%;
  justify-content: start;
  padding-left: 50px;
`;

export const HeaderRight = styled(HeaderStyled)`
  gap: 20px;
  width: 50%;
  justify-content: end;
  padding-right: 50px;
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

export const SearchIcon = styled(BiSearch)`
  font-size: 30px;
  cursor: pointer;
`;
