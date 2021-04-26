import Offers from "../../Views/Offers";
import { OFFERS_DATA } from "../../../const";
import { useState } from "react";

const OffersContainer = () => {
  const [partnersData, setPartnersData] = useState(OFFERS_DATA.slice(0, 3));
  const [activeEtc, setActiveEtc] = useState(true);
  const handleClickEtc = () => {
    setPartnersData(OFFERS_DATA);
    setActiveEtc(false);
  };
  return (
    <Offers
      offersData={partnersData}
      categoryName={"Электроника и бытовая техника"}
      onClickEtc={handleClickEtc}
      activeEtc={activeEtc}
      etcText={"Еще 4 предложения"}
    />
  );
};

export default OffersContainer;
