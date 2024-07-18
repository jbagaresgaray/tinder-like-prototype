import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Plus = ({ color, ...props }) => {
  const iconColor = color || "#181D27";
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 7.99974C15.5 7.17131 14.8284 6.49974 14 6.49974L9.5 6.49974L9.5 1.99974C9.5 1.17131 8.82843 0.499739 8 0.499739C7.17157 0.499739 6.5 1.17131 6.5 1.99974V6.49974L2 6.49974C1.17157 6.49974 0.5 7.17131 0.5 7.99974C0.5 8.82817 1.17157 9.49974 2 9.49974L6.5 9.49974L6.5 13.9997C6.5 14.8282 7.17157 15.4997 8 15.4997C8.82843 15.4997 9.5 14.8282 9.5 13.9997L9.5 9.49974L14 9.49974C14.8284 9.49974 15.5 8.82817 15.5 7.99974Z"
        fill={iconColor}
      />
    </Svg>
  );
};
export default Plus;
