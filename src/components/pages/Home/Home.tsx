import SliderImage from "../Slider/Slider";
import Category from "../Category/Category";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Review from "../Review/Review";
import Trust from "../../../Trust/Trust";
import { Bangles, Bejeweled, ChiGold, FemaleSilver, ModernPlainSterlingSilver } from "../../../common/images/image";
import About from "../About/About";
const Home = () => {
  const cardArray = [
    {
      avatar: "H",
      title: "Home Furnished",
      subheader: "Beauty House",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: [Bejeweled],
    },
    {
      avatar: "H",
      title: "Home Furnished",
      subheader: "Beauty House",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: [ModernPlainSterlingSilver],
    },
    {
      avatar: "H",
      title: "Home Furnished",
      subheader: "Beauty House",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: [ChiGold],
    },
    {
      avatar: "H",
      title: "Home Furnished",
      subheader: "Beauty House",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: [FemaleSilver],
    },
  ];
  return (
    <>
      {/* <RecipeReviewCard cardArray={ cardArray } /> */}
      <SliderImage cardArray={cardArray} />
      <About />
      {/* <Category />

      <Link to="/products" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="secondary">
          Explore All Products
        </Button>
      </Link>
      <Review />
      <Trust /> */}
    </>
  );
};

export default Home;
