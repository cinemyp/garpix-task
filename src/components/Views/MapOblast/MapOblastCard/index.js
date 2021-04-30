import style from "./style.module.scss";

const MapOblastCard = ({
  addRoute,
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
      </div>
      <div className={style["body"]}>
        <span className={style["body__title"]}>{title}</span>
        <div className={style["metro"]}>
          <img src={logoMetro1} alt="kek" />
          <div className={style["metro__name"]}>{metro1}</div>
          <img src={logoMetro2} alt="a tut lul" />
          <div className={style["metro__name"]}>{metro2}</div>
        </div>
        <div className={style["body__telefon"]}>{telefon}</div>
        <div className={style["body__vremya"]}>{vremya}</div>

        <div className={style["body__adres"]}>{adress}</div>
        <button onClick={() =>addRoute()} className={style["body__marshrut"]}>{marshrut}</button>
      </div>
    </div>
  );
};

export default MapOblastCard;
