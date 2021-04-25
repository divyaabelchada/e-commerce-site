import { Grid } from "@material-ui/core";
import React from "react";

const imgs = [
  {
    img:
      "https://image.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-blue-shirt-clothes-fashion-man-posing_158538-4976.jpg",
    caption: "Jackets",
  },
  {
    img:
      "https://image.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg",
    caption: "Classy",
  },
  {
    img:
      "https://image.freepik.com/free-photo/caucasian-handsome-man-posing-with-arms-hip-smiling-isolated-purple-wall_1368-89876.jpg",
    caption: "DENIM",
  },
  {
    img:
      "https://image.freepik.com/free-photo/young-blonde-man-with-suitcase-sitting-floor-making-guitar-gesture_1368-171086.jpg",
    caption: "travel",
  },
  {
    img:
      "https://image.freepik.com/free-photo/young-man-isolated-white-background-listening-music_1368-174565.jpg",
    caption: "Casual",
  },
];

function MenBanner() {
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
