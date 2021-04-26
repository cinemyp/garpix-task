import NavigationButton from "../NavigationButton";
import style from "./style.module.scss";

const NavigationButtons = ({ menuItems }) => {
  return (
    <nav className={style["navigation_buttons"]}>
      {menuItems.map((item, index) => (
        <NavigationButton to={item.to} key={index}>
          {item.title}
        </NavigationButton>
      ))}
    </nav>
  );
};

export default NavigationButtons;
