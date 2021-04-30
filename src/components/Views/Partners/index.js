import HeaderTitle from "../HeaderTitle";
import PartnersButtons from "./PartnersButtons";
import PartnersCards from "./PartnersCards";
import PartnersCheckbox from "./PartnersCheckbox";
import style from "./style.module.scss";
import EtcButton from "../EtcButton";
import { useStoreon } from "storeon/react";

const Partners = ({
  menuItems,
  partnersData,
  etcText,
  onClickEtc,
  activeEtc,
}) => {
  const { dispatch, filter } = useStoreon("filter");
  const handleClickPartner = (newFilter) => {
    dispatch("partnerFilter/update", newFilter);
    console.log(filter);
  };
  return (
    <div className={style["partners"]}>
      <HeaderTitle
        className={style["partners__header"]}
        title="Партнеры и предложения"
      />
      <PartnersButtons
        menuItems={menuItems}
        onClickPartner={handleClickPartner}
        filter={filter}
      />
      <PartnersCheckbox />
      <PartnersCards partnersData={partnersData} />
      <EtcButton onClickEtc={onClickEtc} etcText={etcText} active={activeEtc} />
    </div>
  );
};

export default Partners;
