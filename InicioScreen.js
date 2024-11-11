import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const InicioScreen = ({ navigation }) => {
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image
          source={{ uri: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629630.png' }}
          style={{ width: 200, height: 200 }}
        />
      </View>
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
      <View style={{ height: 20 }} />
      <Button 
        title="Meu Time"
        onPress={() => navigation.navigate('MeuTime')} />
    </View>
    
  );
};

export default InicioScreen;
