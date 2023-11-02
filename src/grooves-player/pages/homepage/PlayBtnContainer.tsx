import { useState } from "react";
import { PlayBtn, PlayBtnWrapper } from "./HomePage.styles";

const PlayBtnContainer = () => {
  const [show, setShow] = useState(false);
  return (
    <PlayBtnWrapper
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <PlayBtn show={show} />
    </PlayBtnWrapper>
  );
};

export default PlayBtnContainer;
