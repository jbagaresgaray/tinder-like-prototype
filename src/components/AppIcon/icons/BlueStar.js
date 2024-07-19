import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const BlueStar = (props) => (
  <Svg
    width={25}
    height={26}
    viewBox="0 0 25 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M24.2684 9.68711L16.6272 8.51816L13.2022 1.21192C12.9464 0.666339 12.0526 0.666339 11.7968 1.21192L8.37279 8.51816L0.731539 9.68711C0.103916 9.78357 -0.146719 10.548 0.293446 10.9992L5.8447 16.6977L4.53249 24.7539C4.42789 25.3939 5.1104 25.8741 5.67484 25.5598L12.5 21.7822L19.3251 25.5609C19.8844 25.872 20.5731 25.4011 20.4675 24.7549L19.1553 16.6988L24.7065 11.0002C25.1467 10.548 24.895 9.78357 24.2684 9.68711Z"
      fill="url(#paint0_linear_1_226)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1_226"
        x1={5.44601}
        y1={18.2694}
        x2={24.9281}
        y2={10.8797}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#62BAF3" />
        <Stop offset={1} stopColor="#6EDAED" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default BlueStar;
