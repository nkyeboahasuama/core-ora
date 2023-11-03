import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ddd;
`;

export const ProfileImage = styled.img`
  height: 400px;
  width: 300px;
  background-color: red;
`;

export const ProfileDetails = styled.div`
  width: 50%;
  text-align: left;
`;
