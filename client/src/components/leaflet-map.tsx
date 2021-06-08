import L from "leaflet";
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import create from "zustand";
import "leaflet/dist/leaflet.css";
import { Box, Button, Icon } from "@material-ui/core";
import { AcUnit } from "@material-ui/icons";

interface Props {
  text: string;

  //TODO readonly/write
}

interface Test {
  value: string;
}

const useTestStore = create<Test>(() => ({
  value: "loading...",
}));

export const LeafletMap: React.FC<Props> = ({ text }) => {
  const ref = useRef(null);
  const value = useTestStore((state) => state.value);
  // TODO: Origin position & last position~
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const fetch = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      useTestStore.setState({ value: "ostpaj" });
    };

    navigator.geolocation.getCurrentPosition(
      (location) => {
        setPosition([location.coords.latitude, location.coords.longitude]);
      },
      undefined,
      { enableHighAccuracy: true }
    );

    fetch();
  }, []);

  console.log(
    position
    //ref.current?.leafletElement.getBounds().contains(position)
  );
  return (
    <>
      <div style={{ width: "100%", height: "70vh" }}>
        <MapContainer
          // ref={ref}
          center={[59.33258, 18.0649]}
          zoom={13}
          style={{
            height: "100%",
            width: "100%",
          }}
          onmoveend={(event: any) => {
            console.log(event.target._lastCenter);
            setPosition([
              event.target._lastCenter.lat,
              event.target._lastCenter.lng,
            ]);
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup.
              <br />
              Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <Box p={2} display="flex" alignItems="center">
        <Icon>
          <AcUnit />
        </Icon>
        <Box mx={2}>test {value}</Box>
        <Button variant="contained" color="secondary">
          i want cookies
        </Button>
      </Box>
    </>
  );
};
