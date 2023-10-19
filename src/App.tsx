import React from "react";
import "./App.css";
import Home from "./ui/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./ui/pages/ManageTeam/Team";
import Sidebar from "./ui/boards/side-board/Sidebar";
import Contentboard from "./ui/boards/main-board/content-board/Contentboard";
import { HomeStyled } from "./ui/Home.styled";
import { BodyContainer } from "./ui/shared-components/atoms/container/Container.styled";
import Header from "./ui/boards/main-board/header-board/Header";
import Projects from "./ui/pages/Projects/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <HomeStyled>
          <Sidebar />

          <BodyContainer flexDir="column" justifyContent="start">
            <Header />
            <Routes>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/" element={<Contentboard />}></Route>
            </Routes>
          </BodyContainer>
        </HomeStyled>
      </BrowserRouter>

      {/* <Home /> */}
    </>
  );
}

export default App;
