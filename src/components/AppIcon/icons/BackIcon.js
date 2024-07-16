import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BackIcon = ({ color, ...props }) => {
  const iconColor = color || "#181D27";

  return (
    <Svg
      width={15}
      height={25}
      viewBox="0 0 15 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.3077 3.42285L3.47598 12.2546C3.3448 12.3857 3.3448 12.5984 3.47598 12.7296L12.3077 21.5613"
        stroke={iconColor}
        strokeWidth={5.37436}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default BackIcon;
