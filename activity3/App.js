import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
  <SafeAreaView style={styles.container}>
  <Text style={styles.baseText}>
  Jeane Louis
  <Text style={styles.innerText}> Jusayan</Text>
  </Text>
    <Text style={styles.baseText}>
   IT - 302
  </Text>
    <Text style={styles.aText}>
  i love playing online games
  <Text style={styles.bText}> and I love watching movies,</Text>
  </Text>
    <Text style={styles.cText}>
  Also I like to go to the gym 
  <Text style={styles.dText}> all day</Text>
  </Text>
  </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    color: 'red',
    textAlign: 'center',
  },
  innerText: {
    color: 'blue',
    textAlign: 'center',
  },
  aText: {
    color: 'green',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bText: {
    color: 'purple',
    textAlign: 'center',
  },
  cText: {
    color: 'brown',
    textAlign: 'center',
  },
  dText: {
    color: 'magenta',
    textAlign: 'center',
  },
});

export default BoldAndBeautiful;