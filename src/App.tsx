import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./grooves-player/pages/homepage/HomePage";
import ProfilePage from "./grooves-player/pages/profilepage/ProfilePage";
import Sidebar from "./grooves-player/layout/sidebar/Sidebar";
import MainSection from "./grooves-player/layout/main/MainSection";
import styled from "styled-components";
import SearchPage from "./grooves-player/pages/searchpage/SearchPage";
import PlaylistPage from "./grooves-player/pages/playlistpage/PlaylistPage";
import Login from "./grooves-player/pages/loginpage/Login";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "./redux/hooks/hooks";
import { setTracks } from "./redux/features/tracksSlice";

const BodyContentContainer = styled.div`
  display: flex;
  gap: 10px;
  width: calc(100vw - 20px);
`;

function App() {
  const [loading, setLoading] = useState(false);
  const [playlists, setPlaylists] = useState<[]>([]);
  const dispatch = useAppDispatch();

  let accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    getUserPlaylists();
  }, []);

  async function getUserPlaylists() {
    setLoading(true);
    const response = await fetch(
      "https://api.spotify.com/v1/me/playlists?limit=3",
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }
    );
    const data = await response.json();
    setLoading(false);
    setPlaylists(data.items);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <BodyContentContainer>
          <Sidebar />
          <MainSection>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<HomePage />} />
              {/* <Route
                path="/profile"
                element={<ProfilePage tracks={tracks} />}
              />
              <Route path="/search" element={<SearchPage tracks={tracks} />} /> */}
              <Route
                path="/playlist/:id"
                element={<PlaylistPage playlists={playlists} />}
              />
            </Routes>
          </MainSection>
        </BodyContentContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
