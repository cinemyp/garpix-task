import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FooterPrivacyPolicy from "../../Footer/FooterPrivacyPolicy/FooterPrivacyPolicy";
import Typography from "@material-ui/core/Typography";
import FooterLogoSber from "../FooterLogos/FooterLogoSber";
import FooterButtonsDownload from "../FooterButtonsDovnload";
import NavigationButtons from "../NavigationButtons";
import style from "./style.module.scss";
import FooterInfo from "../FooterInfo/FooterInfo";
import FooterButtonsSocial from "../FooterButtonsSocial";
import FooterButtons from "../FooterButtons";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
  },
}));

const FooterBody = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={style["footer_body"]}>
      <div className={classes.root}>
       
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FooterInfo />
          </Grid>
          <Grid item xs={12} sm container>
          <Grid wrap="nowrap" item xs={8}>
            <NavigationButtons menuItems={data} />
          
          
         </Grid>
        
         <Grid item xs={9}>
            <FooterButtons/>
           
          </Grid>
      
          <Grid wrap="nowrap" item xs={9}>
              <Typography>
                <FooterPrivacyPolicy />
              </Typography>
            </Grid>
        </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default FooterBody;
