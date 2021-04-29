import React from "react";


import style from "./style.module.scss";
import FooterInfo from "./FooterInfo/FooterInfo";
import FooterButtons from "./FooterButtons";


const FooterBody = ({ data }) => {

  return (
    <>
    <div className={style["footer_body"]}>
            <FooterInfo /> 
            <FooterButtons data={data}/>  
    </div>

    </>
  );
};
export default FooterBody;
