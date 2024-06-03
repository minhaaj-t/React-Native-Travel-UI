import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import React from 'react';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headText}>Importent Places</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.fontStyle}>Kerala</Text>
          </ImageBackground>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.fontStyle}>Goa</Text>
          </ImageBackground>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.fontStyle}>Delhi</Text>
          </ImageBackground>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.fontStyle}>Punjab</Text>
          </ImageBackground>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.fontStyle}>Tamil Nadu</Text>
          </ImageBackground>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.fontStyle}>Karnadaka</Text>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop: 10,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
  },

  container: {
    padding: 8,
  },
  fontStyle: {
    color: 'white',
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 100,
    width: 100,
    opacity: 0.8,
  },
});
