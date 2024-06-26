import { Container, Rating } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import { useEffect } from "react";
import "./Review.css";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Review() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: React.SetStateAction<number>) => {
    setActiveStep(step);
  };

  const [reviews, setReviews] = React.useState([]);
  console.log("reviews", reviews);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <Container className="text-center my-md-5 my-3 review-container p-sm-5 mx-auto">
      <Box>
        <h1 className="review-title">What People Say</h1>
        <p className="review-text">Testimonials</p>
        <img style={{ maxWidth: "90%" }} src="https://i.ibb.co/hswdsLY/title-line.png" alt="" />
        <AutoPlaySwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
          {reviews.map((review: any) => (
            <div className="review-section mx-auto" key={review._id}>
              <div className="mt-4">
                <img src={review.image} alt="" className="review-img" />
              </div>
              <p className="review-message">{review.description}</p>
              <Rating name="read-only" size="medium" value={review.rating.rate} readOnly />
              <p className="review-name">{review.title}</p>
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
    </Container>
  );
}

export default Review;
