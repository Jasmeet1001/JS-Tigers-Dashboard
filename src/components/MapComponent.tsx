import React, { useEffect, useState } from "react";

interface Shipment {
  lat: number;
  long: number;
}

const MapComponent: React.FC = () => {
  const [mapUrl, setMapUrl] = useState<string>("");

  useEffect(() => {
    // Function to fetch data from the API
    const fetchShipments = async () => {
      try {
        const response = await fetch("/api/dashboard/maps");
        const data = await response.json();

        // Construct the Google Maps URL with multiple markers
        const url = `https://www.google.com/maps/embed?markers=${data.shipment
          .map(
            (shipment: Shipment) => `&q=loc:${shipment.lat},${shipment.long}`
          )
          .join("")}`;

        setMapUrl(url);
      } catch (error) {
        console.error("Error fetching shipment data:", error);
      }
    };

    fetchShipments();
  }, []);

  return (
    <div className="mt-10">
      {mapUrl && (
        <iframe
          width='100%'
          height='350'
          className="border-0 rounded-xl"
          loading='lazy'
          allowFullScreen
          src={mapUrl}
        ></iframe>
      )}
    </div>
  );
};

export default MapComponent;
