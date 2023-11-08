import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import styled from "styled-components";

export const BackBtn = styled(IoChevronBack)`
  color: white;
  background-color: black;
  height: 20px;
  width: 20px;
  padding: 5px;
  /* margin: 10px; */
  border-radius: 50%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const NextBtn = styled(IoChevronForward)`
  color: white;
  background-color: black;
  height: 20px;
  width: 20px;
  padding: 5px;
  margin: 10px;
  border-radius: 50%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
