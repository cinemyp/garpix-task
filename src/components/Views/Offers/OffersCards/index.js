import OfferCard from "../OfferCard";
import style from "./style.module.scss";

const OffersCards = ({ offersData }) => {
  return (
    <div className={style["offers_cards"]}>
      {offersData.map(({ photo, smallLogo, companyName, offer }, index) => (
        <OfferCard
          key={index}
          offer={offer}
          companyName={companyName}
          photo={photo}
          smallLogo={smallLogo}
        />
      ))}
    </div>
  );
};

export default OffersCards;
