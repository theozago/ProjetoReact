import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';

const CriarJogador = ({ navigation }) => {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [wingspan, setWingspan] = useState('');
  const [weight, setWeight] = useState('');
  const [jerseyNumber, setJerseyNumber] = useState('');
  const [position, setPosition] = useState('point guard');

  const playConfirmationSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/claps-44774.mp3')
    );
    await sound.playAsync();
  };

  const handleCreatePlayer = async () => {
    if (name && height && wingspan && weight && jerseyNumber && position) {
      const player = { name, height, wingspan, weight, jerseyNumber, position };

      try {
        const storedPlayers = await AsyncStorage.getItem('players');
        const players = storedPlayers ? JSON.parse(storedPlayers) : [];
        players.push(player);
        await AsyncStorage.setItem('players', JSON.stringify(players));

        await playConfirmationSound();
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
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://lnb.com.br/wp-content/uploads/2024/06/Diego-Zimmerman.png' }}
          style={styles.image}
        />
      </View>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <Text style={styles.label}>Altura (cm):</Text>
      <TextInput
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style={styles.label}>Envergadura (cm):</Text>
      <TextInput
        value={wingspan}
        onChangeText={setWingspan}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style={styles.label}>Peso (kg):</Text>
      <TextInput
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style={styles.label}>Número da Camiseta:</Text>
      <TextInput
        value={jerseyNumber}
        onChangeText={setJerseyNumber}
        keyboardType="numeric"
        style={styles.input}
      />

      
      <Text style={styles.label}>Posição:</Text>
      <View style={styles.radioContainer}>
        {['Armador', 'Ala-Armador', 'Ala', 'Ala-Pivô', 'Pivô'].map((pos, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.radioOption} 
            onPress={() => setPosition(pos.toLowerCase())}
          >
            <View style={[
              styles.radioCircle, 
              position === pos.toLowerCase() && styles.radioSelected
            ]} />
            <Text style={styles.radioLabel}>{pos}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity onPress={handleCreatePlayer} style={styles.button}>
        <Text style={styles.buttonText}>Confirmar Criação</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 150,
    height: 150,
  },
  label: {
    marginBottom: 4,
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 6,
    borderRadius: 5,
    fontSize: 14,
  },
  radioContainer: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioCircle: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 8,
  },
  radioSelected: {
    backgroundColor: 'black',
  },
  radioLabel: {
    fontSize: 14,
  },
  button: {
    backgroundColor: 'black',
    padding: 12,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 14, 
  },
});

export default CriarJogador;
