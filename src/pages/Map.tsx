import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
import Navbar from '../components/NavBar';
import { View } from 'react-native';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default function Map(NavegatorService:NavegatorService) {
  const markers = [
    [ -22.413305973368875, -42.96982466974577 ],
    [ -22.413405973368875, -42.96982466974577 ],
    [ -22.413505973368875, -42.96982466974577 ],
    // Add more coordinates as needed
  ];

  
  const customMarkerIcon = L.icon({
    iconUrl: '../assets/Img/simbolo-de-reciclagem.png',
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -41] // point from which the popup should open relative to the iconAnchor
  });

  return (
    <View>
      <MapContainer
      center={[-22.413305973368875, -42.96982466974577]}
      zoom={15}
      style={{ height: '90vh', width: '100wh' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((position, index) => (
        <Marker position={position} >
          <Popup>
            EcoPonto
          </Popup>
        </Marker>
      ))}
    </MapContainer>
      <Navbar route={NavegatorService.navigation.navigate}></Navbar>
    </View>
    
    
  );
}