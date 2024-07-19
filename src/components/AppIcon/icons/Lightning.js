import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const Lightning = (props) => (
  <Svg
    width={14}
    height={24}
    viewBox="0 0 14 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.26124 9.70371L11.3289 0.238368C11.5638 0.0175243 11.9447 0.222319 11.89 0.540058L10.5019 8.60595C10.3097 9.72302 10.7585 10.8538 11.6645 11.5349L13.3034 12.7672C13.8049 13.1443 13.8436 13.883 13.3842 14.3104L3.30033 23.6932C3.0611 23.9158 2.6771 23.7003 2.74239 23.3801L4.24441 16.0144C4.45012 15.0056 4.12828 13.9614 3.39031 13.2435L1.24881 11.1602C0.837272 10.7598 0.842927 10.097 1.26124 9.70371Z"
      fill="url(#paint0_linear_1_72)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1_72"
        x1={-0.903642}
        y1={18.361}
        x2={18.9143}
        y2={11.979}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#AA54EA" />
        <Stop offset={1} stopColor="#B468EE" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Lightning;
