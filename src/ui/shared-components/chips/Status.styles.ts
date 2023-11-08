import styled from "styled-components";

const StatusBaseChip = styled.button`
  padding: 2px 4px;
  border-radius: 6px;
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  border: none;
`;

const Done = styled(StatusBaseChip)`
  background-color: #a5f9bd;
  color: #53a168;
`;

const InProgress = styled(StatusBaseChip)`
  background-color: #f9eed0;
  color: #b49f6c;
`;

const Todo = styled(StatusBaseChip)`
  background-color: #d1edfb;
  color: #5a7892;
`;

export const StatusStyles = {
  done: Done,
  inprogress: InProgress,
  todo: Todo,
};
