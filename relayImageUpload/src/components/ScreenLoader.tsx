import React, { FC } from "react";
import { StyleSheet, ActivityIndicator, ViewStyle } from "react-native";
import styled from "styled-components/native";

interface ScreenLoaderProps {
  bgColor?: string;
  spinnerColor?: string;
  style?: ViewStyle;
}

const ScreenLoader: FC<ScreenLoaderProps> = ({
  bgColor,
  spinnerColor,
  style,
}) => (
  <Loader {...{ ...(bgColor && { bgColor }), ...(style && { style }) }}>
    <ActivityIndicator
      size='large'
      color={spinnerColor ? spinnerColor : "gray"}
      style={{ ...StyleSheet.absoluteFillObject }}
    />
  </Loader>
);

export default ScreenLoader;

const Loader = styled.View<ScreenLoaderProps>`
  ${({ bgColor }) =>
    `background-color:${bgColor ? bgColor : "rgba(0,0,0,0.1)"}`}
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;
