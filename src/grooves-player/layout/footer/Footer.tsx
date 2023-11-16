import {
  FooterWrapper,
  SongBackBtn,
  SongDetailsWrapper,
  SongForwardBtn,
  SongPlayBtn,
  SongTrackBtns,
  SongTrackingTimer,
} from "./Footer.styles";
import { HeaderTwo, Normal } from "../../shared/atoms/Typography.styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <SongDetailsWrapper>
        <div
          style={{ backgroundColor: "gray", height: "60px", width: "60px" }}
        ></div>
        <div>
          <HeaderTwo>Starlight</HeaderTwo>
          <Normal>Dave</Normal>
        </div>
      </SongDetailsWrapper>
      <SongTrackBtns>
        <SongBackBtn />
        <SongPlayBtn />
        <SongForwardBtn />
      </SongTrackBtns>
      <SongTrackingTimer>
        0:00
        <div
          style={{
            width: "70%",
            height: "5px",
            backgroundColor: "gray",
            margin: "0px 5px",
          }}
        ></div>
        4:16
      </SongTrackingTimer>
    </FooterWrapper>
  );
};

export default Footer;
