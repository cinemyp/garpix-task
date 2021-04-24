import classNames from "classnames";
import Button from "../Button";
import { ReactComponent as SearchSVG } from "../../../assets/search.svg";

import style from "./style.module.scss";

const SearchInput = ({ active }) => {
  return (
    <>
      <input
        type="text"
        name="search"
        placeholder="Поиск"
        className={classNames(style["content__input"], {
          [style["active"]]: active,
        })}
      />
      <Button
        className={classNames(style["content__button"], {
          [style["active"]]: active,
        })}
      >
        <SearchSVG />
      </Button>
    </>
  );
};

export default SearchInput;
