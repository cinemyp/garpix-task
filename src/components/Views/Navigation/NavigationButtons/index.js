import NavigationButton from "../NavigationButton";

const NavigationButtons = ({ className, menuItems, onClickButton }) => {
  return (
    <nav className={className}>
      {menuItems.map((item, index) => (
        <NavigationButton
          onClickButton={onClickButton}
          to={item.to}
          key={index}
        >
          {item.title}
        </NavigationButton>
      ))}
    </nav>
  );
};

export default NavigationButtons;
