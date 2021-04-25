import style from "./style.module.scss";

const SlideCheckbox = () => {
  return (
    <>
      <input
        type="checkbox"
        className={style["slide_checkbox"]}
        name="slide"
        id="slide"
        required
      />
      <label htmlFor="slide" className={style["checkbox"]}></label>
    </>
  );
};

export default SlideCheckbox;
