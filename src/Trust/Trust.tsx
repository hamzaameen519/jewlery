import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./Trust.css";

const trustItems = [
  {
    image: "https://i.ibb.co/qjtxYzn/frree.png",
    title: "FREE SHIPPING",
    text: "Starting from 50 EUR cart (DE) 1-3 Days Shipping within Germany",
  },
  {
    image: "https://i.ibb.co/VH0M8Fj/1180918.png",
    title: "PURCHASE SAFELY",
    text: "Certified Online Shop Encrypted Data Transmission Quality Seal and Buyer Protection",
  },
  {
    image: "https://i.ibb.co/dpfV8fn/412954.png",
    title: "PERSONAL SERVICE",
    text: "Mo - Fr 9am - 5pm\n+49 641 794975220\ninfo@thejewellershop.com",
  },
  {
    image: "https://i.ibb.co/fNykJt0/747736.png",
    title: "HUGE SELECTION",
    text: "More than 16.000 Items More than 20 Top Brands Personalised Items",
  },
];

const Trust = () => {
  return (
    <Container className="trust-container">
      <Grid container spacing={5} className="mx-3">
        {trustItems.map((item, index) => (
          <Grid item xs={12} md={3} key={index}>
            <div className="trust-img">
              <img src={item.image} alt="" className="trust-logo" />
            </div>
            <Typography variant="subtitle1" className="trust-title">
              {item.title}
            </Typography>
            <Typography variant="body1" className="trust-text">
              {item.text.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Trust;
