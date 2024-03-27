import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = () => {
  return (
    <Container className="my-md-5 my-3">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} spacing={5}>
          <Box className="category-img">
            <Link to="/products">
              <img src="https://i.ibb.co/Q92xwP7/home-6-cat-1-1024x10242x2.jpg" className="img-fluid cat-img" alt="" />
            </Link>
          </Box>
          <Box className="category-img">
            <Link to="/products">
              <img src="https://i.ibb.co/w414p1t/home-6-cat-2-1024x10242x2.jpg" className="img-fluid cat-img" alt="" />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="category-img mt-3">
            <Link to="/products">
              <img src="https://i.ibb.co/G5bWfjy/home-6-cat-3-1024x10242x2.jpg" className="img-fluid cat-img" alt="" />
            </Link>
          </div>
          <div className="category-img mt-3">
            <Link to="/products">
              <img src="https://i.ibb.co/68hvWhC/home-6-cat-4-1024x10242x2.jpg" className="img-fluid cat-img" alt="" />
            </Link>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Category;
