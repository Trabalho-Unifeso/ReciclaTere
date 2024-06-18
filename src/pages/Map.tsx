import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
// Define your custom icon
const customIcon = L.icon({
  iconUrl: process.env.PUBLIC_URL +  '/assets/Img/simbolo-de-reciclagem.png', // replace with your local image path
  iconSize: [40, 40], // size of the icon
});

export default function Map() {
  const markers = [
    [ -22.413305973368875, -42.96982466974577 ],
    [ -22.413405973368875, -42.96982466974577 ],
    [ -22.413505973368875, -42.96982466974577 ],
    // Add more coordinates as needed
  ];

  return (
    <MapContainer
      center={[-22.413305973368875, -42.96982466974577]}
      zoom={15}
      style={{ height: '100vh', width: '100wh' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((position, index) => (
        <Marker key={index} position={position} icon={customIcon}>
          <Popup>
            EcoPonto
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}