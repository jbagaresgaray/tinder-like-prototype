import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const GradientX = (props) => (
  <Svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.3033 0.696909C10.7175 0.111123 9.76776 0.111123 9.18198 0.696909L6 3.87889L2.81802 0.696908C2.23223 0.111122 1.28248 0.111121 0.696696 0.696908C0.11091 1.28269 0.110908 2.23244 0.696696 2.81823L3.87868 6.00021L0.696695 9.18219C0.110908 9.76798 0.110908 10.7177 0.696695 11.3035C1.28248 11.8893 2.23223 11.8893 2.81802 11.3035L6 8.12153L9.18198 11.3035C9.76776 11.8893 10.7175 11.8893 11.3033 11.3035C11.8891 10.7177 11.8891 9.76798 11.3033 9.18219L8.12132 6.00021L11.3033 2.81823C11.8891 2.23244 11.8891 1.2827 11.3033 0.696909Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.3033 0.696909C10.7175 0.111123 9.76776 0.111123 9.18198 0.696909L6 3.87889L2.81802 0.696908C2.23223 0.111122 1.28248 0.111121 0.696696 0.696908C0.11091 1.28269 0.110908 2.23244 0.696696 2.81823L3.87868 6.00021L0.696695 9.18219C0.110908 9.76798 0.110908 10.7177 0.696695 11.3035C1.28248 11.8893 2.23223 11.8893 2.81802 11.3035L6 8.12153L9.18198 11.3035C9.76776 11.8893 10.7175 11.8893 11.3033 11.3035C11.8891 10.7177 11.8891 9.76798 11.3033 9.18219L8.12132 6.00021L11.3033 2.81823C11.8891 2.23244 11.8891 1.2827 11.3033 0.696909Z"
      fill="url(#paint0_linear_19_236)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_19_236"
        x1={0.257355}
        y1={6.00021}
        x2={11.7426}
        y2={6.00021}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#EA4080" />
        <Stop offset={1} stopColor="#EE805F" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default GradientX;