import { Polygon } from "react-native-svg";
import BackIcon from "./icons/BackIcon";
import ColoredFire from "./icons/ColoredFire";
import Fire from "./icons/Fire";
import Title from "./icons/Title";

const AppIcon = ({ name = "", size, color, width, height, ...rest }) => {
  const DEFAULT_SIZE = 13;
  const iconColor = color || "#181D27";
  const iconHeight = size || DEFAULT_SIZE;
  const iconWidth = size || DEFAULT_SIZE;
  if (!name) {
    return null;
  }

  const getProps = () => ({
    color: iconColor,
    width: width ?? iconWidth,
    height: height ?? iconHeight,
    ...rest,
  });
  switch (name) {
    case "back":
      return <BackIcon {...getProps()} />;
    case "fire":
      return <Fire {...getProps()} />;
    case "title":
      return <Title {...getProps()} />;
    case "coloredfire":
      return <ColoredFire {...getProps()} />;
     
  }
};

export default AppIcon;
