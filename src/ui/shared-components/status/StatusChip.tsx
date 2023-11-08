import React from "react";
import { BodyContainer } from "../atoms/container/Container.styled";

const StatusChip = ({ status }: any) => {
  return (
    <BodyContainer
      style={{
        height: "2px",
        width: "2px",
        borderRadius: "100%",
        border: "5px solid",
        borderColor: `${
          status === "Active"
            ? "yellow"
            : status === "Completed"
            ? "green"
            : "red"
        }`,
      }}
    ></BodyContainer>
  );
};

export default StatusChip;
