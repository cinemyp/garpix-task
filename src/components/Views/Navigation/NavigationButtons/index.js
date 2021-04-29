import NavigationButton from "../NavigationButton";

const NavigationButtons = ({ className, menuItems }) => {
  return (
    <nav className={className}>
      {menuItems.map((item, index) => (
        <NavigationButton to={item.to} key={index}>
          {item.title}
        </NavigationButton>
      ))}
    </nav>
  );
};

export default NavigationButtons;
