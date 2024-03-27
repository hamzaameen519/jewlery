import { Button, Grid, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Product = ({ product }: any) => {
  // return every product card
  return (
    <Grid xs={12} md={4}>
      <Card sx={{ minWidth: "90%" }}>
        <CardActionArea>
          <CardMedia component="img" height={352} image={product.image} alt="jewelry" />
          <CardContent>
            <p className="product-title">{product.title}</p>
            <p className="product-vendor">{product.vendor}</p>
            <Rating name="read-only" value={product.rating} readOnly />
          </CardContent>
        </CardActionArea>
        <CardActions className="d-flex justify-content-between">
          <p className="product-price">${product.price}</p>
          <Link to={`/product/${product._id}`} className="text-decoration-none">
            <Button variant="contained">Order Now</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
