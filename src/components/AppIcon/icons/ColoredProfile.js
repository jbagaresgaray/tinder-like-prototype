import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const ColoredProfile = (props) => (
  <Svg
    width={20}
    height={27}
    viewBox="0 0 20 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.2075 26.911C10.211 26.911 10.2145 26.911 10.218 26.911C10.22 26.911 10.222 26.911 10.2241 26.9109C14.5859 26.9089 19.9382 26.3992 19.9382 22.5443C19.9382 19.6739 16.7502 16.9676 14.8161 15.7447C14.6161 15.6182 14.5955 15.3295 14.7672 15.1666C16.3902 13.6262 17.0984 10.9558 17.0984 7.64843C16.9527 3.88452 13.928 0.878906 10.218 0.878906C6.52515 0.878906 3.51128 3.8567 3.33976 7.5961C3.33976 10.9558 4.26597 13.855 5.64789 15.1666C5.81954 15.3295 5.79901 15.6182 5.59899 15.7447C3.66487 16.9676 0.476929 19.6739 0.476929 22.5443C0.476929 26.3992 5.82921 26.9089 10.191 26.9109C10.193 26.911 10.1951 26.911 10.1971 26.911C10.2006 26.911 10.2041 26.911 10.2075 26.911Z"
      fill="url(#paint0_linear_1_466)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1_466"
        x1={17.8315}
        y1={6.28816}
        x2={-1.00291}
        y2={19.3713}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#EE805F" />
        <Stop offset={1} stopColor="#EA4080" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default ColoredProfile;
