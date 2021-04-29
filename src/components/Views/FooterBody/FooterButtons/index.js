import React from 'react';
import NavigationButtons from '../../Navigation/NavigationButtons';
import FooterPrivacyPolicy from '../FooterPrivacyPolicy';
import FooterButtonsDownload from './FooterButtonsDovnload';
import FooterButtonsSocial from './FooterButtonsSocial';

import style from "./style.module.scss"

const FooterButtons =({data,})=>{
return(
    <div className={style["footer_body__left"]}>
 <NavigationButtons menuItems={data} />   
<FooterButtonsDownload/>
<FooterButtonsSocial/>
<FooterPrivacyPolicy/>
    </div>
)
}
export default FooterButtons