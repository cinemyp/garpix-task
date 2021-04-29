import CardsBars from "./CardsBars";

import style from "./style.module.scss";

const Bar = ({ cardsBarData }) => {
  return (
    <div className={style["bar"]}>
      <CardsBars cardsBarData={cardsBarData} />
    </div>
  );
};

export default Bar;
