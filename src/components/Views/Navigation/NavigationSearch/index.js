import NavigationMenu from "../NavigationMenu";
import GeoLocation from "../GeoLocation";

import style from "./style.module.scss";
import { useStoreon } from "storeon/react";
import CitySelection from "../CitySelection";

const NavigationSearch = () => {
  const { dispatch } = useStoreon("isSearchMenuOpen");
  const { isSelectorOpen, cityName } = useStoreon("isSelectorOpen", "cityName");

  const handleClickSearch = () => {
    dispatch("searchMenu/toggle");
  };
  const handleClickSelectCity = () => {
    dispatch("city/toggle");
  };
  return (
    <div className={style["navigation_search"]}>
      <GeoLocation onSelectCity={handleClickSelectCity} city={cityName} />
      <NavigationMenu onClickSearch={handleClickSearch} />
      <CitySelection
        isSelectorOpen={isSelectorOpen}
        city={cityName}
        onClickAgree={handleClickSelectCity}
        onClickChange={handleClickSelectCity}
      />
    </div>
  );
};

export default NavigationSearch;
