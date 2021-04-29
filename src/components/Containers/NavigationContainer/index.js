import Navigation from "../../Views/Navigation";
import { NAVIGATION_DATA } from "../../../const/index";
import { useState } from "react";

const NavigationContainer = () => {
  const handleClickSearch = () => {
    setOpenModal(true);
  };
  const handleCloseModal = (e) => {
    const isModalClick = e.target.type;
    if (!isModalClick) setOpenModal(false);
  };
  const handleSelectCity = () => {};
  const [openModal, setOpenModal] = useState(false);
  const city = "Санкт-Петербург";

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenuMode = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <Navigation
      data={NAVIGATION_DATA}
      onClickSearch={handleClickSearch}
      onSelectCity={handleSelectCity}
      onCloseModal={handleCloseModal}
      city={city}
      isSearchMenuOpen={openModal}
      isMenuOpen={isMenuOpen}
      onToggleMenuMode={handleToggleMenuMode}
    />
  );
};

export default NavigationContainer;
