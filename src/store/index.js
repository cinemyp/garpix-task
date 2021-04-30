import { createStoreon } from "storeon";

export const menu = (store) => {
  store.on("@init", () => ({ isMenuOpen: false }));
  store.on("menu/toggle", ({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen }));
};

export const searchMenu = (store) => {
  store.on("@init", () => ({ isSearchMenuOpen: false }));
  store.on("searchMenu/toggle", ({ isSearchMenuOpen }) => ({
    isSearchMenuOpen: !isSearchMenuOpen,
  }));
};

export const city = (store) => {
  store.on("@init", () => ({ cityName: "", isSelectorOpen: false }));
  store.on("city/toggle", ({ isSelectorOpen }) => ({
    isSelectorOpen: !isSelectorOpen,
  }));
  store.on("city/update", ({ cityName }, name) => ({ cityName: name }));
};

export const partnerFilter = (store) => {
  store.on("@init", () => ({ filter: "all" }));
  store.on("partnerFilter/update", ({ filter }, value) => ({ filter: value }));
};

export const store = createStoreon([menu, searchMenu, city, partnerFilter]);
