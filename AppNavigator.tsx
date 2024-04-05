// AppNavigator.tsx
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/pages/HomeScreen';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import React from 'react';
import {RootStackParamList} from './src/service/NavegatorService'

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator()
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown:false}}  name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}}  name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}}  name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
