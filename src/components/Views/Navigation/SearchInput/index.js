import classNames from "classnames";
import Button from "../../Button";

import { ReactComponent as SearchSVG } from "../assets/search.svg";

import style from "./style.module.scss";

const SearchInput = ({ active }) => {
  return (
    <div className={style["search_input"]}>
      <input
        type="text"
        name="search"
        placeholder="Поиск"
        className={classNames(style["search_input__input"], {
          [style["active"]]: active,
        })}
      />
      <Button
        className={classNames(style["search_input__button"], {
          [style["active"]]: active,
        })}
      >
        <SearchSVG />
      </Button>
    </div>
  );
};

export default SearchInput;
