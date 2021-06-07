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
import { RatingField } from "../../components/rating-field";
import { toggleViewMore, closeReview } from "./store/main-actions";

export const ReviewDialog = () => {
  const [selectedReview, viewMore] = useMainStore((state) => [
    state.selectedReview,
    state.viewMore,
  ]);
  console.log(selectedReview);
  return (
    <Box>
      {selectedReview ? (
        <Card variant="outlined">
          <CardHeader
            title={selectedReview.name}
            subheader={selectedReview.address}
            action={
              <IconButton onClick={() => closeReview()}>
                <CloseIcon />
              </IconButton>
            }
          />
          {viewMore ? (
            <>
              <CardContent>
                <Typography>{selectedReview.freeText}</Typography>
              </CardContent>
              <CardActions>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Button
                      startIcon={<ArrowBackIosIcon />}
                      onClick={() => toggleViewMore()}
                    >
                      Back
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </>
          ) : (
            <>
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
              {selectedReview.freeText && (
                <CardActions>
                  <Grid container justify="flex-end">
                    <Grid item>
                      <Button
                        endIcon={<ArrowForwardIosIcon />}
                        onClick={() => toggleViewMore()}
                      >
                        More
                      </Button>
                    </Grid>
                  </Grid>
                </CardActions>
              )}
            </>
          )}
        </Card>
      ) : (
        <Typography>nothing selected</Typography>
      )}
    </Box>
  );
};
