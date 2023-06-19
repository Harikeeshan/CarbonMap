// import { 
//   StyleSheet, 
//   Text, 
//   Image,
//   View, 
//   ScrollView,
//   TouchableOpacity  
// } from 'react-native'
// import React from 'react'

// import ChallengeLIst from '../components/ChallengeLIst'
// import { SafeAreaView } from 'react-native-safe-area-context';

// const Challenges = () => {
//   return (
//     <SafeAreaView style={styles.profile}>
      
//         <View style={styles.userImage}></View>
//         <Text style={styles.userName}>Hi! Harikeeshan</Text>
//         <Text style={styles.WelcomeTxt}>Complete these challenges to 
//         collect CarbonPoints 😉</Text>

//         <ScrollView style={styles.list}>
//           <TouchableOpacity>
//           <View style={styles.challenge}>
//             <Text style={styles.challengeHeading}>Cycling day</Text>
//             <Text style={styles.challengeDefinition}>cycle to work and other places.</Text>
//           </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//           <View style={styles.challenge}>
//             <Text style={styles.challengeHeading}>Cycling day</Text>
//             <Text style={styles.challengeDefinition}>cycle to work and other places.</Text>
//           </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//           <View style={styles.challenge}>
//             <Text style={styles.challengeHeading}>Cycling day</Text>
//             <Text style={styles.challengeDefinition}>cycle to work and other places.</Text>
//           </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//           <View style={styles.challenge}>
//             <Text style={styles.challengeHeading}>Cycling day</Text>
//             <Text style={styles.challengeDefinition}>cycle to work and other places.</Text>
//           </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//           <View style={styles.challenge}>
//             <Text style={styles.challengeHeading}>Cycling day</Text>
//             <Text style={styles.challengeDefinition}>cycle to work and other places.</Text>
//           </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//           <View style={styles.challenge}>
//             <Text style={styles.challengeHeading}>Cycling day</Text>
//             <Text style={styles.challengeDefinition}>cycle to work and other places.</Text>
//           </View>
//           </TouchableOpacity>
          
          
//         </ScrollView>
       

//     </SafeAreaView>
//   )
// }

// export default Challenges

// const styles = StyleSheet.create({
//   profile: {
//     flex: 1,
//     padding: 20,
//   },
//   userImage: {
//     backgroundColor: '#D9D9D9',
//     height: 60,
//     width: 60,
//     borderRadius: 14,
//     marginBottom: 15,
//   },
//   userName: {
//     fontSize: 24,
//   },
//   WelcomeTxt: {
//     paddingTop: 10,
//     fontSize: 18,
//   },
//   list: {
//     marginTop: 20,
//   },
//   challenge: {
//     width: 347,
//     height: 82,
//     backgroundColor: '#B9FF66',
//     borderRadius: 10,
//     marginVertical: 10,
//     padding: 10,

//   },
//   challengeHeading: {
//     color: 'black',
//     fontSize: 20,
//   },
//   challengeDefinition: {
//     color: 'black',
//     fontSize: 18,
//     marginTop: 10,
//   }
// })

import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import ChallengeList from '../components/ChallengeLIst';

type ChallengeData = {
  ID: string;
  ChallengeTitle: string;
  ChallengeDef: string;
};


type ChallengeDataProps = {
  item: ChallengeData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ChallengeDataProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.ChallengeTitleStyle, {color: textColor}]}>{item.ChallengeTitle}</Text>
    <Text style={[styles.ChallengeDefStyle, {color: textColor}]}>{item.ChallengeDef}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item}: {item: ChallengeData}) => {
    const backgroundColor = item.ID === selectedId ? '#222222' : '#B9FF66';
    const color = item.ID === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.ID)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.ProfilePic}></View>
      {/* <Image source={require('/Users/harikeeshan/Developer/CarbonMap/assets/profile pic.jpg')} /> */}
      <Text style={styles.UsernameStyle}>Hi! Harikeeshan</Text>
      <Text style={styles.DefinitonStyle}>Complete these challenges to collect CarbonPoints 😉</Text>
      </View>
      <FlatList
        data={ChallengeList}
        renderItem={renderItem}
        keyExtractor={item => item.ID}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
  },
  ChallengeTitleStyle: {
    fontSize: 20,
  },
  ChallengeDefStyle: {
    marginTop: 5,
    fontSize: 18,
  },
  header: {
    
  },
  ProfilePic: {},
  UsernameStyle: {},
  DefinitonStyle: {}

});

export default App;