import HeaderLogo from "../HeaderLogo";
import NavigationButtons from "./NavigationButtons";
import NavigationSearch from "./NavigationSearch";
import SearchModal from "./SearchModal";
import sberLogoSvg from "./assets/sberLogo.svg";

import style from "./style.module.scss";
import HamburgerButton from "./HamburgerButton";

const Navigation = ({
  data,
  onClickSearch,
  onSelectCity,
  onCloseModal,
  city,
  isSearchMenuOpen,
  isMenuOpen,
  onToggleMenuMode,
}) => {
  return (
    <div className={style["navigation"]}>
      <HamburgerButton
        isMenuOpen={isMenuOpen}
        toggleMenuMode={onToggleMenuMode}
      />
      <HeaderLogo className={style["navigation__logo"]} logo={sberLogoSvg} />
      <NavigationButtons menuItems={data} />
      <NavigationSearch
        onClickSearch={onClickSearch}
        onSelectCity={onSelectCity}
        city={city}
      />
      <SearchModal
        isSearchMenuOpen={isSearchMenuOpen}
        onCloseModal={onCloseModal}
      />
    </div>
  );
};

export default Navigation;
