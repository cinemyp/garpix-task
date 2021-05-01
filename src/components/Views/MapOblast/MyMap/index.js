import React from "react";
import ReactDOM from "react-dom";
import { YMaps, Map } from "react-yandex-maps";
import style from "./style.module.scss";

const mapState = { center: [55.76, 37.64], zoom: 7, controls: [] };

class MyMap extends React.Component {
  map = null;
  ymaps = null;
  route = null;

  handleApiAvaliable = (ymaps) => {
    this.ymaps = ymaps;
    const balloonContentBodyLayout = ymaps.templateLayoutFactory.createClass(
      "<div>Test</div>"
    );
    ymaps
      .route(
        [
          "Санет-Петербург",
          { type: "viaPoint", point: "Амстердам" },
          "Сочи",
          { type: "wayPoint", point: [43.585472, 39.723089] },
        ],
        { balloonContentBodyLayout }
      )
      .then((route) => {
        route.getPaths().options.set({
          strokeColor: "0000ffff",
          opacity: 0.9,
        });
        this.map.geoObjects.add(route);
      });
  };

  addRoute = () => {
    if (this.ymaps && this.map) {
      this.ymaps
        .route(
          ["Иваново,улица 8 Марта, 32", "Москва, Большая Татарская улица, 21"],
          {
            multiRoute: true,
          }
        )
        .then((route) => {
          this.route = route;
          this.map.geoObjects.add(route);
        });
    }
  };

  removeRoute = () => {
    if (this.map && this.route) {
      this.map.geoObjects.remove(this.route);
    }
  };

  render() {
    return (
      <div className={style["mapoblast_map"]}>
        <YMaps
          query={{ apikey: "6dbb0668-7b63-45f5-a425-49bf1a4439b1" }}
          onApiAvaliable={(ymaps) => this.handleApiAvaliable(ymaps)}
        >
          <Map
            state={mapState}
            instanceRef={(ref) => (this.map = ref)}
            height="100%"
            width="100%"
            addRoute={this.addRoute}
          />
        </YMaps>
      </div>
    );
  }
}

export default MyMap;
