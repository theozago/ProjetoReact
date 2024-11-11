import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('user');
      const storedPassword = await AsyncStorage.getItem('password');
      
      if (username === storedUsername && password === storedPassword) {
        navigation.navigate('Inicio');
      } else {
        Alert.alert('Erro', 'Usuário ou senha incorretos');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao acessar os dados de login');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image
          source={{ uri: 'https://cdn.nba.com/headshots/nba/latest/1040x760/406.png' }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <Text>Usuário:</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <Text>Senha:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <Button title="Login" color="black" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
