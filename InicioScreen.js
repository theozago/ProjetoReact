import React from 'react';
import { View, Text, Button } from 'react-native';

const InicioScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 20 }}>NBA</Text>
      <Button
        title="Ver Times da NBA"
        onPress={() => navigation.navigate('TimesNBA')}
      />
      <View style={{ height: 20 }} />
      <Button
        title="Criar Jogador"
        onPress={() => navigation.navigate('CriarJogador')}
      />
    </View>
  );
};

export default InicioScreen;
