import * as React from 'react';
import { View, Text, StyleSheet, ButtonProps, Button, Image, Pressable, TextInput    } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import {NavegatorService} from '../service/NavegatorService'
import User from '../models/User'
import AsyncStorage from '@react-native-async-storage/async-storage';

const user: User = {
	Email: "",
	Password: ""
}

export default function Login(NavegatorService:NavegatorService) {
  return (
	  <View style={styles.container}>
		<Image style={styles.LoginImage} source={require('../assets/Img/person-placeholder.jpg')}/>
		<View style={styles.inputConteiner}>
			<Text style={styles.InputText}>Email:</Text>
        	<TextInput style={styles.input} onChangeText={text => {user.Email = text}} />
		</View>
		<View style={styles.space}/>
		<View style={styles.inputConteiner}>
			<Text style={styles.InputText}>Senha:</Text>
        	<TextInput secureTextEntry={true} style={styles.input} onChangeText={text => {user.Password = text}} />
		</View>
		<Pressable onPress={() => {}} style={styles.passwordRecover} onPressIn={() => NavegatorService.navigation.navigate("RecuperarSenha")} >
          <Text style={{color:'green', fontWeight: 'bold'}} >Esqueci minha senha</Text>
        </Pressable>
		<View style={styles.space}/>
		<Pressable onPress={() => {saveUser(); NavegatorService.navigation.navigate('MateriaisReciclaveis')}} android_ripple={{color: 'dark-green'}} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
		<Pressable onPress={() => {NavegatorService.navigation.navigate('Register')}} style={styles.InputCreateAcount}  >
          <Text style={{color:'green', fontWeight: 'bold'}} >Não possuo cadastro</Text>
        </Pressable>
    </View>
  );
}
function saveUser(){

	AsyncStorage.setItem("user", JSON.stringify(user))
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center',
		marginTop: 100,
	},
	input: {
		borderColor: "gray",
		
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,

	},
	passwordRecover:{
		alignSelf:'flex-end', 
		marginRight:'13%', 
		borderBottomWidth: 1, 
		borderBlockColor: 'green'
	},
	inputConteiner:{
		width: "75%"
	},
	space:{
		padding: 10
	},
	InputText:{
		color:"#green",
		fontWeight: "bold",
		fontSize: 15
	},
	InputCreateAcount:{
		color:"#green",
		fontWeight: "bold",
		fontSize: 15,
		borderBottomWidth: 1, 
		borderBlockColor: 'green',
		marginTop: 20
	},
	LoginImage:{
		borderColor: "darkgrey",
		borderRadius: 100,
		width: 150,
		height: 150,
		borderWidth: 2,
		paddingStart: -25
	},
    button: {
      backgroundColor: 'green',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 5,
      width: 150,
      elevation:0
    },
    buttonText: {
      color: '#fff',
      fontSize: 19,
      alignSelf: 'center',
      fontWeight: 'bold'
    }
});
  