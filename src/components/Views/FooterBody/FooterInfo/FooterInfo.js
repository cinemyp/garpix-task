import React from "react";
import { ReactComponent as FooterSberSVG } from "../assets/Sber.svg";
import FooterInfoCall from "./FooterInfoCall";
import FooterInfoRights from "./FooterInfoRigths";
import style from "./style.module.scss";
const FooterInfo = () => {
  return (
    <div className={style["footer_info"]}>
      <FooterInfoCall />
      <FooterSberSVG className={style["footer_info__logo"]} />
      <FooterInfoRights />
    </div>
  );
};

export default FooterInfo;
