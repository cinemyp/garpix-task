import MapOblastCard from "../MapOblastCard";
import style from "./style.module.scss";

const MapOblastCards = ({ mapCardsData}) => {
  return (
    <div className={style["map_kupons__cards"]}>
      {mapCardsData.map(({logo,
      title,metro1,
      logoMetro1,metro2,
      logoMetro2,telefon,
      vremya,adress,marshrut }, idx) => (
        <MapOblastCard
          key={idx}
          logo={logo}
          title={title}
          logoMetro1={ logoMetro1}
          logoMetro2={ logoMetro2}
          metro1={metro1}
          metro2={metro2}
          telefon={telefon}
          vremya={vremya}
          adress={adress}
          marshrut={marshrut}
        />
      ))}
    </div>
  );
};

export default MapOblastCards;