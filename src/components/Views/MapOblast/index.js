import MapOblastCards from "./MapOblastCards";
import style from "./style.module.scss";
import AppleBigLogo from './assets/AppleBigLogo.svg'
import HeaderTitle from "../HeaderTitle";

const MapOblast = ({
  mapCardsData,
 
}) => {
  return (
    <div className={style["ccontent_kupons"]}>
        <div className={style["content_kupons__header"]}>
        <img src={AppleBigLogo} alt=""></img>
      <HeaderTitle
        className={style["content_kupons__header"]}
        title={"Apple Music"}
      />
      </div>
      <MapOblastCards mapCardsData={mapCardsData} />
    </div>
  );
};

export default MapOblast;
