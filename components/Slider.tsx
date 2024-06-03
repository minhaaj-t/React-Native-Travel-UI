import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

export default function Slider() {
  return (
    <View
      style={{
        alignItems: 'center',
        elevation: 5,
      }}>
      <Image
        source={{
          uri: 'https://picsum.photos/200/300',
        }}
        style={{
          width: 380,
          height: 250,
          borderRadius: 10,
          margin: 10,

          shadowColor: 'black',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
