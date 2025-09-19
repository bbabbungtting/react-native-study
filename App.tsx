import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Dimensions,
} from 'react-native';

function App() {
  const [value, setValue] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>HI!!</Text>
        <Image
          style={styles.tinyLogo}
          source={require('./src/assets/images/rn.png')}
        />
        <TextInput value={value} onChangeText={setValue} />
        <Button title="버튼이름" onPress={() => console.log('hi')} />{' '}
      </View>
      <View style={styles.container2}>
        <Text style={styles.text}>텍스트</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  container: {
    backgroundColor: 'red',

    width: '50%',
    height: Dimensions.get('screen').height / 2,
  },
  container2: {
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'semibold',
  },
});

export default App;
