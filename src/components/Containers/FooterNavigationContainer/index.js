import { NAVIGATION_DATA } from "../../../const/index";
import React,{ useState } from "react";
import FooterBody from "../../Views/FooterBody/FooterBody";

const FooterNavigationContainer = () => {

    return (
        <FooterBody 
        data={NAVIGATION_DATA}
        />
    )
} 

export default FooterNavigationContainer;