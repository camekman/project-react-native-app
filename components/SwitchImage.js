import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";

const RonImage = styled.Image`
  width: 100%;
  height: 30%;
  margin-bottom: 10px;
`;

const SwitchImage = () => {
  return <RonImage source={require("../assets/ron.jpeg")}></RonImage>;
};

export default SwitchImage;
