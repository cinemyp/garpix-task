import Button from "../Button";
import style from "./style.module.scss";

const NavigationButton = ({ children }) => {
  return <Button className={style["navigation_button"]}>{children}</Button>;
};
export default NavigationButton;
