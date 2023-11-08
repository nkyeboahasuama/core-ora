import React from "react";
import { HeaderOne } from "../../../ui/shared-components/atoms/typography/Typography.styled";
import { SidebarStyled } from "./Sidebar.styles";

const Sidebar = () => {
  return (
    <SidebarStyled>
      <HeaderOne color="black">Sidebar</HeaderOne>;
    </SidebarStyled>
  );
};

export default Sidebar;
