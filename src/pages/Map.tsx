import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { View, Text, StyleSheet, ButtonProps, Button, Image, Pressable, TextInput    } from 'react-native';
import { NavegatorService } from '../service/NavegatorService';
import Navbar from '../components/NavBar';
export default function Map(NavegatorService: NavegatorService) {
  return (
    <View>
        <MapContainer
        center={[-22.413305973368875, -42.96982466974577]}
        zoom={15}
        style={{ height: "100vh", width: "100%" }}
        >
        <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
        <Marker position={[-22.413305973368875, -42.96982466974577]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>
        <Navbar route={NavegatorService.navigation.navigate}></Navbar>
    </View>
  );
}


