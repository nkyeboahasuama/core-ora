import React from "react";
import { HeaderOne } from "../atoms/typography/Typography.styled";

const PageHeading = ({ text }: { text: string }) => {
  return (
    <>
      <HeaderOne
        style={{
          width: "100%",
          display: "flex",
          alignItems: "flex-end",
          padding: "10px 0",
          borderBottom: "2px solid black",
        }}
      >
        {text}
      </HeaderOne>
    </>
  );
};

export default PageHeading;
