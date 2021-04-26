import Button from "../Button";
import style from "./style.module.scss";
import { ReactComponent as AppStoreSVG } from "../../../assets/AppStore.svg";
import { ReactComponent as GooglePlaySVG } from "../../../assets/GooglePlay.svg";

const FooterButtonsDownload = () => {
  return (
    <div className={style["footer_body__buttons__second"]}>
      <Button className={style["footer_button__download"]} >
        <GooglePlaySVG/>
      </Button>
      <Button className={style["footer_button__download"]}>
      <AppStoreSVG />
      </Button>
    </div>
  );
};

export default FooterButtonsDownload;
