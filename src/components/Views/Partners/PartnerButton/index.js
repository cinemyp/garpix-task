import classNames from "classnames";
import Button from "../../Button";

import style from "./style.module.scss";

const PartnerButton = ({ onClickPartner, active, children, to }) => {
  return (
    <Button
      className={classNames(style["partner_button"], {
        [style["active"]]: active,
      })}
      onClick={onClickPartner}
      to={to}
    >
      {children}
    </Button>
  );
};

export default PartnerButton;
