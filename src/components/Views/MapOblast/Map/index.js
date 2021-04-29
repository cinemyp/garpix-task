import React from "react";
import style from "./style.module.scss";
const Map = () => {
  return (
    <div className={style["mapoblast_map"]}>
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.4476513863106!2d37.625764177582525!3d55.768096744278466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a68edcd2c65%3A0x71d5676246c808aa!2z0JHQvtC70YzRiNC-0Lkg0KHQtdGA0LPQuNC10LLRgdC60LjQuSDQv9C10YAuLCDQnNC-0YHQutCy0LAsIDEwNzA0NQ!5e0!3m2!1sru!2sru!4v1612781768067!5m2!1sru!2sru"
        frameborder="0"
        allowfullscreen=""
        width="1170px"
        height="380px"
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
};
export default Map;
