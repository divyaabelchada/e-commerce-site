import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { MobileStepper, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

//firebase
import { db, auth, provider } from "../../firebase";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://image.freepik.com/free-psd/fashion-banner-template-design_23-2148509058.jpg",
  },
  {
    label: "Bird",
    imgPath:
      "https://image.freepik.com/free-psd/fashion-store-banner-template_23-2148674481.jpg",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://image.freepik.com/free-vector/fashion-store-interior-with-counter-mannequins-hangers-showcase-with-dresses-shoes_107791-3001.jpg",
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath:
      "https://image.freepik.com/free-vector/online-shopping-mockup-landing-page-women-s-clothing-internet-store-advertising-banner-layout_76597-130.jpg",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://www.visme.co/wp-content/uploads/2020/09/facebook-cover-page-header2.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
    background: "#fff",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 450,
    overflow: "hidden",
    display: "block",
    width: "100%",
    objectFit: "cover",
  },
}));

export default function Banner() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    db.collection("banners").onSnapshot((snapshot) => {
      setBanners(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          banner: doc.data(),
        }))
      );
    });
  }, []);

  console.log(banners);

  return (
    <div className={classes.root}>
      <div>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {banners.map((banner, index) => (
            <div key={banner.banner.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={banner.banner.imgPath}
                  alt={banner.banner.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </div>
      <MobileStepper
        variant="dots"
        steps={banners.length}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === banners.length - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </div>
  );
}
