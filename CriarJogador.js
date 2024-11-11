import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker'; // Importação do Picker

const CriarJogador = ({ navigation }) => {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [wingspan, setWingspan] = useState('');
  const [weight, setWeight] = useState('');
  const [jerseyNumber, setJerseyNumber] = useState('');
  const [position, setPosition] = useState('point guard');

  const handleCreatePlayer = async () => {
    if (name && height && wingspan && weight && jerseyNumber && position) {
      const player = {
        name,
        height,
        wingspan,
        weight,
        jerseyNumber,
        position,
      };

      try {
        const storedPlayers = await AsyncStorage.getItem('players');
        const players = storedPlayers ? JSON.parse(storedPlayers) : [];
        players.push(player);
        await AsyncStorage.setItem('players', JSON.stringify(players));

        Alert.alert('Sucesso', 'Jogador criado com sucesso!');
        navigation.navigate('Inicio');

        setName('');
        setHeight('');
        setWingspan('');
        setWeight('');
        setJerseyNumber('');
        setPosition('point guard');
      } catch (error) {
        console.log("Erro ao salvar o jogador:", error);
        Alert.alert('Erro', 'Falha ao salvar o jogador');
      }
    } else {
      Alert.alert('Erro', 'Preencha todos os campos');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Nome:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Text>Altura (cm):</Text>
      <TextInput
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Text>Envergadura (cm):</Text>
      <TextInput
        value={wingspan}
        onChangeText={setWingspan}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Text>Peso (kg):</Text>
      <TextInput
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Text>Número da Camiseta:</Text>
      <TextInput
        value={jerseyNumber}
        onChangeText={setJerseyNumber}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Text>Posição:</Text>
      <Picker
        selectedValue={position}
        style={{ height: 50, marginBottom: 20 }}
        onValueChange={(itemValue) => setPosition(itemValue)}
      >
        <Picker.Item label="Armador" value="point guard" />
        <Picker.Item label="Ala-Armador" value="shooting guard" />
        <Picker.Item label="Ala" value="small forward" />
        <Picker.Item label="Ala-Pivô" value="power forward" />
        <Picker.Item label="Pivô" value="center" />
      </Picker>

      <TouchableOpacity onPress={handleCreatePlayer} style={{ backgroundColor: 'blue', padding: 10, alignItems: 'center' }}>
        <Text style={{ color: 'white' }}>Confirmar Criação</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CriarJogador;
