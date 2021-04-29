import AppleMusicAndTitles from "../../Views/AppleMusicAndTitles";
import {INSTUCTION_FIRST_DATA} from "../../../const";
import React,{ useState } from "react";
import {INSTUCTION_SECOND_DATA} from "../../../const";
const BigTextContainer = () => {
    const listInstructions = INSTUCTION_FIRST_DATA.map((instruction) => (
      
       <li>
          <span>{instruction}</span>
        </li>
      ))
      const listInstructions2 = INSTUCTION_SECOND_DATA.map((instruction2,index) =>(<li>{instruction2}</li>))
       
  return (
    <AppleMusicAndTitles
    timeActsiya={"C 17 Декабря 2018 г. по 17 Декабря 2019 г."}
    count ={"169"}
    znak={"&#8226"}
    listInstructions={listInstructions}
    
    listInstructions2={listInstructions2}
    />
  );
};

export default BigTextContainer;
