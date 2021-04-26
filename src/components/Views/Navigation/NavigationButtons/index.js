import NavigationButton from "../NavigationButton";
import style from "./style.module.scss";

const NavigationButtons = ({ menuItems }) => {
  return (
<<<<<<< HEAD:src/components/Views/NavigationButtons/index.js
    <div className={style["footer_body__buttons"]}>
=======
    <nav className={style["navigation_buttons"]}>
>>>>>>> c3973436f8d09b23e70cd19e6be39f340a521942:src/components/Views/Navigation/NavigationButtons/index.js
      {menuItems.map((item, index) => (
        <NavigationButton to={item.to} key={index}>
          {item.title}
        </NavigationButton>
      ))}
    </nav>
  );
};

export default NavigationButtons;
