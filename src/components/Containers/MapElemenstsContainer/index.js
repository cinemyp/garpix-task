import {APPLENUSIC_DATA  } from "../../../const";
import React, { useState } from "react";
import MapOblast from "../../Views/MapOblast";
import addRoute from '../../Views/MapOblast/MyMap/index'
const MapElementsContainer = () => {
  const [mapCardsData, setMapCardsDataData] = useState(APPLENUSIC_DATA .slice(0, 3));
  return (
    <MapOblast
    new addRoute={()=>addRoute()}
    mapCardsData={mapCardsData}
    />
  );
};

export default MapElementsContainer;