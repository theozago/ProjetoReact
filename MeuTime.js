import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const MeuTime = ({ navigation }) => {
  const [players, setPlayers] = useState([]);

  const fetchPlayers = async () => {
    try {
      const storedPlayers = await AsyncStorage.getItem('players');
      if (storedPlayers) {
        setPlayers(JSON.parse(storedPlayers));
      } else {
        setPlayers([]);
      }
    } catch (error) {
      console.log("Erro ao buscar jogadores:", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchPlayers();
    }, [])
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
      onPress={() => navigation.navigate('PlayerDetails', { player: item })}
    >
      <Text style={{ fontSize: 18, textAlign: 'center' }}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: 'lightblue' }}>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image
          source={{ uri: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png' }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>Meu Time</Text>
      
      {players.length > 0 ? (
        <FlatList
          data={players}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      ) : (
        <Text style={{ textAlign: 'center' }}>Nenhum jogador criado</Text>
      )}
    </View>
  );
};

export default MeuTime;
