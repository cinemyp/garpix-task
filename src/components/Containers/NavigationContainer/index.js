import Navigation from "../../Views/Navigation";
import { NAVIGATION_DATA } from "../../../const/index";
import { useState } from "react";

const NavigationContainer = () => {
  const handleSelectCity = () => {};
  const [openModal, setOpenModal] = useState(false);
  const city = "Санкт-Петербург";

  return (
    <Navigation
      data={NAVIGATION_DATA}
      onSelectCity={handleSelectCity}
      city={city}
      isSearchMenuOpen={openModal}
    />
  );
};

export default NavigationContainer;
