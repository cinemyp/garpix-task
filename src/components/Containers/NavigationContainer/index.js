import Navigation from "../../Views/Navigation";
import { NAVIGATION_DATA } from "../../../const/index";
import { useStoreon } from "storeon/react";

const NavigationContainer = () => {
  const { dispatch } = useStoreon();

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { longitude, latitude } = position.coords;
      fetch(
        "https://geocode-maps.yandex.ru/1.x/?format=json&apikey=6dbb0668-7b63-45f5-a425-49bf1a4439b1&geocode=" +
          longitude +
          "," +
          latitude
      )
        .then((response) => {
          return response.json();
        })
        .then(({ response }) => {
          const city = response.GeoObjectCollection.featureMember.find(
            (obj) =>
              obj.GeoObject.metaDataProperty.GeocoderMetaData.kind ===
              "locality"
          );
          dispatch("city/update", city.GeoObject.name);
        });
    },

    (error) => console.log(error)
  );
  return <Navigation data={NAVIGATION_DATA} />;
};

export default NavigationContainer;
