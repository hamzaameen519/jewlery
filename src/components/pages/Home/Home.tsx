import React from "react";
import { RecipeReviewCard } from "../../base-component";
import Slider from "../Slider/Slider";
import Category from "../Category/Category";
import Products from "../Products/Products";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Review from "../Review/Review";
import Trust from "../../../Trust/Trust";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  const cardArray = [
    {
      avatar: "H",
      title: "Home Furnished",
      subheader: "Beauty House",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: ["https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/13595793/pexels-photo-13595793.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"],
    },
  ];
  return (
    <>
      <Slider />
      <Category />
      <Products quantity={6} />
      {/* <RecipeReviewCard cardArray={cardArray} /> */}
      <Link to="/products" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="secondary">
          Explore All Products
        </Button>
      </Link>
      <Review />
      <Trust />
      <Footer />
    </>
  );
};

export default Home;
