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

export const store = createStoreon([menu, searchMenu]);
