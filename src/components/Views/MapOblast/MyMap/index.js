import React from "react";

import { YMaps, Map, Placemark } from "react-yandex-maps";
const mapState = { center: [57.97887890000001, 33.243615], zoom: 13 };

const MyMap = () => (
  <>
    <YMaps>
      <Map state={mapState}>
        <Placemark
          geometry={{
            coordinates: [57.97887890000001, 33.243615],
          }}
          properties={{
            hintContent: "Собственный значок метки",
            balloonContent: "Это красивая метка",
          }}
        />
      </Map>
    </YMaps>
  </>
);

export default MyMap;
