import React from "react";
import FooterLogoSber from "../FooterLogos/FooterLogoSber";
import FooterInfoCall from "./FooterInfoCall";
import FooterInfoRights from "./FooterInfoRigths";
import style from "./style.module.scss";
const FooterInfo = () => {
  return (
    <div className={style["footer_info"]}>
        <FooterInfoCall/>
      <FooterLogoSber />
      <FooterInfoRights/>
    </div>
  );
};

export default FooterInfo