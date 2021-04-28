import style from "./style.module.scss";

const OfferCard = ({ photo, smallLogo, companyName, offer }) => {
  return (
    <div className={style["offer_card"]}>
      <img className={style["offer_card__image"]} src={photo} />

      <div className={style["desc"]}>
        <img className={style["desc__logo"]} src={smallLogo} />

        <div className={style["content"]}>
          <div className={style["content__name"]}>{companyName}</div>
          <div className={style["content__offer"]}>{offer}</div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
