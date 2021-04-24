import FooterButton from "../FooterButton/FooterButton";
import FooterRefs from "../FooterRefs/FooterRefs";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FooterPrivacyPolicy from "../FooterPrivacyPolicy/FooterPrivacyPolicy";
import Typography from "@material-ui/core/Typography";
import Sber from "../FooterSvg/Sber.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const FooterBody = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
            <h1>Хуй</h1> 
        </Grid>
        <Grid wrap="nowrap" item xs={9}>
          <Typography>
            <FooterRefs />
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs>
          <img src={Sber} alt="asd"></img>
        </Grid>
        <Grid item xs>
          <FooterButton />
        </Grid>
        <Grid item xs>
        
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <h1>Хуй</h1>
        </Grid>

        <Grid wrap="nowrap" item xs={9}>
          <Typography>
            <FooterPrivacyPolicy />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
export default FooterBody;
