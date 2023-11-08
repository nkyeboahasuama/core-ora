import React from "react";
import Sidebar from "./sidebar/Sidebar";
import MainSection from "./main/MainSection";

const SplitScreen = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <MainSection />
    </div>
  );
};

export default SplitScreen;
