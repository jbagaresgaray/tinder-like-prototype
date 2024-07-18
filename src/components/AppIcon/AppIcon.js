import { Polygon } from "react-native-svg";
import BackIcon from "./icons/BackIcon";
import ColoredFire from "./icons/ColoredFire";
import Fire from "./icons/Fire";
import Title from "./icons/Title";
import Close from "./icons/Close";
import Check from "./icons/Check";
import TabFireIcon from "./icons/TabFireIcon";
import Star from "./icons/Star";
import Search from "./icons/Search";
import Chat from "./icons/Chat";
import Profile from "./icons/Profile";
import TabTitle from "./icons/TabTitle";
import Retry from "./icons/Retry";
import ColoredProfile from "./icons/ColoredProfile";
import Settings from "./icons/Settings";
import Pencil from "./icons/Pencil";
import Safety from "./icons/Safety";
import GradientX from "./icons/GradientX";
import Plus from "./icons/Plus";
import Information from "./icons/Information";
import House_outline from "./icons/House_outline";
import Location_outline from "./icons/Location_outline";

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
    case "close":
      return <Close {...getProps()} />;
    case "check":
      return <Check {...getProps()} />;
    case "uncoloredfire":
      return <TabFireIcon {...getProps()} />;
    case "star":
      return <Star {...getProps()} />;
    case "search":
      return <Search {...getProps()} />;
    case "chat":
      return <Chat {...getProps()} />;
    case "profile":
      return <Profile {...getProps()} />;
    case "tabtitle":
      return <TabTitle {...getProps()} />;
    case "retry":
      return <Retry {...getProps()} />;
    case "coloredprofile":
      return <ColoredProfile {...getProps()} />;
    case "settings":
      return <Settings {...getProps()} />;
    case "pencil":
      return <Pencil {...getProps()} />;
    case "safety":
      return <Safety {...getProps()} />;
    case "gradientx":
      return <GradientX {...getProps()} />;
    case "plus":
      return <Plus {...getProps()} />;
    case "info":
      return <Information {...getProps()} />;
    case "house-outline":
      return <House_outline {...getProps()} />;
    case "location-outline":
      return <Location_outline {...getProps()} />;
  }
};

export default AppIcon;
