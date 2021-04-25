import HeaderTitle from "../HeaderTitle";
import PartnersButtons from "./PartnersButtons";
import PartnersCheckbox from "./PartnersCheckbox";
import style from "./style.module.scss";

const Partners = ({ menuItems, onClickPartner, active }) => {
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
    </div>
  );
};

export default Partners;
