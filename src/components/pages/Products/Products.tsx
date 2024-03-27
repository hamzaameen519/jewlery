import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Products.css";

const Products = ({ quantity }: any) => {
  const [products, setProducts] = useState<any>([]);

  // fetch all products from database
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Container sx={{ my: { xs: 3, md: 5 }, textAlign: "center" }}>
      <p className="products-title">Feature Products</p>
      <img src="https://i.ibb.co/jrcL1wV/divider1.png" alt="" />
      <br />
      <br />
      <Grid container spacing={{ xs: 3, sm: 5 }}>
        {products.slice(0, quantity).map((product: { _id: string }) => (
          <Grid item key={product._id} xs={12} sm={6} md={4} lg={4}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
