import PartnerButton from "../PartnerButton";
import style from "./style.module.scss";

const PartnersButtons = ({ menuItems, onClickPartner, active }) => {
  return (
    <div className={style["partners_buttons"]}>
      {menuItems.map((item, index) => (
        <PartnerButton
          to={item.to}
          key={index}
          onClickPartner={onClickPartner}
          active={active}
        >
          {item.title}
        </PartnerButton>
      ))}
    </div>
  );
};

export default PartnersButtons;
