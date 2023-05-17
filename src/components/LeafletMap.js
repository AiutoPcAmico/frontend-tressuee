import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "./components.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function LeafletMap({ positions }) {
  function GetMyLocation() {
    const [position, setPosition] = useState(null);

    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
    }, [map]);
  }

  return (
    <div>
      <MapContainer
        className="map"
        center={[positions[0].latitude, positions[0].longitude]}
        zoom={9}
        scrollWheelZoom={false}
      >
        <GetMyLocation></GetMyLocation>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {positions.map((location) => {
          console.log(location.latitude, location.longitude);
          return (
            <Marker position={[location.latitude, location.longitude]}>
              <Popup>
                <b>Punto di Ricarica</b> <br /> {location.description}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export { LeafletMap };
