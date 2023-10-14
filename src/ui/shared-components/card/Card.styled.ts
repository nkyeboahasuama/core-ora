import styled from "styled-components";
import { BodyContainer } from "../atoms/container/Container.styled";

export const LargeCard = styled(BodyContainer)`
  width: 100%;
  height: 400px;
  background-color: red;
`;

export const MediumCard = styled(BodyContainer)`
  height: 300px;
  width: 100%;
  background-color: saddlebrown;
`;

export const ShortCard = styled(BodyContainer)`
  min-height: 100px;
  height: 100%;
  width: 100%;
  background-color: green;
`;

export const CardsRow = styled(BodyContainer)`
  width: 100%;
  gap: 20px;
`;
