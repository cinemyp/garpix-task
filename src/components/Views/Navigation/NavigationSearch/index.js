import NavigationMenu from "../NavigationMenu";
import GeoLocation from "../GeoLocation";

import style from "./style.module.scss";

const NavigationSearch = ({ onClickSearch, onSelectCity, city }) => {
  return (
    <div className={style["navigation_search"]}>
      <GeoLocation onSelectCity={onSelectCity} city={city} />
      <NavigationMenu onClickSearch={onClickSearch} />
    </div>
  );
};

export default NavigationSearch;
