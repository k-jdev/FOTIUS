import React from "react";
import { motion } from "framer-motion";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { MapPin } from "lucide-react";

function GoogleMapLocation() {
  const [isInfoOpen, setIsInfoOpen] = React.useState(true);

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "0.5rem",
  };

  const center = {
    lat: 49.453568,
    lng: 32.044077,
  };

  const mapOptions = {
    disableDefaultUI: false,
    zoomControl: true,
    mapTypeControl: true,
    streetViewControl: true,
    styles: [
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{ color: "#003D74" }],
      },
    ],
  };

  return (
    <motion.div
      className="w-full h-80 rounded-xl overflow-hidden shadow-lg border-4 border-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <LoadScript googleMapsApiKey="AIzaSyAWGbGNHi6xYZiAg8kwp23_Z0-mZeWIFDc">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={16}
          options={mapOptions}
        >
          <Marker
            position={center}
            onClick={() => setIsInfoOpen(!isInfoOpen)}
          />
          {isInfoOpen && (
            <InfoWindow
              position={center}
              onCloseClick={() => setIsInfoOpen(false)}
            >
              <div className="p-2">
                <h3 className="font-bold text-[#003D74] text-sm mb-1">
                  ФОТіУС
                </h3>
                <div className="flex items-start text-xs text-gray-700">
                  <MapPin size={12} className="flex-shrink-0 mr-1 mt-0.5" />
                  <span>
                    бульвар Шевченка, Черкаси
                    <br />
                    Черкаська область, Україна
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps?ll=49.453568,32.044077&z=20&t=m&hl=ru-UA&gl=US&mapclient=apiv3&cid=195949974671731506"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#003D74] text-xs mt-1 block hover:underline"
                >
                  Відкрити у Google Maps
                </a>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </motion.div>
  );
}

export default GoogleMapLocation;
