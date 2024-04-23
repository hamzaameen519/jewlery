import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import { settings } from "../../../common/constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderItemInterface {
  avatar: string;
  title: string;
  subheader: string;
  body: string;
  image: string[];
}
export default function SliderImage({ cardArray }: { cardArray: SliderItemInterface[] }) {
  console.log("cardArray", cardArray);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card sx={{ width: "50vw", height: "30%", imageResolution: "from-image" }}>
          <Slider {...settings}>
            {cardArray.map((item: SliderItemInterface, i: number) => {
              return item?.image?.map((imageUrl: string) => <img src={imageUrl} alt="not found" key={i} />);
            })}
          </Slider>
        </Card>
      </Grid>
    </Grid>
  );
}
