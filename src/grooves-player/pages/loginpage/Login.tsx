import { LoginBtn, LoginPageWrapper } from "./Login.styles";

const scope =
  "user-read-private user-read-email user-top-read playlist-read-private";
// let accessToken = localStorage.getItem("access_token");

const Login = () => {
  const handleLogin = async () => {
    try {
      const endpoint = `${process.env.REACT_APP_AUTH_URI}?response_type=token&client_id=${process.env.REACT_APP_CLIENT_ID}&scope=${scope}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

      window.location.href = endpoint;
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
