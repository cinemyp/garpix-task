import HeaderTitle from "../HeaderTitle";
import OffersCards from "./OffersCards";
import EtcButton from "../EtcButton";
import style from "./style.module.scss";

const Offers = ({
  offersData,
}) => {
  return (
    <div className={style["content_kupons"]}>
      <HeaderTitle
        className={style["content_kupons_header"]}
        title={"Скидочные купоны &#8226 Развлечения"}
      />
      <HeaderTitle
      className={style["content_kupons__title"]}
      title={"Apple Music за СПАСИБО"}
      />
      <OffersCards offersData={offersData} />
      
    </div>
  );
};

export default Offers;