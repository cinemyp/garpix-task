import style from "./style.module.scss";

const CardsBarWrapper = ({ children }) => {
  return <div className={style["cards_bar_wrapper"]}>{children}</div>;
};

export default CardsBarWrapper;
