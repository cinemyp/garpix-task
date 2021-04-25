import { Link } from "react-router-dom";
import style from "./style.module.scss";

const NavigationButton = ({ to, children }) => {
  return (
    <Link to={to} className={style["navigation_button"]}>
      {children}
    </Link>
  );
};
export default NavigationButton;
