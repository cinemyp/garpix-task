import Modal from "../../Views/Modal";
import SearchInput from "../../Views/SearchInput";

const SearchModal = ({ active, onCloseModal }) => {
  return (
    <Modal active={active} onCloseModal={onCloseModal}>
      <SearchInput active={active} />
    </Modal>
  );
};

export default SearchModal;
