import NavigationButton from "../NavigationButton";
import style from "./style.module.scss";

const NavigationButtons = ({ menuItems }) => {
  return (
    <div className={style["footer_body__buttons"]}>
      {menuItems.map((item, index) => (
        <NavigationButton key={index}>{item}</NavigationButton>
      ))}
    </div>
  );
};

export default NavigationButtons;
