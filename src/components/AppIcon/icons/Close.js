import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Close = ({ color, ...props }) => {
  const iconColor = color || "#181D27";
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.3308 3.16406L2.85645 21.6384"
        stroke={iconColor}
        strokeWidth={5.37436}
        strokeLinecap="round"
      />
      <Path
        d="M2.85645 3.16406L21.3308 21.6384"
        stroke={iconColor}
        strokeWidth={5.37436}
        strokeLinecap="round"
      />
    </Svg>
  );
};
export default Close;
