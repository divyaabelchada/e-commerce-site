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

export default function ProductSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [products, setProducts] = useState(null);

  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          product: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div style={{ paddingBottom: "1rem" }}>
      {!products ? (
        <div> </div>
      ) : (
        <Container maxWidth="xl">
          <h2>&nbsp;&nbsp;Trending outfits for women</h2>

          <Slider {...settings} style={{ padding: "1rem 1rem" }}>
            {/* setting up posts... looping through posts */}

            {products.map(({ id, product }) => (
              <ProductCardone
                imageUrl={product.imageUrl}
                productName={product.productName}
                price={product.price}
                discount={product.discount}
              />
            ))}
            {/* end setup of posts */}
          </Slider>
        </Container>
      )}
    </div>
  );
}
