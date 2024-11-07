import React from 'react';
import { View, Text, Image } from 'react-native';

const TeamDetails = ({ route }) => {
  const { teamName, teamLogo, cidade, titulos, fundacao } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{teamName}</Text>
      <Image source={{ uri: teamLogo }} style={{ width: 100, height: 100, marginVertical: 20 }} />
      <Text style={{ fontSize: 18 }}>Cidade: {cidade}</Text>
      <Text style={{ fontSize: 18 }}>Títulos: {titulos}</Text>
      <Text style={{ fontSize: 18 }}>Ano de Fundação: {fundacao}</Text>
      {/* Adicione outros detalhes conforme necessário */}
    </View>
  );
};

export default TeamDetails;
