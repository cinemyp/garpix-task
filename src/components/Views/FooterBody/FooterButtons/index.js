import React from "react";
import NavigationButtons from "../../Navigation/NavigationButtons";
import FooterPrivacyPolicy from "../FooterPrivacyPolicy";
import FooterButtonsDownload from "./FooterButtonsDovnload";
import FooterButtonsSocial from "./FooterButtonsSocial";

import style from "./style.module.scss";

const FooterButtons = ({ data }) => {
  return (
    <div className={style["footer_body_left"]}>
      <NavigationButtons
        className={style["footer_body__buttons"]}
        menuItems={data}
      />
      <div className={style["buttons"]}>
        <FooterButtonsDownload />
        <FooterButtonsSocial />
      </div>
      <FooterPrivacyPolicy />
    </div>
  );
};
export default FooterButtons;
