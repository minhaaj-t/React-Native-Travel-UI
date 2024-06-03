import React from 'react';

import {Text, View, StyleSheet, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.darkText : styles.whiteText}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  whiteText: {
    color: '#000000',
  },
  darkText: {
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppPro;
