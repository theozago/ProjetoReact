import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
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
    <View style={{ padding: 20 }}>
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
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
