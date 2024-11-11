import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CadastroScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastro = async () => {
    if (username && password) {
      try {
        await AsyncStorage.setItem('user', username);
        await AsyncStorage.setItem('password', password);
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso');
        navigation.navigate('Login');
      } catch (error) {
        Alert.alert('Erro', 'Falha ao salvar os dados de cadastro');
      }
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'lightblue' }}>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image
          source={{ uri: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png' }}
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
      <Button title="Cadastrar" color="black" onPress={handleCadastro} />
    </View>
  );
};

export default CadastroScreen;
