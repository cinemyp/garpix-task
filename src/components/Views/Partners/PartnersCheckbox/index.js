import SlideCheckbox from "../../SlideCheckbox";
import style from "./style.module.scss";

const PartnersCheckbox = () => {
  return (
    <div className={style["partners_checkbox"]}>
      <p>Начисляют спасибо</p>
      <SlideCheckbox />
      <p className={style["partners_checkbox__text--green"]}>
        Принимают спасибо
      </p>
    </div>
  );
};

export default PartnersCheckbox;
