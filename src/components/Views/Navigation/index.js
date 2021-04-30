import HeaderLogo from "../HeaderLogo";
import NavigationButtons from "./NavigationButtons";
import NavigationSearch from "./NavigationSearch";
import SearchModal from "./SearchModal";
import sberLogoSvg from "./assets/sberLogo.svg";

import style from "./style.module.scss";
import HamburgerButton from "./HamburgerButton";
import SideMenu from "./SideMenu";

const Navigation = ({ data, onSelectCity, city }) => {
  return (
    <div className={style["navigation"]}>
      <div className={style["header_top"]}>
        <HamburgerButton />
        <HeaderLogo className={style["header_top__logo"]} logo={sberLogoSvg} />
        <NavigationButtons
          className={style["header_top__buttons"]}
          menuItems={data}
        />
        <NavigationSearch onSelectCity={onSelectCity} city={city} />
      </div>

      <SearchModal />
      <SideMenu menuItems={data} />
    </div>
  );
};

export default Navigation;
