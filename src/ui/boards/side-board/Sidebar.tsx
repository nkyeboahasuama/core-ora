import {
  HeaderOne,
  HeaderThree,
} from "../../shared-components/atoms/typography/Typography.styled";
import {
  SidebarHeader,
  SidebarLink,
  SidebarLinkContainer,
  SidebarStyled,
} from "./Sidebar.styles";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { FaUsers, FaTasks, FaQuestionCircle } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { BiHelpCircle } from "react-icons/bi";
const Sidebar = () => {
  return (
    <SidebarStyled>
      <SidebarHeader>Core Ora</SidebarHeader>

      <SidebarLinkContainer>
        <SidebarLink to="/">
          <div
            style={{
              width: "80%",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <AiOutlineHome style={{ fontSize: "20px" }} />
            Dashboard
          </div>
        </SidebarLink>
      </SidebarLinkContainer>

      <SidebarHeader subHeader>Data</SidebarHeader>
      <SidebarLinkContainer>
        <SidebarLink to="/team">
          <div
            style={{
              width: "80%",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <FaUsers style={{ fontSize: "20px" }} />
            Manage users
          </div>
        </SidebarLink>
        <SidebarLink to={"/projects"}>
          <div
            style={{
              width: "80%",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <GiNetworkBars style={{ fontSize: "20px" }} />
            Projects
          </div>
        </SidebarLink>
        <SidebarLink to={"/tasks"}>
          <div
            style={{
              width: "80%",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <FaTasks style={{ fontSize: "20px" }} />
            Tasks
          </div>
        </SidebarLink>
      </SidebarLinkContainer>
      <SidebarHeader subHeader>FAQ</SidebarHeader>
      <SidebarLinkContainer>
        <SidebarLink to={"/setting"}>
          <div
            style={{
              width: "80%",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <AiOutlineSetting style={{ fontSize: "20px" }} />
            Settings
          </div>
        </SidebarLink>
        <SidebarLink to={"/support"}>
          <div
            style={{
              width: "80%",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <BiHelpCircle style={{ fontSize: "20px" }} />
            Support
          </div>
        </SidebarLink>
      </SidebarLinkContainer>
    </SidebarStyled>
  );
};

export default Sidebar;
