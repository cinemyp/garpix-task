import style from "./style.module.scss";

const MapOblastCard = ({
  logo,
  title,
  metro1,
  logoMetro1,
  metro2,
  logoMetro2,
  telefon,
  vremya,
  adress,
  marshrut,
}) => {
  return (
    <div className={style["map_card"]}>
      <div className={style["map_card__logo"]}>
        <img className={style["img"]} src={logo} />
        <div className={style["map_card__body"]}>
          <div>
            <div>{title}</div>
            <div className={style["map_card__body__metro"]}>
              <img src={logoMetro1} alt="kek" />
              <div>{metro1}</div>
              <img src={logoMetro2} alt="a tut lul" />
              <div>{metro2}</div>
            </div>
            <div>{telefon}</div>
            <div>{vremya}</div>
            <p className={style["map_card_body__adres"]}>{adress}</p>
          </div>
          <p className={style["map_body__marshrut"]}>{marshrut}</p>
        </div>
      </div>
    </div>
  );
};

export default MapOblastCard;
