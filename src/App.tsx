import React from "react";
import "./App.css";
import Home from "./ui/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./ui/pages/ManageTeam/Team";
import Contentboard from "./ui/boards/main-board/content-board/Contentboard";
import { HomeStyled } from "./ui/Home.styled";
import { BodyContainer } from "./ui/shared-components/atoms/container/Container.styled";
// import Header from "./ui/boards/main-board/header-board/Header";
import Projects from "./ui/pages/Projects/Projects";
import Tasks from "./ui/pages/ManageTasks/Tasks";
import HomePage from "./grooves-player/pages/homepage/HomePage";
import ProfilePage from "./grooves-player/pages/profilepage/ProfilePage";
import Sidebar from "./grooves-player/layout/sidebar/Sidebar";
import MainSection from "./grooves-player/layout/main/MainSection";
import styled from "styled-components";

const BodyContentContainer = styled.div`
  display: flex;
  gap: 10px;
  width: calc(100vw - 20px);
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BodyContentContainer>
          <Sidebar />
          <MainSection>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </MainSection>
        </BodyContentContainer>

        {/* <HomeStyled>
          <Sidebar />

          <BodyContainer flexDir="column" justifyContent="start">
            <Header />
            <Routes>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/tasks" element={<Tasks />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/" element={<Contentboard />}></Route>
            </Routes>
          </BodyContainer>
        </HomeStyled> */}
      </BrowserRouter>

      {/* <Home /> */}
    </div>
  );
}

export default App;
