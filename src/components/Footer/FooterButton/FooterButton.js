import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AppStore from '../FooterSvg/AppStore.svg'
import GooglePlay from '../FooterSvg/GooglePlay.svg'
import style from "./style.module.scss"

const FooterButton =()=>{
   return( 
    <div className={style["footer_body__buttons__second"]}>
    <div>
      <button className={style["footer_button__app"]}>
        <img src={GooglePlay} alt="zalupa"></img>
      </button>
      <button className={style["footer_button__app"]}>
        <img src={AppStore} alt="Konya"></img>
      </button>
    </div>
    </div>
     
   )
}
export default FooterButton