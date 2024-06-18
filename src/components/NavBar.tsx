import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { NavegatorService, RootStackParamList } from '../service/NavegatorService';
import { StackNavigationProp } from '@react-navigation/stack';

interface NavbarProps {
    route: (route: string) => void;
  }

export default function Navbar  (nav: NavbarProps) {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => nav.route('MapScreen')}>
            <Image style={styles.icon}   source={require('../assets/Img/map-solid.png')} />
            </Pressable>
            <Pressable onPress={() => nav.route('MateriaisReciclaveis')}>
            <Image style={styles.icon}   source={require('../assets/Img/recycle-solid.png')} />
            </Pressable>
            <Pressable onPress={() => nav.route('Perfil')}>
            <Image style={styles.icon}   source={require('../assets/Img/user-solid.png')} />
            </Pressable>
            <Pressable onPress={() => nav.route('TelaConfig')}>
            <Image style={styles.icon}   source={require('../assets/Img/gear-solid.png')} />
            </Pressable>
            <Pressable onPress={() => nav.route('Dicas')}>
            <Image style={styles.icon}   source={require('../assets/Img/lamp.png')} />
            </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      height: 75,
      backgroundColor: '#f8f8f8',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    icon:{
        margin:10,
        width:30, height: 30
        
    }
  });
