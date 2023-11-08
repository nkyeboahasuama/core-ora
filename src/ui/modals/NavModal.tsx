import React from "react";
import { BodyContainer } from "../shared-components/atoms/container/Container.styled";

const NavModal = ({}) => {
  return (
    <BodyContainer
      width="100%"
      height="100%"
      backgroundColor="yellow"
      style={{ position: "absolute", top: "80px" }}
    >
      NavModal
    </BodyContainer>
  );
};

export default NavModal;
