import { Grid, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

interface Props {
  text: string;
  rating: number;
  //TODO readonly/write
}

export const RatingField: React.FC<Props> = ({ rating, text }) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Rating name="read-only" value={rating} readOnly />
      </Grid>
      <Grid item xs={6}>
        <Typography>{text} </Typography>
      </Grid>
    </Grid>
  );
};
