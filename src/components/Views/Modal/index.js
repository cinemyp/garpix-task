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
      <div
        className={classNames(style["content"], {
          [style["active"]]: active,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
