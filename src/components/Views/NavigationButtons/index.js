import NavigationButton from "../NavigationButton";
import style from "./style.module.scss";

const NavigationButtons = ({ menuItems }) => {
  return (
    <div className={style["navigation_buttons"]}>
      {menuItems.map((item, index) => (
        <NavigationButton key={index}>{item}</NavigationButton>
      ))}
    </div>
  );
};

export default NavigationButtons;
