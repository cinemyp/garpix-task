import HeaderTitle from "../HeaderTitle";
import style from "./style.module.scss";
import AppleMusic from "./assets/AppleMusic.svg";
import BigTextInstruction from "../BigTextInstruction";

const AppleMusicAnfTitles = ({timeActsiya,count, listInstructions,listInstructions2}) => {
  return (
    <div className={style["content_kupons"]}>
      <div className={style["apple_kupons__top"]}>
        <HeaderTitle
          className={style["apple_kupons__header"]}
          title={"Скидочные купоны Развлечения"}
        />
      </div>

      <HeaderTitle
        className={style["content_kupons__title"]}
        title={"Apple Music за СПАСИБО"}
      />
      <div className={style["apple_kupons__body"]}>
        <div className={style["apple_kupons__body__back"]}>
          <img src={AppleMusic} alt="piska"></img>
          <div className={style["apple_kupons__body__bigtext"]}>
        <HeaderTitle
          className={style["apple_kupons__body__bigtext__timeacziya"]}
          title={timeActsiya}
        />

          <BigTextInstruction count ={count} listInstructions={listInstructions} listInstructions2={listInstructions2} />
        </div>   
          </div>
        </div>
      </div>
    
  );
};

export default AppleMusicAnfTitles;
