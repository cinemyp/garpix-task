import Button from "../Button";
import style from "./style.module.scss";
import { ReactComponent as OkSVG } from "../../../assets/Ok.svg";
import { ReactComponent as InstSVG } from "../../../assets/Inst.svg";
import { ReactComponent as VkSVG } from "../../../assets/Vk.svg";
import { ReactComponent as FbSVG } from "../../../assets/Fb.svg";
const FooterButtonsSocial = () => {
  return (
    <div className={style['.footer_buttons_social']} >
      <Button className={style["footer_button__social"]} >
        < OkSVG className={style["icons"]}/>
      </Button>

      <Button className={style["footer_button__social"]}>
      < FbSVG className={style["icons"]}/>
      </Button>

      <Button className={style["footer_button__social"]}>
      < VkSVG className={style["icons"]}/>
      </Button>

      <Button className={style["footer_button__social"]}>
      < InstSVG className={style["icons"]}/>
      </Button>
    </div>
  );
};

export default FooterButtonsSocial;
