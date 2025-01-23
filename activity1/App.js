import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
const App = () => {
  return(
    <ScrollView>
  <Text style={{
    textAlign: 'center',}}>Jeane Louis J. Jusayan</Text>
  <View>
  <Text style={{
    textAlign: 'center',}}>IT-302</Text>
  <Image style={{}}
  source={{
    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/House_sparrow04.jpg/220px-House_sparrow04.jpg',
  }}
  style={{
    width: 200,
    height: 200,
    alignSelf: 'center',
  }}
  />
  </View>
  <TextInput
  style={{
    textAlign: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  }}
  defaultValue="You can type in me"
  />
  </ScrollView>
  );
};

export default App;