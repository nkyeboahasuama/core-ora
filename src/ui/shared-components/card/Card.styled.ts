import styled from "styled-components";
import { BodyContainer } from "../atoms/container/Container.styled";

const BaseCard = styled(BodyContainer)`
  background-color: #272727;
  box-shadow: 1px 1px 3px black;
  border-radius: 5px;
`;

export const LargeCard = styled(BaseCard)`
  width: 100%;
  height: 400px;
`;

export const MediumCard = styled(BaseCard)`
  height: 300px;
  width: 100%;
  /* background-color: gray; */
`;

export const ShortCard = styled(BaseCard)`
  min-height: 100px;
  height: 100%;
  width: 100%;
  /* background-color: green; */
`;

export const CardsRow = styled(BodyContainer)`
  width: 100%;
  gap: 20px;
`;
