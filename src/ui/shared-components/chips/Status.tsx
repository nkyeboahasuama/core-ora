import React from "react";
import { StatusStyles } from "./Status.styles";

interface IStatusProps {
  status: string;
}
const Status: React.FC<IStatusProps> = ({ status }) => {
  const editted = status.replace(/\s/g, "").toLocaleLowerCase();
  if (StatusStyles.hasOwnProperty(editted)) {
    const StatusContainer = StatusStyles[editted as keyof typeof StatusStyles];
    return <StatusContainer>{status}</StatusContainer>;
  }

  return <div>{status}</div>;
};

export default Status;
