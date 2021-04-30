import { NavLink } from "react-router-dom";
import style from "./style.module.scss";

const NavigationButton = ({ to, children, onClickButton }) => {
  return (
    <NavLink
      activeClassName={style["active"]}
      to={to}
      className={style["navigation_button"]}
      onClick={onClickButton}
    >
      {children}
    </NavLink>
  );
};
export default NavigationButton;
