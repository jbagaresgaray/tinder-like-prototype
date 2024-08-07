import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const Heart = (props) => (
  <Svg
    width={29}
    height={24}
    viewBox="0 0 29 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21.1566 0.159909C16.4164 0.159909 14.4131 3.45727 14.4131 3.45727C14.4131 3.45727 12.4098 0.145996 7.66963 0.145996C3.66305 0.159909 0.30542 3.45727 0.30542 7.39462C0.30542 16.4241 14.4131 23.6588 14.4131 23.6588C14.4131 23.6588 28.5208 16.4241 28.5208 7.39462C28.5208 3.45727 25.1632 0.159909 21.1566 0.159909Z"
      fill="url(#paint0_linear_1_69)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1_69"
        x1={2.9926}
        y1={11.9024}
        x2={33.8952}
        y2={3.33702}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6DE5B5" />
        <Stop offset={1} stopColor="#73ECDD" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Heart;
