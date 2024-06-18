import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import { NavegatorService } from '../service/NavegatorService';
import Navbar from '../components/NavBar';
import User from '../models/User';
import AsyncStorage from '@react-native-async-storage/async-storage';

let user: User = {
	Email: "",
	Password: ""
}

export default function Perfil(NavegatorService: NavegatorService ) {
  const [email, setEmail] = useState('');

  useEffect(() => {
    AsyncStorage.getItem("user").then((value) => {
      const user = JSON.parse(value || '{}');
      setEmail(user.Email);
    });
  }, []);
  return (
    <View>
      <View style={styles.container}>
        <ScrollView>
          <Image style={styles.LoginImage} source={require('../assets/Img/person-placeholder.jpg')} />
          <View style={styles.userInfo}>
            <View style={styles.inputContainer}>
              <Text>Email:</Text>
              <TextInput
                style={styles.input}
                value={email}
              />
            </View>
          
          </View>
        </ScrollView>
        

      </View>
      <Navbar route={NavegatorService.navigation.navigate}></Navbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  userInfo: {
    marginTop: 50,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  LoginImage: {
    borderColor: "darkgrey",
    borderRadius: 100,
    width: 150,
    height: 150,
    borderWidth: 2,
    paddingStart: -25,
    alignSelf: 'center'
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});