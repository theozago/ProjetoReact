import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import CadastroScreen from './CadastroScreen';
import LoginScreen from './LoginScreen';
import InicioScreen from './InicioScreen';
import TimesNBA from './TimesNBA';
import CriarJogador from './CriarJogador';
import TeamDetails from './TeamDetails';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Inicio" component={InicioScreen} />
        <Stack.Screen name="TimesNBA" component={TimesNBA} />
        <Stack.Screen name="CriarJogador" component={CriarJogador} />
        <Stack.Screen name="TeamDetails" component={TeamDetails} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
