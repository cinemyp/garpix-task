import CardBar from "../CardBar";
import style from "./style.module.scss";

const CardsBar = ({ cardBarData, description }) => {
  return (
    <div className={style["cardbar"]}>
      <div className={style["content"]}>
        {cardBarData.map(({ logo, percent }, index) => (
          <CardBar logo={logo} percent={percent} key={index} />
        ))}
      </div>
      <div className={style["cardbar__description"]}>{description}</div>
    </div>
  );
};

export default CardsBar;
