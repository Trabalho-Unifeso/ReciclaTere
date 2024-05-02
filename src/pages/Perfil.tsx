import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import { NavegatorService } from '../service/NavegatorService';
import Navbar from '../components/NavBar';

interface User {
  Nome: string;
  Sobrenome: string;
  Nascimento?: string;
  Endereco?: string;
  Telefone?: string;
}

interface UserProfileProps {
  user: User;
  onBackPress: () => void;
  onSave: (updatedUser: User) => void;
}

export default function Perfil(NavegatorService: NavegatorService ) {
  const [user, setUser] = useState<User>({
    Nome: "Sergio",
    Sobrenome: "Quintanilha",
    Nascimento: "09/01/1937",
    Endereco: "Rua 1, próximo a rua 2",
    Telefone: "(21) 98883-3338"
  });

  return (
    <View>
      <View style={styles.container}>
        <ScrollView>
          <Image style={styles.LoginImage} source={require('../assets/Img/person-placeholder.jpg')} />
          <View style={styles.userInfo}>
            <View style={styles.inputContainer}>
              <Text>Nome:</Text>
              <TextInput
                style={styles.input}
                value={user.Nome}
                onChangeText={(text) => setUser({ ...user, Nome: text })}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Sobrenome:</Text>
              <TextInput
                style={styles.input}
                value={user.Sobrenome}
                onChangeText={(text) => setUser({ ...user, Sobrenome: text })}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Data de Nascimento:</Text>
              <TextInput
                style={styles.input}
                value={user.Nascimento}
                onChangeText={(text) => setUser({ ...user, Nascimento: text })}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Endereço:</Text>
              <TextInput
                style={styles.input}
                value={user.Endereco}
                onChangeText={(text) => setUser({ ...user, Endereco: text })}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Telefone:</Text>
              <TextInput
                style={styles.input}
                value={user.Telefone}
                onChangeText={(text) => setUser({ ...user, Telefone: text })}
              />
            </View>
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
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