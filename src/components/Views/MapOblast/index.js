import MapOblastCards from "./MapOblastCards";
import style from "./style.module.scss";
import AppleBigLogo from "./assets/AppleBigLogo.svg";
import DefaultTitle from "../DefaultTitle";
import Map from "./Map";

const MapOblast = ({ mapCardsData }) => {
  return (
    <div className={style["kupons"]}>
      <div className={style["content"]}>
        <div className={style["content_kupons__header"]}>
          <img src={AppleBigLogo} alt=""></img>
          <DefaultTitle
            className={style["map_logo_div"]}
            title={"Apple Music"}
          />
        </div>
        <MapOblastCards mapCardsData={mapCardsData} />
        <Map />
      </div>
    </div>
  );
};

export default MapOblast;
