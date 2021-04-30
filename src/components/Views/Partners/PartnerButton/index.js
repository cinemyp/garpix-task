import classNames from "classnames";
import Button from "../../Button";

import style from "./style.module.scss";

const PartnerButton = ({ onClickPartner, active, children, value }) => {
  return (
    <Button
      className={classNames(style["partner_button"], {
        [style["active"]]: active,
      })}
      onClick={() => onClickPartner(value)}
      value={value}
    >
      {children}
    </Button>
  );
};

export default PartnerButton;
