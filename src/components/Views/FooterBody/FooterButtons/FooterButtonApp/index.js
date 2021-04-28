import Button from "../../../Button";
import style from "./style.module.scss";

const NavigationButton = ({ children }) => {
  return <Button className={style['footer_button__download']}>{children}</Button>;
};
export default NavigationButton;
