import styled from "styled-components";

import React from "react";
import { BackBtn, NextBtn } from "./Navigation.styles";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  return <BackBtn onClick={() => navigate(-1)} />;
};

export default Navigation;
