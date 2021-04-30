import className from "classnames";
import { useStoreon } from "storeon/react";
import NavigationButtons from "../NavigationButtons";
import style from "./style.module.scss";

const SideMenu = ({ menuItems }) => {
  const { isMenuOpen, dispatch } = useStoreon("isMenuOpen");
  const handleClickButton = () => {
    dispatch("menu/toggle");
  };
  return (
    <NavigationButtons
      className={className(style["side_menu"], { [style["open"]]: isMenuOpen })}
      menuItems={menuItems}
      onClickButton={handleClickButton}
    />
  );
};

export default SideMenu;
