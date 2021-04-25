import NavigationButton from "../NavigationButton";
import style from "./style.module.scss";

const NavigationButtons = ({ menuItems }) => {
  return (
    <div className={style["navigation_buttons"]}>
      {menuItems.map((item, index) => (
        <NavigationButton to={item.link} key={index}>
          {item.title}
        </NavigationButton>
      ))}
    </div>
  );
};

export default NavigationButtons;
