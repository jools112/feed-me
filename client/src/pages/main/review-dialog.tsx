import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useMainStore } from "./store/main-store";
import { Rating } from "@material-ui/lab";
import { RatingField } from "../../components/rating-field";
export const ReviewDialog = () => {
  const [selectedReview, showDialog] = useMainStore((state) => [
    state.selectedReview,
    state.showDialog,
  ]);
  console.log(selectedReview);
  return (
    <Box>
      {selectedReview ? (
        <>
          <Card variant="outlined">
            <CardHeader
              title={selectedReview.name}
              subheader={selectedReview.address}
              action={
                <IconButton>
                  <CloseIcon />
                </IconButton>
              }
            />
            <CardContent>
              <RatingField
                rating={selectedReview.qualityRating}
                text="Quality"
              />
              <RatingField
                rating={selectedReview.serviceRating}
                text="Service"
              />
              <RatingField
                rating={selectedReview.atmosphereRating}
                text="Atmosphere"
              />
              <RatingField rating={selectedReview.valueRating} text="Value" />
            </CardContent>
            <CardActions>
              <Grid container justify="flex-end">
                <Grid item>
                  <Button endIcon={<ArrowForwardIosIcon />}>More</Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
          <Card variant="outlined">
            <CardHeader
              title={selectedReview.name}
              subheader={selectedReview.address}
              action={
                <IconButton>
                  <CloseIcon />
                </IconButton>
              }
            />
            <CardContent>
              <RatingField
                rating={selectedReview.qualityRating}
                text="Quality"
              />
              <RatingField
                rating={selectedReview.serviceRating}
                text="Service"
              />
              <RatingField
                rating={selectedReview.atmosphereRating}
                text="Atmosphere"
              />
              <RatingField rating={selectedReview.valueRating} text="Value" />
            </CardContent>
            <CardActions>
              <Grid container justify="flex-end">
                <Grid item>
                  <Button endIcon={<ArrowForwardIosIcon />}>More</Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </>
      ) : (
        <Typography>nothing selected</Typography>
      )}
    </Box>
  );
};
