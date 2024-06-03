import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';

const image1 = {uri: 'https://picsum.photos/seed/picsum/200/300'};
const image2 = {uri: 'https://picsum.photos/200/300?grayscale'};
const image3 = {uri: 'https://picsum.photos/id/870/200/300?grayscale&blur=2'};

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headText}>Travel Plans</Text>
      <View style={styles.container}>
        <View style={styles.cardBorder}>
          <View style={[styles.card, styles.cardThree]}>
            <ImageBackground
              source={image1}
              style={styles.image}></ImageBackground>
          </View>
          <Text>Natural</Text>
        </View>
        <View style={styles.cardBorder}>
          <View style={[styles.card, styles.cardThree]}>
            <ImageBackground
              source={image2}
              style={styles.image}></ImageBackground>
          </View>
          <Text>Advanture</Text>
        </View>
        <View style={styles.cardBorder}>
          <View style={[styles.card, styles.cardThree]}>
            <ImageBackground
              source={image3}
              style={styles.image}></ImageBackground>
          </View>
          <Text>Calturee</Text>
        </View>
      </View>
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
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    marginLeft: 8,
    height: 90,
    width: 90,
    borderRadius: 40,
  },
  cardBorder: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    overflow: 'hidden',
  },
  cardOne: {
    backgroundColor: '#FF7F7F',
  },
  cardTwo: {
    backgroundColor: 'lightgreen',
  },
  cardThree: {
    backgroundColor: 'lightblue',
  },
});
