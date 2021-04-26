import SearchInput from "../SearchInput";
import Modal from "../../Modal";

const SearchModal = ({ active, onCloseModal }) => {
  return (
    <Modal active={active} onCloseModal={onCloseModal}>
      <SearchInput active={active} />
    </Modal>
  );
};

export default SearchModal;
