import { APPLENUSIC_DATA } from "../../../const";
import React, { useState } from "react";
import MapOblast from "../../Views/MapOblast";
const MapElementsContainer = () => {
  const [mapCardsData, setMapCardsDataData] = useState(
    APPLENUSIC_DATA.slice(0, 3)
  );
  return <MapOblast  mapCardsData={mapCardsData} />;
};

export default MapElementsContainer;
