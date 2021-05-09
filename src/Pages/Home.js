import React, { useEffect, useState } from "react";

//firebase
import { db, auth, provider } from "../firebase";
import Banner from "../Components/Home/Banner";
import WomenBanner from "../Components/Home/WomenBanner";
import "../Components/Home/Home.css";
import MenBanner from "../Components/Home/MenBanner";
import ProductSlider from "../Components/Home/ProductSlider";
import ProductSliderTwo from "../Components/Home/ProductSliderTwo";

function Home() {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    db.collection("fiveImgBanners").onSnapshot((snapshot) => {
      setImgs(
        snapshot.docs.map((doc) => ({
          img: doc.data().img,
          label: doc.data().label,
          caption: doc.data().caption,
        }))
      );
    });
  }, []);

  return (
    <div id="home">
      <Banner />
      <br />
      {imgs.length > 0 ? <MenBanner imgs={imgs} /> : <></>}

      <br />

      <br />
      <ProductSlider />
      <br />

      <WomenBanner />
      <br />

      <ProductSliderTwo />
    </div>
  );
}

export default Home;
