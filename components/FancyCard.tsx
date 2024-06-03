import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.textHeading}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://picsum.photos/200',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hava Beach</Text>
          <Text style={styles.cardSub}>Panaji city, Goa</Text>
          <Text style={styles.cardContent}>
            Panaji, also known as Panjim, is the state capital of Goa, in
            southwest India. Located on the banks of the Mandovi River, the city
            has cobblestone streets lined with colorful villas an buildings from
            the Portuguese colonial era. Palm-fringed Miramar Beach sits at the
            confluence of the river and the Arabian Sea. Set on a hill
            overlooking the city is the baroque Our Lady of Immaculate
            Conception Church, built in 1619.
          </Text>
          <Text style={styles.cardFooter}>Panaji city, Goa</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop: 10,
  },
  card: {
    width: 400,
    height: 400,
    borderRadius: 2,
    marginVertical: 12,
    marginHorizontal: 'auto',
  },
  cardElevated: {
    backgroundColor: 'rgba(0,0,0, 0.1)',
    elevation: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: 'black',
  },
  cardImage: {
    height: 180,
    marginBottom: 9,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    marginHorizontal: 'auto',
    marginLeft: 10,
    marginRight: 10,
  },
  cardFooter: {
    fontSize: 13,
    fontStyle: 'italic',
  },
  cardContent: {
    fontSize: 14,
    paddingBottom: 6,
  },
  cardSub: {
    fontSize: 13,
    fontStyle: 'italic',
    paddingBottom: 9,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 6,
  },
});
