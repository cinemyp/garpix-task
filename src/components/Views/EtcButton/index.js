import classNames from "classnames";
import Button from "../Button";
import style from "./style.module.scss";

const EtcButton = ({ etcText, onClickEtc, active }) => {
  return (
    <Button
      onClick={onClickEtc}
      className={classNames(style["etc_button"], { [style["active"]]: active })}
    >
      {etcText}
    </Button>
  );
};

export default EtcButton;
