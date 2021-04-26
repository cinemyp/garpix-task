import CardsBar from "./CardsBar";
import CardsBawWrapper from "./CardsBarWrapper";

import style from "./style.module.scss";

const Bar = ({ cardsBarData }) => {
  return (
    <div className={style["bar"]}>
      <CardsBar
        cardBarData={cardsBarData[0].data}
        description={cardsBarData[0].description}
      />
      <CardsBawWrapper>
        <CardsBar
          cardBarData={cardsBarData[1].data}
          description={cardsBarData[1].description}
        />
        <CardsBar
          cardBarData={cardsBarData[2].data}
          description={cardsBarData[2].description}
        />
      </CardsBawWrapper>
      <CardsBar
        cardBarData={cardsBarData[3].data}
        description={cardsBarData[3].description}
      />
    </div>
  );
};

export default Bar;
