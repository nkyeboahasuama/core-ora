import React from "react";
import { PriorityBaseChip, PriorityStyles } from "./Priority.styles";

interface IPriorityProps {
  value: string;
  //   value: "High" | "Medium" | "Regular";
}

const Priority: React.FC<IPriorityProps> = ({ value }) => {
  if (PriorityStyles.hasOwnProperty(value)) {
    const PriorityContainer =
      PriorityStyles[value as keyof typeof PriorityStyles];
    return <PriorityContainer>{value}</PriorityContainer>;
  }
  return <PriorityBaseChip>{value}</PriorityBaseChip>;
};

export default Priority;
