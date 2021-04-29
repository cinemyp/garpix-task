import SearchInput from "../SearchInput";
import Modal from "../../Modal";

const SearchModal = ({ isSearchMenuOpen, onCloseModal }) => {
  return (
    <Modal active={isSearchMenuOpen} onCloseModal={onCloseModal}>
      <SearchInput active={isSearchMenuOpen} />
    </Modal>
  );
};

export default SearchModal;
