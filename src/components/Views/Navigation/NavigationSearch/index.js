import NavigationMenu from "../NavigationMenu";
import GeoLocation from "../GeoLocation";

import style from "./style.module.scss";
import { useStoreon } from "storeon/react";

const NavigationSearch = ({ onSelectCity, city }) => {
  const { dispatch } = useStoreon("isSearchMenuOpen");
  const handleClickSearch = () => {
    dispatch("searchMenu/toggle");
  };
  return (
    <div className={style["navigation_search"]}>
      <GeoLocation onSelectCity={onSelectCity} city={city} />
      <NavigationMenu onClickSearch={handleClickSearch} />
    </div>
  );
};

export default NavigationSearch;
