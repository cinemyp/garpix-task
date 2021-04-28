
import style from "./style.module.scss";
import GooglePlaySVG from '../../assets/GooglePlay.svg'
import AppStoreSVG from '../../assets/Appstore.svg'
import Button from "../../../Button";
const FooterButtonsDownload = () => {
  return (
    <div className={style["footer_body__buttons__second"]}>
      <Button className={style["footer_button__download"]} >
      <img src={GooglePlaySVG} alt="vdo" />
      </Button>
      <Button className={style["footer_button__download"]}>
   <img src={AppStoreSVG} alt='mda' />
      </Button>
    </div>
  );
};

export default FooterButtonsDownload;
