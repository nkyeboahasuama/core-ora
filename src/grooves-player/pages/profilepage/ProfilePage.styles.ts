import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 30px;
  height: 300px;
  width: 100%;
  background-color: #333333;
  background: linear-gradient(to bottom, #535353, #2f2f2f);
  align-items: center;
  justify-content: start;
  padding: 20px;
  box-sizing: border-box;
`;

export const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 180px;
  width: 180px;
  margin: 10px;
  font-size: 5rem;
  cursor: pointer;

  border-radius: 50%;
  background-color: #282828;
  box-shadow: 3px 3px 20px #121212;
`;

export const ProfileDetails = styled.div`
  text-align: left;
`;
