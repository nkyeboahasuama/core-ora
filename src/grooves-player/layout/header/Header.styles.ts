import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProfileIcon = styled(Link)`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: red;
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
