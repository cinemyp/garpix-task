import HeaderTitle from "../HeaderTitle";
import OffersCards from "./OffersCards";
import EtcButton from "../EtcButton";
import style from "./style.module.scss";

const Offers = ({
  offersData,
  categoryName,
  onClickEtc,
  etcText,
  activeEtc,
}) => {
  return (
    <div className={style["offers"]}>
      <HeaderTitle
        className={style["offers_header"]}
        title={"3 предложения в категории '" + categoryName + "'"}
      />
      <OffersCards offersData={offersData} />
      <EtcButton onClickEtc={onClickEtc} etcText={etcText} active={activeEtc} />
    </div>
  );
};

export default Offers;
