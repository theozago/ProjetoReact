import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const teams = [
    { id: '1', name: 'Boston Celtics', cidade: 'Boston', titulos: 18, fundacao: 1946 },
    { id: '2', name: 'Brooklyn Nets', cidade: 'Brooklyn', titulos: 0, fundacao: 1967 },
    { id: '3', name: 'New York Knicks', cidade: 'New York', titulos: 2, fundacao: 1946 },
    { id: '4', name: 'Philadelphia 76ers', cidade: 'Philadelphia', titulos: 3, fundacao: 1946 },
    { id: '5', name: 'Toronto Raptors', cidade: 'Toronto', titulos: 1, fundacao: 1995 },
    { id: '6', name: 'Chicago Bulls', cidade: 'Chicago', titulos: 6, fundacao: 1966 },
    { id: '7', name: 'Cleveland Cavaliers', cidade: 'Cleveland', titulos: 1, fundacao: 1970 },
    { id: '8', name: 'Detroit Pistons', cidade: 'Detroit', titulos: 3, fundacao: 1941 },
    { id: '9', name: 'Indiana Pacers', cidade: 'Indianapolis', titulos: 0, fundacao: 1967 },
    { id: '10', name: 'Milwaukee Bucks', cidade: 'Milwaukee', titulos: 2, fundacao: 1968 },
    { id: '11', name: 'Atlanta Hawks', cidade: 'Atlanta', titulos: 1, fundacao: 1946 },
    { id: '12', name: 'Charlotte Hornets', cidade: 'Charlotte', titulos: 0, fundacao: 1988 },
    { id: '13', name: 'Miami Heat', cidade: 'Miami', titulos: 3, fundacao: 1988 },
    { id: '14', name: 'Orlando Magic', cidade: 'Orlando', titulos: 0, fundacao: 1989 },
    { id: '15', name: 'Washington Wizards', cidade: 'Washington', titulos: 1, fundacao: 1961 },
    { id: '16', name: 'Denver Nuggets', cidade: 'Denver', titulos: 1, fundacao: 1967 },
    { id: '17', name: 'Minnesota Timberwolves', cidade: 'Minneapolis', titulos: 0, fundacao: 1989 },
    { id: '18', name: 'Oklahoma City Thunder', cidade: 'Oklahoma City', titulos: 1, fundacao: 1967 },
    { id: '19', name: 'Portland Trail Blazers', cidade: 'Portland', titulos: 1, fundacao: 1970 },
    { id: '20', name: 'Utah Jazz', cidade: 'Salt Lake City', titulos: 0, fundacao: 1974 },
    { id: '21', name: 'Golden State Warriors', cidade: 'San Francisco', titulos: 7, fundacao: 1946 },
    { id: '22', name: 'Los Angeles Clippers', cidade: 'Los Angeles', titulos: 0, fundacao: 1970 },
    { id: '23', name: 'Los Angeles Lakers', cidade: 'Los Angeles', titulos: 17, fundacao: 1947 },
    { id: '24', name: 'Phoenix Suns', cidade: 'Phoenix', titulos: 0, fundacao: 1968 },
    { id: '25', name: 'Sacramento Kings', cidade: 'Sacramento', titulos: 1, fundacao: 1923 },
    { id: '26', name: 'Dallas Mavericks', cidade: 'Dallas', titulos: 1, fundacao: 1980 },
    { id: '27', name: 'Houston Rockets', cidade: 'Houston', titulos: 2, fundacao: 1967 },
    { id: '28', name: 'Memphis Grizzlies', cidade: 'Memphis', titulos: 0, fundacao: 1995 },
    { id: '29', name: 'New Orleans Pelicans', cidade: 'New Orleans', titulos: 0, fundacao: 2002 },
    { id: '30', name: 'San Antonio Spurs', cidade: 'San Antonio', titulos: 5, fundacao: 1967 }
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
