import classNames from "classnames";
import Button from "../../Button";
import style from "./style.module.scss";

const CitySelection = ({
  city,
  isSelectorOpen,
  onClickAgree,
  onClickChange,
}) => {
  return (
    <div
      className={classNames(style["city_selection"], {
        [style["active"]]: isSelectorOpen,
      })}
    >
      <div className={style["city_selection__city"]}>
        <span className={style["city_selection__city--your-city"]}>
          Ваш город -{" "}
        </span>
        <span className={style["city_selection__city--name"]}>{city}</span>
        <span>?</span>
      </div>
      <div className={style["city_selection__buttons"]}>
        <Button
          onClick={onClickAgree}
          className={style["city_selection__buttons--agree"]}
        >
          Да
        </Button>
        <Button
          onClick={onClickChange}
          className={style["city_selection__buttons--change"]}
        >
          Сменить город
        </Button>
      </div>
    </div>
  );
};

export default CitySelection;
