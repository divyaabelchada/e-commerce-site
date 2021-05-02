import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";

//firebase
import { db, auth, provider } from "../../firebase";

function MenBanner({ imgs }) {
  return (
    <div>
      <Grid container id="img-banner-grid">
        <Grid item xs={4}>
          <div id="img-container">
            <img src={imgs[0].img} />
            <p>
              <b> {imgs[0].caption}</b>
            </p>
          </div>
          <div id="img-container">
            <img src={imgs[1].img} />
            <p>
              <b> {imgs[1].caption}</b>
            </p>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div id="img-container">
            <img src={imgs[2].img} id="center-img" />
            <p>
              <b> {imgs[2].caption}</b>
            </p>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div id="img-container">
            <img src={imgs[3].img} />
            <p>
              <b> {imgs[3].caption}</b>
            </p>
          </div>
          <div id="img-container">
            <img src={imgs[4].img} />
            <p>
              <b> {imgs[4].caption}</b>
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MenBanner;
