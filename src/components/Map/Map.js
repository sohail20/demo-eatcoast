import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "calc(100% - 91px)",
  height: "100%",
};

const MapContainer = ({ google, lat, lng }) => {
  return (
    <Map
      google={google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat, lng }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDJSzGFM725WqKtiZe345r1FafqGyL-p9Y",
})(MapContainer);
