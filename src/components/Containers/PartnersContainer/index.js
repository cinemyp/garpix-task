import { useState } from "react";
import { PARTNERS_FILTER } from "../../../const";
import { PARTNERS_DATA } from "../../../const";
import Partners from "../../Views/Partners";

const PartnersContainer = () => {
  const [partnersData, setPartnersData] = useState(PARTNERS_DATA.slice(0, 5));
  const [activeEtc, setActiveEtc] = useState(true);
  const handleClickEtc = () => {
    setPartnersData(PARTNERS_DATA);
    setActiveEtc(false);
  };
  return (
    <Partners
      menuItems={PARTNERS_FILTER}
      partnersData={partnersData}
      etcText={"Еще 4 партнера"}
      onClickEtc={handleClickEtc}
      activeEtc={activeEtc}
    />
  );
};

export default PartnersContainer;
