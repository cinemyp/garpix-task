import Navigation from "../../Views/Navigation";
import { NAVIGATION_DATA } from "../../../const/index";
import { useState } from "react";

const NavigationContainer = () => {
  const handleClickSearch = () => {
    setActive(true);
  };
  const handleCloseModal = (e) => {
    const isModalClick = e.target.type;
    if (!isModalClick) setActive(false);
  };
  const handleSelectCity = () => {};
  const [active, setActive] = useState(false);
  const city = "Санкт-Петербург";

  return (
    <Navigation
      data={NAVIGATION_DATA}
      onClickSearch={handleClickSearch}
      onSelectCity={handleSelectCity}
      onCloseModal={handleCloseModal}
      city={city}
      active={active}
    />
  );
};

export default NavigationContainer;
