import Button from "../../Button";

import { ReactComponent as SearchSVG } from "../../../../assets/search.svg";
import style from "./style.module.scss";

const NavigationMenu = ({ onClickSearch }) => {
  return (
    <div className={style["navigation_menu"]}>
      <Button
        className={style["navigation_menu_button"]}
        onClick={onClickSearch}
      >
        <SearchSVG />
      </Button>
      <Button className={style["navigation_menu_login"]}>Войти</Button>
    </div>
  );
};

export default NavigationMenu;
