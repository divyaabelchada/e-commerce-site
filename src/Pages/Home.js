import React from "react";
import Banner from "../Components/Home/Banner";
import WomenBanner from "../Components/Home/WomenBanner";
import "../Components/Home/Home.css";
import MenBanner from "../Components/Home/MenBanner";
import ProductSlider from "../Components/Home/ProductSlider";
import ProductSliderTwo from "../Components/Home/ProductSliderTwo";

function Home() {
  return (
    <div id="home">
      <Banner />
      <br />
      <WomenBanner />
      <br />

      <br />
      <ProductSlider />
      <br />
      <MenBanner />
      <br />

      <ProductSliderTwo />
    </div>
  );
}

export default Home;
