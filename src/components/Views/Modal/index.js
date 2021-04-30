import classNames from "classnames";

import style from "./style.module.scss";

const Modal = ({ active, onCloseModal, children }) => {
  return (
    <div
      className={classNames(style["root"], {
        [style["active"]]: active,
      })}
      onClick={(e) => onCloseModal(e)}
    >
      {children}
    </div>
  );
};

export default Modal;
