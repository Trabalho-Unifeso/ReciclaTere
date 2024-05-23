import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import {NavegatorService} from '../service/NavegatorService'

interface User {
  Email: string;
  CodigoEmail: string;
  NovaSenha?: string;
  ConfirmarSenha?: string;
}
interface UserProfileProps {
  user: User;
  onBackPress: () => void;
  onSave: (updatedUser: User) => void;
}
export default function RecuperarSenha(NavegatorService:NavegatorService) {
  const [user, setUser] = useState<User>({
    Email: "",
    CodigoEmail: "",
    NovaSenha: "",
    ConfirmarSenha: "",
  });
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView>
        <View style={styles.userInfo}>
          <View style={styles.inputContainer}>
            <Text>Digite seu e-mail:</Text>
            <TextInput
              style={styles.input}
              value={user.Email}
              onChangeText={(text) => setUser({ ...user, Email: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Informe o código enviado no e-mail:</Text>
            <TextInput
              style={styles.input}
              value={user.CodigoEmail}
              onChangeText={(text) => setUser({ ...user, CodigoEmail: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Digite sua nova senha:</Text>
            <TextInput
              style={styles.input}
              value={user.NovaSenha}
              onChangeText={(text) => setUser({ ...user, NovaSenha: text })}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Confirme sua nova senha:</Text>
            <TextInput
              style={styles.input}
              value={user.ConfirmarSenha}
              onChangeText={(text) => setUser({ ...user, ConfirmarSenha: text })}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.saveButton} onPress={() => {NavegatorService.navigation.navigate("Login")}}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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