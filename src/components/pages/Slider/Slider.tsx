import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import { productImages, settings } from "../../../common/constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderImage({ cardArray }: any) {
  console.log("cardArray", cardArray);

  return (
    <Grid container spacing={2}>
      {/* {images?.map((item: any, index: number) => ( */}
      <Grid item xs={12}>
        <Card sx={{ width: "100vw", height: "30%", imageResolution: "from-image" }}>
          <Slider {...settings}>
            {productImages.map((value: string, i: number) => (
              <img src={value} alt="not found" key={i} />
            ))}
          </Slider>
        </Card>
      </Grid>
      {/* ))} */}
    </Grid>
  );
}
