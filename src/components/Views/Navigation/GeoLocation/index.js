import Button from "../../Button";
import { ReactComponent as GeoSVG } from "../assets/geo.svg";

import style from "./style.module.scss";

const GeoLocation = ({ onSelectCity, city }) => {
  return (
    <Button className={style["button_geo_location"]} onClick={onSelectCity}>
      <GeoSVG />
      <p className={style["button_geo_location__city"]}>{city}</p>
    </Button>
  );
};

export default GeoLocation;
