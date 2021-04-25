import React from 'react';
import style from "./style.module.scss"
 const FooterRefs=()=>{
return (
<div className={style["footer_body__buttons"]}>
        <div>
          <div>
            <button className={style["footer_button"]}>
              <div>Купоны и сертификаты</div>
            </button>
            <button className={style["footer_button"]}>
              <div>Впечатления</div>
            </button>
            <button className={style["footer_button"]}>
              <div>Авиабилеты</div>
            </button>
            <button className={style["footer_button"]}>
              <div>Ж/д билеты</div>
            </button>
            <button className={style["footer_button"]}>
              <div>Отели</div>
            </button>
            <button className={style["footer_button"]}>
              <div>Каршеринг</div>
            </button>
          </div>
          <div>
            <button className={style["footer_button"]}>
              <div>Театры</div>
            </button>
            <button className={style["footer_button"]}>
              <div>Страхование</div>
            </button>
            <button className={style["footer_button"]}>
              <div>Как подключиться</div>
            </button>
            <button className={style["footer_button"]}>
              <div>Партнеры</div>
            </button>
          </div>
        </div>
        </div>
)
 }
 export default FooterRefs
