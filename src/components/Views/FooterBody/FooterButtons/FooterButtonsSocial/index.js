import React from 'react'
import Button from "../../../Button";
import style from "./style.module.scss";
import VkSVG from '../../assets/Vk.svg'
import FbSVG from '../../assets/Fb.svg'
import OkSVG from '../../assets/Ok.svg'
import Inst from '../../assets/Inst.svg'
const FooterButtonsSocial = () => {
  return (
    <div >
      <Button className={style["footer_button__social"]} >
      <img src={VkSVG} alt='mda' />
      </Button>
      <Button className={style["footer_button__social"]}>
      <img src={FbSVG} alt='mda' />
      </Button>
      <Button className={style["footer_button__social"]}>
      <img src={Inst} alt='mda' />
      </Button>
      <Button className={style["footer_button__social"]}>
      <img src={OkSVG} alt='mda' />
      </Button>
    </div>
  );
};

export default FooterButtonsSocial;
