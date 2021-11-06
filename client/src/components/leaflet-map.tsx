import L from "leaflet";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { ReviewModel } from "@shared/models/review";
import { useMainStore } from "../pages/main/store/main-store";
import { selectReview } from "../pages/main/store/main-actions";
import { Box, makeStyles, createStyles } from "@material-ui/core";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const useStyles = makeStyles((theme) =>
  createStyles({
    mapContainer: {
      height: "100%",
      width: "100%",
    },
  })
);
export const LeafletMap: React.FC = () => {
  const reviews = useMainStore((state) => state.reviews);
  const classes = useStyles();

  return (
    <Box width="100%" height="70vh">
      <MapContainer
        center={[59.33258, 18.0649]}
        zoom={13}
        className={classes.mapContainer}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {reviews.map((review, index) => (
          <Marker
            eventHandlers={{ click: () => selectReview(review) }}
            position={[review.coordinate.x, review.coordinate.y]}
          />
        ))}
      </MapContainer>
    </Box>
  );
};
