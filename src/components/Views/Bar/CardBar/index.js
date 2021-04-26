import style from "./style.module.scss";

const CardBar = ({ logo, percent }) => {
  return (
    <div className={style["content"]}>
      <img className={style["content__logo"]} src={logo} />
      {percent !== "" && (
        <div className={style["content__percent"]}>{percent}</div>
      )}
    </div>
  );
};

export default CardBar;
