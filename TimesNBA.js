import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const teams = [
  { id: '1', name: 'Boston Celtics', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1200px-Boston_Celtics.svg.png', cidade: 'Boston', titulos: 18,},
  { id: '2', name: 'Brooklyn Nets', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/1200px-Brooklyn_Nets_newlogo.svg.png', cidade: 'Brooklyn', titulos: 0, },
  { id: '3', name: 'New York Knicks', logo: 'https://a.espncdn.com/i/teamlogos/nba/500/ny.png', cidade: 'New York', titulos: 2,},
  { id: '4', name: 'Philadelphia 76ers', logo: 'https://logos-world.net/wp-content/uploads/2020/05/Philadelphia-76ers-Logo-2015-present.png', cidade: 'Philadelphia', titulos: 3,},
  { id: '5', name: 'Toronto Raptors', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/640px-Toronto_Raptors_logo.svg.png', cidade: 'Toronto', titulos: 1,},
  { id: '6', name: 'Chicago Bulls', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1200px-Chicago_Bulls_logo.svg.png', cidade: 'Chicago', titulos: 6,},
  { id: '7', name: 'Cleveland Cavaliers', logo: 'https://e7.pngegg.com/pngimages/53/808/png-clipart-cleveland-cavaliers-nba-logo-fathead-llc-nba-team-text-sport.png', cidade: 'Cleveland', titulos: 1,},
  { id: '8', name: 'Detroit Pistons', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Logo_of_the_Detroit_Pistons.svg/1200px-Logo_of_the_Detroit_Pistons.svg.png', cidade: 'Detroit', titulos: 3,},
  { id: '9', name: 'Indiana Pacers', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Indiana_Pacers.svg/1200px-Indiana_Pacers.svg.png', cidade: 'Indianapolis', titulos: 0,},
  { id: '10', name: 'Milwaukee Bucks', logo: 'https://upload.wikimedia.org/wikipedia/pt/9/9a/Milwaukee_Bucks_logo15.png', cidade: 'Milwaukee', titulos: 2,},
  { id: '11', name: 'Atlanta Hawks', logo: 'https://upload.wikimedia.org/wikipedia/pt/9/9a/Atlanta_Hawks.png', cidade: 'Atlanta', titulos: 1,},
  { id: '12', name: 'Charlotte Hornets', logo: 'https://upload.wikimedia.org/wikipedia/pt/f/f6/Charlotte_Hornets.png', cidade: 'Charlotte', titulos: 0, },
  { id: '13', name: 'Miami Heat', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/1200px-Miami_Heat_logo.svg.png', cidade: 'Miami', titulos: 3,},
  { id: '14', name: 'Orlando Magic', logo: 'https://logodownload.org/wp-content/uploads/2021/07/orlando-magic-logo.png', cidade: 'Orlando', titulos: 0,},
  { id: '15', name: 'Washington Wizards', logo: 'https://upload.wikimedia.org/wikipedia/pt/5/5b/Washington_Wizards.png', cidade: 'Washington', titulos: 1, },
  { id: '16', name: 'Denver Nuggets', logo: 'https://upload.wikimedia.org/wikipedia/pt/5/58/Denver_Nuggets_logo.jpg', cidade: 'Denver', titulos: 1, },
  { id: '17', name: 'Minnesota Timberwolves', logo: 'https://upload.wikimedia.org/wikipedia/pt/4/44/Minnesota_Timberwolves.png', cidade: 'Minneapolis', titulos: 0,},
  { id: '18', name: 'Oklahoma City Thunder', logo: 'https://a.espncdn.com/i/teamlogos/nba/500/okc.png', cidade: 'Oklahoma City', titulos: 1,},
  { id: '19', name: 'Portland Trail Blazers', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png', cidade: 'Portland', titulos: 1, },
  { id: '20', name: 'Utah Jazz', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2HYUQAUZ2oNX80LR1Yn8l27WZKFXrrIl5Hg&s', cidade: 'Salt Lake City', titulos: 0,},
  { id: '21', name: 'Golden State Warriors', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png', cidade: 'San Francisco', titulos: 7,},
  { id: '22', name: 'Los Angeles Clippers', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Los_Angeles_Clippers_%282024%29.svg/1200px-Los_Angeles_Clippers_%282024%29.svg.png', cidade: 'Los Angeles', titulos: 0, },
  { id: '23', name: 'Los Angeles Lakers', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png', cidade: 'Los Angeles', titulos: 17, },
  { id: '24', name: 'Phoenix Suns', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Phoenix_Suns_logo.svg/800px-Phoenix_Suns_logo.svg.png', cidade: 'Phoenix', titulos: 0,},
  { id: '25', name: 'Sacramento Kings', logo: 'https://upload.wikimedia.org/wikipedia/pt/c/c7/Sacramento_Kings.png', cidade: 'Sacramento', titulos: 1,},
  { id: '26', name: 'Dallas Mavericks', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/1200px-Dallas_Mavericks_logo.svg.png', cidade: 'Dallas', titulos: 1, },
  { id: '27', name: 'Houston Rockets', logo: 'https://e7.pngegg.com/pngimages/477/859/png-clipart-houston-rockets-nba-playoffs-logo-nba.png', cidade: 'Houston', titulos: 2,},
  { id: '28', name: 'Memphis Grizzlies', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/640px-Memphis_Grizzlies.svg.png', cidade: 'Memphis', titulos: 0, },
  { id: '29', name: 'New Orleans Pelicans', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/New_Orleans_Pelicans_logo.svg/1200px-New_Orleans_Pelicans_logo.svg.png', cidade: 'New Orleans', titulos: 0,},
  { id: '30', name: 'San Antonio Spurs', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/sa.png', cidade: 'San Antonio', titulos: 5,},

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
