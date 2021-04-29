import MapOblastCards from "./MapOblastCards";
import style from "./style.module.scss";
import AppleBigLogo from "./assets/AppleBigLogo.svg";
import DefaultTitle from "../DefaultTitle";
import MyMap from "./MyMap";

const MapOblast = ({ mapCardsData }) => {
  return (
    <div className={style["content_kupons"]}>
      <div className={style["content_kupons__header"]}>
        <img src={AppleBigLogo} alt=""></img>
        <DefaultTitle className={style["map_logo_div"]} title={"Apple Music"} />
      </div>
      <MapOblastCards mapCardsData={mapCardsData} />
      <MyMap/>
    </div>
  );
};

export default MapOblast;
