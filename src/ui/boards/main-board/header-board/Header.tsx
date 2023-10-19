import {
  HeaderLeft,
  HeaderRight,
  HeaderStyled,
  UserProfile,
  MessageIcon,
  NotificationIcon,
  SearchIcon,
  HamburgerIcon,
  CloseIcon,
} from "./Header.styled";
import {
  HeaderThree,
  HeaderTwo,
} from "../../../shared-components/atoms/typography/Typography.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import NavModal from "../../../modals/NavModal";

const Header = () => {
  const [navModal, setNavModal] = useState(false);
  return (
    <>
      <HeaderStyled>
        <HeaderLeft>
          {navModal ? (
            <CloseIcon onClick={() => setNavModal(false)} />
          ) : (
            <HamburgerIcon onClick={() => setNavModal(true)} />
          )}

          <SearchIcon />
        </HeaderLeft>
        <HeaderRight>
          <MessageIcon />
          <NotificationIcon />
          <UserProfile />
          <HeaderThree color="white">Hi, Admin</HeaderThree>
        </HeaderRight>
      </HeaderStyled>
      {navModal && <NavModal />}
    </>
  );
};

export default Header;
