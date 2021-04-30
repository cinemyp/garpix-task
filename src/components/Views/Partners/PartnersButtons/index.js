import PartnerButton from "../PartnerButton";
import style from "./style.module.scss";

const PartnersButtons = ({ menuItems, onClickPartner, filter }) => {
  console.log(filter);
  return (
    <div className={style["partners_buttons"]}>
      {menuItems.map(({ value, title }, index) => (
        <PartnerButton
          value={value}
          key={index}
          onClickPartner={onClickPartner}
          active={filter === value}
        >
          {title}
        </PartnerButton>
      ))}
    </div>
  );
};

export default PartnersButtons;
