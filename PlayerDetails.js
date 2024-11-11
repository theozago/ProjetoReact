import React from 'react';
import { View, Text, Button, Alert,Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PlayerDetails = ({ route, navigation }) => {
  const { player } = route.params;

  const handleDeletePlayer = async () => {
    try {
      const storedPlayers = await AsyncStorage.getItem('players');
      const players = storedPlayers ? JSON.parse(storedPlayers) : [];

      const updatedPlayers = players.filter(p => p.name !== player.name);

      await AsyncStorage.setItem('players', JSON.stringify(updatedPlayers));
      
      Alert.alert('Sucesso', 'Jogador excluído com sucesso!');
      navigation.navigate('MeuTime', { updated: true });
    } catch (error) {
      console.log("Erro ao excluir jogador:", error);
      Alert.alert('Erro', 'Falha ao excluir o jogador');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: 'lightblue' }}>
    <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image
          source={{ uri: 'https://miro.medium.com/v2/resize:fit:1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg' }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{player.name}</Text>
      <Text style={{ fontSize: 18, marginVertical: 10 }}>Altura: {player.height} cm</Text>
      <Text style={{ fontSize: 18, marginVertical: 10 }}>Envergadura: {player.wingspan} cm</Text>
      <Text style={{ fontSize: 18, marginVertical: 10 }}>Peso: {player.weight} kg</Text>
      <Text style={{ fontSize: 18, marginVertical: 10 }}>Número da Camiseta: {player.jerseyNumber}</Text>
      <Text style={{ fontSize: 18, marginVertical: 10 }}>Posição: {player.position}</Text>

      <View style={{ marginTop: 20 }}>
        <Button
          title="Excluir Jogador"
          color="red"
          onPress={handleDeletePlayer}
        />
      </View>
    </View>
  );
};

export default PlayerDetails;
