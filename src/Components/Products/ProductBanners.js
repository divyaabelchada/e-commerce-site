import React, { useEffect, useState } from "react";
import { db, auth, provider } from "../../firebase";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, IconButton, Grid } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { ProductCardTwo, ProductCardone } from "../ProductCards/ProductCards";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
      <IconButton onClick={onClick}>
        <ArrowForwardIos />
      </IconButton>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
      <IconButton onClick={onClick}>
        <ArrowBackIos />
      </IconButton>
    </div>
  );
}

const productBanners = [
  {
    img:
      "https://image.freepik.com/free-psd/back-school-social-media-web-banner-flyer-facebook-cover-photo-design-template_220443-332.jpg",
    label: "Some random img",
  },
  {
    img:
      "https://image.freepik.com/free-psd/fashion-sale-social-medi-abanner-social-media-template_237398-225.jpg",
    label: "second banner",
  },
];

export default function ProductBanner() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
  };

  return (
    <div style={{ paddingBottom: "1rem" }} id="product-banners">
      <Container maxWidth="xl">
        <Slider {...settings} style={{ padding: "1rem 1rem" }}>
          {/* setting up posts... looping through posts */}

          {productBanners.map(({ img, label }) => (
            <img src={img} alt={label} />
          ))}
          {/* end setup of posts */}
        </Slider>
      </Container>
    </div>
  );
}
