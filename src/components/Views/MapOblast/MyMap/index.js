import React from "react";
import style from "./style.module.scss";
import { YMaps, Map, Placemark } from "react-yandex-maps";
const mapState = {
  center: [57.97887890000001, 33.243615],
  zoom: 13,
  controls: [] 
  //controls: [],
};



const MyMap = () => (
  <div className={style["mapoblast_map"]}>
    <YMaps  query={{ apikey:'6dbb0668-7b63-45f5-a425-49bf1a4439b1' }}>
      <Map state={mapState} width={"100%"} >
        <Placemark
          geometry={{
            coordinates: [57.97887890000001, 33.243615],
          }}
        />
      </Map>
    </YMaps>
  </div>
);
export default MyMap;
