import HeaderTitle from "../HeaderTitle";
import PartnersButtons from "./PartnersButtons";
import PartnersCards from "./PartnersCards";
import PartnersCheckbox from "./PartnersCheckbox";
import style from "./style.module.scss";
import EtcButton from "../EtcButton";

const Partners = ({
  menuItems,
  onClickPartner,
  active,
  partnersData,
  etcText,
  onClickEtc,
  activeEtc,
}) => {
  return (
    <div className={style["partners"]}>
      <HeaderTitle
        className={style["partners__header"]}
        title="Партнеры и предложения"
      />
      <PartnersButtons
        menuItems={menuItems}
        onClickPartner={onClickPartner}
        active={active}
      />
      <PartnersCheckbox />
      <PartnersCards partnersData={partnersData} />
      <EtcButton onClickEtc={onClickEtc} etcText={etcText} active={activeEtc} />
    </div>
  );
};

export default Partners;
