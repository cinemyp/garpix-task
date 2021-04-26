import HeaderLogo from "../HeaderLogo";
import NavigationButtons from "./NavigationButtons";
import NavigationSearch from "./NavigationSearch";
import SearchModal from "./SearchModal";
import sberLogoSvg from "./assets/sberLogo.svg";

import style from "./style.module.scss";

const Navigation = ({
  data,
  onClickSearch,
  onSelectCity,
  onCloseModal,
  city,
  active,
}) => {
  return (
    <div className={style["navigation"]}>
      <HeaderLogo logo={sberLogoSvg} />
      <NavigationButtons menuItems={data} />
      <NavigationSearch
        onClickSearch={onClickSearch}
        onSelectCity={onSelectCity}
        city={city}
      />
      <SearchModal active={active} onCloseModal={onCloseModal} />
    </div>
  );
};

export default Navigation;
