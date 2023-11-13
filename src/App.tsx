import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./grooves-player/pages/homepage/HomePage";
import ProfilePage from "./grooves-player/pages/profilepage/ProfilePage";
import Sidebar from "./grooves-player/layout/sidebar/Sidebar";
import MainSection from "./grooves-player/layout/main/MainSection";
import styled from "styled-components";
import PlaylistPage from "./grooves-player/pages/playlistpage/PlaylistPage";
import Login from "./grooves-player/pages/loginpage/Login";
import SearchPage from "./grooves-player/pages/searchpage/SearchPage";

const BodyContentContainer = styled.div`
  display: flex;
  gap: 10px;
  width: calc(100vw - 20px);
`;

function App() {
  console.log("in app");
  return (
    <div className="App">
      <BrowserRouter>
        <BodyContentContainer>
          <Sidebar />
          <MainSection>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/playlist/:id" element={<PlaylistPage />} />
            </Routes>
          </MainSection>
        </BodyContentContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
