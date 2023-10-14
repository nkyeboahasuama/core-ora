import { HeaderOne } from "../../shared-components/atoms/typography/Typography.styled";
import {
  SidebarLink,
  SidebarLinkContainer,
  SidebarStyled,
} from "./Sidebar.styled";

const Sidebar = () => {
  return (
    <SidebarStyled>
      <HeaderOne color="black">Core Ora</HeaderOne>
      <SidebarLinkContainer>
        <SidebarLink href="#">Dashboard</SidebarLink>
        <SidebarLink>Overview</SidebarLink>
        <SidebarLink>Managers</SidebarLink>
        <SidebarLink>Members</SidebarLink>
        <SidebarLink>Projects</SidebarLink>
        <SidebarLink>Tasks</SidebarLink>
        <SidebarLink>Settings</SidebarLink>
        <SidebarLink>Support & Help</SidebarLink>
      </SidebarLinkContainer>
    </SidebarStyled>
  );
};

export default Sidebar;
