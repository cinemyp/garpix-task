import style from "./style.module.scss";

const PartnerCard = ({ percent, title, logo, companyName }) => {
  return (
    <div className={style["product_card"]}>
      <div className={style["header"]}>
        <h4 className={style["header__title"]}>{percent}</h4>
        <p className={style["header__text"]}>{title}</p>
      </div>
      <div className={style["content"]}>
        <img className={style["content__company_logo"]} src={logo} />
        <p className={style["content__company_name"]}>{companyName}</p>
      </div>
    </div>
  );
};

export default PartnerCard;
