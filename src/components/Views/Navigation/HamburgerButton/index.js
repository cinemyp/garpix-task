import classNames from "classnames";
import { useStoreon } from "storeon/react";

import Button from "../../Button";

import style from "./style.module.scss";

const HamburgerButton = () => {
  const { dispatch, isMenuOpen } = useStoreon("isMenuOpen");
  const handleClickMenu = () => {
    dispatch("menu/toggle");
  };

  return (
    <Button
      onClick={handleClickMenu}
      className={classNames(style["hamburger"], {
        [style["active"]]: isMenuOpen,
      })}
    >
      <span className={style["hamburger__bar"]} />
      <span className={style["hamburger__bar"]} />
      <span className={style["hamburger__bar"]} />
    </Button>
  );
};

export default HamburgerButton;
