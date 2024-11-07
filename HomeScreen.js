import React from 'react';
import { View, Button, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ padding: 20, alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Aplicativo da NBA</Text>
      <Button
        title="Cadastrar"
        onPress={() => navigation.navigate('Cadastro')}
      />
      <View style={{ height: 20 }} />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default HomeScreen;
