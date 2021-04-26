import { NavLink } from "react-router-dom";
import style from "./style.module.scss";

const NavigationButton = ({ to, children }) => {
  return (
    <NavLink
      activeClassName={style["active"]}
      to={to}
      className={style["navigation_button"]}
    >
      {children}
    </NavLink>
  );
};
export default NavigationButton;
