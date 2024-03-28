import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="pb-md-5 py-3 footer-area">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="footer-title">
              ABOUT US
            </Typography>
            <Typography variant="body1" className="footer-text">
              Jewelry is always a great gift, whether it is for your wife, friend, or yourself. All Ritani jewelry is crafted with the highest quality precious metals and gemstones so you can be certain of its quality. Looking for diamond jewelry
              that is more affordable? Browse our collection of lab-grown diamond earrings and pendants. Lab-grown diamonds are identical to earth-grown diamonds but can cost up to 30% less.
            </Typography>
            <Link to="/products" className="btn btn-regular px-3 mt-md-4">
              EXPLORE NOW
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="footer-title">
              INFORMATION
            </Typography>
            <div className="footer-list">
              <Link to="/">Career</Link>
              <Link to="/">About Us</Link>
              <Link to="/">FAQ</Link>
              <Link to="/">Contact us</Link>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Pulmonary</Link>
              <Link to="/">Customer Portal</Link>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="footer-title">
              NEWS & TIPS
            </Typography>
            <Typography variant="body1" className="footer-text">
              <Link to="/">INCREASE CUSTOMER RETENTION</Link>
              <p>02th Dec 2021</p>
            </Typography>
            <hr />
            <Typography variant="body1" className="footer-text">
              <Link to="/">Hospitality Managements </Link>
              <p>03th Dec 2021</p>
            </Typography>
            <hr />
            <Typography variant="body1" className="footer-text">
              <Link to="/">Weekdays in South America</Link>
              <p>03th Dec 2021</p>
            </Typography>
            <hr />
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="footer-title">
              CONTACT INFO
            </Typography>
            <Typography variant="body1" className="footer-text">
             CITY HOUSING SHA PUR BOSAN ROAD MULTAN
            </Typography>
            <Typography variant="body1" className="footer-text">
              <i className="fas fa-phone-alt ico"></i>
              Tell <span className="number">03024346896</span>
            </Typography>
            <Typography variant="body1" className="footer-text">
              <i className="fas fa-envelope ico"></i>
              Email <span className="number"> info@example.com</span>
            </Typography>
            <Typography variant="body1" className="footer-text">
              <i className="fas fa-globe-asia ico"></i>
              Website <span className="number"> tripar.com</span>
            </Typography>
            <Typography variant="body1" className="footer-direction mx-4">
              Get Map Direction <i className="fas fa-long-arrow-alt-right ico"></i>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
