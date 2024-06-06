import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Modal, Alert } from 'react-native';
import { NavegatorService } from '../service/NavegatorService';
import Navbar from '../components/NavBar';
interface Usuario {
  Email: string;
  CodigoEmail: string;
  NovaSenha?: string;
  ConfirmarSenha?: string;
}

interface PerfilUsuarioProps {
  usuario: Usuario;
  onBackPress: () => void;
  onSave: (updatedUser: Usuario) => void;
}

export default function Perfil(NavegatorService: NavegatorService) {
  const [usuario, setUsuario] = useState<Usuario>({
    Email: "",
    CodigoEmail: "",
    NovaSenha: "",
    ConfirmarSenha: "",
  });
  const [modalErroVisivel, setModalErroVisivel] = useState(false);
  const [modalSucessoVisivel, setModalSucessoVisivel] = useState(false);

  const validarSenhas = () => {
    if (usuario.NovaSenha !== usuario.ConfirmarSenha) {
      setModalErroVisivel(true);
    } else {
      setModalSucessoVisivel(true);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.userInfo}>
          <View style={styles.inputContainer}>
            <Text>Digite seu e-mail:</Text>
            <TextInput
              style={styles.input}
              value={usuario.Email}
              onChangeText={(text) => setUsuario({ ...usuario, Email: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Informe o código enviado no e-mail:</Text>
            <TextInput
              style={styles.input}
              value={usuario.CodigoEmail}
              onChangeText={(text) => setUsuario({ ...usuario, CodigoEmail: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Digite sua nova senha:</Text>
            <TextInput
              style={styles.input}
              value={usuario.NovaSenha}
              onChangeText={(text) => setUsuario({ ...usuario, NovaSenha: text })}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Confirme sua nova senha:</Text>
            <TextInput
              style={styles.input}
              value={usuario.ConfirmarSenha}
              onChangeText={(text) => setUsuario({ ...usuario, ConfirmarSenha: text })}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.saveButton} onPress={validarSenhas}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
        <Navbar route={NavegatorService.navigation.navigate}></Navbar>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalErroVisivel}
        onRequestClose={() => {
          setModalErroVisivel(!modalErroVisivel);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>As senhas não coincidem!</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalErroVisivel(!modalErroVisivel)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalSucessoVisivel}
        onRequestClose={() => {
          setModalSucessoVisivel(!modalSucessoVisivel);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Senha alterada com sucesso!</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalSucessoVisivel(!modalSucessoVisivel)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
