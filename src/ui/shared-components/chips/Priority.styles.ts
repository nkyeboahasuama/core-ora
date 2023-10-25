import styled from "styled-components";

export const PriorityBaseChip = styled.button`
  padding: 2px 4px;
  border-radius: 6px;
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  border: none;
  color: #5af;
`;

const High = styled(PriorityBaseChip)`
  background-color: #fac8d9;
  color: #c5637d;
`;

const Medium = styled(PriorityBaseChip)`
  background-color: #f8c9a5;
  color: #b66641;
`;

const Regular = styled(PriorityBaseChip)`
  background-color: #e4e4e4;
  color: #757575;
`;

export const PriorityStyles = {
  High,
  Medium,
  Regular,
};
