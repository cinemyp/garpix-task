import classNames from "classnames";
import SlideCheckbox from "../../SlideCheckbox";
import style from "./style.module.scss";

const PartnersCheckbox = () => {
  return (
    <div className={style["partners_checkbox"]}>
      <p className={style["partners_checkbox__text"]}>Начисляют спасибо</p>
      <SlideCheckbox />
      <p
        className={classNames(
          style["partners_checkbox__text"],
          style["partners_checkbox__text--green"]
        )}
      >
        Принимают спасибо
      </p>
    </div>
  );
};

export default PartnersCheckbox;
