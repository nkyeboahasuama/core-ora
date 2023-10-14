import {
  HeaderLeft,
  HeaderRight,
  HeaderStyled,
  UserProfile,
  MessageIcon,
  NotificationIcon,
  SearchIcon,
} from "./Header.styled";
import {
  HeaderThree,
  HeaderTwo,
} from "../../../shared-components/atoms/typography/Typography.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderLeft>
        <SearchIcon />
      </HeaderLeft>
      <HeaderRight>
        <MessageIcon />
        <NotificationIcon />
        <UserProfile />
        <HeaderThree>Hi, Admin</HeaderThree>
      </HeaderRight>
    </HeaderStyled>
  );
};

export default Header;
