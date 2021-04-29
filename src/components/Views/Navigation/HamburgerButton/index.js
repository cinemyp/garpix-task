import classNames from "classnames";

import Button from "../../Button";

import style from "./style.module.scss";

const HamburgerButton = ({ isMenuOpen, toggleMenuMode }) => {
  const handleClickMenu = () => {
    toggleMenuMode();
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
