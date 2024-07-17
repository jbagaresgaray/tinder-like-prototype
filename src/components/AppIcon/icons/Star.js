import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Star = (props) => (
  <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.8167 0.207031L16.1585 5.75045C17.2475 8.32844 19.2991 10.38 21.8771 11.4691L27.4205 13.8109L21.8771 16.1527C19.2991 17.2417 17.2475 19.2933 16.1585 21.8713L13.8167 27.4147L11.4749 21.8713C10.3858 19.2933 8.33424 17.2417 5.75625 16.1527L0.21283 13.8109L5.75625 11.4691C8.33424 10.38 10.3858 8.32844 11.4749 5.75045L13.8167 0.207031Z"
      fill="#7D848F"
    />
  </Svg>
);
export default Star;
