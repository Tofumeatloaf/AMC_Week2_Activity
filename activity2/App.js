import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Jeane Louis");
  const bodyText = 'IT-302 BSIT';

  const onPressTitle = () => {
    setTitleText("Jusayan [grabe pagpapahirap samin ni aira sa sysarch 2 namin dahil inaalipin nya kami. kinakawawa at minamaltrato kami habang gumagawa]");
  };

  return (
<SafeAreaProvider>
<SafeAreaView style={styles.container}>
<Text style={styles.baseText}>
<Text style={styles.titleText} onPress={onPressTitle}>
{titleText}
{'\n'}
{'\n'}
</Text>
<Text numberOfLines={5}>{bodyText}</Text>
</Text>
</SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontFamily: 'Cochin',
    textAlign: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TextInANest;