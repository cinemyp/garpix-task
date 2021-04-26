import PartnerCard from "../PartnerCard";
import style from "./style.module.scss";

const PartnersCards = ({ partnersData }) => {
  return (
    <div className={style["partners_cards"]}>
      {partnersData.map(({ percent, title, logo, companyName }, index) => (
        <PartnerCard
          key={index}
          percent={percent}
          title={title}
          logo={logo}
          companyName={companyName}
        />
      ))}
    </div>
  );
};

export default PartnersCards;
