import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
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
      <Text style={{ fontSize: 18 }}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Meu Time</Text>
      {players.length > 0 ? (
        <FlatList
          data={players}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      ) : (
        <Text>Nenhum jogador criado</Text>
      )}
    </View>
  );
};

export default MeuTime;
