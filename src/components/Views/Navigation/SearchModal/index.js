import SearchInput from "../SearchInput";
import Modal from "../../Modal";
import { useStoreon } from "storeon/react";

const SearchModal = () => {
  const { isSearchMenuOpen, dispatch } = useStoreon("isSearchMenuOpen");
  const handleCloseModal = (e) => {
    if (e.target.localName === "div") dispatch("searchMenu/toggle");
  };
  return (
    <Modal active={isSearchMenuOpen} onCloseModal={handleCloseModal}>
      <SearchInput active={isSearchMenuOpen} />
    </Modal>
  );
};

export default SearchModal;
