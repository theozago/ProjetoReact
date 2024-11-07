import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const teams = [
  {
    id: '1',
    name: 'Boston Celtics',
    logo: 'https://link-da-logo-celtics.com/logo.png',
    cidade: 'Boston',
    titulos: 17,
    fundacao: 1946,
  },
  { id: '2', name: 'Brooklyn Nets', logo: '' },
  { id: '3', name: 'New York Knicks', logo: '' },
  { id: '4', name: 'Philadelphia 76ers', logo: '' },
  { id: '5', name: 'Toronto Raptors', logo: '' },
  { id: '6', name: 'Chicago Bulls', logo: '' },
  { id: '7', name: 'Cleveland Cavaliers', logo: '' },
  { id: '8', name: 'Detroit Pistons', logo: '' },
  { id: '9', name: 'Indiana Pacers', logo: '' },
  { id: '10', name: 'Milwaukee Bucks', logo: '' },
  { id: '11', name: 'Atlanta Hawks', logo: '' },
  { id: '12', name: 'Charlotte Hornets', logo: '' },
  { id: '13', name: 'Miami Heat', logo: '' },
  { id: '14', name: 'Orlando Magic', logo: '' },
  { id: '15', name: 'Washington Wizards', logo: '' },
  { id: '16', name: 'Denver Nuggets', logo: '' },
  { id: '17', name: 'Minnesota Timberwolves', logo: '' },
  { id: '18', name: 'Oklahoma City Thunder', logo: '' },
  { id: '19', name: 'Portland Trail Blazers', logo: '' },
  { id: '20', name: 'Utah Jazz', logo: '' },
  { id: '21', name: 'Golden State Warriors', logo: '' },
  { id: '22', name: 'Los Angeles Clippers', logo: '' },
  { id: '23', name: 'Los Angeles Lakers', logo: '' },
  { id: '24', name: 'Phoenix Suns', logo: '' },
  { id: '25', name: 'Sacramento Kings', logo: '' },
  { id: '26', name: 'Dallas Mavericks', logo: '' },
  { id: '27', name: 'Houston Rockets', logo: '' },
  { id: '28', name: 'Memphis Grizzlies', logo: '' },
  { id: '29', name: 'New Orleans Pelicans', logo: '' },
  { id: '30', name: 'San Antonio Spurs', logo: '' },
];

const TimesNBA = ({ navigation }) => {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={teams}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
            onPress={() =>
              navigation.navigate('TeamDetails', {
                teamName: item.name,
                teamLogo: item.logo,
                cidade: item.cidade,
                titulos: item.titulos,
                fundacao: item.fundacao,
              })
            }
          >
            <Image source={{ uri: item.logo }} style={{ width: 50, height: 50, marginRight: 10 }} />
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TimesNBA;
