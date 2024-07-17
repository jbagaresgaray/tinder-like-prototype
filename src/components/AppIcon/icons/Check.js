import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Check = (props) => (
  <Svg
    width={18}
    height={14}
    viewBox="0 0 18 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M2 7.5L6 11.5L16 1.5" stroke="#EC5C54" strokeWidth={3} />
  </Svg>
);
export default Check;
