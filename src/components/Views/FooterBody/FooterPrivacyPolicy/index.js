import React from "react";
import style from "./style.module.scss"

const FooterPrivacyPolicy = () => {
  return (
    <div className={style["footer_body__policy"]}>
      <a href="/#">Политика</a> АО "ЦПЛ" в отношении обработки персоональных
      данных и <a href="/#">Согласие</a> на обработку данных учстника Программы
      "Спасибо от Сбербанка"
    </div>
  );
};

export default FooterPrivacyPolicy;
