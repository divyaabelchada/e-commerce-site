import { Grid } from "@material-ui/core";
import React from "react";

const imgs = [
  {
    img:
      "https://image.freepik.com/free-photo/indoor-shot-young-cheerful-dark-haired-woman-keeping-raised-hand-her-chest-laughing-happily-with-closed-eyes-isolated-blue-wall_295783-11258.jpg",
    caption: "Blue",
  },
  {
    img:
      "https://image.freepik.com/free-photo/active-diverse-woman-man-look-gladfully-each-other-wear-raincoat-jacket-hats-explore-new-place_273609-33654.jpg",
    caption: "Sunny day",
  },
  {
    img:
      "https://image.freepik.com/free-photo/stylish-caucasian-couple-love-watch-interesting-film-serial-isolated-white-wall_88135-17219.jpg",
    caption: "DENIM",
  },
  {
    img:
      "https://image.freepik.com/free-photo/blithesome-caucasian-woman-with-trendy-makeup-posing-with-smile-indoor-shot-adorable-white-lady-vintage-clothes_197531-11511.jpg",
    caption: "yellow",
  },
  {
    img:
      "https://image.freepik.com/free-photo/young-attractive-emotional-girl-business-style-clothes_78826-2303.jpg",
    caption: "Formals",
  },
];

function WomenBanner() {
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

export default WomenBanner;
