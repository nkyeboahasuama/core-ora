import React from "react";
import { LoginBtn, LoginPageWrapper } from "./Login.styles";
import { useState } from "react";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const CLIENT_ID = "4cb4dbfa042e4a4a8ff73cc07a0deafc";
const CLIENT_SECRET = "ac8fafa028f8495d909ccb6d993062e4";
const authURL = "https://accounts.spotify.com/authorize";
const scope =
  "user-read-private user-read-email user-top-read playlist-read-private";
const redirectUri = "http://localhost:3000/home";

const Login = () => {
  const handleLogin = async () => {
    try {
      const endUrl = `${authURL}?response_type=token&client_id=${CLIENT_ID}&scope=${scope}&redirect_uri=${redirectUri}`;
      window.location.href = endUrl;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginPageWrapper>
      <LoginBtn onClick={handleLogin}>Login</LoginBtn>
    </LoginPageWrapper>
  );
};

export default Login;
